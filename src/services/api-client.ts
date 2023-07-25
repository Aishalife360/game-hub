import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '60f3028152b84c91be84fa944b34bf86'

    }
})