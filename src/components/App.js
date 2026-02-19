import React, { useState } from 'react';
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
  // state will hold the ref to the header element so we can use it in the intersection observer in Home.js
  const [headerEl, setHeaderEl] = useState(null);

  return (
    <div className='container'>
      <HeaderProvider>
        <Header setHeaderEl={setHeaderEl} />
        <main className='main'>
          <React.Suspense fallback={<Loading />}>
            <Routes>
              <Route path='*' element={<NotFound />} />
              <Route
                path='/'
                exact
                element={<Home headerEl={headerEl} />}
              >
                Home
              </Route>
              <Route
                path='/menu'
                element={<Menu headerEl={headerEl} />}
              >
                Menu
              </Route>
              <Route
                path='/about'
                element={<About headerEl={headerEl} />}
              >
                About
              </Route>
            </Routes>
          </React.Suspense>
        </main>
        <Footer />
      </HeaderProvider>
    </div>
  );
}

export default App;
