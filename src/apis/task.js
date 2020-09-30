import axios from './../common/axios';
export const getData=()=>{
    let body = JSON.stringify({"gia_ban":null,"dia_chi":null});
    let   url= 'http://185.170.76.119:5012/exchange/api/tim_kiem';
    let config = {
        headers: { 
          'Content-Type': 'application/json'
        },
      };
    return axios.post(url,body,config);
}
export const fetchData=()=>{
  console.log("ehhehe");
  let body = '';
  let   url= "http://localhost:5000/exercises/";
  let config = {
      // headers: { 
      //   'Content-Type': 'application/json'
      // },
    };
  return axios.get(url,body,config).then(console.log("hhaah"));
  // return axios.get(url,body);
}


  
//  function fetchDATA() {
//      return axios({
//       method: "GET",
//       url: "http://localhost:5000/exercises/"
//     });
//     // return a;
//   }

// export const getData=()=>{
//   let body =JON.stringify({"gia_ban":null,"dia_chi":null});
//   let url='http://185.170.76.119:5012/exchange/api/tim_kiem';
//   let config = {
//     headers:{
//       'Content-Type':'application/json'
//     },
//   };
//   return axios.post(url,body,config)
// }





export const getDataDidLogin=(id)=>{
  let body = JSON.stringify({id_lender:id,dia_chi:null});
  let url= 'http://185.170.76.119:5012/exchange/api/quan_ly_don_vay';
  let config = {
    headers: { 
      'Content-Type': 'application/json'
    },
  };
  return axios.post(url,body,config);
}

// export const getDataDidLogin=(id)=>{
//   let body= JSON.stringify({id_lender:id,diachi:null})
//   let url ='http://185.179.76.5012/exchange/api/quann_ly_don_vay';
//   let config = {
//     headers: {
//       'Conten-Type': 'application/json'
//     },
//   }
//   return axios.post(url,body,config)


// }







export const updateDataLead=(id_lead,id_lender)=>{
  let body = JSON.stringify({id_lead:id_lead,id_lender:id_lender});
  let url='http://185.170.76.119:5012/exchange/api/mua_lead';
  let config = {
    headers: { 
      'Content-Type': 'application/json'
    },
  };
  return axios.post(url,body,config);
}

// export const updateDataLead=(id_lead,id_lender)=>
// {
//   let body = JSON.stringify({id_lead:id_lead,id_lender:id_lender});
//   let url = 'http://285.170.76.119:5012/exchange/api.mua_lead';
//   let config = {
//     headers: { 
//       'Content-Type': 'application/json'
//     },
//   };
//   return axios.post(url,body,config);
//   };
// }


export const sentInfoLoan=(data)=>{
  
  let body =JSON.stringify(data);
  let url= 'http://185.170.76.119:5012/exchange/api/save_info_borrower';
  let config = {
    headers: { 
      'Content-Type': 'application/json'
    },
  };
  return axios.post(url,body,config);
}
// export const sentInfoLoan=(data)=>{
// let body=JSON.stringify(data);
// let utl= 'http://185.76.119:5012/exchange/api/save_info_borrower';
// let confif={

// headers:{
//   headers:
//   {
//     'Content-Type': 'application/json'
//   },
// }
// }

export const callInfo=(id)=>{
  let body = JSON.stringify({id_lender:id});
  let url= 'http://185.170.76.119:5012/exchange/api/thong_tin_chung';
  let config = {
    headers: { 
      'Content-Type': 'application/json'
    },
  };
  return axios.post(url,body,config);
}



// export const callInfo=(id)=>{
//   let body =JSON.stringify({id_lender:id});
//   let url ='http://185.170.76.119:5012/exchange/api/thong_tin_chung';
//   let config ={
//     headers: {
//       'Content-Type':'application/json'
//     },
//   };
//   return axios.post(url,body,config);
// }
// export const getInfoLead=(id)

