import React from "react";

export default function Product({ item, handleAddToCart }) {
  return (
    <div className="col-md-6 box-product-outer">
      <div className="box-product">
        <div className="img-wrapper">
          <a href="#test">
            <img alt="Product" src={item.pic} />
          </a>
          <div className="tags">
            <span className="label-tags">
              <span className="label label-danger">Sale</span>
            </span>
            <span className="label-tags">
              <span className="label label-info">Featured</span>
            </span>
            <span className="label-tags">
              <span className="label label-warning">Polo</span>
            </span>
          </div>
          <div className="option">
            <a
              href="#test"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="Add to Cart"
              onClick={() => handleAddToCart(item)}
            >
              <i className="ace-icon fa fa-shopping-cart"> Add To Cart</i>
            </a>
          </div>
        </div>
        <h6>
          <a href="#test">{item.name}</a>
        </h6>
        <div className="price">
          <div style={{ fontSize: "1.6rem" }}>
            &#x20b9;{item.price}
            <span className="price-down">-10%</span>
          </div>
        </div>
        <div className="rating">
          <i className="ace-icon fa fa-star"></i>
          <i className="ace-icon fa fa-star"></i>
          <i className="ace-icon fa fa-star"></i>
          <i className="ace-icon fa fa-star"></i>
          <i className="ace-icon fa fa-star-half-o"></i>
          <a href="#test">(2 reviews)</a>
        </div>
      </div>
    </div>
  );
}
