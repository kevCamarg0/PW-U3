import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Inicio() {
  const [blogs, setBlogs] = useState();
  useEffect(() =>{
    const obtenerBlogs = async () => {
      try{
        const response = await 
        axios.get('https://jsonplaceholder.typicode.com/posts');
        setBlogs((blogs) => response.data);
      }
      catch{
        console.error("Error al buscar posts.");
      }
    };
    obtenerBlogs();
  }, []);

  if (blogs){
    return(
      <>
        <div>Inicio</div>
        {
          blogs.map((blog) => { return(
              <div className="mb-4">
                  <div className="small text-muted">{blog.id}</div>
                  <a className="link-dark" href={"/blog/" + blog.id} ><h3>{blog.title}</h3></a>
              </div>
            );
          })
        }
        <p>{blogs[0].body}</p>
      </>
    )
  }
  else {
  return (
    <div>Cargando....</div>
  )
  }
}
