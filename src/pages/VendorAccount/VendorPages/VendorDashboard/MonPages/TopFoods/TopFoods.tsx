import EChartsReact from "echarts-for-react";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hook";
import { useEffect } from "react";
import { getVendorFoods } from "../../../../../../redux/appCall/FoodAppCall";

interface FormatterParams {
  name: string;
  value: number;
  data: {
    image: string;
    name: string;
    price: string;
  };
}

const TopFoods = () => {
  const { vendor } = useAppSelector((state) => state.vendor);
  const { vendorFoods } = useAppSelector((state) => state.food);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (vendor) {
      dispatch(getVendorFoods(vendor.name));
    }
  }, [vendor]); //eslint-disable-line

  const topFoods =
    vendorFoods &&
    vendorFoods.slice(0, 5).map((food) => {
      return {
        image: food.image,
        name: food.title,
        price: food.price,
        value: Math.floor(Math.random() * (200 - 100 + 1) + 100),
      };
    });

  if (!topFoods) return null;

  const formatterFunction = (params: FormatterParams) => {
    const food = topFoods.find((food) => food.name === params.name);
    if (!food) return "";
    return `
      <div>
        <img src=${food.image} style="width: 50px; height: 50px;" />
        <p>$${food.price}</p>
        <p>Value: ${params.value}</p>
      </div>
    `;
  };

  const option = {
    backgroundColor: "#2c343c",
    tooltip: {
      trigger: "item",
      formatter: formatterFunction,
    },
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1],
      },
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "55%",
        center: ["50%", "50%"],
        data: topFoods,
        roseType: "radius",
        label: {
          color: "rgba(255, 255, 255, 0.3)",
        },
        labelLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.3)",
          },
          smooth: 0.2,
          length: 1,
          length2: 2,
        },
        itemStyle: {
          color: "#c23531",
          shadowBlur: 200,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
        animationType: "scale",
        animationEasing: "elasticOut",
      },
    ],
  };
  return (
    <div className="top-foods-wrapper">
      <EChartsReact option={option} style={{ width: "100%", height: "50vh" }} />
    </div>
  );
};

export default TopFoods;
