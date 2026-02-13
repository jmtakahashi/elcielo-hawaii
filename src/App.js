import { useState } from 'react';
import { HeaderProvider } from './contexts/HeaderContext';
import { Routes, Route } from 'react-router';
import Header from './Header';
import Home from './Home';
import Menu from './Menu';
import About from './About';
import NotFound from './NotFound';
import Footer from './Footer';

function App() {
  // state will hold the ref to the header element so we can use it in the intersection observer in Home.js
  const [headerEl, setHeaderEl] = useState(null);

  return (
    <div className='container'>
      <HeaderProvider>
        <Header setHeaderEl={setHeaderEl} />
        <main className='main'>
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
              element={
                <About headerEl={headerEl} />
              }
            >
              About

            </Route>
          </Routes>
        </main>
        <Footer />
      </HeaderProvider>
    </div>
  );
}

export default App;
