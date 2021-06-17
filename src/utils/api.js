import axios from 'axios'

const api = axios.create({
    baseURL: 'https://fakestoreapi.com/',
    headers: {
        'Content-Type': 'application/json',
    }
})

/*
    const api = axios.create({
        baseURL: 'https://api-ssl.bitly.com/v4/',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`
        }
    })
*/

export default api;