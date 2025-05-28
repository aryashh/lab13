import { useEffect, useState } from 'react';

const Subscriptions = ({ accountName }) => {
  const [subs, setSubs] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`https://api.github.com/users/${accountName}/subscriptions`)
      .then(res => res.json())
      .then(setSubs);
  }, [accountName]);

  const filtered = subs.filter(s => s.full_name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h2>Subscriptions</h2>
      <input
        placeholder="Search by name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul>
        {filtered.map(s => (
          <li key={s.id}>{s.full_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Subscriptions;
