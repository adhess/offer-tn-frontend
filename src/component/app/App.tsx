import React from 'react';
import './App.css';
import Nav from "./nav/Nav";
import Adds from "./adds/adds";
import Categories from "./categories/categories";
import ListProducts from "./listProducts/ListProducts";
import {BrowserRouter, Route} from 'react-router-dom';
import DetailsProduct from "./listProducts/detailsProduct/detailsProduct";


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Nav/>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'start'}}>
                    <div style={{width: '100%', margin: '0 1em'}}>
                        <Adds/>
                        <Categories/>
                        <Route path={['/product/list/:category/:category_id', '/']} exact component={ListProducts}/>
                        <Route path='/product/details/:product_id' exact component={DetailsProduct}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
