import './App.css';
import { useState } from 'react';
import BookList from './components/book-list/BookList';
import Header from './components/header/Header';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  }

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <BookList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
