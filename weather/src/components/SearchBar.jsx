import React from "react";

function SearchBar({ city, setCity, search, loading }) {
    return (
        <div className="search">
            <input
                type="text"
                placeholder="Введите название города"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && search()}
                spellCheck={false}
            />
            <button onClick={search} disabled={loading}>
                <img src="/images/search.png" alt="Search"/>
            </button>
        </div>
    );
}

export default SearchBar;