import { useState, useEffect } from 'react';

interface IUseFetchWithAbortController {
  fetchData: unknown,
  error: Error | null,
  isLoading: boolean
}

export const useFetchWithAbortController = (url: string, option?: ResponseInit):IUseFetchWithAbortController => {
  const [fetchData, setFetchData] = useState();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const abortController = new AbortController();

    const getFetchedData = async() => {
      try {
        const signal =  abortController.signal;
        let response = await fetch(url, { 
          ...option, signal });
        let data = await response.json();
        
        setIsLoading(false);
        setFetchData(data);

      } catch(error:unknown){
        console.log("ERROR")
        if(error instanceof Error){
          setError(error);
          setIsLoading(false);
        }
      }

    }

    getFetchedData();

    return () => {
      abortController.abort();
    }

  }, [url, option])
  
  return { fetchData, error, isLoading}
}