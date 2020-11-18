import styles from './categories.module.css';
import React, {Component} from 'react';
import {Collapse, Button} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import axios from 'axios';

class Categories extends Component<any, any> {
    state = {checked: false, selectedCategory: '', dataCategories: []};
    subCategory: any;


    componentDidMount() {
        this.props.add_async_action();
        axios.get('/api/categories').then((res: any) => {
            this.setState({dataCategories: res.data.results});
            this.props.sub_async_action();
        });
    }

    render() {
        const checked = this.state.checked;
        const categories = (
            this.state.dataCategories?.map((category: any) => (
                <Button variant='contained'
                        key={category.name}
                        style={{
                            fontWeight: 600,
                            margin: '5px',
                            background: this.state.selectedCategory === category.name ? "#0d8dc7" : "#e8eaf6",
                            color: this.state.selectedCategory === category.name ? "#ffffff" : '#383737',
                        }}
                        onClick={() => this.selectCategory(category.name)}
                >{category.name}</Button>
            ))
        );
        return (
            <div style={{width: '100%', marginTop: '96px'}}>

                <div className={styles.categoriesContainer}>
                    {categories}
                </div>
                <Collapse className='shadow' in={checked}>
                    <div className={styles.collapseContainer}>
                        {
                            this.subCategory
                        }
                    </div>

                </Collapse>
            </div>);
    }

    selectCategory(name: string) {
        const find: any = this.state.dataCategories.find((o: any) => o.name === name);
        this.subCategory = find?.children?.map(
            (elt: any) =>
                <div key={'div' + elt.name} className={styles.subCategory}>
                    <h4>
                        <NavLink
                            to={'/product/list/' + elt.name + '/' + elt.id}
                            className={[styles.pointer,].join(' ')}
                            style={{textDecoration: undefined, color: "white"}}
                        >{elt.name}</NavLink>
                    </h4>
                    {this.getSubSubCategory(elt)}
                </div>
        );

        this.setState((state: any) => ({
            checked: !(state.checked === true && state.selectedCategory === name),
            selectedCategory: (state.checked === true && state.selectedCategory === name) ? '' : name,
        }));
    }

    private getSubSubCategory(elt: any) {
        return <ul style={{marginLeft: '-20px', marginTop: '-20px'}}>
            {
                elt.children?.map((e: any) => <li className={styles.pointer} key={'li' + e.name}
                                                  onClick={() => this.props.setSelectedCategory(e.id)}>{e.name}</li>)
            }
        </ul>;
    }

}

const mapDispatchToProps = (dispatch: (arg0: any) => any) => {
    return {
        add_async_action: () => dispatch({type: 'ADD_ASYNC_ACTION'}),
        sub_async_action: () => dispatch({type: 'SUB_ASYNC_ACTION'}),
    }
}

export default connect(null, mapDispatchToProps)(Categories);