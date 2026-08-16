import { useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

const Header = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();

    navigate("/login");
  }

  return (
    <div className="bg-sky-400 p-6 shadow-md flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold text-white">iRepair</h1>
        <p className="text-white">
          Sistema de gestão de Ordens de Serviço
        </p>
      </div>

      <button
        onClick={handleLogout}
        className="bg-white text-sky-500 font-semibold px-4 py-2 rounded-md">
          Sair
      </button>
    </div>
  );
};
export default Header