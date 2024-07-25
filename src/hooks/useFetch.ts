/**
 * Custom React hook for performing GET requests using axios with built-in state management.
 *
 * @param {string} url - The URL to fetch data from.
 * @param {Array} deps - Optional dependencies array to trigger re-fetching when values change.
 * @param {object} params - Optional parameters to include in the GET request.
 *
 * @returns {object} An object containing:
 * - data: The data returned from the fetch, or null if no data has been retrieved.
 * - isLoading: Boolean indicating if the request is currently loading.
 * - error: Error message string if an error occurred during the fetch.
 * - response: The full Axios response object.
 * - refetch: Function to manually trigger a re-fetch.
 * - retries: Number of times refetch has been called.
 * - setData: Function to manually set the data state.
 *
 * @example
 * const { data, isLoading, error, refetch } = useFetch("https://api.example.com/data", [], {});
 *
 * useEffect(() => {
 *   if (error) {
 *     console.error("Failed to fetch data:", error);
 *   }
 * }, [error]);
 *
 * if (isLoading) return <p>Loading...</p>;
 * if (!data) return <p>No data found!</p>;
 * return <div>{JSON.stringify(data)}</div>;
 
 
 * @anotherExample
 * import React, { useEffect } from 'react';
import useFetch from './useFetch';

interface User {
  id: number;
  name: string;
  email: string;
}

const MyComponent = () => {
  const { data, isLoading, error, refetch } = useFetch<User[]>('https://api.example.com/users');

  useEffect(() => {
    if (error) {
      console.error('Failed to fetch data:', error);
    }
  }, [error]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data found!</p>;

  return (
    <div>
      {data.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
      <button onClick={refetch}>Refetch Data</button>
    </div>
  );
};

export default MyComponent;

 */

import axios, { AxiosError, AxiosResponse, isCancel } from "axios";
import { Dispatch, useEffect, useState, SetStateAction } from "react";

function useFetch<T>(
  url: string,
  deps: unknown[] = [],
  params: object = {}
): {
  data: T | null;
  isLoading: boolean;
  error: string;
  response: AxiosResponse<T> | null;
  refetch: () => void;
  retries: number;
  setData: Dispatch<SetStateAction<T | null>>;
} {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string>("");
  const [response, setResponse] = useState<AxiosResponse<T> | null>(null);
  const [retries, setRetries] = useState<number>(0);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      setError("");

      try {
        const res: AxiosResponse<T> = await axios.get(url, {
          params,
          signal: controller.signal,
        });
        setData(res.data);
        setResponse(res as AxiosResponse<T>);
      } catch (err) {
        if (!isCancel(err)) {
          const axiosError = err as AxiosError;
          setError(axiosError.message || "Something went wrong");
          setResponse(axiosError.response as AxiosResponse<T>);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, retries, ...deps, params]);

  const refetch = () => {
    setRetries((prev) => prev + 1);
  };

  return { data, setData, isLoading, error, response, refetch, retries };
}

export default useFetch;
