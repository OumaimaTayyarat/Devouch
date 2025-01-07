import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { useContext, useState, useEffect } from "react";
const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // State to hold the random number
  const [randomNumber, setRandomNumber] = useState(null);

  // Use useEffect to set the random number when the component mounts
  useEffect(() => {
    setRandomNumber(getRandomNumber(70, 122));
  }, []);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productsiplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          {randomNumber !== null && <p id="random-number">({randomNumber})</p>}
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            {product.old_price} MAD
          </div>
          <div className="productdisplay-right-price-new">
            {product.new_price} MAD
          </div>
        </div>
        <div className="productdisplay-right-description">
          Un vêtement léger, généralement tricoté, un pull à manches courtes et
          ajusté, porté comme sous-vêtement ou vêtement extérieur
        </div>
        <div className="productdisplay-right-size">
          {/* <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div> */}
        </div>
        <br />
        <br />
        <button
          onClick={() => {
            addToCart(product.id);
            window.scrollTo(0, 0);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category :</span>Unisex , Hoodie , T-shirt
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span>Moderne , Tendance ,Cute
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
