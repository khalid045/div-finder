import React, { useEffect, useState } from "react";
import axios from "axios";
import CardDetails from "./CardDetails";

const useAPI = () => {
  const [divData, setDivData] = useState();
  const [isloading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fetchData = async (username) => {
    //setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setDivData(response.data);
      //setIsLoading(false);
    } catch (error) {
      setIsError("No result", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { divData, isloading, isError, fetchData };
};

export default useAPI;
