import React from "react";
import {Checkbox} from "@material-ui/core";
import css from './choices.module.scss';
import {withRouter} from "react-router";
import {connect} from "react-redux";

class Choices extends React.Component<any, any> {
    state: {items: string[]} = {
        items: []
    }
    render() {
        return (
            <div className={css.container}>
                <h4>{this.props.data.name}</h4>
                <div className={css.checkboxContainer}>
                    {
                        this.props.data.values.map((v: string) => <div key={v}>
                            <Checkbox size='small' checked={!!this.props.activeFilter[this.props.data.name]?.includes(v)}
                                      onChange={(event) => this.onCheckboxToggle(v)}/>
                            <h5>{v}</h5>
                        </div>)
                    }
                </div>
            </div>
        );
    }

    private onCheckboxToggle(choice: string) {
        let filter = {...this.props.activeFilter};
        let items = filter[this.props.data.name];
        if (items !== undefined) {
            if (filter[this.props.data.name].includes(choice)) {
                filter[this.props.data.name] = items.filter((o: string) => choice !== o);
                if (filter[this.props.data.name].length === 0) delete filter[this.props.data.name];
            }
            else items.push(choice);
        } else {
            filter[this.props.data.name] = [choice];
        }
        this.props.update_filter(filter);
        this.props.history.push({search: '?filter=' + JSON.stringify(filter)})
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
export default connect(mapStateToProp, mapDispatchToProps)(withRouter(Choices));