import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import AllInventory from './Components/AllInventory/AllInventory';
import RequireAuth from './Components/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/signup' element={<SignUp></SignUp>}></Route>

        <Route path='/inventory/:id' element={<RequireAuth>
          <AllInventory></AllInventory>
        </RequireAuth>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
