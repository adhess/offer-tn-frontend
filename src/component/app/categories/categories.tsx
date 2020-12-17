import styles from './categories.module.scss';
import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import axios from 'axios';
import {Collapse} from "@material-ui/core";
import left_corner from '../../../assets/images/left_corner.svg'
import right_corner from '../../../assets/images/right_corner.svg'
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
        const left_margin = (window.innerWidth - (
            this.state.stepCategories[this.state.stepCategories.length - 1].length
            + (this.state.stepCategories.length > 1 ? 2 : 0)
        ) * 100 - 70) / 2;
        return (
            <Collapse in={this.props.is_show_category} className={styles.collapse}
                      style={{
                          left: left_margin > 0 ? left_margin:0,
                      }}
            >
                <div className={styles.paper}>
                    {left_margin > 0 ? <img src={left_corner} width={35} height={35} alt=""/> : null}
                    <div style={{
                        flexDirection: left_margin > 0 ? 'row':'column',
                        width: left_margin > 0 ? undefined:200,
                        flexFlow: left_margin > 0 ? undefined:'wrap',
                        borderBottomLeftRadius: left_margin > 0 ? 25:0,
                    }}
                         className={styles.container}>
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

                    </div>
                    <img src={right_corner} width={35} height={35} alt=""/>
                </div>
            </Collapse>
        );
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