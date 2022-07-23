import axios from "axios";

let headers = {};
const client = axios.create({
  baseURL: "http://pos.appsthing.com",
  headers,
});

client.interceptors.request.use(async (config) => {});
