import React, {Component} from 'react';
import styles from './filter.module.scss';
import Choices from "./choices/choices";
import {connect} from "react-redux";
import {withRouter} from "react-router";

class Filter extends Component<any, any> {
    state = {
        characteristics: [
            {
                name: 'RAM',
                type: 'checkbox',
                values: [
                    '4Gb',
                    '8Gb',
                    '12Gb',
                    '16Gb',
                    '32Gb',
                ]
            }, {
                name: 'Processor Type',
                type: 'checkbox',
                values: [
                    'AMD',
                    'Intel',
                ]
            }, {
                name: 'Processor Gen',
                type: 'checkbox',
                values: [
                    '2th',
                    '3th',
                    '4th',
                    '10th'
                ]
            }, {
                name: 'Processor F',
                type: 'checkbox',
                values: [
                    'AMD',
                    'Intel',
                ]
            }

        ]
    }

    render() {
        return <div className={[styles.container, 'shadow'].join(' ')}>
            {
                this.state.characteristics.map(choices => <Choices key={JSON.stringify(choices)} data={choices}/>)
            }
        </div>;
    }


    componentDidMount() {
        let search = this.props.location?.search;
        if (Object.keys(this.props.activeFilter).length === 0 && search?.startsWith('?filter=')) {
            const newFilter = JSON.parse(decodeURI(search?.substring(8)));
            this.props.update_filter(newFilter);
        }
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        update_filter: (newFilter: any) => dispatch({type: 'UPDATE_FILTER', newFilter: newFilter}),
    }
}

const mapStateToProp = (state: any) => {
    return {
        activeFilter: state.activeFilter
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(withRouter(Filter));