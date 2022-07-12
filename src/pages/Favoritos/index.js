import './favoritos.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Favoritos() {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    const minhaLista = localStorage.getItem('@primeflix')
    // O dado vem como string, então precisamos converter para um array
    setFilmes(JSON.parse(minhaLista) || [])
  }, [])
  return (
    <div className="meus-filmes">
      <h1>Meus filmes</h1>

      <ul>
        {filmes.map(item => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
