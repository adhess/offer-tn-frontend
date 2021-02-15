import React, {Component} from 'react';
import styles from './support.module.scss';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import facebook from '../../../../assets/images/icons8-facebook-96.png';
import twitter from '../../../../assets/images/icons8-twitter-96.png';
import gmail from '../../../../assets/images/icons8-gmail-96.png';
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

class Support extends Component<any, any> {
    state = {}

    render() {
        return <div className={styles.container}>

            <div className={styles.header}>
                <h2>Support</h2>
                <div className={styles.line}/>
                <h3>For more info and support contact us!</h3>
            </div>

            <div className={styles.form}>
                <TextField
                    label="Mail"
                    variant="outlined"
                    size="small"
                />

                <TextField
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={5}
                />

                <Button variant="outlined" color="secondary"
                        size="small" endIcon={<Icon>send</Icon>}>
                    Send
                </Button>
            </div>

            <h2 className={styles.logo}>offer<span>.tn</span></h2>

            <div className={styles.social_media}>
                <img src={facebook} alt=""/>
                <img src={twitter} alt=""/>
                <img src={gmail} alt=""/>
            </div>

            <div className={styles.copyRight}>
                <p>All rights reserved:</p>
                <p>© 2021 offer.tn</p>
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
export default connect(mapStateToProp, mapDispatchToProps)(withRouter(Support));