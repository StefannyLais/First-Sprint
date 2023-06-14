import { IconButton } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { NewDropDown } from '../NewDropDown'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

import * as S from './styles'

export function ButtonDropDown() {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const containerRef = useRef()

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpenDropdown(false)
      }
    })
    return () => {
      window.removeEventListener('click', (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
          setIsOpenDropdown(false)
        }
      })
    }
  }, [containerRef])

  return (
    <div style={{ position: 'relative' }} ref={containerRef}>
      <IconButton
        onClick={() => setIsOpenDropdown((prev) => !prev)}
        sx={S.Container}
      >
        <MoreHorizIcon sx={{ color: '#66085' }} />
      </IconButton>
      {isOpenDropdown && <NewDropDown />}
    </div>
  )
}
