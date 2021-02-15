import React, {Component} from 'react';
import styles from './features.module.scss';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import notification from "../../../../assets/images/icons8-notification-96.png";
import price_track from "../../../../assets/images/icons8-price-96.png";
import filter from "../../../../assets/images/icons8-filter-96.png";
import add from "../../../../assets/images/icons8-add-new-96.png";
import app from "../../../../assets/images/app.png";


class Features extends Component<any, any> {
    state = {}

    render() {
        return <div className={styles.container}>
            <img src={app} alt=""/>
            <div className={styles.header}>
                <h2>Features</h2>
                <div className={styles.line}/>
                <h3>Learn more about the offered features</h3>
            </div>
            <div className={styles.optionsContainer}>
                <div className={styles.option}>
                    <img src={notification} alt=""/>
                    <div>
                        <h3>Notification</h3>
                        <p>Be notified and informed about product updates.</p>
                    </div>
                </div>
                <div className={styles.option}>
                    <img src={price_track} alt=""/>
                    <div>
                        <h3>Price Tracking</h3>
                        <p>Track price variation.</p>
                    </div>
                </div>
                <div className={styles.option}>
                    <img src={filter} alt=""/>
                    <div>
                        <h3>Advanced Filters && Comparators</h3>
                        <p>Choose wiser with advanced settings.</p>
                    </div>
                </div>
                <div className={styles.option}>
                    <img src={add} alt=""/>
                    <div>
                        <h3>And More...</h3>
                        <p>Creativity is as boundless and limitless as the sky.</p>
                    </div>
                </div>
            </div>
        </div>;
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
export default connect(mapStateToProp, mapDispatchToProps)(withRouter(Features));