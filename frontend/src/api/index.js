import axios from 'axios';

const options = {
    baseURL: 'http://localhost:4000' // process.env.REACT_APP_BACKEND_API
  };
  
const myAxios = axios.create(options);
myAxios.defaults.timeout = 2500;
  
const { CancelToken } = myAxios;
  
let cancel;
  
const cancellation = () => ({
    cancelToken: new CancelToken(function executor(canceller) {
      cancel = canceller;
    })
});
  
export const requests = {
    get:(url) => {
        return myAxios.get(url, cancellation); // example: url = 'stores' 
    },
    post:(url,body) => {
        return myAxios.post(url,body, cancellation);
    },
    put:(url,body) => {
        return myAxios.put(url, body, cancellation);
    },
    delete:() => {
        return myAxios.delete()
    }
}


  