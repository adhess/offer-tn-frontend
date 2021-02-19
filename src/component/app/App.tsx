import React from 'react';
import './App.css';
import Nav from "./nav/Nav";
import Categories from "./categories/categories";
import ListProducts from "./listProducts/ListProducts";
import {BrowserRouter, Route} from 'react-router-dom';
import DetailsProduct from "./listProducts/productDetails/productDetails";
import {SnackbarProvider} from 'notistack';
import Home from "./home/home";
import {connect} from "react-redux";


class App extends React.Component<any, any> {

    componentDidMount() {
        if (window.innerWidth >= 660) {
            this.props.toggle_is_drawer_open();
        }
    }

    render() {

        return (
            <SnackbarProvider maxSnack={3}>
                <BrowserRouter>
                    <Nav/>
                    <div className='app-container'>
                        <Categories/>
                        {/*<Adds/>*/}
                        <Route path={['/']} exact component={Home}/>
                        <Route path={['/product/list/:category/:category_id', '/product/details/:product_id']} exact
                               children={
                                   <div style={{paddingTop: '75px', width: '100%'}}>
                                       <Route path={['/product/list/:category/:category_id']} exact
                                              component={ListProducts}/>
                                       <Route path='/product/details/:product_id' exact component={DetailsProduct}/>
                                   </div>
                               }/>
                    </div>
                </BrowserRouter>
            </SnackbarProvider>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        is_drawer_open: state.is_drawer_open
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        toggle_is_drawer_open: () => dispatch({type: 'TOGGLE_DRAWER'})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
