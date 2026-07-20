import { create } from "zustand";

const useStore = create((set) => ({
    
    count: 0,
    user: null,
    tarefas: [],

    // Ações De Botões
    incrementar: () => set((state) => ({
        count: state.count + 1
    })),

    decrementar: () => set((state) => ({
        count: state.count - 1
    })),

    setUser: (novoUser) => set({
        user: novoUser
    }),

    addTarefa: (texto) => set((state) => ({
        tarefas: [...tarefas.state, { id: Date.now(), texto, feito: false }]
    }))

}))

export default useStore