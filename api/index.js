import axios from "axios";

const API_KEY = '45782269-16b5a7482e38e0a05105c8';

const apiUrl = `https://pixabay.com/api/?key=${API_KEY}`;

const formatUrl = (params)=>{//{q,page,category,order}
    let url = apiUrl+"&per_page=24&safesearch=true&editors_choice=true";
    if(!params) return url;
    let paramKeys = Object.keys(params);
    paramKeys.map(key=>{
        let value = key=='q'?encodeURIComponent(params[key]): params[key];
        url += `&${key}=${value}`;
    });
    // console.log('final url:', url);
    return url;
}

export const apiCall = async (params)=>{
    try{
        const response = await axios.get(formatUrl(params))
        const {data} = response;
        return {success:true, data}

    }catch(err){
        console.log('got error', err.message);
        return {success: false, msg:err.message};
    }
}