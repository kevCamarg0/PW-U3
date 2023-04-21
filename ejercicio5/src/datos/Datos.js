import React from 'react';
import { useParams } from 'react-router-dom';


export default function Datos() {
  const {id} = useParams();
  return (
    <div> El id recibido es {id}</div>
  )
}
