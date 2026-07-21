import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const buscarPosts = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return data;
};

export default function PostsQuery() {

  const { data, isLoading, error, status } = useQuery({
    queryKey:['posts'],
    queryFn: buscarPosts,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });

  if(isLoading) return <p className="text-lg text-green-400">Carregando...</p>;
  if(error) return <p className="text-lg text-red-400">
    Erro ao carregar os posts: {error.message}
    </p>;

  return (
    <section className="w-full p-4">
      <h2 className="text-xl font-bold mb-2">Posts - React Query</h2>
      <p>Exemplo pratico - </p>
      <h2>Posts Com React Query {data?.length || 0} Status: {status}</h2>
      {data?.slice(0, 6).map((post) => (
        <article key={post.id} className="border p-2 mb-2 rounded">
          <h2>{post.title}</h2>
          <p>{post.body.substring(0,50)}...</p>
        </article>
      ))
      }
    </section>
  );
}
