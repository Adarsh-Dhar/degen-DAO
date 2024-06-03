// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Voting {
    address public daoTokenAddress;
    mapping(uint256 => mapping(address => bool)) public hasVoted;

    event Voted(uint256 indexed id, address indexed voter, bool inSupport);

    constructor(address _daoTokenAddress) {
        daoTokenAddress = _daoTokenAddress;
    }

    function vote(uint256 _proposalId, bool _inSupport) external {
        require(!hasVoted[_proposalId][msg.sender], "Already voted");

        IERC20(daoTokenAddress).transferFrom(msg.sender, address(this), 1);

        hasVoted[_proposalId][msg.sender] = true;

        emit Voted(_proposalId, msg.sender, _inSupport);
    }
}
