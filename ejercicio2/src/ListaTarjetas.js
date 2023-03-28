import React from 'react'
import Tarjeta from './Tarjeta'

export default function ListaTarjetas() {
  return (
    <div className='container'>
        <div className='row'>
            <div className="col-4">
                <Tarjeta />
            </div>
            <div className="col-4">
                <Tarjeta />
            </div>
            <div className="col-4">
                <Tarjeta />
            </div>
        </div>
    </div>
  )
}
