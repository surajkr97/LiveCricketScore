import React, { useEffect, useState } from "react";
import NotFoundImage from "../assets/404.png";

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
    <div className="flex flex-wrap justify-center">
      {data ? (
        data.map((curVal) => {
          console.log(curVal);
          if (
            curVal.status !== "There is no scorecard available for this match." &&
            curVal.status !== "Match not started" &&
            curVal.t1img
          ) {
            return (
              <div className="bg-gradient-to-r from-teal-50 to-teal-200 shadow-xl m-4 p-4 rounded-xl text-center flex flex-col gap-5 w-90 overflow-scroll">
                <h1 className="font-bold text-xl">{curVal.series}</h1>
                <h2 className="font-medium text-xl">{curVal.matchType}</h2>
                <div className="flex justify-evenly">
                  <div className="flex flex-col items-center gap-3">
                    <img src={curVal.t1img} />
                    <p>{curVal.t1}</p>
                    <p>{curVal.t1s}</p>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <img src={curVal.t2img} />
                    <p>{curVal.t2}</p>
                    <p>{curVal.t2s}</p>
                  </div>
                </div>
                <p className="font-semibold">{curVal.status}</p>
              </div>
            );
          }
        })
      ) : (
        <img 
      src={NotFoundImage}
      alt="Data not found animation"
      class="mx-auto w-64 h-64"
    ></img>
      )}
    </div>
  );
};

export default Card;
