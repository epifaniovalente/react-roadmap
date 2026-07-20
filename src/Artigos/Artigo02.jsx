import { useState, useEffect } from 'react'

const Artigo02 = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        // Este código roda após o componente ser renderizado
        console.log("Componente montado!")

        // Buscar dados de exemplo
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(json => setData(json))

        // Cleanup (opcional) - roda quando o componente desmonta
        return () => {
            console.log("Componente desmontado!")
        }
    }, [])   // ← Array de dependências vazio = roda só uma vez

    return (
        <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Carregando...</p>}
        </div>
    )
}

export default Artigo02