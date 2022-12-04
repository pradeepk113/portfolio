import React from 'react';
export default function Header() {
  return (
    <>
      <header className='flex' id='top'>
        <ul>
          <li className='main-brand'>
            <a href='#'>
              {'<'} <strong>Pradeep</strong> {'/>'}
            </a>
          </li>
        </ul>
        <label htmlFor='toggle'  className='bar'  >
          <i className='fas fa-bars'></i>
        </label>
        <input type='checkbox' id='toggle' />
        <nav className='nav'>
          <ul className='flex sm-column'>
            <li className='list'>
              <a href='#home'>Home</a>
            </li>

            <li className='list'>
              <a href='#about'>About</a>
            </li>

            <li className='list'>
              <a href='#skills'>Skills</a>
            </li>

            <li className='list'>
              <a href='#tool'>Tools</a>
            </li>

            <li className='list'>
              <a href='#projects'>Projects</a>
            </li>

            <li className='list'>
              <a href='#contact'>Contact</a>
            </li>

            <li className='active'>
              <a href='./assets/docs/Pradeep_Singh_resume.pdf' download>
                Resume
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}