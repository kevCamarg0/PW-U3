import React from "react";
import Apartado from "./Apartado";
import foto1 from '../images/team/member-one.jpg';
import foto2 from '../images/team/member-two.jpg';
import foto3 from '../images/team/member-three.jpg';
import foto4 from '../images/team/member-four.jpg';

const personasEquipo = [
  {
    nombre: "JOHNNY DEPP",
    rol: "Production Designer",
    foto: foto1,
    progreso: "85%",
  },
  {
    nombre: "CRISTIN MILIOTI",
    rol: "UX Researcher",
    foto: foto2,
    progreso: "95%",
  },
  {
    nombre: "JOHN DOE",
    rol: "Head of Ideas",
    foto: foto3,
    progreso: "80%",
  },
  {
    nombre: "MARIO GOTZE",
    rol: "UX/UI designer",
    foto: foto4,
    progreso: "75%",
  },
  
  
];

export default function Miembros() {
    return (
    <section className="section team bg-shape-two" id="team">
        <div className="container">
            <div className="row">
                {personasEquipo.map((member) => (
                <Apartado key={member.nombre} nombre={member.nombre} rol={member.rol} imagen={member.foto} progreso={member.progreso}/>
                ))}
            </div>
        </div>
    </section>
  );
};
