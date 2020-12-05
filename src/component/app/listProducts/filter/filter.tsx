import React, {Component} from 'react';
import styles from './filter.module.scss';
import Property from "./property/property";

class Filter extends Component {
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
                this.state.characteristics.map(property => <Property data={property}/>)
            }
        </div>;
    }
}

export default Filter;