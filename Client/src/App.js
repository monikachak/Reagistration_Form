// import { BrowserRouter as Switch, Route } from 'react-router-dom';

import{BrowserRouter ,Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './component/home/Home'
import Login from './component/login/Login'
import Register from './component/register/Register'
import { useState  } from 'react';



function App() {
  const [user,setLoginUser] = useState({})
  
  return (
    <div className="App">

{/*       
       <BrowserRouter>
       <Routes>
              <Route path='/'><Home/></Route>
              <Route path='/login'><Login/></Route>
              <Route path='/register'><Register/></Route>
              </Routes>
          </BrowserRouter> */}

       <BrowserRouter>
      <Routes>
        <Route exact path='/' element={user && user._id ? <Home setLoginUser={setLoginUser}/> :<Login setLoginUser={setLoginUser}/>}>
          {/* {user && user._id ? <Home/> :<Login/>} */}

           </Route>
        <Route path='/login' element={<Login setLoginUser={setLoginUser}/>}>  </Route>
        <Route path='/register' element={<Register/>}>  </Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
