import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart,setInCart] = useState(false)
function handleClick() {
  setInCart(!inCart) 
}
const appClass = inCart ? "in-cart" : ""

const text = inCart ? "Remove From Cart" : "Add to Cart"


  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{text}</button>
    </li>
  );
}

export default Item;
