// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract GovernanceTokenDistribution is Ownable {
    address public daoTokenAddress;
    mapping(address => uint256) public vestingSchedule;

    constructor(address _daoTokenAddress) Ownable(_daoTokenAddress) {
        daoTokenAddress = _daoTokenAddress;
    }

    function setVestingSchedule(address beneficiary, uint256 amount, uint256 vestingTimestamp) external onlyOwner {
        require(vestingTimestamp > block.timestamp, "Vesting time must be in the future");
        require(amount > 0, "Amount must be greater than zero");

        IERC20(daoTokenAddress).transferFrom(msg.sender, address(this), amount);

        vestingSchedule[beneficiary] = vestingTimestamp;
    }

    function claimTokens() external {
        require(vestingSchedule[msg.sender] > 0, "No vesting schedule found");

        uint256 amount = IERC20(daoTokenAddress).balanceOf(address(this));
        require(amount > 0, "No tokens to claim");

        IERC20(daoTokenAddress).transfer(msg.sender, amount);
    }
}
