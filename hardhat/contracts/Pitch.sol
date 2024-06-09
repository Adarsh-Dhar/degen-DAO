// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Pitch {
    struct Proposal {
        uint id;
        address proposer;
        string description;
        string title;
        uint256 fund ;
        uint256 voteCount;
        uint256 timestamp;
        bool executed;
    }

    
    mapping(address => Proposal[]) public proposals;

        event ProposalCreated(uint id, string description, string title, uint fund);
        

     function createProposals(string memory _description, string memory _title, uint _fund) public {
        
        Proposal memory newProposal = Proposal({
            id: proposals[msg.sender].length,
            proposer : msg.sender,
            description: _description,
            title: _title,
            fund: _fund,
            voteCount: 0,
            timestamp: block.timestamp,
            executed: false
        });
        proposals[msg.sender].push(newProposal);
     }

    function getProposal(address _owner) public view returns (Proposal[] memory) {
    
    if (proposals[_owner].length == 0) {
        return new Proposal[](0); // Return an empty array if the sender has no proposals
    }
    return proposals[_owner];
}

 function getUnexecutedProposals(address _owner) public view returns (Proposal[] memory) {
        Proposal[] memory allProposals = proposals[_owner];
        uint unexecutedCount = 0;

        for (uint i = 0; i < allProposals.length; i++) {
            if (!allProposals[i].executed) {
                unexecutedCount++;
            }
        }

        Proposal[] memory unexecutedProposals = new Proposal[](unexecutedCount);
        uint index = 0;

        for (uint i = 0; i < allProposals.length; i++) {
            if (!allProposals[i].executed) {
                unexecutedProposals[index] = allProposals[i];
                index++;
            }
        }

        return unexecutedProposals;
    }

//     function vote(uint _proposalId) public {
//        Proposal storage proposal = proposals[_proposalId] ;
//         require(proposal.executed == false, "Proposal already executed");
//         proposal.voteCount += 1;
//     }

//     function executeProposal(uint _proposalId) public {
//         Proposal storage proposal = proposals[_proposalId];
//         require(proposal.voteCount > 0, "Not enough votes");
//         proposal.executed = true;
//         // Execute the proposal logic here
//     }

//     function getUnexecutedProposals() public view returns (Proposal[] memory) {
//     // First, count the number of unexecuted proposals
//     uint unexecutedCount = 0;
//     for (uint i = 0; i < proposals.length; i++) {
//         if (!proposals[i].executed) {
//             unexecutedCount++;
//         }
//     }

//     // Create an array with the correct length
//     Proposal[] memory unexecutedProposals = new Proposal[](unexecutedCount);
//     uint index = 0;

//     // Populate the array with unexecuted proposals
//     for (uint i = 0; i < proposals.length; i++) {
//         if (!proposals[i].executed) {
//             unexecutedProposals[index] = proposals[i];
//             index++;
//         }
//     }

//     return unexecutedProposals;
// }

}
