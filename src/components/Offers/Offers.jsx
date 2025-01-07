import { useState } from "react";
import { Link } from "react-router-dom";

import exclusive_image from "../assets/exclusive_image.png";
function Offers() {
  const [count, setCount] = useState(0);

  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Offres Exclusives</h1>
        <br />
        <br />
        <p>UNIQUEMENT SUR LES MEILLEURS PRODUITS VENDEURS</p>
        <br />
        <Link to="/Collections">
          <button className="button1">Vérifiez Maintenant</button>
        </Link>{" "}
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
}

export default Offers;
