import React from 'react'
import Planes from './planes'
import Encabezado from './Encabezado'

export default function ListaPlanes() {
  return (
   
    <section className="pricing section bg-shape" id="pricing">
        <div className="container"> 
            <Encabezado/>
            <div className="row">
                <div className="col-lg-4 col-md-6"> 
                    <Planes datos={{titulo:"FREE", precio:"$0", texto:"Android App One time payment Build & Publish Life time support"}}/>
                </div>
                <div className="col-lg-4 col-md-6"> 
                    <Planes datos={{titulo:"BASIC", precio:"$19", texto:"Android App One time payment Build & Publish Life time support"}}/>
                </div>
                <div className="col-lg-4 col-md-6"> 
                    <Planes datos={{titulo:"ADVANCE", precio:"$99", texto:"Android App One time payment Build & Publish Life time support"}}/>
                </div>
            </div>
        </div> 
    </section>
    
  )
}
