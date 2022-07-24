import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://masak-apa-tomorisakura.vercel.app/api";

export const useAxios = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = async (params) => {
    try {
      const result = await axios.get(params);
      setResponse(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { response, error, loading, fetchData };
};
