import React, { useState, useEffect } from 'react'

export const useGrid = () => {
    const [gridMode, setGridMode] = useState(false)

    return {
        gridMode,
        setGridMode
    }
}