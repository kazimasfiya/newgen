import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

        <Route path='/' element={<Login />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      
     
    
    </div>
  );
}

export default App;
