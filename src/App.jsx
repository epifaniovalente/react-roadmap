import { NavLink, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home";
import { Contacto } from "./pages/Contacto";
import { Sobre } from "./pages/Sobre";
import { Login } from "./pages/Login";
import Usuarios from "./components/Uusuarios";
import PostsQuery from "./components/PostsQuery";
import FormularioAvancado from "./components/FormularioAvancado";

function App() {

  return (
    <>
    <header className="w-full p-4 bg-slate-800 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold text-cyan-400">React_Roadmap</h1>
      <nav className="flex gap-4 font-medium text-sm">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Sobre">Sobre</NavLink>
        <NavLink to="/Contacto">Contacto</NavLink>
        <NavLink to="/Login">Login</NavLink>
        <NavLink to="/Usuarios">Users-Zustand</NavLink>
        <NavLink to="/PostsQuery">Posts-ReactQuery</NavLink>
        <NavLink to="/Formulario">Formulário</NavLink>
      </nav>
      </header>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Sobre" element={<Sobre/>} />
        <Route path="/Contacto" element={<Contacto/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Usuarios" element={<Usuarios/>} />
        <Route path="/PostsQuery" element={<PostsQuery/>} />
        <Route path="/Formulario" element={<FormularioAvancado/>} />
      </Routes>
    </>
  )
}

export default App
