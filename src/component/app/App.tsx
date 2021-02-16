import React from 'react';
import './App.css';
import Nav from "./nav/Nav";
import Categories from "./categories/categories";
import ListProducts from "./listProducts/ListProducts";
import {BrowserRouter, Route} from 'react-router-dom';
import DetailsProduct from "./listProducts/productDetails/productDetails";
import Filter from "./listProducts/filter/filter";
import {SnackbarProvider} from 'notistack';
import Home from "./home/home";


class App extends React.Component {
    render() {
        return (
            <SnackbarProvider maxSnack={3}>
                <BrowserRouter>
                    <Nav/>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'start'}}>
                        <div className='app-container'>
                            <Categories/>
                            {/*<Adds/>*/}
                            <Route path={['/']} exact component={Home}/>
                            <Route path={['/product/list/:category/:category_id', '/product/details/:product_id']} exact
                                   children={<div>
                                       <div style={{marginTop: '75px', width: '100%'}}>
                                           <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                                               <Route path={['/product/list/:category/:category_id']} exact
                                                      component={Filter}/>
                                               <Route path={['/product/list/:category/:category_id']} exact
                                                      component={ListProducts}/>
                                           </div>
                                           <Route path='/product/details/:product_id' exact component={DetailsProduct}/>
                                       </div>
                                   </div>}/>


                        </div>
                    </div>
                </BrowserRouter>
            </SnackbarProvider>
        );
    }
}

export default App;
