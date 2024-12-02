// SPDX-License-Identifier: MIT
// Author @nnamdipremium

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Pochi is ERC20 {
  address pochiDeployer;
  uint rewards = 100000000000000000000000; //100,000 token rewards for saving

  constructor(address _pochiDeployer) ERC20("Pochi", "POCHI") {
    pochideployer = _pochiDeployer;
    _mint(pochideployer, rewards);
    _mint(msg.sender, 900000000000000000000000); //team wallet
  }
}
