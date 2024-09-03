import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    console.log('Fetching URL:', url);
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'd4fa24575cmsh32c695271a9cb7fp1f9df3jsn3be195fb0b4c' ,
    },
  });
    
  return data;
}