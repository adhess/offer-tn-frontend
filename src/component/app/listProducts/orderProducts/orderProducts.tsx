import css from './orderProducts.module.scss'
import React from 'react';
import Button from "@material-ui/core/Button";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

export default function OrderProducts(props: any) {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: React.MouseEvent<EventTarget>, name?: string) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }
        props.onOrderByChange(name);

        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current && !open) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);
    const icons: {
        'Price': any[],
        'Name': any[],
        'Popularity': any[],
    } = {
        'Price': [
            <Tooltip title={'Cheap'}>
                <img src="https://img.icons8.com/ultraviolet/35/000000/cheap-2.png"/>
            </Tooltip>,
            <IconButton onClick={props.onToggleIsAscending}
                        style={{color: 'var(--cherry)'}}>
                <ArrowRightAltIcon/>
            </IconButton>,
            <Tooltip title={'Expensive'}>
                <img src="https://img.icons8.com/ultraviolet/35/000000/expensive-2--v1.png"/>
            </Tooltip>,
        ],
        'Name': [
            <Tooltip title={'A'}>
                <img src="https://img.icons8.com/color/35/000000/a-key.png"/>
            </Tooltip>,
            <IconButton onClick={props.onToggleIsAscending}
                        style={{color: 'var(--cherry)'}}>
                <ArrowRightAltIcon/>
            </IconButton>,
            <Tooltip title={'Z'}>
                <img src="https://img.icons8.com/color/35/000000/z-key.png"/>
            </Tooltip>,
        ],
        'Popularity': [
            <Tooltip title={'Less Popular'}>
                <img src="https://img.icons8.com/color/35/000000/half-heart--v2.png"/>
            </Tooltip>,
            <IconButton onClick={props.onToggleIsAscending}
                        style={{color: 'var(--cherry)'}}>
                <ArrowRightAltIcon/>
            </IconButton>,
            <Tooltip title={'Popular'}>
                <img src="https://img.icons8.com/officel/35/000000/filled-like.png"/>
            </Tooltip>,
        ]
    }

    function getAction() {
        // @ts-ignore
        return props.isAscending ? icons[props.orderBy] : icons[props.orderBy].reverse()
    }

    return (
        <div className={css.container}>
            <div>
                <p>Order By</p>
                <Button color="secondary"
                        variant="outlined"
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        style={{height: 32, margin: '0 1em', width: 130}}
                        onClick={handleToggle}>
                    <ExpandMoreIcon/> {props.orderBy}
                </Button>
                {
                    props.orderBy === 'Newest' ? null : getAction()
                }
            </div>


            <Popper
                style={{zIndex: 1}}
                open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({TransitionProps, placement}) => (
                    <Grow
                        {...TransitionProps}
                        style={{transformOrigin: 'center bottom'}}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    {
                                        ['Newest', 'Price', 'Popularity', 'Name'].map((name: string, index: number) =>
                                            <MenuItem onClick={(e) => {
                                                handleClose(e, name)
                                            }} key={index}>{name}</MenuItem>
                                        )
                                    }
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}