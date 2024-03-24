import axios from "axios"

export const getData = (url) => axios.get(`https://fakestoreapi.com${url}`)
    .then((res) => {
        return res
    }).catch((error) => {
        console.log(error)
    })