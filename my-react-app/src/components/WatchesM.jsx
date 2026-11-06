// src/components/WatchesM.js
import React from 'react';
import { useSelector } from 'react-redux';
import WatchesCard from './WatchesCard'; // Import the WatchesCard component
import { Watches } from './Watches'; // Ensure this import path is correct

const WatchesM = () => {
  const searchQuery = useSelector((state) => state.search.query.toLowerCase());
  const filteredWatches = Watches.filter(item =>
    item.title.toLowerCase().includes(searchQuery) ||
    item.description.toLowerCase().includes(searchQuery) ||
    item.category.toLowerCase().includes(searchQuery)
  );
  
  return (
    <div className="watch-container">
      {filteredWatches.length > 0 ? (
        filteredWatches.map((item) => (
          <WatchesCard
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

export default WatchesM;
