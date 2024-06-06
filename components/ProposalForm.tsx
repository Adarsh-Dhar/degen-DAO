import React, { useState } from 'react';

const ProposalForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fundRequest, setFundRequest] = useState(0);

  const handleSubmit = (e : any) => {
    e.preventDefault();
    console.log('Proposal Submitted:', { title, description, fundRequest });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Proposal</h2>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      <label>Fund Request (ETH):</label>
      <input type="number" value={fundRequest} onChange={(e) => setFundRequest(Number(e.target.value))} required />
      <button type="submit">Submit Proposal</button>
    </form>
  );
};

export default ProposalForm;
