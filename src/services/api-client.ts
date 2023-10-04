import axios from "axios";

export default axios.create({
  baseURL: "http://api.rawg.io/api",
  params: {
    key: "5701ce2c13b84b0e9a1c572ae05aba70",
  },
});
