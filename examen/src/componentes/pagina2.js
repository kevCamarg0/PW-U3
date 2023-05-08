import React from 'react'
import foto1 from '../images/backgrounds/promo-video-bg.jpg';
import foto2 from '../images/phones/iphone-chat.png';
import ListaPlanes from '../props/listaPlanes';
import Miembros from '../miembros/Miembros';

export default function Pagina2() {
  return (
    <>
        <section className="section promo-video bg-3 overlay">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        
                        <div className="video">
                            <img className="img-fluid" src={foto1} alt="video-thumbnail"/>
                            <div className="video-button video-box">
                                
                                <a href="/">
                                    <span className="icon" data-video="https://www.youtube.com/embed/jrkvirglgaQ?autoplay=1">
                                        <i className="ti-control-play"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ListaPlanes/>
        
        <section className="cta-download bg-3 overlay">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 text-center">
                        <div className="image-block"><img className="phone-thumb img-fluid" src={foto2} alt=""/></div>
                    </div>
                    <div className="col-lg-7">
                        <div className="content-block">
                            <h2>Free Download Now</h2>
                            <p>Demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee idea of
                                denouncing pleasure and praising</p>
                            <div className="app-badge">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a href="/" className="btn btn-download"><i className="ti-android"></i>
                                            <div>Get it on the<span>GOOGLE PLAY</span></div>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/" className="btn btn-download"><i className="ti-apple"></i>
                                            <div>Available on the<span>Apple store</span></div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section counter bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <div className="counter-item">
                            <h3><span className="count" data-count="29">0</span>k</h3>
                            <p>Download</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <div className="counter-item">
                            <h3><span className="count" data-count="200">0</span>k</h3>
                            <p>Active Account</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <div className="counter-item">
                            <h3><span className="count" data-count="60">0</span>k</h3>
                            <p>Happy User</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <div className="counter-item">
                            <h3><span className="count" data-count="300">0</span>k<sup>+</sup></h3>
                            <p>Download</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Miembros/>
    </>
  )
}
