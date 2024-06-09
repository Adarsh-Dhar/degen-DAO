// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DAOVoting {
    struct Vote {
        string title;
        string description;
        uint fund;
        bool inSupport;
    }

    mapping(address => Vote) public votes;

    function castVote(string memory _title, string memory _description ,uint _fund, bool _inSupport) public {
        votes[msg.sender] = Vote({
            title : _title,
            description : _description,
            fund: _fund,
            inSupport: _inSupport
        });
    }

    function getVote(address _voter) public view returns (Vote memory) {
        return votes[_voter];
    }
}
