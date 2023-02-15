
import './App.css';
import Nav from './components/nav'
import Footer from './components/Footer'
import SignUp from './components/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Private from './components/private';
import Login from './components/Login';
import Addproduct from './components/Addproduct';
import ProductList from './components/productList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route element={<Private />}>
            <Route path='/' element={<ProductList />} />
            <Route path='/add' element={<Addproduct />} />
            <Route path='/update' element={<h1> Update product</h1>} />
            <Route path='/logout' element={<h1>Logout component</h1>} />
            <Route path='/profile' element={<h1>Profile</h1>} />
          </Route>

          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
