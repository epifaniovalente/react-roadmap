import { create } from "zustand"

export const useVotacaoStore = create((set) => ({
    votacaoPlacaA: 0,
    votacaoPlacaB: 0,

    votar: (placa) => set((state) => {
        if (placa === "A") return { votacaoPlacaA: state.votacaoPlacaA + 1 }
    })
}))



export function PainelVotacao() {

    const { votar } = useVotacaoStore()

    return (
        <section>
            <h2>Painel de Votação</h2>

            <article>
                <button type="button" onClick={votar(A)}>Votar(A)</button>
                <button type="button">Votar(B)</button>
            </article>
        </section>
    )
}