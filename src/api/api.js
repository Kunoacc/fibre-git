import axios from "axios"

class Api {
    constructor(){
        this.axios = axios.create({
            baseURL: 'https://api.github.com/'
        })
    }

    async getUsers(query){
        let response = await this.axios.get(`search/users?q=${query}`)
        return response
    }

    async getUser(username){
        let response = await this.axios.get(`users/${username}`)
        return response
    }

    async getResource(link){
        let response = await axios.get(this._sanitizeLink(link))
        return response
    }

    _sanitizeLink(link){
        const url = link.split('{')
        return url[0]
    }
}

const api = new Api()

export default api