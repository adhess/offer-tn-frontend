import React, {Component} from 'react';
import styles from './filter.module.scss';
import Choices from "./choices/choices";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import axios from "axios";
import Price from "./price/price";
import {Button} from "@material-ui/core";

class Filter extends Component<any, any> {
    state = {checkbox_choices: [], price_range: [0, 0], selected_price_range: undefined,}

    render() {
        return <div className={[styles.container, 'shadow'].join(' ')}>
            <h3>Filter By:</h3>
            {
                this.props.location?.search === '' ? null :
                    <Button color="secondary"
                            variant="outlined"
                            onClick={() => {
                                this.props.history.push({search: ''});
                                this.setState((state: any) => ({selected_price_range: undefined}), () =>
                                    this.setState((state: any) => ({selected_price_range: this.state.price_range}))
                                );
                            }}
                    >Reset Filter</Button>
            }
            {
                !this.state.selected_price_range || this.state.price_range === [0,0] ? null :
                    <Price onUpdatePriceRange={this.onUpdatePriceRange.bind(this)}
                           price_range={this.state.price_range}
                           selected_price_range={this.state.selected_price_range}
                    />
            }
            {
                this.state.checkbox_choices.map((choices: any) =>
                    <Choices key={choices.name}
                             data={choices}
                             checkedValues={this.props.activeFilter.checkbox_choices[choices.name] || []}
                             onSpecSelected={this.onSpecSelected.bind(this)}/>
                )
            }
        </div>;
    }


    componentDidMount() {
        this.getFilters();
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.match.url !== prevProps.match.url
            || this.props.location.search !== prevProps.location.search) {
            this.getFilters();
        }
    }

    private getFilters() {
        this.props.add_async_action();
        const category_id = this.props?.match?.params?.category_id;
        const url = '/api/getFilterByCategory/' + (category_id ? '?category_id=' + category_id : '');
        let filter = {
            checkbox_choices: [],
            price_range: []
        };
        let search = this.props.location?.search;
        if (search?.startsWith('?filter=')) {
            filter = JSON.parse(decodeURI(search?.substring(8)));
        }
        this.props.update_filter(filter);
        axios.get(url, {params: filter}).then(res => {
            this.setState({
                checkbox_choices: res.data.checkbox_choices,
                price_range: res.data.price_range,
                selected_price_range: filter['price_range'].length > 0 ? filter.price_range : res.data.price_range
            });
            this.props.sub_async_action();
        }).catch(this.props.sub_async_action);
    }

    private onSpecSelected(specName: string, choiceName: string) {
        console.log('this.props', this.props);
        let checkbox_choices = {...this.props.activeFilter.checkbox_choices};
        let items = [];
        if (checkbox_choices[specName] !== undefined) {
            items.push(...checkbox_choices[specName]);
            if (items.includes(choiceName)) {
                items = items.filter((selectedOptionName: string) => choiceName !== selectedOptionName);
            } else items.push(choiceName);
        } else {
            items.push(choiceName);
        }
        if (items.length > 0) checkbox_choices[specName] = items;
        else delete checkbox_choices[specName];

        let filter = {checkbox_choices: checkbox_choices, price_range: this.state.selected_price_range};
        this.props.history.push({search: '?filter=' + JSON.stringify(filter)})
    }
    private onUpdatePriceRange(price_range: number[]) {
        let newFilter = {checkbox_choices: this.props.activeFilter.checkbox_choices, price_range: price_range};
        this.props.history.push({search: '?filter=' + JSON.stringify(newFilter)});
        this.setState({selected_price_range: price_range});
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
export default connect(mapStateToProp, mapDispatchToProps)(withRouter(Filter));