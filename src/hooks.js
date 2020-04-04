
import { useState, useEffect } from "react";

function useFetch(url, method, body) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const opitons = {
    method,
  }
  if( method  === "POST") {
    opitons.headers = {
      // 'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Content-Type': 'application/json',
      // 'Accept': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Credentials': 'true'
    };

    (opitons.body = JSON.stringify(body));
  }
 
  async function fetchUrl() {
    const response = await fetch(url, opitons);
    const json = await response.json();
    setLoading(false);
    setData(json);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
}

function useQuery(search) {
  return new URLSearchParams(search);
}

export { useFetch, useQuery };