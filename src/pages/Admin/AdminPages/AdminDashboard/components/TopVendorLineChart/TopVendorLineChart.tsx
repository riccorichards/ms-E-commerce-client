import EchartLine from "echarts-for-react";
import "./TopVendorLineChart.scss";
import { IoRestaurant } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hook";
import { useEffect } from "react";
import { getTopVendors } from "../../../../../../redux/appCall/AdminAppCall";

const LineChartOverview = () => {
  const dispatch = useAppDispatch();
  const { topVendors } = useAppSelector((s) => s.admin);
  useEffect(() => {
    dispatch(getTopVendors());
  }, [dispatch]);

  if (!topVendors) return <h1>Not Data Available</h1>;

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const uniqueVendors = new Set();
  weekDays.forEach((day) => {
    topVendors[day].forEach((vendorInfo) => {
      uniqueVendors.add(vendorInfo.vendor);
    });
  });

  const series = Array.from(uniqueVendors).map((vendor) => {
    const data = weekDays.map((day) => {
      const vendorDayData = topVendors[day].find((v) => v.vendor === vendor);
      return vendorDayData ? vendorDayData.totalAmount : 0;
    });

    return {
      name: vendor,
      type: "line",
      data: data,
    };
  });

  const option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: Array.from(uniqueVendors),
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
      data: weekDays,
    },
    yAxis: {
      type: "value",
    },
    series: series,
  };

  return (
    <section className="echart-line-wrapper">
      <header className="echart-line-header-wrapper">
        <div className="echart-line-header">
          <IoRestaurant />
          <h3>Vendors by Orders</h3>
        </div>
      </header>
      <main className="echart-line-body">
        <EchartLine
          option={option}
          style={{
            width: "100%",
          }}
        />
      </main>
    </section>
  );
};

export default LineChartOverview;
