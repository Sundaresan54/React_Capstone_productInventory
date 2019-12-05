import axios from 'axios';

const getAllProducts=async()=>{
    let res = await axios.get('http://localhost:3001/products/all')
    .then((result)=>result.data)
    .catch(e=>{
        throw new Error(e.response.data.message);
      });
      return res;
}

const getAll=async()=>{
    let res = await axios.get('http://localhost:3001/products/all')
    .then((result)=>result.data)
    .catch(e=>{
        throw new Error(e.response);
      });
      return res;
}

export { getAllProducts, getAll};

// async function register(user) {
//     const res= await axios.post(config.registerUrl, user)
//     .then(res=>{
//         return res.data
//       })
//     .catch(e=>{
//       throw new Error(e.response.data.message);
//     });
//     return res;
    
//   }