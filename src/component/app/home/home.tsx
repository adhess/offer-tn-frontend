import React, {Component} from 'react';
import styles from './home.module.scss';
import {connect} from "react-redux";
import {withRouter} from "react-router";

class Home extends Component<any, any> {
    state = {}

    render() {
        return <>home page</>;
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
export default connect(mapStateToProp, mapDispatchToProps)(withRouter(Home));