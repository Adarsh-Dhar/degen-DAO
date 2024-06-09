import React from 'react';
import Button from './Button';
import { setDAOVotingContract } from '@/integration/connection';

interface CardProps {
    title: string;
    description: string;
    funds : number;
}

const Card: React.FC<CardProps> = ({ title, description, funds }) => {
    const[vote, setVote] = React.useState(null);
    const [showVoteOptions, setShowVoteOptions] = React.useState(false);

    const InitiateVote = () => {
        setShowVoteOptions(true);
      };

      const handleVote = (vote : any) => {
        console.log(`Voted: ${vote}`);
        // You can add further logic here, such as sending the vote to a backend or blockchain
        // After voting, you might want to hide the vote options again
        setShowVoteOptions(false);
      };

      const yesVoted = async () => {
        try {
          const contract = await setDAOVotingContract();
          if(contract){
             //@ts-ignore
             if(typeof contract.castVote === 'function'){
               const response = await contract.castVote(title, description, funds, true);
             
               console.log('Cast Vote', response);
             }else{
               console.error('castVote is not a function on the contract');
             }
            
          }else {
             console.error('Contract not initialized');
          }
       }catch(error){
         console.error('Error casting vote:', error);
       
       };
       handleVote("yes")
      }

      const noVoted = async () => {
        try {
          const contract = await setDAOVotingContract();
          if(contract){
             //@ts-ignore
             if(typeof contract.castVote === 'function'){
               const response = await contract.castVote(title, description, funds, false);
             
               console.log('Cast Vote', response);
             }else{
               console.error('castVote is not a function on the contract');
             }
            
          }else {
             console.error('Contract not initialized');
          }
       }catch(error){
         console.error('Error casting vote:', error);
       
       };
       handleVote("no")
      }

    return (
<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {title}</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{funds}</p>
    <div>
      {showVoteOptions ? (
        <div>
          <Button text="Yes" onClick={yesVoted} />
          <Button text="No" onClick={noVoted} />
        </div>
      ) : (
        <Button text="Vote" onClick={InitiateVote} />
      )}
    </div>
    
</div>

    );
};

export default Card;