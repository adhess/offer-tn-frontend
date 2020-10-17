import React, {Component} from 'react';
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import logo from '../../../assets/images/logo.png'
import Box from '@material-ui/core/Box';
import {
    FormControl,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput, Select,
} from "@material-ui/core";


class Nav extends Component {
    render() {
        return (
            <Box borderBottom="1px solid #eeeeee" width='100%' minHeight={70} display='flex' flexDirection='row' style={{position: 'fixed', background: '#FFF', zIndex: 999}}>
                <img src={logo} alt="logo" height="35px" style={{margin: 'auto 0 auto 16px'}}/>

                <div style={{margin: "auto", width: 'fit-content', display: 'flex', flexDirection: 'row'}}>
                    <FormControl variant="outlined" style={{width: '500px'}}>
                        <InputLabel htmlFor="search-product">Search for anything</InputLabel>
                        <OutlinedInput
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
                    <FormControl variant="outlined" style={{width: '150px', marginLeft: '10px'}}>
                        <InputLabel id="id-select-categories">All categories</InputLabel>
                        <Select labelId="id-select-categories" id="id-select-categories" labelWidth={100}>
                            <MenuItem value="cell_phones">Cell phones & accessories</MenuItem>
                            <MenuItem value="computers">Computers</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div style={{width: '131px'}}/>
            </Box>
        );
    }
}

export default Nav;