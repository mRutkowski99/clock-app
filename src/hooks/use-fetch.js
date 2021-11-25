import { useState, useCallback } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  const getData = useCallback(async (url, transformDataFn) => {
    try {
      setIsLoading(true);
      setHasError(null);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      transformDataFn(data);
    } catch (error) {
      setHasError(error);
    }

    setIsLoading(false);
  }, []);

  return {
    isLoading,
    hasError,
    getData,
  };
};

export default useFetch;
