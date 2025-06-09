import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Contacts from './pages/Contacts';
import Deals from './pages/Deals';
import Tasks from './pages/Tasks';
import './App.css'; // Asegúrate de tener un archivo CSS para estilos globales

function App() {
  return (
    <BrowserRouter>
              <div style={{
          display: 'flex',
          height: '100vh',
          overflow: 'hidden'
        }}>
          <Sidebar />
          <div style={{
            flex: 1,
            overflowY: 'auto',  // solo scroll aquí
            height: '100vh'
          }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/deals" element={<Deals />} />
              <Route path="/tasks" element={<Tasks />} />
            </Routes>
          </div>
        </div>

    </BrowserRouter>
  );
}

export default App;
