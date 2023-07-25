import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '22422f060d404870aa452822bffbc772'

    }
})