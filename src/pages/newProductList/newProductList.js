import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { newListProductSelector } from '../../redux/selectors';
import './newProductList.css';

export default function NewProductList() {
  const newProductList = useSelector(newListProductSelector);
  // console.log(`response`, { newProductList });

  return (
    <div>
      {/* <!-- list-new-product --> */}
      <div className="list-new-product">
        <div className="container">
          <div className="list-title">
            <h2>Sản phẩm mới</h2>

            <a href="#">
              {' '}
              Xem tất cả <i className="fa-solid fa-angle-right"></i>{' '}
            </a>
          </div>

          <div className="row">
            {newProductList.map((product) => (
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
      {/* <!-- list-new-product --> */}
    </div>
  );
}
