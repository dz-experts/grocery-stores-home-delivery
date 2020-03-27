import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const requests = {
    get:(url) => {
        return axios.get(`${API_URL}/${url}`);
    },
    post:(url , body) => {
        return axios.post(`${API_URL}/${url}`, body)
    },
    put:(url , body ) => {
        return axios.put(`${API_URL}/${url}` , body);
    },
    del:(url) => {
        return axios.delete(`${API_URL}/${url}`);
    },
    patch:(url , data) => {
        return axios.patch(`${API_URL}/${url}` , data);
    }
}