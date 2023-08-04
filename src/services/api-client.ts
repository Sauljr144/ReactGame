import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'ae535fc7af34465aa7bad9b6fb22a135'
    }
})