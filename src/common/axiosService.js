import axios from 'axios';

export default function callApi(url,method,headers,body){
    const api= axios.create({url:url,method:method, headers:headers,body:body});
    return api;
}


