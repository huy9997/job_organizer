import React, { useState, useEffect } from "react";
import PieChart from "../components/pieChart";
import axios from "axios";

function dashboard() {
  const [datas] = useState({});
  useEffect(() => {
    axios
      .get(`/googleData`)
      .then(googleData => {
        console.log(googleData);
      })
      .catch(err => {
        console.log("err");
        console.log(err);
      });
  });
  return (
    <div>
      home page
      <PieChart />
    </div>
  );
}

export default dashboard;
