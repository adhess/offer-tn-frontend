import React from 'react';
import styles from './product.module.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ProductType from "../../../../values/types";
import {NavLink} from "react-router-dom";

interface IProductProps {
    data?: ProductType;
}

interface IProductState {
}


class Product extends React.Component<IProductProps, any> {
    state: { data: ProductType };

    constructor(props: any) {
        super(props);
        this.state = {
            data: props.data
        }
    }

    render() {
        return (
            <NavLink to={'/product/details/' + this.state.data.id} className={['shadow', styles.item].join(' ')}>
                <div className={styles.image_container}>
                    <img src={this.state.data.image_url} className={styles.image}/>
                </div>
                <h4 className={styles.productName}>{this.state.data.name}</h4>
                <div className='row'>
                    <h4 className={styles.price}>
                        {Math.min(...this.state.data.details.map(detail => detail.registered_prices.slice(-1)[0]), Infinity)} TND
                    </h4>
                    <h4 className={styles.popularity}>
                        <FavoriteBorderIcon className={styles.favorite}/>
                        <p style={{margin: '2px'}}>{this.state.data.popularity}</p>
                    </h4>
                </div>
            </NavLink>
        )
    }
}

export default Product;