import axios from "axios";
import "dotenv/config";

// Check if we are in a browser environment and if process.env exists
const baseURL = typeof window === 'undefined' ? process.env.REACT_APP_BASE_URL_API : "";

const instance = axios.create({ baseURL });

export default instance;
