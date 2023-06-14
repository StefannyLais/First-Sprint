import React from 'react'
import { Box, IconButton } from '@mui/material'
import * as Icons from '../icons'

import * as S from './styles'

export const SideBar = () => {
  return (
    <Box sx={S.Container}>
      <Box sx={S.ContainerSub}>
        <Box sx={S.ContainerImage}>
          <div>
            <img
              src="/images/Union.png"
              alt="Logo"
              style={{
                width: '25px',
                height: 'auto',
                color: '#306CFE',
                position: 'relative',
                top: 0,
                left: 0,
              }}
            />
          </div>
        </Box>
        <Box sx={S.ContainerIconButton}>
          <IconButton
            color="inherit"
            aria-label="Home"
            sx={{
              color: '#667085',
              width: '40px',
              height: '40px',
              borderRadius: '3.77778px',
            }}
          >
            <Icons.HomeIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="Signal"
            sx={{
              width: '40px',
              height: '40px',
              borderRadius: '3.77778px',
              bgcolor: 'rgba(48, 108, 254, 0.05)',
              color: 'blue',
            }}
          >
            <Icons.ChartIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="Layers"
            sx={{
              color: '#667085',
              width: '40px',
              height: '40px',
              borderRadius: '3.77778px',
            }}
          >
            <Icons.LayerIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="Group"
            sx={{
              width: '40px',
              height: '40px',
              borderRadius: '3.77778px',
              color: '#667085',
            }}
          >
            <Icons.Users />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0px 0px',
          width: '100%',
          height: '175px',
        }}
      >
        <Box
          sx={{ width: '30px', heigth: '30px', padding: '12px', gap: '105px' }}
        >
          <IconButton color="#667085" aria-label="Button 1">
            <Icons.Settings />
          </IconButton>
        </Box>

        <Box
          sx={{ width: '30px', heigth: '30px', padding: '12px', gap: '105px' }}
        >
          <IconButton color="#667085" aria-label="Button 1">
            <Icons.Buoy />
          </IconButton>
        </Box>

        <IconButton
          color="inherit"
          aria-label="Button 3"
          sx={S.IconButtonStyles}
        >
          <img src="/images/Avatar.png" alt="Button 3" />
        </IconButton>
      </Box>
    </Box>
  )
}
