import styles from './adds.module.css';
import {Component} from "react";
import React from 'react';

class Adds extends Component<any, any> {

    render() {
        return (
            <div className={[styles.container, 'shadow'].join(' ')}>
                <p>&#9785;</p>
                <p>Please disable your ad blocker.</p>
                <p>Keep us alive.</p>
                <p>We appreciate your cooperation.</p>
            </div>
        );
    }
}

export default Adds;