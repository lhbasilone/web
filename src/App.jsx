import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EbookCard from './components/EbookCard';
import Hero from './components/Hero';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {/*<Route path='/' element={<Hero/>}/>*/}
        <Route path='/' element={<EbookCard/>}/>
        <Route path='/items' element={<ItemListContainer/>}/>
      </Routes>
    
    </BrowserRouter>


  );
}

export default App;
