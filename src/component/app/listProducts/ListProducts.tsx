import styles from './ListProducts.module.scss';
import {Component} from "react";
import React from 'react';
import Product from "./product/Product";
import axios, {CancelTokenSource} from "axios";
import {connect} from "react-redux";
import OrderProducts from "./orderProducts/orderProducts";
import InfiniteScroll from 'react-infinite-scroller';

class ListProducts extends Component<any, any> {
    state: {
        products?: [],
        source?: CancelTokenSource,
        hasMoreData?: undefined,
        orderBy: 'Newest' | 'Price' | 'Popularity' | 'Name',
        isAscending: boolean
    } = {
        orderBy: 'Newest',
        isAscending: true
    };
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
                <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                    <OrderProducts
                        isAscending={this.state.isAscending}
                        orderBy={this.state.orderBy}
                        onOrderByChange={this.onOrderByChange.bind(this)}
                        onToggleIsAscending={this.onToggleIsAscending.bind(this)}/>
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={this.loadMoreData}
                        hasMore={this.state.hasMoreData}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                    >
                        <div className={styles.container}>
                            {
                                (this.state.products || []).map(
                                    (product: ProductType, index: number) => <Product data={product} key={index}/>)
                            }
                        </div>
                    </InfiniteScroll>

                </div>

        );
    }

    private onOrderByChange(name: string) {
        if (name && name !== this.state.orderBy) {
            this.setState({orderBy: name, isAscending: name !== 'Popularity'}, () => this.getProducts())
        }
    }

    private onToggleIsAscending() {
        this.setState((state: { isAscending: boolean }) => ({isAscending: !state.isAscending}), () => this.getProducts())
    }

    private getProducts() {
        this.props.add_async_action();
        const category_id = this.props?.match?.params?.category_id;
        const url = this.getUrl(category_id);
        let filter = this.getFilter();

        // cancel old request.
        this.source?.cancel();
        this.source = axios.CancelToken.source();
        axios.get(url, {params: filter, cancelToken: this.source?.token}).then(res => {
            this.setState({products: undefined}, () => this.setState({
                products: res.data.results,
                hasMoreData: res.data.next !== null
            }));
            this.props.sub_async_action();
        }).catch(this.props.sub_async_action);
    }

    private getUrl(category_id: string | number) {
        let url = '/api/products/' + (category_id ? '?category_id=' + category_id : '');
        const desc = this.state.isAscending ? '' : '-';
        switch (this.state.orderBy) {
            case 'Newest':
                break;
            case 'Price':
                url += '&ordering=' + desc + 'minimum_price';
                break;
            case 'Popularity':
                url += '&ordering=' + desc + 'popularity';
                break;
            case 'Name':
                url += '&ordering=' + desc + 'name';
                break;
        }
        return url;
    }

    loadMoreData = (e: any) => {
        this.props.add_async_action();
        const category_id = this.props?.match?.params?.category_id;
        const url = this.getUrl(category_id) + '&page=' + e;
        let filter = this.getFilter();

        // cancel old request.
        this.source?.cancel();
        this.source = axios.CancelToken.source();
        axios.get(url, {params: filter, cancelToken: this.source?.token}).then(res => {
            this.setState((state: { products: any; }) => ({
                products: [...state.products, ...res.data.results],
                hasMoreData: res.data.next !== null
            }));
            this.props.sub_async_action();
        }).catch(this.props.sub_async_action);
    }

    private getFilter() {
        let filter = {};
        let search = this.props.location?.search;
        if (search?.startsWith('?filter=')) {
            filter = JSON.parse(decodeURI(search?.substring(8)));
        }
        return filter;
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => any) => {
    return {
        add_async_action: () => dispatch({type: 'ADD_ASYNC_ACTION'}),
        sub_async_action: () => dispatch({type: 'SUB_ASYNC_ACTION'}),
    }
}

export default connect(null, mapDispatchToProps)(ListProducts);