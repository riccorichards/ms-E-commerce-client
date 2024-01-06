import { useEffect, useState } from "react";
import "./VendorDashboard.scss";
import EChartsReact from "echarts-for-react";
import MonPages from "./MonPages/MonPages";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { getVendorDashboardData } from "../../../../redux/appCall/VendorAppCall";

const VendorDashboard = () => {
  const [isMonitoring, setIsMonitoring] = useState<boolean>(false);
  const [monOptions, setMonOptions] = useState<string>("Last Orders");
  const [timeFrames, setTimeFrames] = useState<string>("1D");
  const [optionSection, setOptionSection] = useState<string>("Earning");
  const dispatch = useAppDispatch();
  const { dashboard } = useAppSelector((state) => state.vendor);

  useEffect(() => {
    dispatch(
      getVendorDashboardData({ field: optionSection, time: timeFrames })
    );
  }, [timeFrames, optionSection]); //eslint-disable-line

  const option = {
    xAxis: {
      type: "category",
      data: dashboard && dashboard.map((data) => data.date),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data:
          dashboard &&
          dashboard.map((data) => {
            return {
              value: data.value,
              itemStyle: { borderRadius: [5, 5, 0, 0], color: "#008080" },
              emphasis: {
                itemStyle: {
                  color: "orangered",
                  borderColor: "#008080",
                  borderWidth: 1,
                },
              },
            };
          }),
        type: "bar",
      },
    ],
  };

  return (
    <div className="vendor-dashboard-wrapper">
      <header className="vendor-dashboard-header">
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div className="Time-Frames">
            <span>Time Frames</span>
            <ul>
              <li onClick={() => setTimeFrames("1H")}>1H</li>
              <li onClick={() => setTimeFrames("1D")}>1D</li>
              <li onClick={() => setTimeFrames("1W")}>1W</li>
              <li onClick={() => setTimeFrames("1M")}>1M</li>
            </ul>
          </div>
          <div className="vendor-dashboard-header-Options">
            <span>Options</span>
            <ul>
              <li onClick={() => setOptionSection("Earning")}>Earning</li>
              <li onClick={() => setOptionSection("Orders")}>Orders</li>
              <li onClick={() => setOptionSection("Feeds")}>Feedbacks</li>
            </ul>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <span style={{ fontWeight: "bold" }}>Choosen Time:</span>
            {timeFrames}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <span style={{ fontWeight: "bold" }}>Choosen Section:</span>
            {optionSection}
          </div>
        </div>
        <span
          className="monitoring-wrapper"
          onClick={() => setIsMonitoring((prev) => !prev)}
        >
          Monitoring
        </span>
        {isMonitoring && (
          <div className="monitoring">
            <header className="monitoring-header">
              <span
                style={{
                  color: "#fff",
                  backgroundColor: "#008080",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                {monOptions}
              </span>
              <div className="monitoring-header-options">
                <span>Monitoring options</span>
                <ul>
                  <li onClick={() => setMonOptions("Last Orders")}>
                    Last Orders
                  </li>
                  <li onClick={() => setMonOptions("Popular Foods")}>
                    Popular Foods
                  </li>
                  <li onClick={() => setMonOptions("Top Customers")}>
                    Top Customers
                  </li>
                  <li onClick={() => setMonOptions("Last Feeds")}>
                    Last Feeds
                  </li>
                </ul>
              </div>
            </header>
            <main>
              <MonPages pages={monOptions} />
            </main>
          </div>
        )}
      </header>
      <EChartsReact option={option} style={{ width: "100%", height: "75vh" }} />
    </div>
  );
};

export default VendorDashboard;
