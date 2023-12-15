import "./MarketableFoodTemplate.scss";
import EchartPie from "echarts-for-react";

const image =
  "https://i.pinimg.com/564x/3b/32/03/3b320331548aa8011974683cdcf3d89b.jpg";
const MarketableFoodTemplate = () => {
  const option = {
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["55%", "70%"],
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        emphasis: {
          label: {
            show: false,
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "65%" },
          { value: 735, name: "35%" },
        ],
        color: ["orangered", "#c0c0c087"],
      },
    ],
  };
  return (
    <div className="marketable-food-template-wrapper">
      <div className="marketable-food-template-content">
        <EchartPie option={option} style={{ width: "100%", height: "100%" }} />
        <div className="marketable-food-img-wrapper">
          <img src={image} alt="image-fake" className="marketable-food-img" />
        </div>
      </div>

      <p style={{ fontSize: "18px" }}>65%</p>
      <h2>Food name</h2>
    </div>
  );
};

export default MarketableFoodTemplate;
