import './App.css';
import { Route, Routes, BrowserRouter, Link, useNavigate} from 'react-router-dom';
import Review from './components/Review';


function App() {
  
  const navigate = useNavigate

  const toHome = () => {
    navigate('/')
  }

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/review' exact element={<Review/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
