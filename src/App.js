import './App.css';
import { Routes, Route } from "react-router-dom";
import PortfolioPage from './components/pages/PortfolioPage';
import HomePage from './components/pages/HomePage';
import Navbar from './components/Navbar';
import FaqPage from './components/pages/FaqPage';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/Faq' element={<FaqPage />} />
      </Routes>
    </>


  );
}

export default App;
