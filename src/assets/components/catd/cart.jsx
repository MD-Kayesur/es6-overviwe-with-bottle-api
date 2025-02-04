import "./cart.css";
import PropTypes from "prop-types";
function Cart({ cart }) {
  return (
    <div>
      <h3> cart : {cart.length}</h3>
      <div>
        {cart.map((bottle) => (
          <img key={bottle.id} className="img" src={bottle.img}></img>
        ))}
      </div>
    </div>
  );
}

Cart.propTypes = {
  Cart: PropTypes.array.isRequired,
};
export default Cart;
