import React, { useState, useEffect } from 'react';

const FundManagement = () => {
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const treasuryBalance = 100; // Mock data

  useEffect(() => {
    console.log('Treasury Balance:', treasuryBalance);
  }, []);

  const handleWithdraw = (e : any) => {
    e.preventDefault();
    console.log('Withdraw Request:', withdrawAmount);
  };

  return (
    <div>
      <h2>Treasury Management</h2>
      <p>Treasury Balance: {treasuryBalance} ETH</p>
      <form onSubmit={handleWithdraw}>
        <label>Withdraw Amount (ETH):</label>
        <input type="number" value={withdrawAmount} onChange={(e) => setWithdrawAmount(Number(e.target.value))} required />
        <button type="submit">Withdraw</button>
      </form>
    </div>
  );
};

export default FundManagement;
