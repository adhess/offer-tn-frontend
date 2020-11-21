import React, {Component} from 'react';
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import logo from '../../../assets/images/logo.png'
import Box from '@material-ui/core/Box';
import {
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import {connect} from "react-redux";
import styles from "../categories/categories.module.css";
import {NavLink} from "react-router-dom";


class Nav extends Component<any, any> {
    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: 'fit-content',
                top: 0,
                position: 'fixed',
                background: '#bde0fe',
                zIndex: 999,
                // backgroundImage: 'linear-gradient(180deg, #bde0fe,  #a2d2ff)'

            }}>
                <Box
                    // borderBottom="1px solid #eeeeee"
                    style={{borderBottom: "2px solid rgba(165, 215, 250, .8)"}}

                    width='100%' minHeight={70} display='flex' flexDirection='row' className='shadow'>
                    <NavLink to='/'>
                        <img src={logo} alt="logo" height="35px" style={{margin: '16px 0 auto 16px'}}/>
                    </NavLink>
                    <div style={{margin: "auto", width: 'fit-content', display: 'flex', flexDirection: 'row'}}>
                        <FormControl variant="outlined" style={{width: '500px'}}>
                            <InputLabel htmlFor="search-product">Search for anything</InputLabel>
                            <OutlinedInput  style={{backgroundColor: 'white'}}
                                id="search-product"
                                type='text'
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton edge="end">
                                            <SearchIcon/>
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={140}
                                fullWidth={true}
                            />
                        </FormControl>
                        {/*<FormControl variant="outlined" style={{width: '150px', marginLeft: '10px'}}>*/}
                        {/*    <InputLabel id="id-select-categories">All categories</InputLabel>*/}
                        {/*    <Select labelId="id-select-categories" id="id-select-categories" labelWidth={100}>*/}
                        {/*        <MenuItem value="cell_phones">Cell phones & accessories</MenuItem>*/}
                        {/*        <MenuItem value="computers">Computers</MenuItem>*/}
                        {/*    </Select>*/}
                        {/*</FormControl>*/}
                        {this.props.async_counter}
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

const mapStateToProp = (state: { async_counter: number }) => {
    return {
        async_counter: state.async_counter
    }
}
export default connect(mapStateToProp)(Nav);