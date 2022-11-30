
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/About';

export default function App() {
  return (
    <main className='App h-screen bg-[#193E58]'>
      <>
        <NavBar/>
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path="/portfolio" element={<Navigate to="/about"/>}/>
          <Route path="/" element={<Navigate to="/about"/>}/>
        </Routes>

       
      </>

    </main>
    
  );
}

