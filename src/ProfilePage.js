import React, { useState } from 'react';
import { Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './App.css';
import ProfilePage from './ProfilePage';

const { Header, Content } = Layout;

function App() {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleAvatarClick = () => {
    setIsCardVisible(!isCardVisible);
  };

  const handleLogout = () => {
    console.log('User logged out');
    setIsCardVisible(false); // Close the profile card on logout
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="navbar" style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '20px' }}>
        <Avatar
          size="large"
          icon={<UserOutlined />}
          onClick={handleAvatarClick}
          style={{ cursor: 'pointer' }}
        />
      </Header>

      <Content style={{ padding: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Welcome to User Profile 👤</h1>
        {isCardVisible && <ProfilePage onLogout={handleLogout} />}
      </Content>
    </Layout>
  );
}

export default App;
