import { useState } from 'react';
import '../../assets/styles/Header.css'

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    props.onSearch(searchTerm);
  }

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div className='search-bar'>
      <input className='search-bar__input' type="text" value={searchTerm} onChange={handleInputChange} />
      <button className='search-bar__button' onClick={handleSearch}>Search</button>
    </div>

  );
}

export default SearchBar;
