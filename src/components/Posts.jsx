import { useEffect, useState } from "react"

export default function Posts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [erros, setErros] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            if(!res.ok) throw new Error("Erro ao buscar dados...");
            return res.json()
        })
        .then(data=>{
            setPosts(data.slice(0,4))
            setLoading(false)
        })
        .catch(error=>{
            setErros(error.message);
            setLoading(false)
        })
    },[])
    if(loading){
        return <p>Carregando dados...</p>
    }

    if(erros){
        return<p>Erro: {erros}</p>
    }

    return (
        <section>
            
            <h3>Posts Disponiveis em tempo real</h3>
            <ul>
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <li key={post.id}>
                            {post.title} -
                        </li>
                    ))
                ) : (
                    <span>
                        Nenhum post disponivel agora!
                    </span>
                )
                }
            </ul>
        </section>
    )
}