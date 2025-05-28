import UserInfo from './UserInfo';

const Header = ({ accountName }) => (
  <div style={{ padding: '1rem', backgroundColor: '#ffffff', marginBottom: '1rem' }}>
    <UserInfo accountName={accountName} />
  </div>
);

export default Header;

