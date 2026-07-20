import { useCallback, useState } from "react"

export default function CallbackExemplo() {
    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {
        console.log("Botão Clicado...");
    },[])

    return <button type="button" onClick={handleClick}>cliques</button>
}