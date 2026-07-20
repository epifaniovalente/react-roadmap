import useAuthStore from "../store/useAuthStore"

export default function NavBar() {

    const { usuarioLogado, fazerLogin, fazerLogout } = useAuthStore()

    const nome = "João"
    const tipo = "Candidato"
    if (!usuarioLogado) {
        return (
            <section>
                <p>Bem-Vindo visitante, Faça seu Login</p>
                <button type="button" onClick={() => fazerLogin(nome,tipo)}>Login</button>
            </section>
        )
    }

    return (
        <section>
            <p>Ola, {usuarioLogado}</p>
            <button type="button" onClick={fazerLogout}>LogOut</button>
        </section>
    )

}