import {BrowserRouter ,Routes , Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Checkout from './Pages/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
