import { useState } from "react"
import useAuthStore from "../store/useAuthStore"
import { useNavigate } from "react-router-dom"
import Authentication from "../auth/Authentication"



export function Login() {

    const [userName, setUserName] = useState('')
    const login = useAuthStore(state => state.fazerLogin)
    const usuario = useAuthStore(state => state.usuarioLogado)
    const navegar = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        if(userName.trim()){
            login({nome: userName})
            navegar("/")
        }
    }

    return (
        <section>
            <input type="text" name="nome" id="nome" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <br /><br />
            <button type="button" onClick={handleLogin} style={{ padding: "10px 20px", fontSize: "18px" }}>
                Entrar
            </button>
            {usuario}

            <Authentication/>
        </section>
    )
}