import React from 'react';

export default function Contact() {
  return (
    <>
      <section id='contact'>
        <h4 style={{ marginBottom: '4rem' }}>Get Tn Touch</h4>
        <div className='contact-box   sm-center   mn-flex-start '>
          <div className='flex-20 sm-flex-50  '>
            <h3 className='contact-h3 '>Let's Connect Here ! </h3>

            <div className='contact-icon-div'>
              <a
                href='https://www.linkedin.com/in/pradeepsinghit/'
                target='blank'
              >
                {' '}
                <i className='fa-brands fa-linkedin'></i>
              </a>
              <a href='https://twitter.com/PradeepK113' target='blank'>
                {' '}
                <i className='fa-brands fa-square-twitter'></i>
              </a>
              <a href='https://github.com/pradeepk113' target='blank'>
                {' '}
                <i className='fa-brands fa-square-github'></i>{' '}
              </a>
              <a
                href='http://api.whatsapp.com/send?phone=7054631708'
                target='blank'
              >
                {' '}
                <i className='fa-brands fa-square-whatsapp'></i>{' '}
              </a>
            </div>
          </div>

          <div className='flex-50 sm-flex-50 sm-between '>
            <h3 className='contact-h3 center'>
              Make Something Amazing Together !{' '}
            </h3>

            <div className='contact-mail sm-bet'>
              <div className='flex-65 view-box sm-flex-60  '>
                <a
                  className='mail'
                  target='blank'
                  href='mailto:pksingh0315@gmail.com  '
                >
                  Mail Me : pksingh0315@gmail.com
                </a>
              </div>
              <div className='flex-40   view-box sm-flex-35'>
                {' '}
                <a className='tel' target='blank' href='tel:7275177116'>
                  Call Me : +917054631708
                </a>
              </div>
            </div>
          </div>

          <div className='flex-20 sm-flex-50 '>
            <h3 className='contact-h3'> Want To Know More !</h3>
            <div className='resume '>
              <div className='view-box sm-flex-45 '>
                <a href='./assets/docs/Pradeep_Singh_resume.pdf' download>
                  Download Resume{' '}
                </a>
              </div>
              <div className='view-box  sm-flex-45 '>
                <a
                  target='blank'
                  href='./assets/docs/Pradeep_Singh_resume.pdf'
                >
                  View Resume{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
