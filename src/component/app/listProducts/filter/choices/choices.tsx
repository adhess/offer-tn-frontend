import React from "react";
import {Checkbox} from "@material-ui/core";
import css from './choices.module.scss';
import {withRouter} from "react-router";
import {connect} from "react-redux";

class Choices extends React.Component<any, any> {
    state: { items: string[] } = {
        items: []
    }
    render() {
        return (
            <div className={css.container}>
                <h4>{this.props.data.name}</h4>
                <div className={css.checkboxContainer}>
                    {
                        this.props.data.values
                            .sort((a: { name: string, count: number },
                                   b: { name: string, count: number }) => a.name.length === b.name.length ?
                                a.name.localeCompare(b.name) : a.name.length - b.name.length)
                            .map((v: { name: string, count: number }) => <div key={v.name}>
                                <Checkbox size='small'
                                          checked={this.props.activeFilter.checkbox_choices[this.props.data.name]?.includes(v.name)}
                                          onChange={(event) => this.onCheckboxToggle(v.name)}/>
                                <h5>{v.name} ({v.count})</h5>
                            </div>)
                    }
                </div>
            </div>
        );
    }

    private onCheckboxToggle(choice: string) {
        let checkbox_choices = {...this.props.activeFilter.checkbox_choices};
        let items = checkbox_choices[this.props.data.name];
        if (items !== undefined) {
            if (checkbox_choices[this.props.data.name].includes(choice)) {
                checkbox_choices[this.props.data.name] = items.filter((o: string) => choice !== o);
                if (checkbox_choices[this.props.data.name].length === 0) delete checkbox_choices[this.props.data.name];
            } else items.push(choice);
        } else {
            checkbox_choices[this.props.data.name] = [choice];
        }
        let newFilter = {checkbox_choices: checkbox_choices, price_range: this.props.selected_price_range};
        this.props.update_filter(newFilter);
        this.props.history.push({search: '?filter=' + JSON.stringify(newFilter)})
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