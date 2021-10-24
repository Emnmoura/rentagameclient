import axios from 'axios'

const api = axios.create({
    baseURL: "https://rentagameapi.herokuapp.com/"
})

export default api
