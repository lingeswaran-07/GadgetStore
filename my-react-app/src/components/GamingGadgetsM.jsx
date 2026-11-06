// src/components/GamingGadgetsM.js
import React from 'react';
import { useSelector } from 'react-redux';
import GamingGadgetsCard from './GamingGadgetsCard'; // Import the GamingGadgetsCard component
import { GamingGadgets } from './GamingGadgets'; // Ensure this import path is correct

const GamingGadgetsM = () => {
  const searchQuery = useSelector((state) => state.search.query.toLowerCase());
  const filteredGamingGadgets = GamingGadgets.filter(item =>
    item.title.toLowerCase().includes(searchQuery) ||
    item.description.toLowerCase().includes(searchQuery) ||
    item.category.toLowerCase().includes(searchQuery)
  );
  
  return (
    <div className="gaming-gadget-container">
      {filteredGamingGadgets.length > 0 ? (
        filteredGamingGadgets.map((item) => (
          <GamingGadgetsCard
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

export default GamingGadgetsM;
