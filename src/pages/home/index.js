// chave api - 4d1403d051e04485d72f451e01622538

import { useEffect, useState } from 'react'
import api from '../../services/api'

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

      console.log(response.data.results)
    }

    loadFilmes()
  }, [])
  return <h1>Bem vindo a Home</h1>
}
