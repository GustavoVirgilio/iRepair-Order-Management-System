import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout';
import PrivateRoute from './components/PrivateRoute';

import DashboardPage from './pages/DashboardPage';
import ClientsPage from './pages/ClientsPage';
import ServiceOrdersPage from './pages/ServiceOrdersPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        <Route element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route 
              path="/service-orders"
              element={<ServiceOrdersPage />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App