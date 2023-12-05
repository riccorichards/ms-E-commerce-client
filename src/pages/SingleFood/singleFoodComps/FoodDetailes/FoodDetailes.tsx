import "./FoodDetailes.scss";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { GiCook } from "react-icons/gi";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const FoodDetailes = () => {
  return (
    <div className="each-food-details-wrapper">
      <h1 className="each-food-title">Pizza with cheese</h1>
      <div className="food-preparation-details">
        <div className="food-prep-items">
          <div className="food-prep-items-icon">
            <FaRegClock />
          </div>
          <span>30 min</span>
        </div>
        <div className="food-prep-items">
          <div className="food-prep-items-icon">
            <IoLocationOutline />
          </div>
          <span>st. holy park</span>
        </div>
        <div className="food-prep-items">
          <div className="food-prep-items-icon">
            <GiCook />
          </div>
          <span>Easy</span>
        </div>
      </div>
      <div className="each-food-additional-info">
        <h3>Shopping information</h3>
        <div className="each-food-decor" />
        <span className="each-food-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          eveniet. Voluptate nobis non molestias magnam?
        </span>
        <span className="each-food-price">$ 15.59</span>
        <button className="each-food-add-to-cart">Add to Cart</button>
      </div>
      <div className="our-social-media">
        <h4>Subscribe us</h4>
        <div className="list-of-social-media">
          <FaFacebookSquare />
          <FaInstagramSquare />
          <FaGithubSquare />
          <FaLinkedin />
          <FaTwitterSquare />
        </div>
      </div>
    </div>
  );
};

export default FoodDetailes;
