import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartSelector, sofaFiltersSelector } from '../../redux/selectors';
import { deleteCart, fetchCart } from './cartModalSlice';

export default function CartModal() {
  const cartList = useSelector(cartSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
    // console.log(`view-2`, productDetail);
  }, []);

  return (
    <div>
      {/* <!-- The CartModal --> */}
      <div className="modal cart-modal" id="cartModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header cart-header">
              <h2 className="modal-cart-header">CART</h2>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body cart-body">
              {cartList.map((product) => (
                <div className="products-in-modal" key={product.id}>
                  <div className="modal-product-img">
                    <img src={product.image} alt="" />
                  </div>

                  <div className="modal-product-info">
                    <div className="modal-product-name">
                      <h2>{product.title}</h2>
                    </div>

                    <p className="modal-product-prize">
                      {product.quantity ? `${product.price} x ${product.quantity}` : product.price}
                    </p>
                  </div>
                  <button className="remove-modal-product" onClick={() => dispatch(deleteCart(product))}>
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              ))}
            </div>

            <div className="modal-footer cart-footer">
              <div className="total-qty">
                <p className="cart-total-temp">
                  Số lượng
                  <span className="total-temp">
                    {cartList.reduce((acc, cur) => {
                      return cur.quantity ? acc + cur.quantity : acc + 1;
                    }, 0)}
                  </span>
                </p>

                <p className="cart-total-temp">
                  Tổng giá
                  {/* <span className="total-temp">54,590,000đ</span> */}
                  <span className="total-temp">
                    {cartList.reduce((acc, cur) => {
                      return cur.quantity ? acc + cur.price * cur.quantity : acc + cur.price;
                    }, 0)}
                  </span>
                </p>
              </div>

              <div className="modal-btn">
                {/* <button className="cart-page"  onclick="goToCart()">Xem giỏ hàng</button>

                  <button className="checkout-page" onclick="goToPayment()">Thanh toán luôn</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
