import { useState } from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";
// import data_product from "../assets/data";
// import Item from "../Item/Item";
function NewsLetter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <section className="container">
        <div className="category_container">
          <div className="content">
            <div className="profile_detail">
              <span>Conseil De jour</span>
              <p></p>
            </div>

            <div className="wrapper">
              <div className="profile_quote">
                <p>
                  "Pour un look décontracté mais stylé, essayez d'associer un
                  t-shirt blanc basique avec un jean slim et des baskets
                  blanches. Ajoutez une veste en denim pour une touche de cool
                  supplémentaire"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsLetter;
