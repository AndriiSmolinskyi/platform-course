import { Routes, Route } from 'react-router-dom';
import { Register } from './components/auth/register/Register';
import { Login } from './components/auth/login/Login';
import { Start } from './components/Start/Start';
import { Home } from './components/Home/Home';

function App() {
  
  return (  
    <div>
        <Routes>
            <Route path='/' element={<Start/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>  
    </div>
  );
}

export default App;
