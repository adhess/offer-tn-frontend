import styles from './productDetails.module.scss';
import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import ProductType from "../../../../values/types";
import RecordedPricesChart from "./Chart/RecordedPricesChart";
import css from '../product/product.module.scss'

class ProductDetails extends React.Component<any, any> {
    state: {
        product?: ProductType;
        series: [];
    } = {
        product: undefined,
        series: [],
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
            <div className={styles.container}>
                <div className={styles.productContainer}>
                    <h4>{this.state.product?.name}</h4>
                    <div className={['shadow', styles.imageContainer].join(' ')}>
                        <img src={this.state.product?.image_url} alt=''/>
                    </div>
                </div>
                <div className={styles.details}>
                    <h4>Data Sheet</h4>
                    <div className={['shadow', styles.dataSheetContainer].join(' ')}>
                        <ul>
                            {
                                this.getCharacteristics()
                            }
                        </ul>
                    </div>

                    <h4>Recorded Prices</h4>
                    {this.state?.series?.length > 0 ? <RecordedPricesChart series={this.state.series}/> : null}
                    <h4>Vendors</h4>
                    {this.state.product?.details.map(detail =>
                        <div className={['shadow', styles.vendor].join(' ')}
                             onClick={() => window.open(detail.url, "_blank")}>
                            <img src={detail.vendor.logo_url} alt=''/>
                            <div>{detail.warranty} of warranty</div>
                            <div>{this.productState(detail.inventory_state)}</div>
                            <h4 className={css.price}>{detail.unit_price} TND</h4>
                        </div>
                    )}
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
                series: res.data?.details.map(
                    (detail: any) => ({data: detail.registered_prices.data, name: detail.vendor.name})
                )
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