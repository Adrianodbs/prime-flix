import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import api from '../../services/api'

import './filme-info.css'

export default function Filme() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [filme, setFilme] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: '4d1403d051e04485d72f451e01622538',
            language: 'pt-BR'
          }
        })
        .then(response => {
          setFilme(response.data)
          setLoading(false)
        })
        // Em caso de erro ele vai cair no catch
        .catch(() => {
          console.log('filme não encontrado')
          navigate('/', { replace: true })
          return
        })
    }

    loadFilme()

    return () => {}
  }, [navigate, id])

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando detalhes ...</h1>
      </div>
    )
  }
  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>

      <strong>Avaliação: {filme.vote_average} / 10</strong>

      <div className="area-buttons">
        <button>Salvar</button>
        <button>
          <a
            // Usamos o target para abrir o trailer em outra guia
            target="_blank"
            rel="external"
            href={`https://youtube.com/results?search_query=${filme.title} Trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  )
}
