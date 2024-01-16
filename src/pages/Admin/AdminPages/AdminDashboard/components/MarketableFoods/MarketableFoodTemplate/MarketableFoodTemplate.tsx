import { FC } from "react";
import "./MarketableFoodTemplate.scss";
import EchartPie from "echarts-for-react";

const MarketableFoodTemplate: FC<{
  image: string;
  amount: number;
  name: string;
  length: number;
}> = ({ name, image, amount, length }) => {
  const percentage = ((length / amount) * 100).toFixed(2);
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
          { value: parseFloat(percentage), name: "" },
          {
            value: 100 - parseFloat(percentage),
            name: "",
          },
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
      <p style={{ fontSize: "18px" }}>{percentage}%</p>
      <h4 style={{ textAlign: "center" }}>{name}</h4>
    </div>
  );
};

export default MarketableFoodTemplate;
