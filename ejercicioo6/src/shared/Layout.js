import React from 'react'
import { Outlet } from 'react-router-dom'
import Pie from '../Pie';
import Navegacion from './Navegacion'

export default function () {
  return (
    <div className="d-flex flex-column">
        <main className="flex-shrink-0">
            <Navegacion/>
            <section className="py-5 bg-light">
                <div classNameName="container px-5">
                    <div className="row gx-5">
                        <div className="col-xl-8">
                            <h2 className="fw-bolder fs-5 mb-4">Blogs</h2>
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </section>       
        </main>
        <Pie/>  
    </div>
  );
}
