import React, { useEffect } from 'react';

const Dashboard = () => {
  const daoStats = {
    activeProposals: 5,
    treasuryBalance: 100
  };
  const userStats = {
    submittedProposals: 2,
    votingHistory: ['Proposal 1', 'Proposal 2']
  };

  useEffect(() => {
    console.log('DAO Stats:', daoStats);
    console.log('User Stats:', userStats);
  }, []);

  return (
    <div>
      <h2>DAO Dashboard</h2>
      <div>
        <h3>DAO Statistics</h3>
        <p>Active Proposals: {daoStats.activeProposals}</p>
        <p>Treasury Balance: {daoStats.treasuryBalance} ETH</p>
      </div>
      <div>
        <h3>Your Statistics</h3>
        <p>Submitted Proposals: {userStats.submittedProposals}</p>
        <p>Voting History: {userStats.votingHistory.length} votes</p>
      </div>
    </div>
  );
};

export default Dashboard;
