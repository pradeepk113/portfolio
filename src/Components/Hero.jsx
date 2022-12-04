import React from 'react';

export default function Hero() {
  return (
    <>
      <section className='hero container flex'>
        <article className='flex sm-column'  style={{alignItems:'center'}}>
          <div >
            <h1 style={{textTransform: 'capitalize'}}>
              Hey There!<p>✋</p>
            </h1>
            <h1
              style={{
                textTransform: 'capitalize',
                paddingTop: '1rem',
                marginBottom: '-.5rem',
              }}
            >
              {' '}
              I am
            </h1>
            <h2 style={{ fontWeight: 'bold' }}>
              Pradeep <br /> <small>Kumar Singh</small>
            </h2>
            <h3>
              <a href='#'>
                <i className='fas fa-caret-right'> </i> Full Stack Web Developer
              </a>
            </h3>
            <ul className='display-flex'>
              <li>
                <a href='https://github.com/pradeepk113' className='social-icon'>
                  <i className='fab fa-github'></i>
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/pradeepsinghit/'
                  className='social-icon'
                >
                  <i className='fab fa-linkedin'></i>
                </a>
              </li>
              <li>
                <a href='https://twitter.com/PradeepK113' className='social-icon'>
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a href='mailto:pksingh0315@gmail.com' className='social-icon'>
                  <i className='fa-solid fa-envelope'></i>
                </a>
              </li>
              <li>
                <a href='tel: 7054631708' className='social-icon'>
                  <i className='fa-sharp fa-solid fa-phone'> </i>
                </a>
              </li>
            </ul>
          </div>
          <figure style={{ paddingTop: '3rem'}}>
            <img  src='./assets/docs/pradeep_image.png' alt='Pradeep' />
          </figure>
        </article>
      </section>
    </>
  );
};
