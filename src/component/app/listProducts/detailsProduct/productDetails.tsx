import styles from './productDetails.module.scss';
import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import ProductType from "../../../../values/types";
import {NavLink} from "react-router-dom";
import {Button} from "@material-ui/core";
import RecordedPricesChart from "./Chart/RecordedPricesChart";
import css from '../product/product.module.scss'

class ProductDetails extends React.Component<any, any> {
    state: {
        product: ProductType | undefined;
        series: [] | undefined;
    } = {
        product: undefined,
        series: undefined,
    };

    componentDidMount() {
        this.getProduct();
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.match.url !== prevProps.match.url) {
            this.getProduct();
        }
    }

    render() {
        return (<div style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <NavLink to={'/product/details/' + (Math.floor(Math.random() * 180 + 1))} className={styles.randomProduct}>
                <Button variant={"outlined"}>Take Me To A Random Product</Button>
            </NavLink>
            <div className={styles.container}>
                <div className={styles.productContainer}>
                    <div className={styles.dataSheetContainer}>
                        <h4>Data Sheet</h4>
                        <div className={'shadow'}>
                            <ul>
                                {
                                    this.getCharacteristics()
                                }
                            </ul>
                        </div>
                    </div>

                    <div className={['shadow', styles.imageContainer].join(' ')}>
                        <img src={this.state.product?.image_url}/>
                    </div>
                </div>
                <div className={styles.details}>
                    <h4>Recorded Prices</h4>
                    {this.state?.series ? <RecordedPricesChart series={this.state.series}/> : null}
                    <h4>Vendors</h4>
                    {this.state.product?.details.map(detail =>
                        <div className={['shadow', styles.vendor].join(' ')}>
                            <img src={detail.vendor.logo_url}/>
                            <div>{detail.warranty} of warranty</div>
                            <div>{this.productState(detail.inventory_state)}</div>
                            <div className={css.price}>{detail.unit_price} TND</div>
                        </div>
                    )}
                    <div className={styles.dataSheetContainer}>
                        <h4>Data Sheet</h4>
                        <div className={'shadow'}>
                            <ul>
                                {
                                    this.getCharacteristics()
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }

    private getProduct() {
        this.props.add_async_action();
        const product_id = this.props?.match?.params?.product_id;
        const url = '/api/products/' + product_id;
        axios.get(url).then(res => {
            this.setState({
                product: res.data,
                series: res.data?.details.map((detail: any) => {
                    return {data: detail.min_registered_prices.data, name: detail.vendor.name}
                })
            });
            this.props.sub_async_action();
        }).catch(this.props.sub_async_action);
    }

    private getCharacteristics() {
        const ans = [];
        if (this.state?.product?.characteristics !== undefined)
            for (let key of Object.keys(this.state.product?.characteristics)) {
                ans.push(
                    <li key={key}>
                        <h4>{key}</h4><p>:{this.state.product?.characteristics[key]}</p>
                    </li>
                )
            }
        return ans;
    }

    productState(state: string) {
        switch (state) {
            case'IS':
                return 'In stock';
            case    'OOS':
                return 'Out of stock';
            case    'IT':
                return 'In transit';
            case    'OC':
                return 'On command';
        }
        return '';
    }
}


const mapDispatchToProps = (dispatch: (arg0: any) => any) => {
    return {
        add_async_action: () => dispatch({type: 'ADD_ASYNC_ACTION'}),
        sub_async_action: () => dispatch({type: 'SUB_ASYNC_ACTION'}),
    }
}

export default connect(null, mapDispatchToProps)(ProductDetails);