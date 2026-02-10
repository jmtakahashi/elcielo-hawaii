import { Routes, Route } from 'react-router';
import Header from './Header';
import Home from './Home';
import Menu from './Menu';
import About from './About';
import NotFound from './NotFound';
import Footer from './Footer';


function App() {  
  return (
    <div className='container'>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' exact element={<Home />}>
            Home
          </Route>
          <Route path='/menu' element={<Menu />}>
            Menu
          </Route>
          <Route path='/about' element={<About />}>
            About
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
