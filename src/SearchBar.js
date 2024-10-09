// SearchBar.js
import React, { useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim() !== '') {
      onSearch(query);
    }
  };

  return (
    <Input
      placeholder="Search..."
      value={query}
      onChange={handleInputChange}
      onPressEnter={handleSearch} // Trigger search on pressing Enter key
      suffix={<SearchOutlined onClick={handleSearch} style={{ cursor: 'pointer' }} />}
      style={{ width: '300px' }}
    />
  );
};

export default SearchBar;
