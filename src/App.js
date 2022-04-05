import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import PageNotFound from './components/PageNotFound/PageNotFound';


function App() {
  return (
    <div >
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}>Home</Route>
      <Route path='/home' element={<Home></Home>}>Home</Route>
      <Route path='/blogs' element={<Blogs></Blogs>}>Blogs</Route>
      <Route path='/dashboard'element={<Dashboard></Dashboard>}>Dashboard</Route>
      <Route path='/about' element={<About></About>}></Route>

      <Route path='*'element={<PageNotFound></PageNotFound>}></Route>
      
    </Routes>
    </div>
  );
}

export default App;
