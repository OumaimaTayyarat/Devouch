import { Link } from "react-router-dom";

const Item = (props) => {
  const handleItemClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img onClick={handleItemClick} src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">{props.new_price} MAD </div>
        <div className="item-price-old">{props.old_price} MAD </div>
      </div>
    </div>
  );
};

export default Item;
