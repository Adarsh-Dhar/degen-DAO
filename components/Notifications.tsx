import React, { useEffect } from 'react';

const Notifications = () => {
  const notifications = [
    { message: 'New proposal submitted' },
    { message: 'Proposal 1 approved' }
  ];

  useEffect(() => {
    console.log('Notifications:', notifications);
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      {notifications.map((notification, index) => (
        <p key={index}>{notification.message}</p>
      ))}
    </div>
  );
};

export default Notifications;
