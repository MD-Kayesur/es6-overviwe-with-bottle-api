import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/bottle";
import "./bottles.css";
import addLocalStores from "../../../utilities/localstores";
import getLocalStores from "../../../utilities/localstores";
import Cart from "../catd/cart";
 
function Bottles() {
  const [bottles, setBottles] = useState([]);
  const [cart, setcart] = useState([]);
  useEffect(() => {
    fetch("bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // load cart from localsrtores
  useEffect(() => {
    // console.log('thats',bottles.length);
    if (bottles.length) {
      const storecrtd = getLocalStores();
      console.log(storecrtd, bottles);
      const saveCart = [];
      for (const id of storecrtd) {
        console.log(id);
         
        const bottle = bottles.find((bootle) => bootle.id === id);
        if (bottle) {
            saveCart.push(bottle);
        }
      }
       // console.log('vottle' saveCart);
    setcart(saveCart)
    }
    
    
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];

    setcart(newCart);
    // const  id  = bottle
    addLocalStores(bottle.id);
  };

  return (
    <div>
      <h4>bottles : {bottles.length} </h4>
      
<Cart cart={cart} ></Cart>
  
      
      <div className="bottles">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}></Bottle>
        ))}
      </div>
    </div>
  );
}

export default Bottles;
