import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { FixedSizeList } from 'react-window';
import Divider from '@mui/material/Divider';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

function renderRow(props) {
    const { index, style } = props;

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton>
            <ListItemIcon>
                        <FolderOutlinedIcon/>
                    </ListItemIcon>
                <ListItemText 
                primary={`Product List  ${index + 1}`} />
            </ListItemButton>
        </ListItem>
    );
    
}

export default function VirtualizedList() {
    return (
        <><Box
            sx={{ width: '100%', height: 130, maxWidth: 360, bgcolor: 'background.paper' }}
        >
            <FixedSizeList
                height={120}
                width={223}
                itemSize={46}
                itemCount={60}
                overscanCount={5}
            >
                {renderRow}
            </FixedSizeList>
        </Box>
        <Divider />

        <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemIcon>
                        <AddCircleOutlineOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItemButton>


        </>
    );

   
}