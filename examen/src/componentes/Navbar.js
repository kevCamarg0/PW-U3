import React from 'react'
import foto4 from '../images/logo.png';

export default function Navbar() {
  return (
    <nav className="navbar main-nav fixed-top navbar-expand-lg large">
        <div className="container">
            <a className="navbar-brand" href="/"><img src={foto4} alt="logo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="ti-menu text-white"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <a className="nav-link scrollTo" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link scrollTo" href="/pagina2">Pagina 2</a>
                </li>
                <li className="nav-item">
                <a className="nav-link scrollTo" href="/contacto">Contacto</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}
