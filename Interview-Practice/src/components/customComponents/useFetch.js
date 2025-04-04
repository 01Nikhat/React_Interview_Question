import React from 'react'
import { useState ,useEffect} from 'react'

export default function useFetch(url) {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
      
    const fetchData = async ()=>{
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Fetching data error",error);
      }
      finally{
        setLoading(false);
      }
    }
    fetchData();
  },[url]);
  return {data, loading}
}
