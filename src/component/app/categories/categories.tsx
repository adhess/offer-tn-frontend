import styles from './categories.module.css';
import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import axios from 'axios';

class Categories extends Component<any, any> {
    state = {
        selectedCategory: {
            name: '',
            icon: '',
            id: ''
        },
        stepCategories: [[]]
    };
    subCategory: any;


    componentDidMount() {
        this.props.add_async_action();
        axios.get('/api/categories').then((res: any) => {
            this.setState({stepCategories: [res.data.results]});
            this.props.sub_async_action();
        }).catch(this.props.sub_async_action);
    }

    render() {
        let categoryComponent = (icon: string, name: string) => <>
            <div className={styles.category}>
                <i className={icon}/>
            </div>
            <h4>{name}</h4>
        </>;
        return this.props.is_show_category ? <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexFlow: 'wrap',
            alignContent: 'center',
            justifyContent: 'center'
        }}>
            {
                    this.state.stepCategories.length > 1 ?
                        <div className={styles.categoryContainer}
                             onClick={() => this.setState((state: any) =>
                                 ({stepCategories: [...state.stepCategories].slice(0, state.stepCategories.length - 1)}))}>
                            {categoryComponent('fas fa-arrow-left', 'Return')}
                        </div>
                        : null
            }
            {
                this.state.stepCategories[this.state.stepCategories.length - 1].map((category: any) => (
                    category?.children?.length > 0 ?
                        <div className={styles.categoryContainer}
                             key={category.name}
                             onClick={() => this.onSelectCategory(category.name)}>
                            {categoryComponent(category.icon, category.name)}
                        </div> :
                        <NavLink to={'/product/list/' + category.name + '/' + category.id}
                                 className={styles.categoryContainer}
                                 key={category.name}
                                 onClick={() => {
                                     this.onSelectCategory(category.name);
                                     // this.props.update_filter({checkbox_choices:[], price_range: []});
                                 }}>
                            {categoryComponent(category.icon, category.name)}
                        </NavLink>
                ))
            }
            {
                this.state.stepCategories.length > 1 ?
                    <NavLink
                        to={'/product/list/' + this.state.selectedCategory?.name + '/' + this.state.selectedCategory?.id}
                        className={styles.categoryContainer}
                        key={'all'}>
                        {categoryComponent('fas fa-globe', 'All')}
                    </NavLink>
                    : null
            }

        </div>:null
    }


    private onSelectCategory(name: any) {
        console.log(this.state.stepCategories);
        const selectedCategory: any = this.state.stepCategories[this.state.stepCategories.length - 1]
            .find((category: any) => category.name === name);
        console.log(selectedCategory);
        if (selectedCategory !== undefined && selectedCategory?.children?.length > 0) {
            this.setState((state: any) =>
                ({
                    selectedCategory: selectedCategory,
                    stepCategories: [...state.stepCategories,
                        state.stepCategories[this.state.stepCategories.length - 1]
                            .find((category: any) => category.name === name).children
                    ]
                })
            );
            // this.props.toggle_is_show_categories();
        } else {
            // this.props.toggle_is_show_categories();
        }
    }
}

const mapStateToProp = (state: any) => {
    return {
        is_show_category: state.is_show_category
    }
}
const mapDispatchToProps = (dispatch: (arg0: any) => any) => {
    return {
        add_async_action: () => dispatch({type: 'ADD_ASYNC_ACTION'}),
        sub_async_action: () => dispatch({type: 'SUB_ASYNC_ACTION'}),
        toggle_is_show_categories: () => dispatch({type: 'TOGGLE_SHOW_CATEGORY'}),
        update_filter: (newFilter: any) => dispatch({type: 'UPDATE_FILTER', newFilter: newFilter}),
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(Categories);