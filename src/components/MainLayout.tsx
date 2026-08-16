import { Outlet, Link } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="bg-sky-100 min-h-screen flex flex-col gap-4">
      <Header />

      <nav className="flex flex-row gap-3 px-4">
        <Link
          className="bg-white hover:bg-blue-100 text-gray-800 font-medium px-4 py-2 rounded-md shadow"
          to="/"
        >
          Dashboard
        </Link>

        <Link
          className="bg-white hover:bg-blue-100 text-gray-800 font-medium px-4 py-2 rounded-md shadow"
          to="/clients"
        >
          Clientes
        </Link>

        <Link
          className="bg-white hover:bg-blue-100 text-gray-800 font-medium px-4 py-2 rounded-md shadow"
          to="/service-orders"
        >
          Service Orders
        </Link>
      </nav>

      <main className="px-4 pb-6 flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;