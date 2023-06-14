import { Box, Checkbox, Typography, Stack, Button, IconButton } from '@mui/material';
import { useState } from 'react'
import NewDropDown from '../NewDropDown'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export function ButtonDropDown() {
    const [isOpenDropdown, setIsOpenDropdown] = useState(false)


    return (
        <>
            <IconButton
                onClick={() => setIsOpenDropdown(true)}
                aria-controls="dropdown-menu"
                aria-haspopup="true"
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    marginLeft: '-1px',
                }}
            >
                <MoreHorizIcon sx={{ color: '#66085' }} />
            </IconButton>
            {isOpenDropdown && <NewDropDown />}
        </>
    )
}