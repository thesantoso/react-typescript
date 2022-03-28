// import { type } from "@testing-library/user-event/dist/type";
import React, {useState} from "react";
import { PropTypes } from "./types";

type FoodState = [string[], any];
const Button: React.FC<PropTypes> = ({buttonText, onPress, data}) => {
    const [foods]: FoodState = useState([
        "ayam goreng",
        "soto ayam",
        "ketupat",
    ]);
    return (
        <div>
        <button onClick={(} => onPress(foods)}>{buttonText}</button>
        </div>
    );
};

export default Button;