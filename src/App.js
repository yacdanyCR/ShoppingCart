import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IndexPage from './Pages/IndexPage';
import ProductsProvider from './Context/getProducts';

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Routes>
          <Route path='/' element={<IndexPage />} />
        </Routes>
      </ProductsProvider>
    </div>
  );
}

export default App;
