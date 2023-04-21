import React, {useState} from 'react'

export default function Inicio() {
  const [id, setId] = useState(0);
  return (
    <>
      <form>
        <div className="mb-3">
          <label for="idBuscar" className="form-label">ID a buscar</label>
          <input value={id} onChange={(e) => setId(id => e.target.value)} type="text" className="form-control" id="idBuscar" />
        </div>
        <a href={'/datos/'+ id} className="btn btn-primary">Submit</a>
      </form>

    </>
  )
}
