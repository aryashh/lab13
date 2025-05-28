import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import About from './pages/About';
import ReposList from './pages/ReposList';
import FollowersList from './pages/FollowersList';
import Subscriptions from './pages/Subscriptions';

const accountName = 'aryashh';

function App() {
  return (
    <Router>
      <div className="container">
        <SideMenu />
        <div className="main-content">
          <Header accountName={accountName} />
          <Routes>
            <Route path="/" element={<About accountName={accountName} />} />
            <Route path="/repos" element={<ReposList accountName={accountName} />} />
            <Route path="/followers" element={<FollowersList accountName={accountName} />} />
            <Route path="/subscriptions" element={<Subscriptions accountName={accountName} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

