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
        <main>
            <h1>iRepair</h1>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <br />

                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>

                <div> 
                    <label htmlFor="senha">Senha</label>
                    <br />

                    <input
                        id="senha"
                        type="password"
                        value={senha}
                        onChange={(event) => setSenha(event.target.value)}
                        required
                    />
                </div>

                {erro && <p>{erro}</p>}

                <button type="submit" disabled={loading}>
                    {loading ? "Entrando..." : "Entrar no iRepair"}
                </button>
            </form>
        </main>
    );
}