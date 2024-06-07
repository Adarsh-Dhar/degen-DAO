// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DAOMembership {
    mapping(address => bool) public whitelist;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function addMember(address _member) public {
        require(msg.sender == owner, "Only owner can add members");
        whitelist[_member] = true;
    }

    function removeMember(address _member) public {
        require(msg.sender == owner, "Only owner can remove members");
        whitelist[_member] = false;
    }

    function isMember(address _member) public view returns (bool) {
        return whitelist[_member];
    }
}
