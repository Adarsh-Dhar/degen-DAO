// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Treasury is Ownable {
    address public daoTokenAddress;

    constructor(address _daoTokenAddress) Ownable(_daoTokenAddress) {
        daoTokenAddress = _daoTokenAddress;
    }

    function addFunds(uint256 amount) external {
        IERC20(daoTokenAddress).transferFrom(msg.sender, address(this), amount);
    }

    function withdrawFunds(address to, uint256 amount) external onlyOwner {
        IERC20(daoTokenAddress).transfer(to, amount);
    }

    function transferAsset(address assetAddress, address to, uint256 amount) external onlyOwner {
        IERC20(assetAddress).transfer(to, amount);
    }
}
