import React, {Component} from 'react';
import styles from './filter.module.scss';
import Choices from "./choices/choices";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import axios from "axios";
import Price from "./price/price";

class Filter extends Component<any, any> {
    state = {checkbox_choices: [], price_range: [0, 0], selected_price_range: undefined,}

    render() {
        const onUpdatePriceRange = (price_range: number[]) => {
            let newFilter = {checkbox_choices: this.props.activeFilter.checkbox_choices, price_range: price_range};
            this.props.update_filter(newFilter);
            this.props.history.push({search: '?filter=' + JSON.stringify(newFilter)});
            this.setState({selected_price_range: price_range});
        }
        return <div className={[styles.container, 'shadow'].join(' ')}>
            <h3>Filter By:</h3>
            {
                !this.state.selected_price_range ? null:
                <Price onUpdatePriceRange={onUpdatePriceRange}
                       price_range={this.state.price_range}
                       selected_price_range={this.state.selected_price_range}
                />
            }
            {
                this.state.checkbox_choices.map(choices =>
                    <Choices key={JSON.stringify(choices)}
                             data={choices}
                             selected_price_range={this.state.selected_price_range}/>
                )
            }
        </div>;
    }


    componentDidMount() {
        let search = this.props.location?.search;
        if (search?.startsWith('?filter=')) {
            const newFilter = JSON.parse(decodeURI(search?.substring(8)));
            this.props.update_filter(newFilter);
        }
        this.getFilters(true);
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.match.url !== prevProps.match.url || this.props.location.search !== prevProps.location.search) {
            this.getFilters(false);
        }
    }

    private getFilters(isComponentDidMount: boolean) {
        this.props.add_async_action();
        const category_id = this.props?.match?.params?.category_id;
        // home -> get products by popularity
        // otherwise -> get products by url_params.category_id
        const url = '/api/getFilterByCategory/' + (category_id ? '?category_id=' + category_id : '');
        let filter: {
            checkbox_choices?: [],
            price_range?: []
        } = {};
        let search = this.props.location?.search;
        if (search?.startsWith('?filter=')) {
            filter = JSON.parse(decodeURI(search?.substring(8)));
            console.log(filter);
        }
        axios.get(url, {params: filter}).then(res => {
            console.log(res);
            this.setState({
                checkbox_choices: res.data.checkbox_choices,
                price_range: res.data.price_range,
            });
            if (isComponentDidMount)
                this.setState({selected_price_range: filter['price_range'] ? filter.price_range : res.data.price_range});
            let newFilter = {
                checkbox_choices: this.props.activeFilter.checkbox_choices,
                price_range: res.data.price_range
            };
            this.props.update_filter(newFilter);

            this.props.sub_async_action();
        }).catch(this.props.sub_async_action);
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