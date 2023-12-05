import { FC } from "react";

interface RatingType {
  icon: React.ElementType;
  rating: number;
}
const RatingCalculation: FC<{ rating: RatingType }> = ({ rating }) => {
  const result = [];
  for (let i = 1; i <= rating.rating; i++) {
    result.push(<rating.icon key={i} />);
  }
  return result;
};

export default RatingCalculation;
