import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
// import Results from './components/Results';
import Company from './components/Company';


import { Route, Routes, BrowserRouter, Link, useNavigate} from 'react-router-dom';


function App() {

  const navigate = useNavigate

  const toHome = () => {
    navigate('/')
  }

  return (
    <div className="App">

      <BrowserRouter> 
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/company-profile' exact element={<Company />} />
        </Routes>
      </BrowserRouter>

      


      
    </div>
  );
}

export default App;
