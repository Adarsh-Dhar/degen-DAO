// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DAOTokenDistribution {
    mapping(address => uint) public distributions;

    function distribute(address _to, uint _amount) public {
        distributions[_to] += _amount;
    }

    function getDistribution(address _to) public view returns (uint) {
        return distributions[_to];
    }
}
