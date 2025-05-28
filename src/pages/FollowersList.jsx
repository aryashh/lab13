import { useEffect, useState } from 'react';

const FollowersList = ({ accountName }) => {
  const [followers, setFollowers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`https://api.github.com/users/${accountName}/followers`)
      .then(res => res.json())
      .then(setFollowers);
  }, [accountName]);

  const filtered = followers.filter(f => f.login.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h2>Followers</h2>
      <input
        placeholder="Search by login..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul>
        {filtered.map(f => (
          <li key={f.id}>{f.login}</li>
        ))}
      </ul>
    </div>
  );
};

export default FollowersList;
