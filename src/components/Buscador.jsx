import { useEffect, useRef, useState } from "react"

export default function Buscador (){
    const [termo, setTermo]=useState('');
    const [resultado, setResultado]=useState([])
    const [loading, setLoading]=useState(false)
    const inputRef = useRef(null)

    useEffect(()=>{
        if (termo.length <2) {
            setResultado([])
            return
        }

        setLoading(true);

        fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${termo}`)
        .then(resp =>resp.json())
        .then(data=>{
            setResultado(data.slice(0,5))
            setLoading(false)
        })
    },[termo])

    return(

        <section>
            <h3>Buscador API</h3>
            <input type="text" ref={inputRef} name="" id="" value={termo} onChange={(e)=>setTermo(e.target.value)} placeholder="Digite algo para buscar" />
            <button type="button" onClick={()=>inputRef.current.focus()}>
                Focar
            </button>

            {loading ?? <p>CArregando...</p>}

            <ul>
                {resultado.map((result)=>(
                    <li key={result.id}>{result.title}</li>
                ))}
            </ul>
        </section>
    )
}