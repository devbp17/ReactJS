import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Card from './Card'
import Project from './project';

function App() {
  return(
    <HashRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Card' element={<Card/>}/>
      <Route path='/project' element={<Project/>}/>
     </Routes>
    </HashRouter>
  );
}

export default App
