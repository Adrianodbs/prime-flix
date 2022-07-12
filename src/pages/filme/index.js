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

  function salvarFilme() {
    const minhaLista = localStorage.getItem('@primeflix')

    // Precisa verificar se a lista existe, se não existir iniciar em um array vazio
    // json para converter novamente em uma lista
    let filmesSalvos = JSON.parse(minhaLista) || []

    // Depois de criar eu preciso verificar se o filma está dentro do storage
    // some é um método para verificar se dentro da lista tem pelo um item com a comparação que eu fizer
    const hasFilme = filmesSalvos.some(
      filmesSalvos => filmesSalvos.id === filme.id
    )

    if (hasFilme) {
      alert('esse filme já está na lista')
      return
    }

    // Para colocar um item na array
    // Stringfy para transformar em uma string, já que não conseguimos salvar uma array
    filmesSalvos.push(filme)
    localStorage.setItem('@primeflix', JSON.stringify(filmesSalvos))
    alert('Filme salvo com sucesso')
  }

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
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a
            // Usamos o target para abrir o trailer em outra guia
            target="blank"
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
