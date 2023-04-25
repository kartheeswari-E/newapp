import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import { Edit } from './Component/Edit/Edit';
import { Route, Routes } from 'react-router-dom';
import Create from './Component/Create/Create';

function App() {
  return <>

<HelmetProvider>
    <Helmet>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
        <script src="js/scripts.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js" crossorigin="anonymous"></script>
        <script src="assets/demo/chart-area-demo.js"></script>
        <script src="assets/demo/chart-bar-demo.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/umd/simple-datatables.min.js" crossorigin="anonymous"></script>
        <script src="js/datatables-simple-demo.js"></script>
    </Helmet>
  </HelmetProvider>
  <Routes>
  <Route path="/" element={  <Dashboard/> } />
  <Route path="/create" element={  <Create/> } />
  <Route path="/journal/edit/:id" element={<Edit/> } />
  </Routes>

 
 

  <Edit/>
  </>
}

export default App;
