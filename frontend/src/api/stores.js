import {requests} from './index';


export const getStores = () => {
    return requests.get('stores');
}

export const createStore = (store) => {
    return requests.post('/stores' , store);
}

export const modifyStore = (store) => {
    return requests.putch('/stores' , store);
}
