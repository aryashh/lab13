import { useEffect, useState } from 'react';

const ReposList = ({ accountName }) => {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`https://api.github.com/users/${accountName}/repos`)
      .then(res => res.json())
      .then(setRepos);
  }, [accountName]);

  const filtered = repos.filter(repo => repo.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h2>Repositories</h2>
      <input
        placeholder="Search by name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul>
        {filtered.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReposList;

