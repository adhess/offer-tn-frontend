import React, {Component} from 'react';
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import LinearProgress from "@material-ui/core/LinearProgress";
import {connect} from "react-redux";
import {NavLink, Route} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import styles from "./nav.module.scss";
import {Button} from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ListIcon from '@material-ui/icons/List';
import open_filter from "../../../assets/images/open_filter.png";
import close_filter from "../../../assets/images/close_filter.png";
import logo from "../../../assets/images/logo192.png";
import Hidden from "@material-ui/core/Hidden";
import {withRouter} from "react-router";

class Nav extends Component<any, any> {
    render() {
        return (
            <div className={styles.container}>
                {
                    this.props.async_counter > 0 ? <LinearProgress style={{zIndex: 1000}} color="secondary"/> :
                        <div style={{width: '100%', height: '4px'}}/>
                }
                <Box className={[styles.box].join(' ')}>
                    <NavLink to='/' className={styles.link}>
                        <img src={logo} alt=""/>
                        <div>
                            <h1 style={{color: 'white'}}>Offer</h1>
                            <h1 style={{color: 'var(--cherry)'}}>.tn</h1>
                        </div>
                    </NavLink>

                    <div className={styles.searchAction}>
                        <Route path={['/product/list/:category/:category_id']} exact children={
                            <IconButton
                                color="inherit"
                                onClick={this.props.toggle_is_drawer_open}
                                edge="start"
                                className={styles.filter_button}
                            >
                                <img src={this.props.is_drawer_open ? open_filter : close_filter}
                                     className={styles.filterImg} alt=""/>
                            </IconButton>
                        }/>
                        <TextField
                            label="Search..."
                            margin="dense"
                            variant="outlined"
                            className={styles.searchText}
                            InputProps={{
                                style: {
                                    height: '40px',
                                    padding: '0 14px',
                                },
                                endAdornment: (
                                    <IconButton>
                                        <SearchIcon/>
                                    </IconButton>
                                )
                            }}
                        />
                        <Hidden mdUp>
                            <IconButton id='show_categories_button_id_smDown'
                                        onClick={this.props.toggle_is_show_categories}
                                        className={styles.categoriesButton}>
                                <ListIcon/>
                            </IconButton>
                        </Hidden>

                        <Hidden smDown>
                            <Button id='show_categories_button_id'
                                    color="inherit"
                                    variant="outlined"
                                    className={styles.categoriesButton}
                                    onClick={this.props.toggle_is_show_categories}
                                    endIcon={this.props.is_show_category ? <KeyboardArrowUpIcon/> :
                                        <KeyboardArrowDownIcon/>}>
                                Categories
                            </Button>
                        </Hidden>
                    </div>

                    <Hidden smDown>
                        <div style={{width: '140px'}}/>
                    </Hidden>
                </Box>
            </div>
        );
    }
}

const mapStateToProp = (state: any) => {
    return {
        async_counter: state.async_counter,
        is_show_category: state.is_show_category,
        is_drawer_open: state.is_drawer_open
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => any) => {
    return {
        toggle_is_show_categories: () => dispatch({type: 'TOGGLE_SHOW_CATEGORY'}),
        toggle_is_drawer_open: () => dispatch({type: 'TOGGLE_DRAWER'}),
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(withRouter(Nav));