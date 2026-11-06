// src/components/MobileChargersM.js
import React from 'react';
import { useSelector } from 'react-redux';
import ChargersCard from './ChargersCard'; // Import the MobileChargersCard component
import { Chargers } from './Chargers'; // Ensure this import path is correct

const ChargersM = () => {
  const searchQuery = useSelector((state) => state.search.query.toLowerCase());
  const filteredChargers = Chargers.filter(item =>
    item.title.toLowerCase().includes(searchQuery) ||
    item.description.toLowerCase().includes(searchQuery) ||
    item.category.toLowerCase().includes(searchQuery)
  );
  
  return (
    <div className="charger-container">
      {filteredChargers.length > 0 ? (
        filteredChargers.map((item) => (
          <ChargersCard
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

export default ChargersM;
