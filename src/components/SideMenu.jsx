import { Link, useLocation } from 'react-router-dom';

const SideMenu = () => {
  const location = useLocation();
  const menu = [
    { to: '/', label: 'About' },
    { to: '/repos', label: 'Repositories' },
    { to: '/followers', label: 'Followers' },
    { to: '/subscriptions', label: 'Subscriptions' },
  ];

  return (
    <div style={{ width: '200px', backgroundColor: '#333333', padding: '1rem' }}>
      {menu.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          style={{
            display: 'block',
            color: location.pathname === item.to ? '#4c56c0' : '#ffffff',
            backgroundColor: location.pathname === item.to ? '#f5f7fb' : 'transparent',
            padding: '10px',
            borderRadius: '8px',
            marginBottom: '5px',
          }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default SideMenu;

