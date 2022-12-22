import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IndexPage from './Pages/IndexPage';
import ProductsProvider from './Context/getProducts';
import ProductPage from './Pages/ProductPage';
import NavBarComponent from './Components/NavBarComponent/NavBarComponent';
import CartProvider from './Context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <header>
          <NavBarComponent />
        </header>
        <main>
          <ProductsProvider>
            <Routes>
              <Route path='/' element={<IndexPage />} />
              <Route path='/product/:id' element={<ProductPage />} />
            </Routes>
          </ProductsProvider>
        </main>
      </CartProvider>
      <footer></footer>
    </div>
  );
}

export default App;
