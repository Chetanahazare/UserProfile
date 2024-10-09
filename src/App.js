import React, { useState, useEffect } from 'react';
import { Layout, Avatar, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './App.css';
import ProfilePage from './ProfilePage';
import SearchBar from './SearchBar';

const { Header, Content } = Layout;

function App() {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleAvatarClick = () => {
    setIsCardVisible(!isCardVisible);
  };

  const handleLogout = () => {
    console.log('User logged out');
    setIsCardVisible(false); // Close the profile card on logout
  };

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`https://gloster.onrender.com/api/subjects/all?search=${query}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data);
        message.success('Search results updated successfully');
      } else {
        message.error('Error fetching search results');
      }
    } catch (error) {
      message.error('An error occurred while searching');
    }
  };

  // Fetch all subjects when the component mounts
  useEffect(() => {
    const fetchAllSubjects = async () => {
      try {
        const response = await fetch(`https://gloster.onrender.com/api/subjects/all`);
        if (response.ok) {
          const data = await response.json();
          setSearchResults(data);
        } else {
          message.error('Error fetching subjects');
        }
      } catch (error) {
        message.error('An error occurred while fetching subjects');
      }
    };

    fetchAllSubjects();
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="navbar" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '20px' }}>
        <SearchBar onSearch={handleSearch} />
        <Avatar
          size="large"
          icon={<UserOutlined />}
          onClick={handleAvatarClick}
          style={{ cursor: 'pointer', marginLeft: '15px' }}
        />
      </Header>

      <Content style={{ padding: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Welcome! You Can Search Required Course Here 🔍🔎</h1>
        {isCardVisible && <ProfilePage onLogout={handleLogout} />}

        {/* Displaying search results */}
        <div style={{ marginTop: '20px' }}>
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map((result, index) => (
                <li key={index}>{result.name}</li>
              ))}
            </ul>
          ) : (
            <p>No search results found.</p>
          )}
        </div>
      </Content>
    </Layout>
  );
}

export default App;
