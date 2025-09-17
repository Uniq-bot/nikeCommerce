//https://api.escuelajs.co/api/v1/categories/4/products

import axios from "axios";

const API_URL='https://api.escuelajs.co/api/v1/categories/4/products'


export const getShoes= async ()=>{
    try{
        const res=await axios.get(API_URL);
        const ResolvedData=  res
        console.log(res.data[3])

    }
    catch(error){
        console.log(error)
    }
}
getShoes()