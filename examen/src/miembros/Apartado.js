import React from 'react'

export default function Apartado(datos) {
  return (
    <div className="col-lg-3 col-md-6">
        <div className="team-member text-center mb-4 mb-lg-0">
            <div className="image">
                <img className="img-fluid" src={datos.imagen} alt="team-member"/>
            </div>
            <div className="name">
                <h5>{datos.nombre}</h5>
            </div>
            <div className="position">
                <p>{datos.rol}</p>
            </div>
            <div className="skill-bar">
                <div className="progress">
                    <div className="progress-bar" ></div>
                </div>
                <span>{datos.progreso}</span>
            </div>
            <ul className="social-icons list-inline">
                <li className="list-inline-item">
                    <a href="/"><i className="ti-facebook"></i></a>
                </li>
                <li className="list-inline-item">
                    <a href="/"><i className="ti-twitter-alt"></i></a>
                </li>
                <li className="list-inline-item">
                    <a href="/"><i className="ti-linkedin"></i></a>
                </li>
                <li className="list-inline-item">
                    <a href="/"><i className="ti-instagram"></i></a>
                </li>
            </ul>
        </div>
    </div>
  )
}
