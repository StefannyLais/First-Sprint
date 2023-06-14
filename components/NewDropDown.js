import { useState } from 'react';
import { Menu, MenuItem, IconButton, useMediaQuery, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Edit, Clone, Copy, Share, Run, Rename, Add, Folder, Version, Delete } from './icons/NewDropDown'
const NewDropDown = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const isMobile = useMediaQuery('(max-width: 600px)');

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const buttonStyles = {
        textTransform: 'none',
        fontStyle: 'normal',
        fontSize: '13px',
        lineHeight: '13px',
        color: '#667085',
        border: 'aliceBlue',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '10px 12px',
        gap: '8px',
        width: '182px',
        height: '36px',
        ...(isMobile && {
            width: '100%',

        }),
    };
    const iconStyle = {
        marginLeft: 'auto'


    }


    return (
        <>
            <IconButton onClick={handleClick}>
                <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            padding: '4px 0px 0px 0px',
                            gap: '4px',
                            position: 'relative',
                            width: '182px',
                            height: '413px',
                            backgroundColor: '#FFFFFF',
                            borderRadius: '8px',
                            ...(isMobile && {
                                width: '100%',
                                height: 'auto',
                            }),
                        }}
                    >
                        <Button style={buttonStyles}><Edit style={iconStyle} /> Edit Workflow</Button>
                        <Button style={buttonStyles}> <Clone />Clone Workflow</Button>
                        <Button style={buttonStyles}><Copy />Copy Link</Button>
                        <Button style={buttonStyles}><Share />Share</Button>
                        <Button style={buttonStyles}><Run />Run Workflow Test</Button>
                        <Button style={buttonStyles}><Rename />Rename</Button>
                        <Button style={buttonStyles}><Add />Add To Favorites</Button>
                        <Button style={buttonStyles}><Folder />Move to Folder</Button>
                        <Button style={buttonStyles}><Version />Version History</Button>
                        <Button style={buttonStyles}><Delete />Delete Workflow</Button>

                    </div>
                </MenuItem>
            </Menu>
        </>
    );
};

export default NewDropDown;
