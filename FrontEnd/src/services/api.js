import axios from 'axios' //importando axios

const api = axios.create({ // create criar uma conexão com oservidor
    baseURL:'http://localhost:3000'// back-end
})

export default api;