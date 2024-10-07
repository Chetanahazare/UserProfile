import React from 'react';
import { Card, Menu } from 'antd';
import {
  UserOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
  AppstoreAddOutlined,
  FileTextOutlined,
} from '@ant-design/icons';

const ProfilePage = ({ onLogout }) => {
  return (
    <div className="profile-card" style={{ position: 'fixed', right: '20px', top: '70px' }}>
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
          <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={onLogout}>
            Logout
          </Menu.Item>
        </Menu>
      </Card>
    </div>
  );
};

export default ProfilePage;
