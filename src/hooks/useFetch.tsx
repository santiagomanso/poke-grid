import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/type/electric");
    };
  }, []);

  return;
};

export default useFetch;
