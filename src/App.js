import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IndexPage from './Pages/IndexPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<IndexPage />} />
      </Routes>
    </div>
  );
}

export default App;
