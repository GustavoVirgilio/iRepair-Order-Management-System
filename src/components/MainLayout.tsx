import { Outlet, Link } from 'react-router-dom';
import Header from './Header';

function MainLayout() {
    return (
        <div className="bg-sky-100 min-h-screen flex flex-col gap-4">
            <Header />
            <nav>
                <Link to="/">Dashboard</Link>
                <Link to="/clients">Cliente</Link>
                <Link to="/service-orders">Service Orders</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default MainLayout;