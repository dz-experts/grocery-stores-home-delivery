import {requests} from './index';



export const getStore = (id) => {
    return requests.get(`/stores/${id}`);
}

export const getStores = () => {
    return requests.get('/stores');
}

export const createStore = (store) => {
    return requests.post('/stores' , store);
}

export const updateStore = (store) => {
    return requests.put(`/stores/${id}`, store);
}

