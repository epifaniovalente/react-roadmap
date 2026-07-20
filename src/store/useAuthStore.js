import { create } from "zustand";

const useAuthStore = create((set) => ({
    usuarioLogado: null,
    tipoPerfil: null,

    fazerLogin: (nome) => set({
        usuarioLogado: nome,
        // tipoPerfil: tipo
    }),

    fazerLogout: () => set({
        usuarioLogado: null,
        // tipoPerfil: null
    }),

}))

export default useAuthStore