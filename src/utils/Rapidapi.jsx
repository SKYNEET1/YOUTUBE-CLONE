import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL="https://youtube138.p.rapidapi.com"
const options = {
	
	path: '/auto-complete/?q=desp&hl=en&gl=US',
	headers: {
		'x-rapidapi-key': API_KEY,
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};

export const fetchdata = async (url) => {
    try{
        const {data} = await axios.get(`${BASE_URL}/${url}`,options);
        // options is an optional parameter that you can pass to axios.get(). It is an object that typically includes additional configurations for the HTTP request, such as headers, authentication, query parameters, etc.
        return data;
    }catch(error){
        console.log("error fetching api data :",error);
        throw error;
    }
}