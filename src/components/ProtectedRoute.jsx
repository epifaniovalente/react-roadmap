import { NavLink } from "react-router-dom"
import useAuthStore from "../store/useAuthStore"

export const ProtectedRoute = ({ children }) => {
    const user = useAuthStore(state => state.usuarioLogado)

    if (!user) {
        <p>Sem Sessão iniciada</p>
    }
    return children
}