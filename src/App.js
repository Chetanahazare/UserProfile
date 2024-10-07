import React, { useState } from 'react';
import { Layout, Avatar, Card, Menu } from 'antd';
import {
  UserOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
  AppstoreAddOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import './App.css';

const { Header, Content } = Layout;

function App() {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleAvatarClick = () => {
    setIsCardVisible(!isCardVisible);
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
        {isCardVisible && (
          <div className="profile-card">
            <Card style={{ width: 300, borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
              <Menu mode="vertical" selectable={false}>
                <Menu.Item key="profile" icon={<UserOutlined />}>
                  Profile
                </Menu.Item>
                <Menu.Item key="integrations" icon={<AppstoreAddOutlined />}>
                  Integrations
                </Menu.Item>
                <Menu.Item key="settings" icon={<SettingOutlined />}>
                  Settings
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="guide" icon={<FileTextOutlined />}>
                  Guide
                </Menu.Item>
                <Menu.Item key="help-center" icon={<QuestionCircleOutlined />}>
                  Help Center
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="logout" icon={<LogoutOutlined />}>
                  Logout
                </Menu.Item>
              </Menu>
            </Card>
          </div>
        )}
      </Content>
    </Layout>
  );
}

export default App;
