import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';

export default function SelectedListItem() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <Box sx={{ width: '100%'}}>
            <List component="nav" aria-label="main mailbox folders">
            <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)} >
                    <ListItemText primary="View All" /> <p>34</p>
                </ListItemButton>

                <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemIcon>
                        < CreateNewFolderOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Active"  />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemIcon>
                        <ArticleOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemIcon>
                        <DeleteOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Trash" />
                </ListItemButton>
            </List>
            <Divider />










            <List component="nav" aria-label="secondary mailbox folder">
                <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemIcon> <FolderOpenOutlinedIcon/> </ListItemIcon>
                    <ListItemText primary="Orders" />
                </ListItemButton>
            </List>
        </Box>
    );
}