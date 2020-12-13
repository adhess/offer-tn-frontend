import React, {Component} from 'react';
import styles from './filter.module.scss';
import Specs from "./choices/choices";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import axios from "axios";
import Price from "./price/price";
import {Button} from "@material-ui/core";

class Filter extends Component<any, any> {
    state = {specs: [], price_range: [0, 0], selected_price_range: undefined,}

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
                this.state.specs.map((choices: any) =>
                    <Specs key={choices.name}
                           data={choices}
                           checkedValues={this.props.activeFilter.checked_specs[choices.name] || []}
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
            checked_specs: [],
            price_range: []
        };
        let search = this.props.location?.search;
        if (search?.startsWith('?filter=')) {
            filter = JSON.parse(decodeURI(search?.substring(8)));
        }
        this.props.update_filter(filter);
        axios.get(url, {params: filter}).then(res => {
            this.setState({
                specs: res.data.specs,
                price_range: res.data.price_range,
                selected_price_range: filter['price_range'].length > 0 ? filter.price_range : res.data.price_range
            });
            this.props.sub_async_action();
        }).catch(this.props.sub_async_action);
    }

    private onSpecSelected(specName: string, choiceName: string) {
        console.log('this.props', this.props);
        let checked_specs = {...this.props.activeFilter.checked_specs};
        let items = [];
        if (checked_specs[specName] !== undefined) {
            items.push(...checked_specs[specName]);
            if (items.includes(choiceName)) {
                items = items.filter((selectedOptionName: string) => choiceName !== selectedOptionName);
            } else items.push(choiceName);
        } else {
            items.push(choiceName);
        }
        if (items.length > 0) checked_specs[specName] = items;
        else delete checked_specs[specName];

        let filter = {checked_specs: checked_specs, price_range: this.state.selected_price_range};
        this.props.history.push({search: '?filter=' + JSON.stringify(filter)})
    }
    private onUpdatePriceRange(price_range: number[]) {
        let newFilter = {checked_specs: this.props.activeFilter.checked_specs, price_range: price_range};
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