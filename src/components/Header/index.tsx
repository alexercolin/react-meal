import "./style.scss";
import { BsCartCheckFill } from "react-icons/bs";

function Alex() {
  const number = 0;
  return (
    <div className="header">
      <h1>ReactMeals</h1>
      <button className="checkout__button">
        <BsCartCheckFill /> 
        Your cart <span>{`${number}`}</span>
      </button>
    </div>
  );
}

export default Alex;
