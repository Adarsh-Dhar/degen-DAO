import React, { useEffect, useState } from 'react';
import { getDAOGovernanceContract } from '@/integration/connection';
import Button from './Button';


const ProposalList = () => {
  

  const getAllPitch = async () => {
    try {
      const contract = await getDAOGovernanceContract();
      if(contract){
        //@ts-ignore
        if(typeof contract.getProposal === 'function'){
         let response = await contract.getProposal("0xf76daC24BaEf645ee0b3dfAc1997c6b838eF280D");
          // response = JSON.parse(JSON.stringify(response))
          // console.log('All Proposals:', response);
          const proposalArray = await Promise.all(response.map(async (proposal : any) => {
            const values = await Promise.all(proposal.map(async (value : any) => {
                return value;
            }));
            return values;
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

  return(<div>
    <Button onClick={getAllPitch} text='All Pitch' />
  </div>)
};

export default ProposalList;
