
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SplashMain from './components/SplashMain';
import AppMain from './components/AppMain';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
             <Route path='/' element={<SplashMain/>} />
             <Route path='/main/*' element={<AppMain />} /> 
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
