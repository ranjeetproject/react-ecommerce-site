import React from "react";
import { Link } from "react-router-dom";

function ProductsPage({ productslist }) {
  return (
    <>
      <div className="products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Our Products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="our_products">
                <div className="row">
                  {productslist.map((val) => {
                    return (
                      <div className="col-md-4 margin_bottom1" key={val.id}>
                        <div className="product_box">
                          <figure>
                            <img src={val.image} alt="#" />
                          </figure>
                          <Link to={`${val.id}`}>
                            <h3>{val.name}</h3>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                  {/* <div className="col-md-12">
                    <a className="read_more" href="#">
                      See More
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
