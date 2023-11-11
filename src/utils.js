import axios from "axios";

const ACCESS_KEY = import.meta.env.VITE_API_KEY;

const customFetch = axios.create({
  baseURL: "https://api.unsplash.com/search",
  headers: {
    Accept: "applicaiton/json",
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export default customFetch;
