import axios from "axios";

export const apiKey = 'be3fbb9327204919be6fc363f1b415af';

export const api = axios.create({
  baseURL: 'https://api.rawg.io/api'
});
