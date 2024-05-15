import React, {createContext, useState} from 'react'
import TDTDuseContaxt1 from './TDTDuseContaxt1';
export const ThemeContext = createContext();

export default function TDTDuseContaxt() {
    const [theme, setTheme] = useState('red');
    const handleColorChange = () =>{
        setTheme(theme === 'red' ? 'purple' : 'red')
    }
  return (
    <ThemeContext.Provider value={theme}>
        <div>
            <h3>Demo UseContaxt</h3>
            <TDTDuseContaxt1/>
            <button onClick={handleColorChange}>Change color</button>
        </div>
    </ThemeContext.Provider>
  )
}
