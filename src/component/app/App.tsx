import React from 'react';
import './App.css';
import Nav from "./nav/Nav";
import Categories from "./categories/categories";
import HomeProducts from "./homeProducts/HomeProducts";

function App() {
    const data = {};
    return (
        <>
            <Nav></Nav>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'start'}}>
                <div style={{width: '350px', border: '1px solid red', height: window.innerHeight - 74}}>ads</div>

                <div style={{width: '100%', margin: '0 1em'}}>
                    <Categories/>
                    <HomeProducts/>
                </div>

                <div style={{width: '350px', border: '1px solid red', height: window.innerHeight - 74}}>ads</div>
            </div>
        </>
    );
}

export default App;
