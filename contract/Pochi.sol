// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
interface ISUSDe {
    function deposit(uint256 amount, address recipient) external;
}

// Address of the sUSDe contract

contract Givvie is Ownable, ReentrancyGuard {
    using SafeERC20 for IERC20;

    IERC20 public constant USDeOFT = IERC20(0x426E7d03f9803Dd11cb8616C65b99a3c0AfeA6dE);
    IERC20 public constant SUSDeOFT = IERC20(0x80f9Ec4bA5746d8214b3A9a73cc4390AB0F0E633);
    IERC20 public constant POCHI = IERC20(0x84fEd4488ce7f1cC53eB9ff7ED56BA0bF9b02433);

    address public susdeContractAddress = 0x1B6877c6Dac4b6De4c5817925DC40E2BfdAFc01b;

    uint256 public penaltyFee = 5; // 5%

    enum Status {
        INACTIVE,
        ACTIVE
    }

    struct Account {
        uint256 balance;
        Status status;
        uint256 createdAt;
        uint256 expiresAt;
    }

    struct Savings {
        uint256 amount;
        uint256 duration;
    }

    // Users' active savings
    mapping(address => Account) private records;

    // Tracks all users' successful savings
    mapping(address => Savings[]) private history;

    // Events
    event Created(address indexed owner, uint256 amount, uint256 createdAt, uint256 expiresAt);
    event Updated(uint256 amount, uint256 updatedAt);
    event Broken(address indexed owner, uint256 saved, uint256 expiredAt);
    event TransferAttempt(address from, address to, uint256 amount, string message);
    event Staked(address sendr, uint256 amount, address recipient);

    constructor(address _initialOwner) Ownable(_initialOwner) {
        _transferOwnership(_initialOwner);
    }

  function approve(address _token, uint256 _amount) external {
    require(_token != address(0), "Invalid token address");
    require(_amount > 0, "Invalid amount");

    ERC20 token = ERC20(_token);
    require(token.allowance(msg.sender, address(this)) == 0, "Existing allowance must be reset to 0 first");

    // Emit an event for debugging (optional)
    emit TransferAttempt(msg.sender, address(this), _amount, "Approving token allowance");

    token.approve(address(this), _amount);
}

function approveSUSDe(uint256 _amount) external {
require(_amount > 0, "Invalid amount");

USDeOFT.approve(susdeContractAddress, _amount);

}

// Function to call the deposit function of the sUSDe contract
function stakeUSDe(uint256 amount, address recipient) external {
    require(amount > 0, "Amount must be greater than zero");
    require(recipient != address(0), "Invalid recipient address");

    // Approve sUSDe contract to spend USDe on behalf of this contract
   // SUapprove(address(this), susdeContractAddress, amount);
   USDeOFT.approve(susdeContractAddress, amount);

    // Call the deposit function on the sUSDe contract
    ISUSDe(susdeContractAddress).deposit(amount, msg.sender);

    emit Staked(msg.sender, amount, recipient);
}



    function createPiggy(uint256 _amount, uint256 _duration) external nonReentrant {
        require(_amount > 0, "Invalid amount");
        require(_duration > 0, "Invalid duration");

        // Log the transfer attempt
        emit TransferAttempt(msg.sender, address(this), _amount, "Initiating transfer");

        // Validate balance and allowance
        uint256 balance = USDeOFT.balanceOf(msg.sender);
        require(balance >= _amount, "Insufficient balance");

        uint256 allowance = USDeOFT.allowance(msg.sender, address(this));
        require(allowance >= _amount, "Allowance too low");

        // Transfer tokens to contract
        USDeOFT.safeTransferFrom(msg.sender, address(this), _amount);

        // Set expiration
        uint256 expiresAt = block.timestamp + _duration;

        // Record active savings
        records[msg.sender] = Account({
            balance: _amount,
            status: Status.ACTIVE,
            createdAt: block.timestamp,
            expiresAt: expiresAt
        });

        emit Created(msg.sender, _amount, block.timestamp, expiresAt);
    }

    function updateBalance(uint256 _amount) external nonReentrant {
        require(records[msg.sender].status == Status.ACTIVE, "Piggy is not ACTIVE");
        require(_amount > 0, "Invalid amount");

        // Log the transfer attempt
        emit TransferAttempt(msg.sender, address(this), _amount, "Initiating transfer");

        // Validate balance and allowance
        uint256 balance = USDeOFT.balanceOf(msg.sender);
        require(balance >= _amount, "Insufficient balance");

        uint256 allowance = USDeOFT.allowance(msg.sender, address(this));
        require(allowance >= _amount, "Allowance too low");

        // Transfer tokens to contract
        USDeOFT.safeTransferFrom(msg.sender, address(this), _amount);

        // Update record
        records[msg.sender].balance += _amount;

        emit Updated(_amount, block.timestamp);
    }


    function breakPiggy() external nonReentrant {
    Account memory account = records[msg.sender];

    require(account.status == Status.ACTIVE, "No active Piggy found");

    uint256 refundAmount = account.balance;
    uint256 penaltyBalance = refundAmount;

    // Calculate interest
    uint256 interest = calculateInterest(msg.sender);

    // Penalize if broken before expiration
    if (block.timestamp < account.expiresAt) {
        penaltyBalance = refundAmount - ((penaltyFee * refundAmount) / 100);
    } else {
        // Reward with Givvie token
        POCHI.safeTransfer(msg.sender, calculateReward(account));
    }

    // Add interest to refund amount
    penaltyBalance += interest;

    // Transfer remaining balance to user
    USDeOFT.safeTransfer(msg.sender, penaltyBalance);

    // Push to history
    Savings memory savings = Savings({
        amount: account.balance,
        duration: account.expiresAt - account.createdAt
    });

    history[msg.sender].push(savings);

    // Reset record
    records[msg.sender] = Account({
        balance: 0,
        status: Status.INACTIVE,
        createdAt: 0,
        expiresAt: 0
    });

    emit Broken(msg.sender, refundAmount, block.timestamp);
}


    function withdraw(uint256 _amount) external nonReentrant {
    Account storage account = records[msg.sender];
    
    require(account.status == Status.ACTIVE, "No active Piggy found");
    require(_amount > 0, "Invalid withdrawal amount");
    require(_amount <= account.balance, "Withdrawal amount exceeds balance");
    
    uint256 withdrawAmount = _amount;
    uint256 penaltyAmount = 0;

    // Penalize if withdrawn before expiration
    if (block.timestamp < account.expiresAt) {
        penaltyAmount = (penaltyFee * _amount) / 100;
        withdrawAmount -= penaltyAmount;
    }

    // Transfer the withdrawn amount to the user
    USDeOFT.safeTransfer(msg.sender, withdrawAmount);

    // Deduct from the user's balance
    account.balance -= _amount;

    // If balance becomes zero, mark as inactive
    if (account.balance == 0) {
        account.status = Status.INACTIVE;
        account.createdAt = 0;
        account.expiresAt = 0;
    }

    emit Updated(account.balance, block.timestamp);
}

function calculateInterest(address _owner) public view returns (uint256) {
    Account memory account = records[_owner];

    require(account.status == Status.ACTIVE, "No active Piggy found");

    uint256 savingDuration = block.timestamp - account.createdAt;
    uint256 interestRatePerSecond = 1e16; // Example: 0.01% per second (adjust as needed)
    uint256 interest = (account.balance * savingDuration * interestRatePerSecond) / 1e18;

    return interest;
}


    function calculateReward(Account memory account) internal pure returns (uint256) {
        return (account.balance * (account.expiresAt - account.createdAt)) / 1000;
    }

    function getHistory(address _owner) external view returns (Savings[] memory) {
        return history[_owner];
    }

    function getRecord(address _owner) external view returns (Account memory) {
        return records[_owner];
    }

    function isActive(address _owner) external view returns (bool) {
        return records[_owner].status == Status.ACTIVE;
    }
}
