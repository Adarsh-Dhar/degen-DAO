import React from 'react';
import Button from './Button';
import { getDAOVotingContract } from '@/integration/connection';

const GetAllVotes: React.FC = () => {
    const getVotes = async () => {
        try {
          const contract = await getDAOVotingContract();
          if(contract){
            //@ts-ignore
            if(typeof contract.getVote === 'function'){
             let response = await contract.getVote("0x43a4477C8e7945FFb738102d7dfC4c4fD21C28BD");
              // response = JSON.parse(JSON.stringify(response))
              console.log('All Proposals:', response);
              const proposalArray = await Promise.all(response.map(async (proposal : any) => {
                
                return proposal;
            }));
    
            console.log('All Proposals:', proposalArray);
            return proposalArray;
    
            }else{
              console.error('getAllProposals is not a function on the contract');
            }
          }else{
            console.error('Contract not initialized');
          }
      }catch(error){
        console.error('Error fetching all proposals:', error);
      
      };
    }
    return (
       <Button text='get my votes' onClick={getVotes} />
    );
};

export default GetAllVotes;