// src/components/LaptopsM.js
import React from 'react';
import { useSelector } from 'react-redux';
import LaptopsCard from './LaptopsCard';
import { Laptops } from './Laptops'; // Import the Laptops array

const LaptopsM = () => {
  const searchQuery = useSelector((state) => state.search.query.toLowerCase());
  const filteredLaptops = Laptops.filter(item =>
    item.title.toLowerCase().includes(searchQuery) ||
    item.description.toLowerCase().includes(searchQuery) ||
    item.category.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="laptop-container">
      {filteredLaptops.length > 0 ? (
        filteredLaptops.map((item) => (
          <LaptopsCard
            key={item.id} // Use the local id for the key
            item={item}
          />
        ))
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
};

export default LaptopsM;
