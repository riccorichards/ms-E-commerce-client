import EchartLine from "echarts-for-react";
import "./TopVendorLineChart.scss";
import { IoRestaurant } from "react-icons/io5";

const example = [
  {
    name: "vendor 1",
    type: "line",
    stack: "Total",
    areaStyle: {},
    emphasis: {
      focus: "series",
    },
    data: [120, 132, 101, 134, 90, 230, 210],
  },
  {
    name: "vendor 2",
    type: "line",
    stack: "Total",
    areaStyle: {},
    emphasis: {
      focus: "series",
    },
    data: [220, 182, 191, 234, 290, 330, 310],
  },
  {
    name: "vendor 3",
    type: "line",
    stack: "Total",
    areaStyle: {},
    emphasis: {
      focus: "series",
    },
    data: [820, 932, 901, 934, 1290, 1330, 1320],
  },
  {
    name: "vendor 4",
    type: "line",
    stack: "Total",
    areaStyle: {},
    emphasis: {
      focus: "series",
    },
    data: [320, 320, 301, 304, 390, 300, 300],
  },
];

interface ObjType {
  name: string;
  type: string;
  stack: string;
  data: number[];
}

const LineChartOverview = () => {
  const updatedData = example.map((obj: ObjType) => {
    let sum = 0;
    return {
      ...obj,
      avg: obj.data.map((num) => (sum += num) / obj.data.length),
    };
  });

  const option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["vendor 1", "vendor 2", "vendor 3", "vendor 4"],
      bottom: "0%",
    },
    grid: {
      left: "3%",
      right: "4%",
      top: "5%",
      bottom: "10%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: updatedData.sort((a, b) => a.avg[0] - b.avg[0]),
  };

  return (
    <div className="echart-line-wrapper">
      <div className="echart-line-header-wrapper">
        <div className="echart-line-header">
          <IoRestaurant />
          <h3>Vendors by Orders</h3>
        </div>
      </div>
      <div className="echart-line-body">
        <EchartLine
          option={option}
          style={{
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default LineChartOverview;
