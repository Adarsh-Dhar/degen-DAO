// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DAOVoting {
    struct Vote {
        uint proposalId;
        bool inSupport;
    }

    mapping(address => Vote) public votes;

    function castVote(uint _proposalId, bool _inSupport) public {
        votes[msg.sender] = Vote({
            proposalId: _proposalId,
            inSupport: _inSupport
        });
    }

    function getVote(address _voter) public view returns (Vote memory) {
        return votes[_voter];
    }
}
