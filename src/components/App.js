import React from 'react';
import { HeaderProvider } from '../contexts/HeaderContext';
import { Routes, Route } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import Loading from './Loading';

const Home  = React.lazy(() => import('./Home'));
const Menu = React.lazy(() => import('./Menu'));
const About  = React.lazy(() => import('./About'));
const NotFound  = React.lazy(() => import('./NotFound'));

function App() {
  return (
    <HeaderProvider>
      <Header />
      <main className='main'>
        <React.Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </React.Suspense>
      </main>
      <Footer />
    </HeaderProvider>
  );
}

export default App;
