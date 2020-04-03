
import { useState, useEffect } from "react";

function useFetch(url, method, body) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const opitons = {
    method,
  }
  if( method  === "POST") {
    opitons.headers = {'Content-Type': 'application/json'};
    (opitons.body = JSON.stringify(body));
  }
 

  async function fetchUrl() {
    const response = await fetch(url, opitons);
    const json = await response.json();
    console.log('json', json)
    setLoading(false);
    setData(json);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
}
export { useFetch };