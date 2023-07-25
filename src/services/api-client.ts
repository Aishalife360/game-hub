import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'd9e43cfcacfa405180b0320fc5513736'

    },
});