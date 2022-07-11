// Base da Url - https://api.themoviedb.org/3/
// url da api - https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1

import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

export default api
