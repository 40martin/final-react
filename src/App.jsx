import './App.css';
import CartWidget from './components/CartWidget';
import Comidas from './components/Comidas';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Nueva from './components/Nueva';
import Error404 from './components/Error404';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Eventos from './components/Eventos';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';
import Checkout from './components/Checkout';

function App() {
  return (
    <div>
      <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Eventos />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"/comidas"} element={<Comidas />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/*"} element={<Error404 />} />
        </Routes>
        <Nueva />
        <CartWidget />
        <NavBar />
        <ItemDetailContainer />
        <Footer />
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
