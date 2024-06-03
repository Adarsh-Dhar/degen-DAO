// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DAO is Ownable {
    // Proposal structure
    struct Proposal {
        uint256 id;
        address proposer;
        string description;
        uint256 votesFor;
        uint256 votesAgainst;
        bool executed;
    }

    // Token used for voting
    IERC20 public votingToken;

    // Proposals array
    Proposal[] public proposals;

    // Mapping from proposal ID to voter address to whether they voted
    mapping(uint256 => mapping(address => bool)) public hasVoted;

    // Events
    event ProposalAdded(uint256 indexed id, address indexed proposer, string description);
    event Voted(uint256 indexed id, address indexed voter, bool inSupport);
    event ProposalExecuted(uint256 indexed id, address indexed executor);

    constructor(address _votingToken) Ownable(_votingToken) {
        votingToken = IERC20(_votingToken);
    }

    // Function to add a proposal
    function addProposal(string memory _description) external {
        uint256 proposalId = proposals.length;
        proposals.push(Proposal({
            id: proposalId,
            proposer: msg.sender,
            description: _description,
            votesFor: 0,
            votesAgainst: 0,
            executed: false
        }));

        emit ProposalAdded(proposalId, msg.sender, _description);
    }

    // Function to vote on a proposal
    function vote(uint256 _proposalId, bool _inSupport) external {
        require(!hasVoted[_proposalId][msg.sender], "Already voted");
        
        if (_inSupport) {
            proposals[_proposalId].votesFor += 1;
        } else {
            proposals[_proposalId].votesAgainst += 1;
        }
        
        hasVoted[_proposalId][msg.sender] = true;

        emit Voted(_proposalId, msg.sender, _inSupport);
    }

    // Function to execute a proposal
    function executeProposal(uint256 _proposalId) external onlyOwner {
        Proposal storage proposal = proposals[_proposalId];
        require(!proposal.executed, "Proposal already executed");
        
        uint256 votesNeeded = votingToken.balanceOf(address(this)) / 2;
        
        require(proposal.votesFor > votesNeeded, "Not enough votes");
        
        // Mark proposal as executed
        proposal.executed = true;
        
        emit ProposalExecuted(_proposalId, msg.sender);
    }

    // Function to get the number of proposals
    function getProposalsCount() external view returns (uint256) {
        return proposals.length;
    }
}
