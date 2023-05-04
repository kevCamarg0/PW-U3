import React from 'react'

export default function Navegacion() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-5">
            <a className="navbar-brand" href="index.html">Ejercicio 6</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdownBlog" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                            <li><a className="dropdown-item" href="/">Inicio de Blog</a></li>
                            <li><a className="dropdown-item" href="/post">Post de Blog</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
