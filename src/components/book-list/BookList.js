import { useState } from 'react';
import listOfBooks from '../../data/listofbooks.json';
import SortDropdown from './SortDropdown';
import "../../assets/styles/BookList.css";


const BookList = (props) => {
  const [books, setBooks] = useState(listOfBooks);
  const [sortOption, setSortOption] = useState('author');


  const filterBooks = (searchTerm) => {
    return books.filter(book => {
      const searchLower = searchTerm.toLowerCase();
      const titleLower = book.title.toLowerCase();
      const authorLower = book.author.toLowerCase();
      const genreLower = book.genre.toLowerCase();

      return (
        titleLower.includes(searchLower) ||
        authorLower.includes(searchLower) ||
        genreLower.includes(searchLower)
      );
    });
  }

  // const sortBooks = (books, sortOption) => {
  //   switch (sortOption) {
  //     case 'title':
  //       return books.sort((a, b) => a.title.localeCompare(b.title));
  //     case 'author':
  //       return books.sort((a, b) => a.author.localeCompare(b.author));
  //     case 'genre':
  //       return books.sort((a, b) => a.genre.localeCompare(b.genre));
  //     default:
  //       return books;
  //   }
  // }

  const sortBooks = (books, sortOption) => {
    return books.sort((a, b) => a[sortOption].localeCompare(b[sortOption]));
  };

  const highlightMatch = (str, searchTerm) => {
    const index = str.toLowerCase().indexOf(searchTerm.toLowerCase());
    if (index === -1) {
      return str;
    }
    const start = str.slice(0, index);
    const match = str.slice(index, index + searchTerm.length);
    const end = str.slice(index + searchTerm.length);
    return (
      <>
        <span>{start}</span>
        <span className='highlight'>{match}</span>
        <span>{end}</span>
      </>
    );
  }

  const BookCard = (props) => {
    return (
      <div className="book-card">
        <h3 className="book-card__title">{highlightMatch(props.book.title, props.searchTerm)}</h3>
        <p className="book-card__author">{highlightMatch(props.book.author, props.searchTerm)}</p>
        <p className="book-card__genre">{highlightMatch(props.book.genre, props.searchTerm)}</p>
      </div>
    );
  }

  const filteredBooks = filterBooks(props.searchTerm);
  const sortedBooks = sortBooks(filteredBooks, sortOption);

  const handleSortOptionChange = (sortOption) => {
    setSortOption(sortOption);
  }

  return (
    <>
      <SortDropdown onOptionChange={handleSortOptionChange} />
      <div className="book-list">
        {sortedBooks.length > 0 ? (
          sortedBooks.map((book, index) => (
            <BookCard key={index} book={book} searchTerm={props.searchTerm} />
          ))
        ) : (
          <p className="book-list__no-results">No results found</p>
        )}
      </div>
    </>
  );
}

export default BookList;
