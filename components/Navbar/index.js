import React from 'react'
import { Box, Button } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

import { CalendarIcon, ArrowDown, FilterIcon, Plus } from '../icons'

import * as S from './styles'

export const Navbar = () => {
  const classes = S.useStyles()
  return (
    <Box sx={S.ContainerStyles}>
      <Box sx={S.SubContainerStyles}>
        <Box sx={S.ContainerRow}>
          <Button
            variant="text"
            disableRipple
            startIcon={<ArrowBackIosIcon className={classes.icon} />}
            sx={S.ButtonIcon}
          >
            <span className={classes.textb}>Back</span>
          </Button>
        </Box>
        <Box sx={{ ...classes.container }}>
          <span className={classes.text}>Project Name </span>
          <span> / </span>
          <span className={classes.textx}>Recent</span>
          <span className={classes.textx}>Workflows</span>
        </Box>
      </Box>

      <Box sx={S.BoxFlexRow}>
        <Box sx={S.BoxFlexSub}>
          <Box sx={S.BoxInter}>Sort By:</Box>

          <Button sx={S.BoxText}>
            Activity <ArrowDown />
          </Button>
        </Box>

        <Box sx={S.BoxAllItems}>
          <Button sx={S.ButtonAllTime}>
            <CalendarIcon /> All Time
          </Button>
        </Box>
        <Box sx={S.BoxButton}>
          <Button sx={S.ButtonFilters}>
            <FilterIcon />
            Filters
          </Button>
        </Box>
        <Button sx={S.NewWorkflow}>
          <Plus />
          New Workflow
        </Button>
      </Box>
    </Box>
  )
}
