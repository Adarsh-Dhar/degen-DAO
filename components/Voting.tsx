"use client"
import React, { useState, useEffect } from 'react';
import Button from './Button';
import { getDAOGovernanceContract } from '@/integration/connection';
import Card from './Card';

const Voting: React.FC = () => {
  const [proposals, setProposals] = useState<any[]>([]);
  const [showProposals, setShowProposals] = useState(false);

  const getAndLogUnexecutedProposals = async () => {
    try {
      const contract = await getDAOGovernanceContract();
      if (contract) {
        //@ts-ignore
        if (typeof contract.getProposal === 'function') {
          let response = await contract.getProposal("0xf76daC24BaEf645ee0b3dfAc1997c6b838eF280D");
          const proposalArray = await Promise.all(response.map(async (proposal: any) => {
            const values = await Promise.all(proposal.map(async (value: any) => value));
            return values;
          }));

          console.log('All Proposals:', proposalArray);
        //   for(let i = 0; i < proposalArray.length; i++){
        //     console.log("proposal", proposalArray[i])
        //     setProposals(prevProposals => [...prevProposals, proposalArray[i]])
        //     console.log("proposals", proposals[i])
        //   }
        setProposals(proposalArray)
        console.log("proposals", proposals)
          setShowProposals(true);
           // Show proposals after fetching
        } else {
          console.error('getAllProposals is not a function on the contract');
        }
      } else {
        console.error('Contract not initialized');
      }
    } catch (error) {
      console.error('Error fetching all proposals:', error);
    }
  };

  useEffect(() => {
    getAndLogUnexecutedProposals();
  
  },[])

  return (
    <div>
      <Button text='pending pitch' onClick={getAndLogUnexecutedProposals} />
      {showProposals && (
        <div>
          {proposals.length > 0 ? (
            proposals.map((proposal,index) => (
                //@ts-ignore
              <Card title={proposal[2]} description={proposal[3]} funds={proposal[4]} />
            ))
          ) : (
            <p>No proposals found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Voting;
