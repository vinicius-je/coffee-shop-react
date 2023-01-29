import './App.css';
import { Cart } from './components/cart/Cart';
//Components
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Main/>
      <Cart/>
    </div>
  );
}

export default App;
