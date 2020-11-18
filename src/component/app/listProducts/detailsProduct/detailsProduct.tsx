import styles from './detailsProduct.module.css';
import React from "react";

class DetailsProduct extends React.Component<any, any> {

    render() {
        return (<div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <div style={{width: '45%'}}>detailsProduct !! </div>
                <div style={{width: '45%'}}>detailsProduct !! </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <div style={{width: '45%'}}>detailsProduct !! </div>
                <div style={{width: '45%'}}>detailsProduct !! </div>
            </div>
        </div>);
    }
}

export default DetailsProduct;