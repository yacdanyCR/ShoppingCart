import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IndexPage from './Pages/IndexPage/IndexPage';
import ProductsProvider from './Context/getProducts';
import ProductPage from './Pages/ProductPage';
import NavBarComponent from './Components/NavBarComponent/NavBarComponent';
import CartProvider from './Context/CartContext';
import ProductCategory from './Pages/ProductCategory/ProductCategory';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <ProductsProvider>
          <header>
            <NavBarComponent />
          </header>
          <main>
            <Routes>
              <Route path='/product/:id' element={<ProductPage />} />
              <Route path='/products/category/:categorie' element={<ProductCategory />} />
              <Route path='/' element={<IndexPage />} />
            </Routes>
          </main>
        </ProductsProvider>
      </CartProvider>
      <footer></footer>
    </div>
  );
}

export default App;
