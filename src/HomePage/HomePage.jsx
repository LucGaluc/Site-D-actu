import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./HomePage.css";

const HomePage = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        // Utilisation l'API News API pour récupérer les actualités récentes ici
        const apiKey = "b6e9abee2d564847a8bdb600a8869b69";
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=fr&apiKey=${apiKey}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.articles);
                setNews(data.articles);
            })
            .catch((error) => {
                console.error(
                    "Erreur lors de la récupération des actualités:",
                    error
                );
            });
    }, []);

    return (
        <div>
            <h1>Site d'Actualités</h1>
            <div className="news-container">
                {news.slice(0, 6).map((article, index) => (
                    <NewsCard key={index} article={article} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
