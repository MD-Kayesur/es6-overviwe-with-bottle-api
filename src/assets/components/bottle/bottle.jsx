 import './bottle.css'
import PropTypes from 'prop-types'
function Bottle({bottle ,handleAddToCart}) {
    // console.log(bottle);

    const {name,img, price} = bottle
    
    return (
        <div className="bottle">
             <h3>name:{name}</h3>
             <img className='img'  src= {img} alt="" />
             <h3>price : {price}</h3>
             <button onClick={ ()=>handleAddToCart(bottle)}>buy now</button>
        </div>
    )
}
Bottle.propTypes = {
    bottle: PropTypes.array.isRequired,
    handleAddToCart : PropTypes.func.isRequired
}
export default Bottle
