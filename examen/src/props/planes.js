import React from 'react'

export default function Planes({datos}) {
  return (
    <div className="pricing-table text-center">	
        <div className="title">	
            <h5>{datos.titulo}</h5>
        </div>
        <div className="price">	
            <p>{datos.precio}<span>/month</span></p>
        </div>
        <ul className="feature-list">
            <li>{datos.texto}</li>
        </ul>
        <div className="action-button">
            <a href="/" className="btn btn-main-rounded">Start Now</a>
        </div>
    </div>
  )
}
