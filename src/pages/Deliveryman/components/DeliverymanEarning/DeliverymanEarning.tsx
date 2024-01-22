import { useEffect } from "react";
import "./DeliverymanEarning.scss";
import EChartsReact from "echarts-for-react";
import { getdeliverymanOrders } from "../../../../redux/appCall/DeliverymanAppCall";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";

const DeliverymanEarning = () => {
  const { earnStats } = useAppSelector((s) => s.deliveryman);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getdeliverymanOrders({ isStats: true }));
  }, [dispatch]);

  if (!earnStats) return null;

  const option = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: earnStats.map((res) => res.day),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: earnStats.map((res) => res.result),
        type: "line",
        areaStyle: { color: "#008080" },
        lineStyle: {
          color: "#fff",
          width: 5,
          type: "solid",
        },
        itemStyle: {
          color: "#008080",
          borderColor: "#008080",
          borderWidth: 2,
        },
      },
    ],
  };

  return (
    <section className="deliveryman-earning-wrapper">
      <div className="deliveryman-earning-echart">
        <EChartsReact
          option={option}
          style={{ width: "100%", height: "70vh" }}
        />
      </div>
    </section>
  );
};

export default DeliverymanEarning;
