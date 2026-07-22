import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

export default function Authentication() {
  const verificacao = z.object({
    email: z.string().email({ message: 'Email inválido' }),
    telefone: z.number().min(9, { message: 'Deve ter pelo menos 9 numeros' }),
    senha: z.string().min(8, { message: 'Deve ter no minimo 8 caracteres' }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(verificacao) });

  const submeter = (dados) => {
    console.log('Dados enviado', dados);
    alert('Usuario Cadastrado');
  };

  return (
    <section className="w-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit(submeter)}
        action=""
        method="post"
        className="w-sm p-4 shadow-md rounded flex flex-col gap-2 bg-slate-800 text-white"
      >
        <h2 className="text-xl font-bold text-cyan-500">
          Authentication
          </h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-medium">
            Email
          </label>
          <input
            {...register('email')}
            type="text"
            name="email"
            id="email"
            className="border border-gray-300 rounded p-2 outline-none bg-slate-600 text-white placeholder:text-slate-400"
          />
          <span className="text-xs text-red-500">{errors.email?.message}</span>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="telefone" className="text-xs font-medium">
            Telefone
          </label>
          <input
            {...register('telefone', { valueAsNumber: true })}
            type="number"
            name="telefone"
            id="telefone"
            className="border border-gray-300 rounded p-2 outline-none bg-slate-600 text-white placeholder:text-slate-400"
          />
          <span className="text-xs text-red-500">
            {errors.telefone?.message}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="senha" className="text-xs font-medium">
            Senha
          </label>
          <input
            {...register('senha')}
            type="password"
            name="senha"
            id="senha"
            className="border border-gray-300 rounded p-2 outline-none bg-slate-600 text-white placeholder:text-slate-400"
          />
          <span className="text-xs text-red-500">{errors.senha?.message}</span>
        </div>
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Entrar
        </button>
      </form>
    </section>
  );
}
