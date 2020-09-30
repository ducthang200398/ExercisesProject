import axios from 'axios';
   

export default function API(url,method,headers,data){
    return axios({
        method:method,
        url:url,
        headers:headers,
        data:data
    })
}

// export default function API(url,method,headers,data){
//     return axios({
//         method:method,
//         url:url,
//         headers:headers,
//         data:data
//     })
// }