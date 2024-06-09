import React, { useState, useEffect } from 'react';
import Button from './Button';
import { setDAOGovernanceContract } from '@/integration/connection';
import Textarea from './Textarea';
import { use } from 'chai';

export default function ProposalForm(){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fundRequest, setFundRequest] = useState(0);

 

  const SubmitPitch = async () => {
    try {
     const contract = await setDAOGovernanceContract();
     if(contract){
        //@ts-ignore
        if(typeof contract.createProposals === 'function'){
          const response = await contract.createProposals(title, description, fundRequest);
        
          console.log('Create Proposal:', response);
        }else{
          console.error('createProposals is not a function on the contract');
        }
       
     }else {
        console.error('Contract not initialized');
     }
  }catch(error){
    console.error('Error submitting pitch:', error);
  
  };
}

useEffect(() => {
  SubmitPitch()
},[title, description, fundRequest]);

  return (
    <div>
      <Textarea
        placeholder='Title'
        message='What is the name of your pitch?'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder='Description'
        message='Give a description about your pitch'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className='text-black'
        type="number"
        value={fundRequest}
        onChange={(e) => setFundRequest(Number(e.target.value))}
      />
      <Button onClick={SubmitPitch} text='Submit Pitch' />

    </div>
  );
};



