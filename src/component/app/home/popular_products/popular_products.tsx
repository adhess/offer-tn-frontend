import React, {Component} from 'react';
import styles from './popular_products.module.scss';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import axios from "axios";
import Product from "../../listProducts/product/Product";

class Popular_products extends Component<any, any> {
    state = {products: []}
    componentDidMount() {
        this.getProducts();
    }

    render() {
        return <div className={styles.container}>
            <div className={styles.header}>
                <h2>Popular products</h2>
                <div className={styles.line}/>
                <h3>Checkout the most popular products</h3>
            </div>

            <div className={styles.products}>
                {
                    this.state.products?.slice(0, 2 * Math.floor((window.innerWidth - 32-16) / 276)).map((p: any, index: number) =>
                        <Product data={p}/>
                    )
                }
            </div>

        </div>;
    }

    private getProducts() {
        this.props.add_async_action();
        this.setState({isLoadingProducts: true});

        const url = "/api/get_popular_products_landing_page/";

        // cancel old request.
        axios.get(url).then(res => {
            this.setState({products: undefined}, () => this.setState({
                products: res.data.results,
                isLoadingProducts: false
            }));
            console.log(res.data.results);
            this.props.sub_async_action();
        }).catch(this.props.sub_async_action);
    }

}

const mapDispatchToProps = (dispatch: any) => {
    return {
        add_async_action: () => dispatch({type: 'ADD_ASYNC_ACTION'}),
        sub_async_action: () => dispatch({type: 'SUB_ASYNC_ACTION'}),
        update_filter: (newFilter: any) => dispatch({type: 'UPDATE_FILTER', newFilter: newFilter}),
    }
}

const mapStateToProp = (state: any) => {
    return {
        activeFilter: state.activeFilter
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(withRouter(Popular_products));