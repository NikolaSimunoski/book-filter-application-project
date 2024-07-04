import React from 'react';
import SearchBar from './SearchBar';
import '../../assets/styles/Header.css'

const Header = (props) => {
    return (
        <header className="header">
            <h1 className="header__title">Book Application</h1>
            <SearchBar onSearch={props.onSearch} />
        </header>
    );
}

export default Header;

