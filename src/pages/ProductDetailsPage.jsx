import React from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage({ productsList, handleClick }) {
  let { id } = useParams();
  const productDetails = productsList.find((product) => product.id == id);
  const { productId, name, image, price } = productDetails;

  return (
    <>
      <div className="laptop1" key={productId}>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="laptop1_img">
                <figure>
                  <img src={image} alt="#" />
                </figure>
              </div>
            </div>
            <div className="col-md-5">
              <div className="titlepage">
                <h2>{name}</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>
                <p>Rs {price}</p>
                <button
                  className="read_more"
                  onClick={() => handleClick(productDetails)}
                >
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailsPage;
