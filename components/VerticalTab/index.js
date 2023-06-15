import React, { useState } from 'react'
import { Box, MenuItem, Button } from '@mui/material'
import { Drafts, FolderPluss, Trash, Vector } from '../icons'
import { DropDown } from '../DropDown'

import * as S from './styles'

export const VerticalTabs = () => {
  const [open, setOpen] = useState(false)

  const handleBoxClick = () => {
    setOpen(!open)
  }

  return (
    <Box sx={S.containerBox}>
      <Box sx={S.subContainerBox} onClick={handleBoxClick}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '167px',
            height: '24px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '24px',
            color: '#101828',
          }}
        >
          Project Name
          <Vector sx={{ marginLeft: 'auto' }} />
        </Box>
      </Box>
      {open && (
        <Box sx={S.isOpenContainer}>
          <MenuItem sx={S.menuItemStyles}>Facilisis viverra a</MenuItem>
          <MenuItem sx={S.menuItemStyles}>Faucibus at a</MenuItem>
          <MenuItem sx={S.menuItemStyles}>Commodo blandit ultrices</MenuItem>
          <MenuItem sx={S.menuItemStyles}>Et nibh egestas</MenuItem>
          <MenuItem sx={S.menuItemStyles}>Vivamus amet neque</MenuItem>
          <MenuItem sx={S.menuItemStyles}>Pulvinar aliquam</MenuItem>
          <MenuItem sx={S.menuItemStyles}>Vel mauris proin</MenuItem>
          <MenuItem sx={S.menuItemStyles}>At egestas suspensidsse</MenuItem>
          <MenuItem sx={S.menuItemStyles}>Viate pretium massa</MenuItem>
          <MenuItem sx={S.menuItemStyles}>Lorem ultrices proin</MenuItem>
          <MenuItem sx={S.menuItemStyles}>Gravida odio placerat</MenuItem>
          <MenuItem sx={S.menuItemStyles}>Ul ui hendreit</MenuItem>
          <MenuItem sx={S.menuItemStyles}>Vel mauris proin</MenuItem>
          <MenuItem sx={S.menuItemStyles}>At egestas suspensidsse</MenuItem>
          <MenuItem sx={S.menuItemStyles}>Viate pretium massa</MenuItem>
          <MenuItem sx={S.menuItemStyles}>Lorem ultrices proin</MenuItem>
          <MenuItem sx={S.menuItemStyles}>Gravida odio placerat</MenuItem>
          <MenuItem sx={S.menuItemStyles}>Ul ui hendreit</MenuItem>
        </Box>
      )}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '0px',
          gap: '4px',
          width: '223px',
          height: '172px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '8px',
            width: '223px',
            height: '40px',
            background: '#E8EEFF',
            borderRadius: '5px',
          }}
        >
          <Box sx={{ ...S.textStyles }}> View All </Box>
          <Box sx={{ fontSize: '10px', color: '#2459DB', padding: '8px 12px' }}>
            123
          </Box>
        </Box>
        <Button style={S.itemStyles}>
          <FolderPluss />
          Active
          <span style={{ ...S.numberStyles }}>34</span>
        </Button>
        <Button style={S.itemStyles}>
          <Drafts />
          Drafts
          <span style={{ ...S.numberStyles }}>34</span>
        </Button>
        <Button style={S.itemStyles}>
          <Trash />
          Trash
          <span style={{ ...S.numberStyles }}>34</span>
        </Button>
      </Box>
      <DropDown />
    </Box>
  )
}
