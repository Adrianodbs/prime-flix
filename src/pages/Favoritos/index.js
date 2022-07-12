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

  function excluirFilme(id) {
    // Primeiro vamos filtar todos os filmes e retirar aquele que eu cliquei
    let filtroFilmes = filmes.filter(item => {
      // Ou seja, vou devolver todos os filmes, menos o que eu cliquei
      return item.id !== id
    })

    setFilmes(filtroFilmes)
    // Depois eu preciso salvar no localStorage
    localStorage.setItem('@primeflix', JSON.stringify(filtroFilmes))
  }
  return (
    <div className="meus-filmes">
      <h1>Meus filmes</h1>

      {filmes.length === 0 && (
        <span>Você não possui nenhum filme salvo :(</span>
      )}

      <ul>
        {filmes.map(item => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
