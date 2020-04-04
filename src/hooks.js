
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    setLoading(false);
    setData(json);
  }
  
  useEffect(() => {
    fetchUrl();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [data, loading];
}

function useQuery(search) {
  return new URLSearchParams(search);
}

export { useFetch, useQuery };