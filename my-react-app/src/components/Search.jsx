import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, clearSearch } from '../Redux/Searchslice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Search.css';

const Search = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.search.items); // Assuming 'items' is in your Redux store
  const query = useSelector((state) => state.search.query);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    const query = event.target.value;
    dispatch(setSearchQuery(query));

    if (query) {
      const filtered = items.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleItemClick = (item) => {
    dispatch(setSearchQuery(item.name));
    setShowDropdown(false);
    navigate(`/product/${item.id}`); // Navigate to the item page
  };

  const handleSearchSubmit = () => {
    if (filteredItems.length === 1) {
      navigate(`/product/${filteredItems[0].id}`);
    }
  };

  return (
    <div className='search'>
      <FontAwesomeIcon icon={faSearch} className='icon'/>&nbsp;
      <input 
        type="text" 
        placeholder="Search..." 
        value={query}
        onChange={handleSearch} 
      />
      <button className='bt' type='button' onClick={handleSearchSubmit}>search</button>

      {showDropdown && filteredItems.length > 0 && (
        <ul className='dropdown'>
          {filteredItems.map(item => (
            <li 
              key={item.id} 
              onClick={() => handleItemClick(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
