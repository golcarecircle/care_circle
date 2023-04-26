import { FC } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

interface StarsProps {
  rating?: number;
}

const Stars: FC<StarsProps> = ({ rating }) => {
  if (!rating) {
    return null;
  }
  const fullStars = Math.floor(rating);
  const halfStars = Math.ceil(rating - fullStars);
  const emptyStars = 5 - fullStars - halfStars;

  const renderStar = (type: "full" | "half" | "empty") => {
    switch (type) {
      case "full":
        return (
          <i className="text-yellow-500 h-10 w-10">
            <FaStar />{" "}
          </i>
        );
      case "half":
        return (
          <i className="fas fa-star-half-alt text-yellow-500 h-10 w-10">
            <FaStarHalf />
          </i>
        );
      case "empty":
        return <i className="far fa-star text-yellow-500"></i>;
    }
  };

  return (
    <div className="flex items-center">
      {Array.from({ length: fullStars }, (_, i) => (
        <span key={`full-star-${i}`}>{renderStar("full")}</span>
      ))}
      {Array.from({ length: halfStars }, (_, i) => (
        <span key={`half-star-${i}`}>{renderStar("half")}</span>
      ))}
      {Array.from({ length: emptyStars }, (_, i) => (
        <span key={`empty-star-${i}`}>{renderStar("empty")}</span>
      ))}
    </div>
  );
};

export default Stars;
