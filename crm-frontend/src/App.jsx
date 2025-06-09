import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Contacts from './pages/Contacts';
import Tasks from './pages/Tasks';
import Reports from './pages/Reports';

function App() {
  return (
    <BrowserRouter>
              <div style={{
          display: 'flex',
          height: '98vh',
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
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </div>
        </div>

    </BrowserRouter>
  );
}

export default App;
