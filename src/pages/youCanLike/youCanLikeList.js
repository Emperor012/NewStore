import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { youCanLikeListProductSelector } from '../../redux/selectors';

import '../newProductList/newProductList.css';

export default function YouCanLikeList() {
  const youCanLikeList = useSelector(youCanLikeListProductSelector);
  return (
    <div>
      {/* <!-- list-new-product --> */}
      <div className="list-new-product">
        <div className="container">
          <div className="list-title">
            <h2>Có thể bạn cũng thích</h2>
          </div>

          <div className="row">
            {youCanLikeList.map((product) => (
              <div className="col-12 col-sm-4 col-md-3" key={product.id}>
                <div className="wrap-product">
                  <Link to={`/products/${product.id}`}>
                    <img src={product.image} className="product-img" />
                    <img src={product.alterImage} className="product-img-alter" />
                    <p className="name">{product.title}</p>
                    <p className="price">{product.price}</p>
                  </Link>

                  <button className="add-to-cart open-btn" data-bs-toggle="modal" data-bs-target="#cartModal">
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
