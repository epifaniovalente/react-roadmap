import { useCallback, useMemo, useState } from "react"

const itensIniciais = [
    { id: 1, nome: "React", categoria: "Frontend" },
    { id: 2, nome: "Node.js", categoria: "Backend" },
    { id: 3, nome: "TypeScript", categoria: "Frontend" },
    { id: 4, nome: "Python", categoria: "Backend" },
    { id: 5, nome: "Tailwind", categoria: "Frontend" },
]

export default function ListaFiltrada() {
    const [filtro, setFiltro] = useState('')
    const [count, setCount] = useState(0)

    const listFiltrada = useMemo(() => {
        console.log("Filtrando pesquisa");
        return itensIniciais.filter(item => item.nome.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
        )
    }, [filtro])

    const incrementar = useCallback(() => {
        setCount(c => c + 1)
    }, [])

    return (
        <section>
            <h3>Lista Filtrada</h3>

            <input type="text"
                name="filtro"
                id="filtro"
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
            />

            <p>Renderização do contador{count}</p>
            <button type="button" onClick={incrementar}>
                Incrementar
            </button>
            <ul>
                {listFiltrada.map(lista => (
                    <li key={lista.id}>
                        {lista.nome}-{lista.categoria}
                    </li>
                ))}
            </ul>
        </section>
    )
}