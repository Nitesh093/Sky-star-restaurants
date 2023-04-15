import { BrowserRouter,Routes , Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import {CardProvider} from './components/ContextReducer';
import Cart from './screens/Cart';
import Myorder from './screens/Myorder';
import Protected from './components/Protected';
function App() {

  return (
    <CardProvider>
    
     <BrowserRouter>
      <Routes>
        <Route path='/' element={< Home />}/>
        <Route path='/login' element={< Login/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/myOrder' element={< Protected  Component={Myorder}/>}/>
        
      </Routes>
     </BrowserRouter>


      
      </CardProvider>
      
      
    
  );
}

export default App;
