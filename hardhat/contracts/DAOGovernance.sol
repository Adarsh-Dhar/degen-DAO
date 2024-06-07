// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DAOGovernance {
    struct Proposal {
        uint id;
        string description;
        uint voteCount;
        bool executed;
    }

    Proposal[] public proposals;
    mapping(address => uint) public votes;

    function createProposal(string memory _description) public {
        proposals.push(Proposal({
            id: proposals.length,
            description: _description,
            voteCount: 0,
            executed: false
        }));
    }

    function vote(uint _proposalId) public {
        Proposal storage proposal = proposals[_proposalId];
        require(!proposal.executed, "Proposal already executed");
        proposal.voteCount += votes[msg.sender];
    }

    function executeProposal(uint _proposalId) public {
        Proposal storage proposal = proposals[_proposalId];
        require(proposal.voteCount > 0, "Not enough votes");
        proposal.executed = true;
        // Execute the proposal logic here
    }
}
