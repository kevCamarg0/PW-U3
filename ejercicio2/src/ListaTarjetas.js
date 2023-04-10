import React from 'react'
import Tarjeta from './Tarjeta'
import Encabezado from './Encabezado'

export default function ListaTarjetas() {
  return (
    
    <div className='container'>
        <div className="row">
            <Encabezado titulo="Tarjetas"/>
        </div>
        <div className='row'>
            <div className="col-4">
                <Tarjeta datos={{titulo:"Nota 1", texto:"Aespa best GG", urlImagen:"https://picsum.photos/120/120?random=1", btn:"Click"}}/>
            </div>
            <div className="col-4">
                <Tarjeta datos={{titulo:"Hola", urlImagen:"https://picsum.photos/120/120?random=2", btn:"Presiona", texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque magna in felis bibendum, vel porta lectus ultrices. Mauris et ligula imperdiet, maximus purus sit amet, finibus enim."}}/>
            </div>
            <div className="col-4">
                <Tarjeta datos={{titulo:"Aespa", urlImagen:"https://picsum.photos/120/120?random=3",btn:"Ir" ,texto:"Giselle te amo"}}/>
            </div>
        </div>
    </div>
  )
}
