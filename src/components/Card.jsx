export const Card =({title, children})=> {
    return (
        <div className="card">
            <h3>{title}</h3>
            <div>{children}</div>        {/* ← Aqui vai tudo que colocar dentro */}
        </div>
    )
}