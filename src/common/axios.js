import axios from 'axios';

// class AxiosService{
//   constructor(){
//     const instance =axios.create();
//     instance.interceptors.response.use(this.handleSuccess,this.handleError);
//     this.instance=instance;
//   }
//   handleSuccess(response){
//     return response;
//   }
//   handleError(error){
//     return Promise.reject(error);
//   }
//   get(url){
//     return this.instance.get(url);
//   }
//   post(url){
//     return this.instance.post(url);
//   }
//   put(url){
//      return this.instance,put(url);
//   }
//   delete(url){
//     return this.instance.delete(url);
//   }
// }

class AxiosService {
  constructor() {
    const instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, body, header) {
    return this.instance.post(url, body, header);
  }

  put(url, body) {
    return this.instance.put(url, body);
  }

  delete(url) {
    return this.instance.delete(url);
  }

}

export default new AxiosService();


// async _getCommonCode(p_parent_code, p_tco_company_pk = 0) {
//   let res = await this.$axios.$post("dso/callproc", {
//       proc: "sys_sel_common_code",
//       para: [p_tco_company_pk, p_parent_code]
//   });
//   if (res.data.p_rtn_cur.length > 0) {
//       return res.data.p_rtn_cur;
//   }
//   return [];
// },