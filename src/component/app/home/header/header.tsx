import React, {Component} from 'react';
import styles from './header.module.scss';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import hero from '../../../../assets/images/hero.svg';
import header from '../../../../assets/images/header_landing_page.png';

class Header extends Component<any, any> {
    state = {}

    render() {
        return <div className={styles.container}>
            <img className={styles.headerImg} src={header} alt=""/>
            <div className={styles.center_section}>
                <div className={styles.description}>
                    <h2>Welcome to your trustful products comparator</h2>
                    <h4>Don't spend more than what you should</h4>
                </div>
                <img className={styles.heroImg} src={hero} alt=""/>
            </div>
        </div>;
    }

}

const mapDispatchToProps = (dispatch: any) => {
    return {
        add_async_action: () => dispatch({type: 'ADD_ASYNC_ACTION'}),
        sub_async_action: () => dispatch({type: 'SUB_ASYNC_ACTION'}),
    }
}

const mapStateToProp = (state: any) => {
    return {}
}
export default connect(mapStateToProp, mapDispatchToProps)(withRouter(Header));