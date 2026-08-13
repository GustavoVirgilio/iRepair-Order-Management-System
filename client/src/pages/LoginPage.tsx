import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro]   = useState("");
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        
        try {
            setLoading(true);
            setErro("");

            await login(email, senha);

            navigate("/");
        } catch {
            setErro("Email ou senha inválidos");
        } finally {
            setLoading(false);
        }
    }

    return (
  <main className="min-h-screen bg-sky-400  flex items-center justify-center px-4">
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-sky-500">iRepair</h1>
        <p className="text-slate-500 mt-2">
          Sistema de gestão de Ordens de Serviço
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            E-mail
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            placeholder="seu@email.com"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
          />
        </div>

        <div>
          <label
            htmlFor="senha"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Senha
          </label>

          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            required
            placeholder="Digite sua senha"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
          />
        </div>

        {erro && ( <p className="text-sm text-red-500 text-center"> {erro} </p> )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-sky-500 text-white font-semibold py-3 rounded-lg hover:bg-sky-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Entrando..." : "Entrar no iRepair"}
        </button>
      </form>
    </div>
  </main>
 );
}