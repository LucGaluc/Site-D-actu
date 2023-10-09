import React, { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./SearchPage.css";

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        const apiKey = "b6e9abee2d564847a8bdb600a8869b69";
        const apiUrl = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setSearchResults(data.articles);
            })
            .catch((error) => {
                console.error(
                    "Erreur lors de la recherche d'actualités:",
                    error
                );
            });
    };

    return (
        <div>
            <h1>Recherche d'Actualités</h1>
            <input
                type="text"
                placeholder="Recherchez des actualités..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Rechercher</button>
            <div className="news-container">
                {searchResults.map((article, index) => (
                    <NewsCard key={index} article={article} />
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
