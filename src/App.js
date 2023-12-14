

import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Top from './components/Header/Top'; 
import Maths from './components/Maths/Maths';
import Box from './components/Box/Box';
import Science from './components/Science';
import English from './components/English';
import Affairs from './components/Affairs';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';




function App() {
  return (
    <div className="App">
     <Top/>
    
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='Cat' element={<Content/>}/>
     <Route path='Cat/Maths' element={<Maths/>}/>
     <Route path='Cat/Maths/Box' element={<Box/>}/>
     <Route path='Cat/Science' element={<Science/>}/>
     <Route path='Cat/English' element={<English/>}/>
     <Route path='Cat/Affairs' element={<Affairs/>}/>
     <Route path='Profile' element={<Profile/>}/>
     </Routes>
     
   
    
    </div>
  );
}

export default App;
