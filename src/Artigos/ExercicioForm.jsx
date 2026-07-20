import { useState } from "react"

export default function ExercicioForm() {
    const [user, setUser] = useState(
        {
            nome: '',
            email: '',
            idade: '',
            aceitarTermos: false
        }
    )
    const handleChang = (e) => {
        const { name, type, checked, value } = e.target

        setUser({
            ...user,
            [name]: type === 'checkbox' ? 'checked':'value'
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);

        alert("Formulario Enviado, OBRIGADO!")
    }
    return (
        <section>
            <form action="" onSubmit={handleSubmit} method="post">
                <input type="text" name="nome" id="nome" value={user.nome} placeholder="Seu nome" onChange={handleChang} />
                <input type="email" name="email" id="email" value={user.email} placeholder="Seu email" onChange={handleChang} />
                <input type="number" name="idade" id="idade" placeholder="Sua idade" value={user.idade} onChange={handleChang} />
                <input type="checkbox" name="aceitarTermos" id="aceitarTermos" value={user.aceitarTermos} onChange={handleChang} />
                <button type="submit">Submeter Formulario</button>
            </form>
        </section>
    )
}