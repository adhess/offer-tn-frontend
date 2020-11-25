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

class Nav extends Component<any, any> {
    render() {
        return (
            <div className={styles.container}>
                <Box className={['shadow',styles.box].join(' ')}>
                    <NavLink to='/'>
                        <img className={styles.logo} src={logo}/>
                    </NavLink>
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
                                        <SearchIcon />
                                    </IconButton>
                            )
                        }}
                    />

                    {/*<FormControl variant="outlined" style={{width: '150px', marginLeft: '10px'}}>*/}
                    {/*    <InputLabel id="id-select-categories">All categories</InputLabel>*/}
                    {/*    <Select labelId="id-select-categories" id="id-select-categories" labelWidth={100}>*/}
                    {/*        <MenuItem value="cell_phones">Cell phones & accessories</MenuItem>*/}
                    {/*        <MenuItem value="computers">Computers</MenuItem>*/}
                    {/*    </Select>*/}
                    {/*</FormControl>*/}
                    <div style={{width: '131px'}}/>
                </Box>
                {
                    this.props.async_counter > 0 ? <LinearProgress style={{zIndex: 1000}} color="secondary"/> : null
                }
            </div>
        );
    }
}

const mapStateToProp = (state: { async_counter: number }) => {
    return {
        async_counter: state.async_counter
    }
}
export default connect(mapStateToProp)(Nav);