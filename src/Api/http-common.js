import axios from "axios";
export default axios.create({
  baseURL: "http://192.168.1.51:8080/",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});