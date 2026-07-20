import { useTheme } from "../context/ThemeContext"

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()
    return (
        <div style={{
            padding: "20px",
            backgroundColor: theme === 'dark' ? '#1e1e1e' : '#f0f0f0',
            color: theme === 'dark' ? 'white' : 'black',
            textAlign: "center"
        }}>
            <h2>
                Modo actual: {theme === 'dark' ? '🌙 Escuro' : '☀️ Claro'}
            </h2>

            <button type="button" onClick={toggleTheme}>
                Alterar tema
            </button>
        </div>
    )
}