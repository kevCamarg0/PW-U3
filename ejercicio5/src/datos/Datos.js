import React from 'react';
import { useParams } from 'react-router-dom';


export default function Datos() {

  const usuariosDB = [
    {
      idUsuario: 1,
      nombre:'K3v1n',
      edad:21,
      rol:'admin',
      nacionalidad:'Mexicano',
    },
    {
      idUsuario: 2,
      nombre:'4ndr34',
      edad:21,
      rol:'user',
      nacionalidad:'Mexicana',
    },
    {
      idUsuario: 3,
      nombre:'S4sh4',
      edad:8,
      rol:'user',
      nacionalidad:'Mexicana',
    }
  ];

  const {id} = useParams();
  const usuarioSeleccionado = usuariosDB.find((item) => item.idUsuario === parseInt(id));
  return (
    <div> El id recibido es {id}
      <table class="table">
        <thead>
          <tr>
            <th scope="col">IdUsuario</th>
            <th scope="col">Nombre</th>
            <th scope="col">Nacionalidad</th>
            <th scope="col">Rol</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{usuarioSeleccionado.idUsuario}</th>
            <th scope="row">{usuarioSeleccionado.nombre}</th>
            <th scope="row">{usuarioSeleccionado.nacionalidad}</th>
            <th scope="row">{usuarioSeleccionado.rol}</th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
