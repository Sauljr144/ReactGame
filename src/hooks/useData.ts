import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Axios, AxiosRequestConfig, CanceledError } from "axios";

// Generic custom hook

interface FetchResponse<T> {
  count: number;
  results: T[];
}
// ? means optional
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any
) => {
  const [data, setData] = useState<T[]>([]); //setting the type of useState with the Game interface
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController(); //disconnects from API
      setIsLoading(true); //indicator will appear when data is loading
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((response) => {
          setData(response.data.results);
          setIsLoading(false);
        }) ///setting out loading indicator to false
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
          setIsLoading(false); //if an error we wont see the loading indicator
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  ); //always have the dependacy [value]
  return { data, error, isLoading };
};

export default useData;
