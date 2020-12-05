import React from "react";
import {Checkbox} from "@material-ui/core";
import css from './property.module.scss';

export default class Property extends React.Component<any, any> {

    render() {
        let property = null;
        switch (this.props.data.type) {
            case 'checkbox':
                property = <div className={css.checkboxContainer}>
                    {
                        this.props.data.values.map((v: String) => <div><Checkbox size="small"/><h5>{v}</h5></div>)
                    }
                </div>
                break;
            case 'slider':

                break;
        }
        return (
            <div className={css.container}>
                <h4>{this.props.data.name}</h4>
                {property}
            </div>
        );
    }
}