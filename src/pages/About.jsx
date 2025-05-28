import { useEffect, useState } from 'react';

const About = ({ accountName }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${accountName}`)
      .then(res => res.json())
      .then(setUser);
  }, [accountName]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>About</h2>
      <p>Name: {user.name}</p>
      <p>Bio: {user.bio}</p>
      <p>Location: {user.location}</p>
      <p>Public Repos: {user.public_repos}</p>
    </div>
  );
};

export default About;

