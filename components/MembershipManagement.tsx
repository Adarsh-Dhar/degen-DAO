import React, { useState } from 'react';

const Membership = () => {
  const [membershipData, setMembershipData] = useState('');

  const handleApply = (e : any) => {
    e.preventDefault();
    console.log('Membership Application:', membershipData);
  };

  return (
    <div>
      <h2>Membership Application</h2>
      <form onSubmit={handleApply}>
        <label>Membership Information:</label>
        <input type="text" value={membershipData} onChange={(e) => setMembershipData(e.target.value)} required />
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default Membership;
