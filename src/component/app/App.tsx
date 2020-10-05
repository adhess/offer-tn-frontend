import React from 'react';
import './App.css';
import Nav from "./nav/Nav";
import Categories from "./categories/categories";

function App() {
    const data = {};
    return (
        <>
            <Nav></Nav>
            <Categories/>
        </>
    );
}

export default App;
