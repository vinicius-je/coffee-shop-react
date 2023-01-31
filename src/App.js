import { createContext, useState } from 'react';
import './App.css';
import { Cart } from './components/cart/Cart';
//Components
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Navbar } from './components/navbar/Navbar';
import products from './data/products'

export const appContext = createContext();

function App() {
  const [product, setProduct] = useState(products.filter(item => item.category.includes("coffee")));

  return (
      <div className="App">
      <appContext.Provider value={{product, setProduct}}>
        <Header/>
        <Navbar/>
        <Main/>
        <Cart/>
      </appContext.Provider>
      </div>
  );
}

export default App;
