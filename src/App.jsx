import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";
import HomePage from "./HomePage/HomePage";
import SearchPage from "./SearchPage/SearchPage";
import "./App.css";

const App = () => {
    return (
        <Router>
            <div>
                <Menu />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search" element={<SearchPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
