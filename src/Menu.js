import React from 'react'

export default function Menu() {
  const openPDF = (menu) => {
    window.open(`/menu/${menu}.pdf`, '_blank'); // Opens in a new tab
  };

  return (
    <div id='menu' className='container'>
      <section className='menu'>
        <h2>Menu</h2>

        <div className='menu-links'>
          <button href="/ENGLISH.pdf" onClick={() => openPDF('ENGLISH') }>View english menu</button>
          <button href="/JAPANESE.pdf" onClick={() => openPDF('JAPANESE') }>View japanese menu</button>
        </div>
          
        <div className='menu-images'>
          <img src='images/el-cielo-menu-20-2000px.jpg' alt='Menu Item 1' />
          <img src='images/el-cielo-menu-28-2000px.jpg' alt='Menu Item 2' />
          <img src='images/el-cielo-menu-42-2000px.jpg' alt='Menu Item 3' />
          <img src='images/el-cielo-menu-53-2000px.jpg' alt='Menu Item 4' />
          <img src='images/el-cielo-menu-25-2000px.jpg' alt='Menu Item 5' />
        </div>
      </section>
    </div>
  );
}
