import React from 'react'
import styles from './contact-us.module.css'
import NavScrollExample from '../navbar/Navbar';
import AnimatedPage from '../Animate/Animate';

export default function ContactUs() {
  const handleSubmit = () => {

  }
  const handleInputChange = () => {

  }

  return (
    <>

    <NavScrollExample />
    <div clasName={styles.fullPage}>
    <AnimatedPage>
    <section className = "contactus-section">
      <div className ="container">
        <div className ="row justify-content-center">
          <div clasName = "col-md-10">
            <div className = "wrapper">
              <div className='row no-gutters'>
                <div className = "col-md-6">
                  <div className='contact wrap w-100 p-lg-5 p-4'>
                    <h3 className='mb-4'>Send us a Message</h3>
                    <form id="contactForm" className='contactForm' onSubmit={handleSubmit}>
                      <div className='row'>
                        <div className='col-md-12'>
                          <div className='form-group'>
                              <input 
                                type="text" 
                                className='form-control'
                                name='name'
                                placeholder='Name'
                                onChange={handleInputChange}
                              />
                          </div>
                        </div>

                        <div className='col-md-12'>
                          <div className='form-group'>
                              <input 
                                type="email" 
                                className='form-control'
                                name='email'
                                placeholder='Email'
                                onChange={handleInputChange}
                              />
                          </div>
                        </div>

                        <div className='col-md-12'>
                          <div className='form-group'>
                              <input 
                                type="text" 
                                className='form-control'
                                name='subject'
                                placeholder='Subject of the Message'
                                onChange={handleInputChange}
                              />
                          </div>
                        </div>

                        <div className='col-md-12'>
                          <div className='form-group'>
                              <textarea 
                                type="text" 
                                className='form-control'
                                name='message'
                                placeholder='Message'
                                onChange={handleInputChange}
                              ></textarea>
                          </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='formgroup'>
                              <input type="submit" value="Send Message" className='btn btn-primary'/>
                            </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className='col-md-6 d-flex align-items-stretch'>
                    <div className='info-wrap w-100 p-lg-5 p-4 img'>
                      <h3>Contact Us</h3>
                      <p className='mb-4'>
                        Baatein ye kabhi na main bhulu na
                      </p>
                      <div className='dbox w-100 dflex align-items-start'>
                        <div className='dflex align-items-center justify-content-center'>
                          <span className='fa fa-map-marker'></span>
                        </div>
                        <div className='text pl-3'>
                          <p>
                            <span>Address:</span> Mera Ghar
                          </p>
                        </div>
                      </div>

                      <div className='dbox w-100 dflex align-items-start'>
                        <div className='dflex align-items-center justify-content-center'>
                          <span className='fa fa-phone'></span>
                        </div>
                        <div className='text pl-3'>
                          <p>
                            <span>Phone:</span> 8291**6737😉
                          </p>
                        </div>
                      </div>

                      <div className='dbox w-100 dflex align-items-start'>
                        <div className='dflex align-items-center justify-content-center'>
                          <span className='fa fa-paper-plane'></span>
                        </div>
                        <div className='text pl-3'>
                          <p>
                            <span>Email:</span> react-sucks@getalife.org
                          </p>
                        </div>
                      </div>

                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </AnimatedPage>
  </div>

    </>
    
  
    
  )
}