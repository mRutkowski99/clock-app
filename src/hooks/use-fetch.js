import { useState, useCallback } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = useCallback(async (url, transformDataFn) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      transformDataFn(data);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    getData,
  };
};

export default useFetch;
