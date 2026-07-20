import { createContext, useCallback, useContext, useState } from "react"

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = useCallback (() => {
        setTheme(prev => prev === 'dark' ? 'ligth' : 'dark')
    })
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }} >
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)