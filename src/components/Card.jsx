import React, { useEffect, useState } from "react";

const Card = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.cricapi.com/v1/cricScore?apikey=a916983b-aae1-42db-876f-05745fdb8f9c"
      );
      const data = await response.json();
      console.log(data);
      setData(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-teal-50 m-6 p-6 max-w-fit flex justify-center mx-auto">
      {data ? (
        data.map((curVal) => {
          console.log(curVal)
          return (
            <div>
              <h1>Matches Name</h1>
              <h2>Type</h2>
              <h3>Hello World</h3>
              <h5>Status: Won by 4 Wickets</h5>
            </div>
          );
        })
      ) : (
        <p>OOPS! Data Not Found</p>
      )}
    </div>
  );
};

export default Card;
