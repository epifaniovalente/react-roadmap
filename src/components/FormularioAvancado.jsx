import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export default function FormularioAvancado() {
  const schema = z.object({
    nome: z
      .string()
      .min(3, { message: 'O nome deve ter no mínimo 3 caracteres' }),
    email: z.string().email({ message: 'Email inválido' }),
    idade: z
      .number()
      .min(18, { message: 'Você deve ter no mínimo 18 anos' })
      .max(65, { message: 'Você deve ter no máximo 65 anos' }),
    senha: z
      .string()
      .min(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
      .max(20, { message: 'A senha deve ter no máximo 20 caracteres' }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    console.log('Dados Enviados',data);
    alert('Formulário enviado com sucesso!');
  };

  return (
    <section className="w-full p-4 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        method="post"
        className="max-w-sm p-4 shadow-md rounded flex flex-col gap-2"
        autoComplete="off"
      >
        <h2 className="text-xl font-bold text-green-600">
          Formulario Avançado - Zod
        </h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="font-medium text-xs text-green-900">
            Nome
          </label>
          <input
            {...register('nome')}
            type="text"
            name="nome"
            id="nome"
            className="border border-gray-300 rounded p-2 outline-none"
          />
          <span className="text-red-500 text-xs">{errors.nome?.message}</span>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="font-medium text-xs text-green-900">
            Email
          </label>
          <input
            {...register('email')}
            type="text"
            name="email"
            id="email"
            className="border border-gray-300 rounded p-2 outline-none"
          />
          <span className="text-red-500 text-xs">{errors.email?.message}</span>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="font-medium text-xs text-green-900">
            Idade
          </label>
          <input
            {...register('idade')}
            type="number"
            name="idade"
            id="idade"
            className="border border-gray-300 rounded p-2 outline-none appearance-none"
          />
          <span className="text-red-500 text-xs">{errors.idade?.message}</span>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="font-medium text-xs text-green-900">
            Senha
          </label>
          <input
            {...register('senha')}
            type="password"
            name="senha"
            id="senha"
            className="border border-gray-300 rounded p-2 outline-none"
          />
          <span className="text-red-500 text-xs">{errors.senha?.message}</span>
        </div>
        <button
          type="submit"
          className="bg-green-500 rounded text-white font-medium text-sm mt-4 cursor-pointer py-2 transition-all duration-300 hover:bg-green-600"
        >
          Cadastrar
        </button>
      </form>
    </section>
  );
}
