import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Blog() {
  const { id } = useParams(); // Para leer el id pasado en la ruta
  const [blogPost, setBlogPost] = useState(null); // Estado para guardar el blog buscado
  const [blogComments, setBlogComments] = useState(null); // Estado para guardar los comentarios

  //ESTE ES EL HOOK useEffect PARA OBTENER INFO DE UN BLOG
  useEffect(() => {
    // Definicion de la funcion que busca el post usando Axios
    const buscaBlogPost = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setBlogPost(response.data); // Guardar el post en el estado
      } catch (error) {
        console.error("Error al buscar el blog:", error);
      }
    };
    buscaBlogPost(); // Llamar la funcion para que se ejecute
  }, [id]); // Buscar blog cuando el id sea diferente



  //ESTE ES EL HOOK useEffect PARA OBTENER COMENTARIOS DE ESTE BLOG
  useEffect(() => {
    // Definicion de la funcion que busca el post usando Axios
    const buscaBlogComments = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        );
        setBlogComments(response.data); // Guardar el post en el estado
      } catch (error) {
        console.error("Error al buscar comentarios:", error);
      }
    };
    buscaBlogComments(); // Llamar la funcion para que se ejecute
  }, [id]); // Buscar los comentarios cuando el id sea diferente

  if (!blogPost) {
    return <div>Cargando...</div>; // Mostrar mensaje cargando 
  }

  return (
    <section class="py-5">
      <div class="container px-5 my-5">
        <div class="row gx-5">
          <div class="col-lg-3">
            <div class="d-flex align-items-center mt-lg-5 mb-4">
              <img
                class="img-fluid rounded-circle"
                src={"https://picsum.photos/50/50?random="+blogPost.id}
                alt="..."
              />
              <div class="ms-3">
                  <div class="fw-bold">Valerie Luna</div>  {/*//Cambiar  por user.username */}
                  <div class="text-muted">News, Business</div> {/*//Cambiar por user.company.name */}
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <article>
              <header class="mb-4">
                <h1 class="fw-bolder mb-1">{blogPost.title}</h1>
                <div class="text-muted fst-italic mb-2">{new Date(Date.now()).toDateString()}</div>
              </header>

              <figure class="mb-4">
                <img
                  class="img-fluid rounded"
                  src={"https://picsum.photos/900/400?random="+blogPost.id}
                  alt="..."
                />
              </figure>

              <section class="mb-5">
                <p class="fs-5 mb-4">{blogPost.title}</p>
              </section>
            </article>

            <section>
              {blogComments.map((comment) => (
                <div class="card bg-light" id={comment.id}>
                  <div class="card-body">
                    <div class="d-flex mb-4">
                      <div class="flex-shrink-0">
                        <img
                          class="rounded-circle"
                          src={"https://picsum.photos/50/50?random="+comment.id}
                          alt="..."
                        />
                      </div>
                      <div class="ms-3">
                        <div class="fw-bold">{comment.name}</div>
                        {comment.body}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
