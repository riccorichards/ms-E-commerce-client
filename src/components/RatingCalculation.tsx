import { FC } from "react";

interface RatingType {
  icon: React.ElementType;
  rating: number | undefined;
}
const RatingCalculation: FC<{ rating: RatingType }> = ({ rating }) => {
  const result = [];
  if (rating.rating) {
    for (let i = 1; i <= rating.rating; i++) {
      result.push(<rating.icon key={i} />);
    }
  }
  return result;
};

export default RatingCalculation;
