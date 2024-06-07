// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DAOTreasury {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    receive() external payable {}

    function withdraw(uint _amount) public {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(_amount);
    }

    function transfer(address payable _to, uint _amount) public {
        require(msg.sender == owner, "Only owner can transfer");
        _to.transfer(_amount);
    }
}
