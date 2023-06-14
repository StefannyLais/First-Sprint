import { useState } from 'react'

export const useGrid = () => {
  const [gridMode, setGridMode] = useState(false)

  return {
    gridMode,
    setGridMode,
  }
}
