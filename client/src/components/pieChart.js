import { Chart } from "react-google-charts";
import React from "react";
const pieOptions = {
  title: "piechart",
  pieHole: 0.6,
  slices: [
    {
      color: "#2BB673"
    },
    {
      color: "#d91e48"
    },
    {
      color: "#007fad"
    },
    {
      color: "#e9a227"
    }
  ],
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "233238",
      fontSize: 14
    }
  },
  tooltip: {
    showColorCode: true
  },
  chartArea: {
    left: 0,
    top: 0,
    width: "100%",
    height: "80%"
  },
  fontName: "Roboto"
};
let pieChart = props => {
  return (
    <Chart
      chartType="PieChart"
      data={[["Age", "Weight"], ["a", 12], ["b", 5.5]]}
      options={pieOptions}
      graph_id="PieChart"
      width={"100%"}
      height={"400px"}
      legend_toggle
    />
  );
};

export default pieChart;
