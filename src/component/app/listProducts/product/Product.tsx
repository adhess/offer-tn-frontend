import React from 'react';
import styles from './product.module.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
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
            <NavLink to='/product/details/1'  className={['shadow', styles.item].join(' ')} style={{textDecoration: "none"}}>
                    <img src={this.state.data.one_image.src} width='230px' height='230px' className={styles.image}/>
                    <h4 className={styles.productName}>{this.state.data.name}</h4>
                    <div className='row'>
                        <h4 className={styles.price}>
                            {Math.min(...this.state.data.details.map(detail => detail.unit_price), Infinity)} TND
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