/* The connect configuration is designed to allow 
Givvie support multiple chains by using their 
chain Id to dynamically link the smart contracts */

const connect = {
    //pochi contract
    pochi: {
    address: "0x80EA6b3b740934990A5c95d73B91485431Eb4a06",
    abi:[
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "approveSUSDe",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "breakPiggy",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_initialOwner",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "OwnableInvalidOwner",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "OwnableUnauthorizedAccount",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ReentrancyGuardReentrantCall",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "SafeERC20FailedOperation",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "saved",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "expiredAt",
                    "type": "uint256"
                }
            ],
            "name": "Broken",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "createdAt",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "expiresAt",
                    "type": "uint256"
                }
            ],
            "name": "Created",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_duration",
                    "type": "uint256"
                }
            ],
            "name": "createPiggy",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "sendr",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                }
            ],
            "name": "Staked",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                }
            ],
            "name": "stakeUSDe",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "message",
                    "type": "string"
                }
            ],
            "name": "TransferAttempt",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "updateBalance",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "updatedAt",
                    "type": "uint256"
                }
            ],
            "name": "Updated",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "calculateInterest",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "getHistory",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "duration",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Givvie.Savings[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "getRecord",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "balance",
                            "type": "uint256"
                        },
                        {
                            "internalType": "enum Givvie.Status",
                            "name": "status",
                            "type": "uint8"
                        },
                        {
                            "internalType": "uint256",
                            "name": "createdAt",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "expiresAt",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Givvie.Account",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "isActive",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "penaltyFee",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "POCHI",
            "outputs": [
                {
                    "internalType": "contract IERC20",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "susdeContractAddress",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "SUSDeOFT",
            "outputs": [
                {
                    "internalType": "contract IERC20",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "USDeOFT",
            "outputs": [
                {
                    "internalType": "contract IERC20",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    },
    //usde token contract
    usde: {
      address: "0x426E7d03f9803Dd11cb8616C65b99a3c0AfeA6dE",
      abi:[
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint32",
                            "name": "dstEid",
                            "type": "uint32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "limit",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "window",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct RateLimiter.RateLimitConfig[]",
                    "name": "_rateLimitConfigs",
                    "type": "tuple[]"
                },
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_symbol",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "_lzEndpoint",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_delegate",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                }
            ],
            "name": "AddressEmptyCode",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "AddressInsufficientBalance",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "CantRenounceOwnership",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "allowance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "needed",
                    "type": "uint256"
                }
            ],
            "name": "ERC20InsufficientAllowance",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "balance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "needed",
                    "type": "uint256"
                }
            ],
            "name": "ERC20InsufficientBalance",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "approver",
                    "type": "address"
                }
            ],
            "name": "ERC20InvalidApprover",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "ERC20InvalidReceiver",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "ERC20InvalidSender",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "ERC20InvalidSpender",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "FailedInnerCall",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidDelegate",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidEndpointCall",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidLocalDecimals",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "options",
                    "type": "bytes"
                }
            ],
            "name": "InvalidOptions",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "LzTokenUnavailable",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint32",
                    "name": "eid",
                    "type": "uint32"
                }
            ],
            "name": "NoPeer",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "msgValue",
                    "type": "uint256"
                }
            ],
            "name": "NotEnoughNative",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                }
            ],
            "name": "OnlyEndpoint",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint32",
                    "name": "eid",
                    "type": "uint32"
                },
                {
                    "internalType": "bytes32",
                    "name": "sender",
                    "type": "bytes32"
                }
            ],
            "name": "OnlyPeer",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "OnlyRateLimiter",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "OnlySelf",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "OwnableInvalidOwner",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "OwnableUnauthorizedAccount",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RateLimitExceeded",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "SafeERC20FailedOperation",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "result",
                    "type": "bytes"
                }
            ],
            "name": "SimulationResult",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amountLD",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "minAmountLD",
                    "type": "uint256"
                }
            ],
            "name": "SlippageExceeded",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint32",
                            "name": "eid",
                            "type": "uint32"
                        },
                        {
                            "internalType": "uint16",
                            "name": "msgType",
                            "type": "uint16"
                        },
                        {
                            "internalType": "bytes",
                            "name": "options",
                            "type": "bytes"
                        }
                    ],
                    "indexed": false,
                    "internalType": "struct EnforcedOptionParam[]",
                    "name": "_enforcedOptions",
                    "type": "tuple[]"
                }
            ],
            "name": "EnforcedOptionSet",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "inspector",
                    "type": "address"
                }
            ],
            "name": "MsgInspectorSet",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "guid",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "uint32",
                    "name": "srcEid",
                    "type": "uint32"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "toAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amountReceivedLD",
                    "type": "uint256"
                }
            ],
            "name": "OFTReceived",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "guid",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "uint32",
                    "name": "dstEid",
                    "type": "uint32"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "fromAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amountSentLD",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amountReceivedLD",
                    "type": "uint256"
                }
            ],
            "name": "OFTSent",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferStarted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint32",
                    "name": "eid",
                    "type": "uint32"
                },
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "peer",
                    "type": "bytes32"
                }
            ],
            "name": "PeerSet",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "preCrimeAddress",
                    "type": "address"
                }
            ],
            "name": "PreCrimeSet",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "rateLimiter",
                    "type": "address"
                }
            ],
            "name": "RateLimiterSet",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint32",
                            "name": "dstEid",
                            "type": "uint32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "limit",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "window",
                            "type": "uint256"
                        }
                    ],
                    "indexed": false,
                    "internalType": "struct RateLimiter.RateLimitConfig[]",
                    "name": "rateLimitConfigs",
                    "type": "tuple[]"
                }
            ],
            "name": "RateLimitsChanged",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "SEND",
            "outputs": [
                {
                    "internalType": "uint16",
                    "name": "",
                    "type": "uint16"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "SEND_AND_CALL",
            "outputs": [
                {
                    "internalType": "uint16",
                    "name": "",
                    "type": "uint16"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "acceptOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint32",
                            "name": "srcEid",
                            "type": "uint32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "sender",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint64",
                            "name": "nonce",
                            "type": "uint64"
                        }
                    ],
                    "internalType": "struct Origin",
                    "name": "origin",
                    "type": "tuple"
                }
            ],
            "name": "allowInitializePath",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "approvalRequired",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint32",
                    "name": "_eid",
                    "type": "uint32"
                },
                {
                    "internalType": "uint16",
                    "name": "_msgType",
                    "type": "uint16"
                },
                {
                    "internalType": "bytes",
                    "name": "_extraOptions",
                    "type": "bytes"
                }
            ],
            "name": "combineOptions",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "composeMsgSender",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "decimalConversionRate",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "endpoint",
            "outputs": [
                {
                    "internalType": "contract ILayerZeroEndpointV2",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint32",
                    "name": "eid",
                    "type": "uint32"
                },
                {
                    "internalType": "uint16",
                    "name": "msgType",
                    "type": "uint16"
                }
            ],
            "name": "enforcedOptions",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "enforcedOption",
                    "type": "bytes"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint32",
                    "name": "_dstEid",
                    "type": "uint32"
                }
            ],
            "name": "getAmountCanBeSent",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "currentAmountInFlight",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountCanBeSent",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint32",
                    "name": "_eid",
                    "type": "uint32"
                },
                {
                    "internalType": "bytes32",
                    "name": "_peer",
                    "type": "bytes32"
                }
            ],
            "name": "isPeer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint32",
                            "name": "srcEid",
                            "type": "uint32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "sender",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint64",
                            "name": "nonce",
                            "type": "uint64"
                        }
                    ],
                    "internalType": "struct Origin",
                    "name": "_origin",
                    "type": "tuple"
                },
                {
                    "internalType": "bytes32",
                    "name": "_guid",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes",
                    "name": "_message",
                    "type": "bytes"
                },
                {
                    "internalType": "address",
                    "name": "_executor",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "_extraData",
                    "type": "bytes"
                }
            ],
            "name": "lzReceive",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "components": [
                                {
                                    "internalType": "uint32",
                                    "name": "srcEid",
                                    "type": "uint32"
                                },
                                {
                                    "internalType": "bytes32",
                                    "name": "sender",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "uint64",
                                    "name": "nonce",
                                    "type": "uint64"
                                }
                            ],
                            "internalType": "struct Origin",
                            "name": "origin",
                            "type": "tuple"
                        },
                        {
                            "internalType": "uint32",
                            "name": "dstEid",
                            "type": "uint32"
                        },
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "guid",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "executor",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes",
                            "name": "message",
                            "type": "bytes"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct InboundPacket[]",
                    "name": "_packets",
                    "type": "tuple[]"
                }
            ],
            "name": "lzReceiveAndRevert",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint32",
                            "name": "srcEid",
                            "type": "uint32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "sender",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint64",
                            "name": "nonce",
                            "type": "uint64"
                        }
                    ],
                    "internalType": "struct Origin",
                    "name": "_origin",
                    "type": "tuple"
                },
                {
                    "internalType": "bytes32",
                    "name": "_guid",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes",
                    "name": "_message",
                    "type": "bytes"
                },
                {
                    "internalType": "address",
                    "name": "_executor",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "_extraData",
                    "type": "bytes"
                }
            ],
            "name": "lzReceiveSimulate",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "msgInspector",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint32",
                    "name": "",
                    "type": "uint32"
                },
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "nextNonce",
            "outputs": [
                {
                    "internalType": "uint64",
                    "name": "nonce",
                    "type": "uint64"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "oApp",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "oAppVersion",
            "outputs": [
                {
                    "internalType": "uint64",
                    "name": "senderVersion",
                    "type": "uint64"
                },
                {
                    "internalType": "uint64",
                    "name": "receiverVersion",
                    "type": "uint64"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "oftVersion",
            "outputs": [
                {
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4"
                },
                {
                    "internalType": "uint64",
                    "name": "version",
                    "type": "uint64"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint32",
                    "name": "eid",
                    "type": "uint32"
                }
            ],
            "name": "peers",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "peer",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "pendingOwner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "preCrime",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint32",
                            "name": "dstEid",
                            "type": "uint32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "to",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amountLD",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minAmountLD",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraOptions",
                            "type": "bytes"
                        },
                        {
                            "internalType": "bytes",
                            "name": "composeMsg",
                            "type": "bytes"
                        },
                        {
                            "internalType": "bytes",
                            "name": "oftCmd",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct SendParam",
                    "name": "_sendParam",
                    "type": "tuple"
                }
            ],
            "name": "quoteOFT",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "minAmountLD",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxAmountLD",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OFTLimit",
                    "name": "oftLimit",
                    "type": "tuple"
                },
                {
                    "components": [
                        {
                            "internalType": "int256",
                            "name": "feeAmountLD",
                            "type": "int256"
                        },
                        {
                            "internalType": "string",
                            "name": "description",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct OFTFeeDetail[]",
                    "name": "oftFeeDetails",
                    "type": "tuple[]"
                },
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "amountSentLD",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amountReceivedLD",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OFTReceipt",
                    "name": "oftReceipt",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint32",
                            "name": "dstEid",
                            "type": "uint32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "to",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amountLD",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minAmountLD",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraOptions",
                            "type": "bytes"
                        },
                        {
                            "internalType": "bytes",
                            "name": "composeMsg",
                            "type": "bytes"
                        },
                        {
                            "internalType": "bytes",
                            "name": "oftCmd",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct SendParam",
                    "name": "_sendParam",
                    "type": "tuple"
                },
                {
                    "internalType": "bool",
                    "name": "_payInLzToken",
                    "type": "bool"
                }
            ],
            "name": "quoteSend",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "nativeFee",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lzTokenFee",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct MessagingFee",
                    "name": "msgFee",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "rateLimiter",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint32",
                    "name": "dstEid",
                    "type": "uint32"
                }
            ],
            "name": "rateLimits",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "amountInFlight",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lastUpdated",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "limit",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "window",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint32",
                            "name": "dstEid",
                            "type": "uint32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "to",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amountLD",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minAmountLD",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraOptions",
                            "type": "bytes"
                        },
                        {
                            "internalType": "bytes",
                            "name": "composeMsg",
                            "type": "bytes"
                        },
                        {
                            "internalType": "bytes",
                            "name": "oftCmd",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct SendParam",
                    "name": "_sendParam",
                    "type": "tuple"
                },
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "nativeFee",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lzTokenFee",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct MessagingFee",
                    "name": "_fee",
                    "type": "tuple"
                },
                {
                    "internalType": "address",
                    "name": "_refundAddress",
                    "type": "address"
                }
            ],
            "name": "send",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "bytes32",
                            "name": "guid",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint64",
                            "name": "nonce",
                            "type": "uint64"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "nativeFee",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "lzTokenFee",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct MessagingFee",
                            "name": "fee",
                            "type": "tuple"
                        }
                    ],
                    "internalType": "struct MessagingReceipt",
                    "name": "msgReceipt",
                    "type": "tuple"
                },
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "amountSentLD",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amountReceivedLD",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct OFTReceipt",
                    "name": "oftReceipt",
                    "type": "tuple"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_delegate",
                    "type": "address"
                }
            ],
            "name": "setDelegate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint32",
                            "name": "eid",
                            "type": "uint32"
                        },
                        {
                            "internalType": "uint16",
                            "name": "msgType",
                            "type": "uint16"
                        },
                        {
                            "internalType": "bytes",
                            "name": "options",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct EnforcedOptionParam[]",
                    "name": "_enforcedOptions",
                    "type": "tuple[]"
                }
            ],
            "name": "setEnforcedOptions",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_msgInspector",
                    "type": "address"
                }
            ],
            "name": "setMsgInspector",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint32",
                    "name": "_eid",
                    "type": "uint32"
                },
                {
                    "internalType": "bytes32",
                    "name": "_peer",
                    "type": "bytes32"
                }
            ],
            "name": "setPeer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_preCrime",
                    "type": "address"
                }
            ],
            "name": "setPreCrime",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_rateLimiter",
                    "type": "address"
                }
            ],
            "name": "setRateLimiter",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint32",
                            "name": "dstEid",
                            "type": "uint32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "limit",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "window",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct RateLimiter.RateLimitConfig[]",
                    "name": "_rateLimitConfigs",
                    "type": "tuple[]"
                }
            ],
            "name": "setRateLimits",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "sharedDecimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "token",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    },
    //usdc
    pochitoken: {
      address: "0x84fEd4488ce7f1cC53eB9ff7ED56BA0bF9b02433",
      abi: [
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "initialSupply",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "allowance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "needed",
              "type": "uint256"
            }
          ],
          "name": "ERC20InsufficientAllowance",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "balance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "needed",
              "type": "uint256"
            }
          ],
          "name": "ERC20InsufficientBalance",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "approver",
              "type": "address"
            }
          ],
          "name": "ERC20InvalidApprover",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            }
          ],
          "name": "ERC20InvalidReceiver",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "ERC20InvalidSender",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "name": "ERC20InvalidSpender",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]
    },
    susde:{
        address: "0x80f9Ec4bA5746d8214b3A9a73cc4390AB0F0E633",
        abi:[
            {
                "inputs": [
                    {
                        "components": [
                            {
                                "internalType": "uint32",
                                "name": "dstEid",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "limit",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "window",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct RateLimiter.RateLimitConfig[]",
                        "name": "_rateLimitConfigs",
                        "type": "tuple[]"
                    },
                    {
                        "internalType": "string",
                        "name": "_name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_symbol",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "_lzEndpoint",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "_delegate",
                        "type": "address"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "target",
                        "type": "address"
                    }
                ],
                "name": "AddressEmptyCode",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "AddressInsufficientBalance",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    }
                ],
                "name": "BlackListed",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "CantRenounceOwnership",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "allowance",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "needed",
                        "type": "uint256"
                    }
                ],
                "name": "ERC20InsufficientAllowance",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "balance",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "needed",
                        "type": "uint256"
                    }
                ],
                "name": "ERC20InsufficientBalance",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "approver",
                        "type": "address"
                    }
                ],
                "name": "ERC20InvalidApprover",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "receiver",
                        "type": "address"
                    }
                ],
                "name": "ERC20InvalidReceiver",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    }
                ],
                "name": "ERC20InvalidSender",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    }
                ],
                "name": "ERC20InvalidSpender",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "FailedInnerCall",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "InvalidDelegate",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "InvalidEndpointCall",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "InvalidLocalDecimals",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes",
                        "name": "options",
                        "type": "bytes"
                    }
                ],
                "name": "InvalidOptions",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "LzTokenUnavailable",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint32",
                        "name": "eid",
                        "type": "uint32"
                    }
                ],
                "name": "NoPeer",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "NotBlackListed",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "msgValue",
                        "type": "uint256"
                    }
                ],
                "name": "NotEnoughNative",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "OnlyBlackLister",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    }
                ],
                "name": "OnlyEndpoint",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint32",
                        "name": "eid",
                        "type": "uint32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "sender",
                        "type": "bytes32"
                    }
                ],
                "name": "OnlyPeer",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "OnlyRateLimiter",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "OnlySelf",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "name": "OwnableInvalidOwner",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "OwnableUnauthorizedAccount",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "RateLimitExceeded",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "token",
                        "type": "address"
                    }
                ],
                "name": "SafeERC20FailedOperation",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes",
                        "name": "result",
                        "type": "bytes"
                    }
                ],
                "name": "SimulationResult",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "amountLD",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "minAmountLD",
                        "type": "uint256"
                    }
                ],
                "name": "SlippageExceeded",
                "type": "error"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "isBlackListed",
                        "type": "bool"
                    }
                ],
                "name": "BlackListUpdated",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "blackLister",
                        "type": "address"
                    }
                ],
                "name": "BlackListerSet",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "components": [
                            {
                                "internalType": "uint32",
                                "name": "eid",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint16",
                                "name": "msgType",
                                "type": "uint16"
                            },
                            {
                                "internalType": "bytes",
                                "name": "options",
                                "type": "bytes"
                            }
                        ],
                        "indexed": false,
                        "internalType": "struct EnforcedOptionParam[]",
                        "name": "_enforcedOptions",
                        "type": "tuple[]"
                    }
                ],
                "name": "EnforcedOptionSet",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "inspector",
                        "type": "address"
                    }
                ],
                "name": "MsgInspectorSet",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "guid",
                        "type": "bytes32"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint32",
                        "name": "srcEid",
                        "type": "uint32"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "toAddress",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amountReceivedLD",
                        "type": "uint256"
                    }
                ],
                "name": "OFTReceived",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "guid",
                        "type": "bytes32"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint32",
                        "name": "dstEid",
                        "type": "uint32"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "fromAddress",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amountSentLD",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amountReceivedLD",
                        "type": "uint256"
                    }
                ],
                "name": "OFTSent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferStarted",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint32",
                        "name": "eid",
                        "type": "uint32"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "peer",
                        "type": "bytes32"
                    }
                ],
                "name": "PeerSet",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "preCrimeAddress",
                        "type": "address"
                    }
                ],
                "name": "PreCrimeSet",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "rateLimiter",
                        "type": "address"
                    }
                ],
                "name": "RateLimiterSet",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "components": [
                            {
                                "internalType": "uint32",
                                "name": "dstEid",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "limit",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "window",
                                "type": "uint256"
                            }
                        ],
                        "indexed": false,
                        "internalType": "struct RateLimiter.RateLimitConfig[]",
                        "name": "rateLimitConfigs",
                        "type": "tuple[]"
                    }
                ],
                "name": "RateLimitsChanged",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "RedistributeFunds",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "SEND",
                "outputs": [
                    {
                        "internalType": "uint16",
                        "name": "",
                        "type": "uint16"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "SEND_AND_CALL",
                "outputs": [
                    {
                        "internalType": "uint16",
                        "name": "",
                        "type": "uint16"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "acceptOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "components": [
                            {
                                "internalType": "uint32",
                                "name": "srcEid",
                                "type": "uint32"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "sender",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "uint64",
                                "name": "nonce",
                                "type": "uint64"
                            }
                        ],
                        "internalType": "struct Origin",
                        "name": "origin",
                        "type": "tuple"
                    }
                ],
                "name": "allowInitializePath",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "approvalRequired",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "pure",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "blackList",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "blackLister",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint32",
                        "name": "_eid",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint16",
                        "name": "_msgType",
                        "type": "uint16"
                    },
                    {
                        "internalType": "bytes",
                        "name": "_extraOptions",
                        "type": "bytes"
                    }
                ],
                "name": "combineOptions",
                "outputs": [
                    {
                        "internalType": "bytes",
                        "name": "",
                        "type": "bytes"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "composeMsgSender",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "decimalConversionRate",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "internalType": "uint8",
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "endpoint",
                "outputs": [
                    {
                        "internalType": "contract ILayerZeroEndpointV2",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint32",
                        "name": "eid",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint16",
                        "name": "msgType",
                        "type": "uint16"
                    }
                ],
                "name": "enforcedOptions",
                "outputs": [
                    {
                        "internalType": "bytes",
                        "name": "enforcedOption",
                        "type": "bytes"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint32",
                        "name": "_dstEid",
                        "type": "uint32"
                    }
                ],
                "name": "getAmountCanBeSent",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "currentAmountInFlight",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amountCanBeSent",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint32",
                        "name": "_eid",
                        "type": "uint32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "_peer",
                        "type": "bytes32"
                    }
                ],
                "name": "isPeer",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "components": [
                            {
                                "internalType": "uint32",
                                "name": "srcEid",
                                "type": "uint32"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "sender",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "uint64",
                                "name": "nonce",
                                "type": "uint64"
                            }
                        ],
                        "internalType": "struct Origin",
                        "name": "_origin",
                        "type": "tuple"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "_guid",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes",
                        "name": "_message",
                        "type": "bytes"
                    },
                    {
                        "internalType": "address",
                        "name": "_executor",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes",
                        "name": "_extraData",
                        "type": "bytes"
                    }
                ],
                "name": "lzReceive",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "components": [
                            {
                                "components": [
                                    {
                                        "internalType": "uint32",
                                        "name": "srcEid",
                                        "type": "uint32"
                                    },
                                    {
                                        "internalType": "bytes32",
                                        "name": "sender",
                                        "type": "bytes32"
                                    },
                                    {
                                        "internalType": "uint64",
                                        "name": "nonce",
                                        "type": "uint64"
                                    }
                                ],
                                "internalType": "struct Origin",
                                "name": "origin",
                                "type": "tuple"
                            },
                            {
                                "internalType": "uint32",
                                "name": "dstEid",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "receiver",
                                "type": "address"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "guid",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "executor",
                                "type": "address"
                            },
                            {
                                "internalType": "bytes",
                                "name": "message",
                                "type": "bytes"
                            },
                            {
                                "internalType": "bytes",
                                "name": "extraData",
                                "type": "bytes"
                            }
                        ],
                        "internalType": "struct InboundPacket[]",
                        "name": "_packets",
                        "type": "tuple[]"
                    }
                ],
                "name": "lzReceiveAndRevert",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "components": [
                            {
                                "internalType": "uint32",
                                "name": "srcEid",
                                "type": "uint32"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "sender",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "uint64",
                                "name": "nonce",
                                "type": "uint64"
                            }
                        ],
                        "internalType": "struct Origin",
                        "name": "_origin",
                        "type": "tuple"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "_guid",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes",
                        "name": "_message",
                        "type": "bytes"
                    },
                    {
                        "internalType": "address",
                        "name": "_executor",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes",
                        "name": "_extraData",
                        "type": "bytes"
                    }
                ],
                "name": "lzReceiveSimulate",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "msgInspector",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint32",
                        "name": "",
                        "type": "uint32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "name": "nextNonce",
                "outputs": [
                    {
                        "internalType": "uint64",
                        "name": "nonce",
                        "type": "uint64"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "oApp",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "oAppVersion",
                "outputs": [
                    {
                        "internalType": "uint64",
                        "name": "senderVersion",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "receiverVersion",
                        "type": "uint64"
                    }
                ],
                "stateMutability": "pure",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "oftVersion",
                "outputs": [
                    {
                        "internalType": "bytes4",
                        "name": "interfaceId",
                        "type": "bytes4"
                    },
                    {
                        "internalType": "uint64",
                        "name": "version",
                        "type": "uint64"
                    }
                ],
                "stateMutability": "pure",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint32",
                        "name": "eid",
                        "type": "uint32"
                    }
                ],
                "name": "peers",
                "outputs": [
                    {
                        "internalType": "bytes32",
                        "name": "peer",
                        "type": "bytes32"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "pendingOwner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "preCrime",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "components": [
                            {
                                "internalType": "uint32",
                                "name": "dstEid",
                                "type": "uint32"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "to",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "amountLD",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "minAmountLD",
                                "type": "uint256"
                            },
                            {
                                "internalType": "bytes",
                                "name": "extraOptions",
                                "type": "bytes"
                            },
                            {
                                "internalType": "bytes",
                                "name": "composeMsg",
                                "type": "bytes"
                            },
                            {
                                "internalType": "bytes",
                                "name": "oftCmd",
                                "type": "bytes"
                            }
                        ],
                        "internalType": "struct SendParam",
                        "name": "_sendParam",
                        "type": "tuple"
                    }
                ],
                "name": "quoteOFT",
                "outputs": [
                    {
                        "components": [
                            {
                                "internalType": "uint256",
                                "name": "minAmountLD",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "maxAmountLD",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct OFTLimit",
                        "name": "oftLimit",
                        "type": "tuple"
                    },
                    {
                        "components": [
                            {
                                "internalType": "int256",
                                "name": "feeAmountLD",
                                "type": "int256"
                            },
                            {
                                "internalType": "string",
                                "name": "description",
                                "type": "string"
                            }
                        ],
                        "internalType": "struct OFTFeeDetail[]",
                        "name": "oftFeeDetails",
                        "type": "tuple[]"
                    },
                    {
                        "components": [
                            {
                                "internalType": "uint256",
                                "name": "amountSentLD",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "amountReceivedLD",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct OFTReceipt",
                        "name": "oftReceipt",
                        "type": "tuple"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "components": [
                            {
                                "internalType": "uint32",
                                "name": "dstEid",
                                "type": "uint32"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "to",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "amountLD",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "minAmountLD",
                                "type": "uint256"
                            },
                            {
                                "internalType": "bytes",
                                "name": "extraOptions",
                                "type": "bytes"
                            },
                            {
                                "internalType": "bytes",
                                "name": "composeMsg",
                                "type": "bytes"
                            },
                            {
                                "internalType": "bytes",
                                "name": "oftCmd",
                                "type": "bytes"
                            }
                        ],
                        "internalType": "struct SendParam",
                        "name": "_sendParam",
                        "type": "tuple"
                    },
                    {
                        "internalType": "bool",
                        "name": "_payInLzToken",
                        "type": "bool"
                    }
                ],
                "name": "quoteSend",
                "outputs": [
                    {
                        "components": [
                            {
                                "internalType": "uint256",
                                "name": "nativeFee",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "lzTokenFee",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct MessagingFee",
                        "name": "msgFee",
                        "type": "tuple"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "rateLimiter",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint32",
                        "name": "dstEid",
                        "type": "uint32"
                    }
                ],
                "name": "rateLimits",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "amountInFlight",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lastUpdated",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "limit",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "window",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "redistributeBlackListedFunds",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "components": [
                            {
                                "internalType": "uint32",
                                "name": "dstEid",
                                "type": "uint32"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "to",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "amountLD",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "minAmountLD",
                                "type": "uint256"
                            },
                            {
                                "internalType": "bytes",
                                "name": "extraOptions",
                                "type": "bytes"
                            },
                            {
                                "internalType": "bytes",
                                "name": "composeMsg",
                                "type": "bytes"
                            },
                            {
                                "internalType": "bytes",
                                "name": "oftCmd",
                                "type": "bytes"
                            }
                        ],
                        "internalType": "struct SendParam",
                        "name": "_sendParam",
                        "type": "tuple"
                    },
                    {
                        "components": [
                            {
                                "internalType": "uint256",
                                "name": "nativeFee",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "lzTokenFee",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct MessagingFee",
                        "name": "_fee",
                        "type": "tuple"
                    },
                    {
                        "internalType": "address",
                        "name": "_refundAddress",
                        "type": "address"
                    }
                ],
                "name": "send",
                "outputs": [
                    {
                        "components": [
                            {
                                "internalType": "bytes32",
                                "name": "guid",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "uint64",
                                "name": "nonce",
                                "type": "uint64"
                            },
                            {
                                "components": [
                                    {
                                        "internalType": "uint256",
                                        "name": "nativeFee",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "lzTokenFee",
                                        "type": "uint256"
                                    }
                                ],
                                "internalType": "struct MessagingFee",
                                "name": "fee",
                                "type": "tuple"
                            }
                        ],
                        "internalType": "struct MessagingReceipt",
                        "name": "msgReceipt",
                        "type": "tuple"
                    },
                    {
                        "components": [
                            {
                                "internalType": "uint256",
                                "name": "amountSentLD",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "amountReceivedLD",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct OFTReceipt",
                        "name": "oftReceipt",
                        "type": "tuple"
                    }
                ],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_blackLister",
                        "type": "address"
                    }
                ],
                "name": "setBlackLister",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_delegate",
                        "type": "address"
                    }
                ],
                "name": "setDelegate",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "components": [
                            {
                                "internalType": "uint32",
                                "name": "eid",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint16",
                                "name": "msgType",
                                "type": "uint16"
                            },
                            {
                                "internalType": "bytes",
                                "name": "options",
                                "type": "bytes"
                            }
                        ],
                        "internalType": "struct EnforcedOptionParam[]",
                        "name": "_enforcedOptions",
                        "type": "tuple[]"
                    }
                ],
                "name": "setEnforcedOptions",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_msgInspector",
                        "type": "address"
                    }
                ],
                "name": "setMsgInspector",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint32",
                        "name": "_eid",
                        "type": "uint32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "_peer",
                        "type": "bytes32"
                    }
                ],
                "name": "setPeer",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_preCrime",
                        "type": "address"
                    }
                ],
                "name": "setPreCrime",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_rateLimiter",
                        "type": "address"
                    }
                ],
                "name": "setRateLimiter",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "components": [
                            {
                                "internalType": "uint32",
                                "name": "dstEid",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "limit",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "window",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct RateLimiter.RateLimitConfig[]",
                        "name": "_rateLimitConfigs",
                        "type": "tuple[]"
                    }
                ],
                "name": "setRateLimits",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "sharedDecimals",
                "outputs": [
                    {
                        "internalType": "uint8",
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "stateMutability": "pure",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "token",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_user",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "_isBlackListed",
                        "type": "bool"
                    }
                ],
                "name": "updateBlackList",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ],
    },
};

export default connect;
