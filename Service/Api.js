import axios from "axios";


const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.solwyz.com/Solwyzwebsite";

const Api = {
  get: async (url, header) => {
    try {
      console.log("API URL:", apiUrl);
      const result = await axios.get(`${apiUrl}/${url}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...header,
        },
      });
      return result;
    } catch (err) {
      return err;
    }
  },

  post: async (url, data, header) => {
    try {
      const result = await axios.post(`${apiUrl}/${url}`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...header,
        },
      });
      return result;
    } catch (err) {
      return err;
    }
  },

  delete: async (url, header) => {
    try {
      const result = await axios.delete(`${apiUrl}/${url}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...header,
        },
      });
      return result;
    } catch (err) {
      return err;
    }
  },

  put: async (url, data, header) => {
    try {
      const result = await axios.put(`${apiUrl}/${url}`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...header,
        },
      });
      return result;
    } catch (err) {
      return err;
    }
  },
};

export default Api;
