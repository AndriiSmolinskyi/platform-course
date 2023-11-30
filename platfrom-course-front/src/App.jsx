import { Routes, Route } from 'react-router-dom';
import { Register } from './components/auth/register/Register';
import { Login } from './components/auth/login/Login';
import { Start } from './components/Start/Start';
import { Home } from './components/Home/Home';
import { UserPage } from './components/User/User';
import { useNavigate } from 'react-router-dom';


function App() {
  
  return (  
    <div>
        <Routes>
            <Route path='/' element={<Start/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/userPage' element={<UserPage/>}/>
        </Routes>  
    </div>
  );
}

export default App;
