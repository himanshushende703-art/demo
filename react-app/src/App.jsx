import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const fetchData = async () => {
    try {
      let res = await fetch("https://api.restful-api.dev/objects");
      let resJson = await res.json();
      console.log(resJson);
    } catch (error) {
      throw error;
    }
  };

  const creatData = async () => {
    try {
      let res = await fetch("https://api.restful-api.dev/objects", {
        method: "POST",
        headers: "application/json",
        data: JSON.stringify({
          name: "Apple MacBook Pro 16",
          data: {
            "year": 2019,
            "price": 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB",
          },
        }),
      });

       let resJson = await res.json();
      console.log(resJson);

    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    fetchData();
    creatData()
  }, []);

  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default App;
