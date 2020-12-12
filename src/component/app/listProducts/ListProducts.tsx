import styles from './ListProducts.module.scss';
import {Component} from "react";
import React from 'react';
import Product from "./product/Product";
import ProductType from "../../../values/types";
import axios, {CancelTokenSource} from "axios";
import {connect} from "react-redux";

class ListProducts extends Component<any, any> {
    state: { products?: [], source?: CancelTokenSource } = {};
    private source: any;

    componentDidMount() {
        this.getProducts();
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.match.url !== prevProps.match.url || this.props.location.search !== prevProps.location.search) {
            this.getProducts();
        }
    }

    render() {
        return (
            !this.state.products || this.state.products.length === 0 ?
                <div className={styles.noProduct}>
                    <p>&#9785;</p>
                    <h4>No Product</h4>
                    <h3>Found</h3>
                </div>
                :
                <div className={styles.container}>
                    {
                        (this.state.products || []).map(
                            (product: ProductType) => <Product data={product} key={product.id}/>)
                    }
                </div>
        );
    }

    private getProducts() {
        this.props.add_async_action();
        const category_id = this.props?.match?.params?.category_id;
        // home -> get products by popularity
        // otherwise -> get products by url_params.category_id
        const url = '/api/products/' + (category_id ? '?category_id=' + category_id : '');
        let filter = {};
        let search = this.props.location?.search;
        if (search?.startsWith('?filter=')) {
            filter = JSON.parse(decodeURI(search?.substring(8)));
            console.log(filter);
        }

        // cancel old request.
        this.source?.cancel();
        this.source = axios.CancelToken.source();
        axios.get(url, {params: filter, cancelToken: this.source?.token}).then(res => {
            this.setState({products: res.data.results});
            this.props.sub_async_action();
        }).catch(this.props.sub_async_action);
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => any) => {
    return {
        add_async_action: () => dispatch({type: 'ADD_ASYNC_ACTION'}),
        sub_async_action: () => dispatch({type: 'SUB_ASYNC_ACTION'}),
    }
}

export default connect(null, mapDispatchToProps)(ListProducts);