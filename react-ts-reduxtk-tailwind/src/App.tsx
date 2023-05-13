import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkersPage } from './pages/WorkersPage';
import { AdminFormPage } from './pages/AdminFormPage';
import { DetailServicePage } from './pages/DetailServicePage';
import { DetailWorkerPage } from './pages/DetailWorkerPage';
import { DetailClientPage } from './pages/DetailClientPage';
import { DetailCarPage } from './pages/DetailCarPage';
import { AdminPage } from './pages/AdminPage';
import { Navigation } from './components/Navigation';
import { StatisticsPage } from './pages/StatisticsPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/services' element={<ServicesPage />} />
        <Route path='/services/:id' element={<DetailServicePage />} />
        <Route path='/workers' element={<WorkersPage />} />
        <Route path='/workers/:id' element={<DetailWorkerPage />} />
        <Route path='/clients/:id' element={<DetailClientPage />} />
        <Route path='/cars/:id' element={<DetailCarPage />} />

        <Route path='/admin_form' element={<AdminFormPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/statistics' element={<StatisticsPage />} />
      </Routes>
    </>
  );
}

export default App;
