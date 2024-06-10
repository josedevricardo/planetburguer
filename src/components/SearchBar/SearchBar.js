import React, { useState } from 'react';
import "./SearchBar.css";

const SearchBar = ({ data, onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setQuery(value);
        onSearch(value);
    };

    const handleBlur = () => {
        // O teclado será fechado quando o campo de busca perder o foco.
        document.activeElement.blur();
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Buscar..."
                value={query}
                onChange={handleInputChange}
                onBlur={handleBlur}
            />
        </div>
    );
};

export default SearchBar;
