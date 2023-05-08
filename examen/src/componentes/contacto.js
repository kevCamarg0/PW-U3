import React, { useState } from 'react'
import foto1 from '../images/phones/iphone-banner.png';
import foto2 from '../images/logo.png';

export default function Contacto() {
    const [valorUsuario, setValorUsuario] = useState('');

    const cambioCorreo = (event) => {
        setValorUsuario(event.target.value);
    };
  return (
    <>
        <section className="section testimonial bg-primary-shape" id="testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h2 className="text-white">Our Happy Customers</h2>
                            <p className="text-white">Demoralized by the charms of pleasure of the moment, so blinded by desire, that they
                                cannot foresee idea of denouncing pleasure and praising</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="testimonial-slider">
                            <div className="testimonial-item">
                                <div className="row">
                                    <div className="col-md-5 client-img">
                                    </div>
                                    <div className="col-md-7">
                                        <div className="p-4 bg-white">
                                            <strong className="mb-3 d-block">They are great agency</strong>
                                            <p className="lead font-italic mb-4">I recently hired Genox to develop a new version of my most popular website
                                                and Im extremely happy with their work.</p>
                                            <h6>Mike Andrew</h6>
                                            <p>CEO - Philandropia</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <div className="row">
                                    <div className="col-md-5 client-img" >
                                    </div>
                                    <div className="col-md-7">
                                        <div className="p-4 bg-white">
                                            <strong className="mb-3 d-block">They are great agency</strong>
                                            <p className="lead font-italic mb-4">I recently hired Genox to develop a new version of my most popular website
                                                and Im extremely happy with their work.</p>
                                            <h6>Selena Catt</h6>
                                            <p>CEO - Philandropia</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section cta-subscribe" id="contact">
            <div className="container">
                <div className="row bg-elipse-red">
                    <div className="col-lg-4">
                        <div className="image"><img className="phone-thumb" src={foto1} alt="iphone-app"/></div>
                    </div>
                    <div className="col-lg-8 align-self-center">
                        <div className="content">
                            <div className="mb-4">
                                <h2>Subscribe Our Newsletter</h2>
                            </div>
                            <div className="description">
                                <p>Demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee idea
                                    of denouncing pleasure and praising</p>
                            </div>
                            <form action="#">
                                <div className="input-group">
                                    <input type="text" className="form-control" value={valorUsuario} onChange={cambioCorreo} placeholder="Enter your email address"/>
                                    <div className="input-group-append">
                                        <span className="input-group-text ti-arrow-right"></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer className="footer-main">
            <div className="container">
                <div className="row">
                <div className="col-lg-6 mr-auto">
                    <div className="footer-logo">
                        <img src={foto2} alt="footer-logo"/>
                    </div>
                    <div className="copyright">
                    <p>@2019 Themefisher All Rights Reserved | Design and Developed By : <a href="https://themefisher.com/" target="_blank" rel="noreferrer">Themefisher</a>
                        <br/> Check Our Store for more <a href="https://themefisher.com/free-bootstrap-templates/" target="_blank" rel="noreferrer">Bootstrap Template</a>
                    </p>
                    </div>
                </div>
                <div className="col-lg-6 text-lg-right">
                    <ul className="social-icons list-inline">
                    <li className="list-inline-item">
                        <a target="_blank" rel="noreferrer" href="https://facebook.com/themefisher"><i className="text-primary ti-facebook"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/themefisher"><i className="text-primary ti-twitter-alt"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a target="_blank" rel="noreferrer" href="https://github.com/themefisher"><i className="text-primary ti-linkedin"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a target="_blank" rel="noreferrer" href="https://instagram.com/themefisher"><i className="text-primary ti-instagram"></i></a>
                    </li>
                    </ul>
                    <ul className="footer-links list-inline">
                    <li className="list-inline-item">
                        <a className="scrollTo" href="#about">ABOUT</a>
                    </li>
                    <li className="list-inline-item">
                        <a className="scrollTo" href="#team">TEAM</a>
                    </li>
                    <li className="list-inline-item">
                        <a className="scrollTo" href="#contact">CONTACT</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </footer>
    </>
  )
}
