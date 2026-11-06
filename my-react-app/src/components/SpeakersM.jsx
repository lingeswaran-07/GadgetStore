// src/components/SpeakersM.js

import React from 'react';
import { useSelector } from 'react-redux';
import Speakers from './Speakers'; // Ensure this is correct
import SpeakersCard from './SpeakersCard'; // Import the SpeakersCard component

const SpeakersM = () => {
  const searchQuery = useSelector((state) => state.search.query.toLowerCase());
  const filteredSpeakers = Speakers.filter(item =>
    item.title.toLowerCase().includes(searchQuery) ||
    item.description.toLowerCase().includes(searchQuery) ||
    item.category.toLowerCase().includes(searchQuery)
  );
  
  return (
    <div className="mobile-container"> {/* Use mobile-container styling for now */}
      {filteredSpeakers.length > 0 ? (
        filteredSpeakers.map((item) => (
          <SpeakersCard
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

export default SpeakersM;
