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

                <div style={{width: 'calc(100% - 390px)', margin: '0 1em'}}>
                    <Categories/>
                    <HomeProducts/>
                </div>

                <div style={{
                    top: '70px',
                    right: '0',
                    width: '350px',
                    border: '2px solid #EEE',
                    borderRadius: '4px',
                    height: window.innerHeight - 74,
                    textAlign: 'center',
                    position: 'fixed',
                    fontSize: '70px',
                    color: '#888',
                    background: '#EEE'
                }}>&#9785;</div>
            </div>
        </>
    );
}

export default App;
