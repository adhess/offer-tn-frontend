import React, {Component} from 'react';
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import logo from '../../../assets/images/logo.png'
import Box from '@material-ui/core/Box';
import LinearProgress from "@material-ui/core/LinearProgress";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import styles from "./nav.module.scss";
import {Button} from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


class Nav extends Component<any, any> {
    render() {
        return (
            <div className={styles.container}>
                <Box className={[styles.box].join(' ')}>
                    <NavLink to='/'>
                        <img className={styles.logo} src={logo} alt=''/>
                    </NavLink>

                    <div className={styles.searchAction}>
                        <TextField
                            label="Search for anything"
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
                        <Button variant="outlined" color="inherit" className={styles.categoriesButton}
                                onClick={this.props.toggle_is_show_categories}
                                endIcon={this.props.is_show_category ? <KeyboardArrowUpIcon/> :
                                    <KeyboardArrowDownIcon/>}>
                            Categories
                        </Button>
                    </div>

                    <div style={{width: '131px'}}/>
                </Box>
                {
                    this.props.async_counter > 0 ? <LinearProgress style={{zIndex: 1000}} color="secondary"/> : null
                }
            </div>
        );
    }
}

const mapStateToProp = (state: any) => {
    return {
        async_counter: state.async_counter,
        is_show_category: state.is_show_category
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => any) => {
    return {
        toggle_is_show_categories: () => dispatch({type: 'TOGGLE_SHOW_CATEGORY'}),
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(Nav);