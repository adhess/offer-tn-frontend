import styles from './categories.module.scss';
import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import axios from 'axios';
import {Collapse} from "@material-ui/core";
import {withSnackbar} from 'notistack';
import Tooltip from "@material-ui/core/Tooltip";
import Ultrabook from "../../../assets/images/Ultrabook.png"
import macbook from "../../../assets/images/macbook.png"
import gamingLaptop from "../../../assets/images/gamingLaptop.png"
import laptop from "../../../assets/images/laptop.png"

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

    icons: any = {
        'Ultrabook': Ultrabook,
        'Macbook': macbook,
        'Gaming laptop': gamingLaptop,
        // 'View All': viewAll,
        'Regular laptop': laptop,
    }

    render() {
        let categoryComponent = (icon: string, name: string, isActive: boolean) => {
                return (
                    <>
                        <Tooltip title={name}>
                            <div className={styles.category}>
                                {
                                    this.icons[name] ?
                                        <img className={isActive ? styles.isActive : undefined} src={this.icons[name]}
                                             alt=""/> :
                                        <i className={[icon, isActive ? styles.isActive : undefined].join(" ")}/>
                                }
                            </div>
                        </Tooltip>
                    </>
                )
            }

        ;
        return (
            <Collapse in={this.props.is_show_category} className={styles.collapse}>
                <div className={styles.paper}>
                    <div className={styles.container}>
                        {
                            this.state.stepCategories.length > 1 ?
                                <div className={styles.categoryContainer}
                                     onClick={() => this.setState((state: any) =>
                                         ({stepCategories: [...state.stepCategories].slice(0, state.stepCategories.length - 1)}))}>
                                    {categoryComponent('fas fa-arrow-left', 'Go Back', true)}
                                </div>
                                : null
                        }
                        {
                            this.state.stepCategories[this.state.stepCategories.length - 1].map((category: any) => (
                                category?.children?.length > 0 ?
                                    <div className={styles.categoryContainer}
                                         key={category.name}
                                         onClick={(e) => this.onSelectCategory(category.name, category.isActive, e)}>
                                        {categoryComponent(category.icon, category.name, category.isActive)}
                                    </div> :
                                    <NavLink to={'/product/list/' + category.name + '/' + category.id}
                                             className={styles.categoryContainer}
                                             key={category.name}
                                             onClick={(e) => {
                                                 this.onSelectCategory(category.name, category.isActive, e);
                                                 // this.props.update_filter({checkbox_choices:[], price_range: []});
                                             }}>
                                        {categoryComponent(category.icon, category.name, category.isActive)}
                                    </NavLink>
                            ))
                        }
                        {
                            this.state.stepCategories.length > 1 ?
                                <NavLink
                                    to={'/product/list/' + this.state.selectedCategory?.name + '/' + this.state.selectedCategory?.id}
                                    className={styles.categoryContainer}
                                    key={'View All'}>
                                    {categoryComponent('fas fa-globe', 'View All', true)}
                                </NavLink>
                                : null
                        }

                    </div>
                </div>
            </Collapse>
        );
    }


    private onSelectCategory(name: any, isActive: boolean, e: any) {
        if (isActive) {
            const selectedCategory: any = this.state.stepCategories[this.state.stepCategories.length - 1]
                .find((category: any) => category.name === name);
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
                this.props.toggle_is_show_categories();
            }
        } else {
            e.preventDefault();
            // variant could be success, error, warning, info, or default
            this.props.enqueueSnackbar('Not implemented yet!', {variant: 'info'});
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

export default connect(mapStateToProp, mapDispatchToProps)(withSnackbar(Categories));