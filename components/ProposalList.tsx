import React, { useEffect } from 'react';

const ProposalList = () => {
  const proposals = [
    { id: 1, title: 'Proposal 1', description: 'Description 1', fundRequest: 10 },
    { id: 2, title: 'Proposal 2', description: 'Description 2', fundRequest: 20 }
  ];

  useEffect(() => {
    console.log('Active Proposals:', proposals);
  }, []);

const handleVote = (id: number, vote: boolean): void => {
    console.log(`Voted ${vote ? 'For' : 'Against'} Proposal ${id}`);
};

  return (
    <div>
      <h2>Active Proposals</h2>
      {proposals.map((proposal) => (
        <div key={proposal.id}>
          <h3>{proposal.title}</h3>
          <p>{proposal.description}</p>
          <p>Fund Request: {proposal.fundRequest} ETH</p>
          <button onClick={() => handleVote(proposal.id, true)}>Vote For</button>
          <button onClick={() => handleVote(proposal.id, false)}>Vote Against</button>
        </div>
      ))}
    </div>
  );
};

export default ProposalList;
