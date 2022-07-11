// chave api - 4d1403d051e04485d72f451e01622538

import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './home.css'

export default function Home() {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: '4d1403d051e04485d72f451e01622538',
          language: 'pt-BR',
          page: 1
        }
      })

      // console.log(response.data.results)
      setFilmes(response.data.results.slice(0, 10))
    }

    loadFilmes()
  }, [])
  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map(filme => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}
