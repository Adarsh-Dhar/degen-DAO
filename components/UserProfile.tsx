import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const initialProfile = { username: 'JohnDoe', email: 'john@example.com' };
  const [profileData, setProfileData] = useState(initialProfile);

  useEffect(() => {
    console.log('User Profile:', profileData);
  }, [profileData]);

  const handleUpdate = (e : any) => {
    e.preventDefault();
    console.log('Profile Updated:', profileData);
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleUpdate}>
        <label>Username:</label>
        <input type="text" value={profileData.username} onChange={(e) => setProfileData({ ...profileData, username: e.target.value })} required />
        <label>Email:</label>
        <input type="email" value={profileData.email} onChange={(e) => setProfileData({ ...profileData, email: e.target.value })} required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UserProfile;
