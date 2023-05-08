import React from 'react'
import foto1 from '../images/phones/iphone-banner.png';
import foto2 from '../images/phones/iphone-feature.png';
import foto3 from '../images/phones/i-phone-screen.png';

export default function Inicio() {
  return (
    <>
        <section className="banner bg-1" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 align-self-center">
                        
                        <div className="content-block">
                            <h1>Amazing App Best for business</h1>
                            <h5>Let you track everything in your life with a simple way</h5>
                            
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
                    <div className="col-md-4">
                        
                        <div className="image-block">
                            <img className="img-fluid phone-thumb" src={foto1} alt="iphone-banner"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="about section bg-2" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center text-center">
                        
                        <div className="image-block">
                            <img className="phone-thumb-md img-fluid" src={foto2} alt="iphone-feature" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10 m-md-auto align-self-center ml-auto">
                        <div className="about-block">
                            
                            <div className="about-item">
                                <div className="icon">
                                    <i className="ti-palette"></i>
                                </div>
                                <div className="content">
                                    <h5>Creative Design</h5>
                                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born
                                        and I will give you a complete accounta</p>
                                </div>
                            </div>
                            <div className="about-item active">
                                <div className="icon">
                                    <i className="ti-panel"></i>
                                </div>
                                <div className="content">
                                    <h5>Easy to Use</h5>
                                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born
                                        and I will give you a complete accounta</p>
                                </div>
                            </div>
                            <div className="about-item">
                                <div className="icon">
                                    <i className="ti-vector"></i>
                                </div>
                                <div className="content">
                                    <h5>Best User Experience</h5>
                                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born
                                        and I will give you a complete accounta</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section feature" id="feature">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h2>App Features</h2>
                            <p>Demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee idea of
                                denouncing pleasure and praising</p>
                        </div>
                    </div>
                </div>
                <div className="row bg-elipse">
                    <div className="col-lg-4 align-self-center text-center text-lg-right">
                        <div className="feature-item">
                            <div className="icon">
                                <i className="ti-brush-alt"></i>
                            </div>
                            <div className="content">
                                <h5>Beautiful Interface Design</h5>
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="icon">
                                <i className="ti-gift"></i>
                            </div>
                            <div className="content">
                                <h5>Unlimited Features</h5>
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center">
                        <div className="feature-item mb-0">
                            <div className="icon">
                                <i className="ti-comments"></i>
                            </div>
                            <div className="content">
                                <h5>Full free chat</h5>
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising</p>
                            </div>
                        </div>
                        <div className="app-screen">
                            <img className="img-fluid" src={foto3} alt="app-screen"/>
                        </div>
                        <div className="feature-item">
                            <div className="icon">
                                <i className="ti-support"></i>
                            </div>
                            <div className="content">
                                <h5>24/7 support by real people</h5>
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-left align-self-center">
                        <div className="feature-item">
                            <div className="icon">
                                <i className="ti-image"></i>
                            </div>
                            <div className="content">
                                <h5>Retina ready greaphics</h5>
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="icon">
                                <i className="ti-pie-chart"></i>
                            </div>
                            <div className="content">
                                <h5>IOS & android version </h5>
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
