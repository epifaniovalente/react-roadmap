// src/components/Panel.jsx
function Painel({ title, children, color = "#61dafb" }) {
    return (
        <div style={{
            border: `2px solid ${color}`,
            borderRadius: "12px",
            padding: "20px",
            margin: "15px 0",
            backgroundColor: "#1e1e1e"
        }}>
            <h2 style={{ color: color, marginTop: 0 }}>{title}</h2>
            {children}
        </div>
    )
}

export default Painel