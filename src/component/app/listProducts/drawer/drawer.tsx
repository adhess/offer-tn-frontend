import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import {connect} from "react-redux";
import Filter from "../filter/filter";

const drawerWidth = 333;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
          display: 'flex'
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            maxWidth: '90%',
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            marginTop: 53,
            boxShadow:'0 10px 40px -10px rgba(0, 64, 128, .1)'
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
    }),
);

function PersistentDrawerLeft(props: any) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                container={window?.document?.body}
                variant="persistent"
                anchor="left"
                open={props.is_drawer_open}
                onClose={props.toggle_is_drawer_open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Filter/>
            </Drawer>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        is_drawer_open: state.is_drawer_open
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        toggle_is_drawer_open: () => dispatch({type: 'TOGGLE_DRAWER'})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PersistentDrawerLeft);