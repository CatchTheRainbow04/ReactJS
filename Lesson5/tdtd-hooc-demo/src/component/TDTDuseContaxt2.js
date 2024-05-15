import React, { useContext } from 'react'
import { ThemeContext } from './TDTDuseContaxt'

export default function TDTDuseContaxt2() {
    const theme = useContext(ThemeContext)
  return (
    <div className={theme}>
        <p>Doanh</p>
        <p>2210900096</p>
    </div>
  )
}
