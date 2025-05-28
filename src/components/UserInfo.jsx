import { useEffect, useState } from 'react';

const UserInfo = ({ accountName }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${accountName}`)
      .then(res => res.json())
      .then(setUser);
  }, [accountName]);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <img src={user.avatar_url} alt="avatar" width={50} style={{ borderRadius: '50%' }} />
      <div>
        <div style={{ fontWeight: 'bold' }}>{user.name || user.login}</div>
        <div>{user.login}</div>
      </div>
    </div>
  );
};

export default UserInfo;

