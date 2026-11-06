// src/components/EarbudsM.js
import React from 'react';
import { useSelector } from 'react-redux';
import EarbudsCard from './EarbudsCard'; // Import the EarbudsCard component
import { Earbuds } from './Earbuds'; // Ensure this import path is correct

const EarbudsM = () => {
  const searchQuery = useSelector((state) => state.search.query.toLowerCase());
  const filteredEarbuds = Earbuds.filter(item =>
    item.title.toLowerCase().includes(searchQuery) ||
    item.description.toLowerCase().includes(searchQuery) ||
    item.category.toLowerCase().includes(searchQuery)
  );
  
  return (
    <div className="earbuds-container">
      {filteredEarbuds.length > 0 ? (
        filteredEarbuds.map((item) => (
          <EarbudsCard
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

export default EarbudsM;
