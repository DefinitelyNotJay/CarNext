'use client';
import React from 'react';
import { SearchManufacturer } from '.';
import { useState } from 'react';
import { manufacturers } from '@/constants';
const SearchBar = () => {
  const [manufacturers, setManufacturer] = useState('');
  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturers}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
