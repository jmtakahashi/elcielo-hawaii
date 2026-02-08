import React from 'react'

export default function Menu() {
  return (
    <div id='menu' className='menu'>
      <section className='menu-content'>
        <h2>Menu</h2>
        <p>View english menu</p>
        <p>View japanese menu</p>

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
