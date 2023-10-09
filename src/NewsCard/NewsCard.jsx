import React from "react";
import "./NewsCard.css";

const NewsCard = ({ article }) => {
    if (article.urlToImage === null) {
        return (
            <div className="news-card">
                <img
                    className="imgNot"
                    src="./../../image/Pasdimagedisponible.jpeg"
                    alt="Image non disponible"
                />
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <p>Source: {article.source.name}</p>
                <p>Date: {article.publishedAt}</p>
                <a href={article.url}>Voir l'article</a>
            </div>
        );
    } else {
        return (
            <div className="news-card">
                <img src={article.urlToImage} alt={article.title} />
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <p>Source: {article.source.name}</p>
                <p>Date: {article.publishedAt}</p>
                <a href={article.url}>Voir l'article</a>
            </div>
        );
    }
};

export default NewsCard;
