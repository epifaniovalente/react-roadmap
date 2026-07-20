import { useState } from "react"

export default function FormularioLogin() {

    const [form, setForm] = useState([{
        nome: '',
        email: '',
        senha: ''
    }])

    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.nome]: e.target.value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Dados enviados",form);
        alert("Formularios enviado")
    }

    return (
        <section>
            <form onSubmit={handleSubmit} method="post">
                <input type="text" name="" id="" value={form.nome} onChange={handleChange} placeholder="Nome"/>
                <input type="text" name="" id="" value={form.email} onChange={handleChange} placeholder="Senha"/>
                <input type="password" name="" id="" value={form.senha} onChange={handleChange} placeholder="senha"/>
                <button type="submit" >Enviadr</button>
            </form>

        </section>
    )
}