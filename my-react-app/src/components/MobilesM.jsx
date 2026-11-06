// src/components/MobilesM.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Mobile } from './Mobile'; // Ensure this is correct
import Mobilescard from './Mobilescard'; // Import the Mobilescard component

const MobilesM = () => {
  const searchQuery = useSelector((state) => state.search.query.toLowerCase());
  const filteredMobiles = Mobile.filter(item =>
    item.title.toLowerCase().includes(searchQuery) ||
    item.description.toLowerCase().includes(searchQuery) ||
    item.category.toLowerCase().includes(searchQuery)
  );
  
  return (
    <div className="mobile-container">
      {filteredMobiles.length > 0 ? (
        filteredMobiles.map((item) => (
          <Mobilescard
            key={item.id}
            item={item}
          />
        ))
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
};

export default MobilesM;
