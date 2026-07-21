import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Usuarios() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState();

  useEffect(() => {
    // const BuscarUsuarios = async () => {
    // try {
    //   const resposta = await fetch(
    //     'https://jsonplaceholder.typicode.com/users'
    //   );
    //   if (!resposta.ok) throw new Error('Erro na ligação...');

    //   const dados = await resposta.json();
    //   setUsers(dados.slice(0, 6));
    // } catch (error) {
    //   setErro(error.message);
    // } finally {
    //   setLoading(false);
    // }
    // };

    const buscarDadosAPI = async () => {
      try {
        const resposta = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUsers(resposta.data.slice(0, 6));
      } catch (error) {
        setErro(error.message);
      } finally {
        setLoading(false);
      }
    };

    buscarDadosAPI();
    // BuscarUsuarios();
  }, []);

  if (loading) {
    return (
      <p className="text-green-600 text-center animate-pulse transition ease-in-out">
        Carregando...
      </p>
    );
  }
  if (erro) {
    return (
      <p className="text-red-500 font-bold text-center underline">
        Erro: {erro}
      </p>
    );
  }

  return (
    <section>
      <h1>Usuarios Cadastrados</h1>
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))
        ) : (
          <li>Nenhum usuário encontrado.</li>
        )}
      </ul>
    </section>
  );
}
