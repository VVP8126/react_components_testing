import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Main from './pages/Main';
import Page404 from './pages/Page404';
import UserDetailedPage from './pages/UserDetailedPage';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div>
      <div className='menu_block'>
        <Link data-testid="main-page-link"  className='menu_item' to={"/"} >MAIN</Link>
        <Link data-testid="redux-page-link" className='menu_item' to={"/counter"} >REDUX</Link>
        <Link data-testid="about-page-link" className='menu_item' to={"/about"} >ABOUT</Link>
      </div>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/about/:id' element={<UserDetailedPage />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/' element={<Main />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
