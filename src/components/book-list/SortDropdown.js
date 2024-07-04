import { useState } from 'react';
import '../../assets/styles/SortDropdown.css';

const SortDropdown = (props) => {
  const [selectedOption, setSelectedOption] = useState('author');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    props.onOptionChange(event.target.value);
  }

  return (
    <div className="sort-dropdown">
  <label className="sort-dropdown__label">Sort by:</label>
  <select className="sort-dropdown__select" id="sort" value={selectedOption} onChange={handleOptionChange}>
    <option value="author">Author</option>
    <option value="title">Title</option>
    <option value="genre">Genre</option>
  </select>
</div>
  );
}

export default SortDropdown;
