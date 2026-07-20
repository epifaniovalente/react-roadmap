
import { Login } from "../pages/Login";
import useStore from "../store/useStore";
import NavBar from "./NavBar";

export function ContadorGlobal() {
    const { count, incrementar, decrementar, setUser } = useStore();
    return (
        <section>
            <NavBar />

            <h3>Contador global(Zustand)</h3>
            <p>{count}</p>
            <button type="button" onClick={incrementar} >Incrementar</button>
            <button type="button" onClick={decrementar} >Decrementar</button>

            

        </section>
    )
}