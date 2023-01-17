// import React, { useEffect, useMemo, useRef, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { cartSelector } from '../../redux/selectors';
// import './cart.css';
// import { deleteCart, fetchCart } from './cartSlice';

// export default React.memo(function Cart() {
//   const cartList = useSelector(cartSelector);

//   const dispatch = useDispatch();

//   const [productQty, setProductQty] = useState(0);

//   let updateCartAr = [];

//   // useEffect(() => {
//   //   dispatch(fetchCart());
//   // }, []);

//   // const cartQty = cartList.reduce((acc, cur) => {
//   //   return cur.quantity ? acc + cur.quantity : acc + 1;
//   // }, 0);

//   // const cartTotal = cartList.reduce((acc, cur) => {
//   //   return cur.quantity ? acc + cur.price * cur.quantity : acc + cur.price;
//   // }, 0);

//   const cartQty = useMemo(() => {
//     const result = cartList.reduce((acc, cur) => {
//       return cur.quantity ? acc + cur.quantity : acc + 1;
//     }, 0);
//     return result;
//   }, [cartList]);

//   const cartTotal = useMemo(() => {
//     const result = cartList.reduce((acc, cur) => {
//       return cur.quantity ? acc + cur.price * cur.quantity : acc + cur.price;
//     }, 0);
//     return result;
//   }, [cartList]);

//   // useEffect(() => {

//   // }, [productQty]);

//   const inputRef = useRef([]);
//   inputRef.current = [];

//   const subBtnRef = useRef([]);
//   subBtnRef.current = [];

//   const addToRefs = (el) => {
//     if (el && !inputRef.current.includes(el)) {
//       inputRef.current.push(el);
//     }
//     // console.log(inputRef.current);
//   };

//   const addSubBtnToRefs = (el) => {
//     if (el && !subBtnRef.current.includes(el)) {
//       subBtnRef.current.push(el);
//     }
//     // console.log(subBtnRef.current);
//   };

//   const setProductQtyValue = (val) => setProductQty(val);

//   return (
//     <div>
//       {/* <!-- Cart-content --> */}

//       <div className="wrap-cart-title">
//         <div className="container">
//           <h1>
//             Giỏ hàng <span>{cartQty}</span>
//           </h1>
//         </div>
//       </div>

//       <div className="wrap-cart-content">
//         <div className="container">
//           <div className="row">
//             <div className="col-12 col-sm-6 col-md-7">
//               {cartList.map((product, index) => (
//                 <div className="products-in-cart" key={product.id}>
//                   <div className="cart-product-img">
//                     <img alter="image-alter" src={product.image} />
//                   </div>

//                   <div className="cart-product-info">
//                     <div className="cart-product-title">
//                       <div className="cart-product-name">
//                         <h2>{product.title}</h2>
//                       </div>
//                     </div>

//                     <p className="cart-product-material">pa_vat-lieu: 688</p>

//                     <p className="cart-product-size">pa_kich-thuoc: 689</p>

//                     <p className="cart-product-prize">{product.price}₫</p>

//                     <div className="cart-product-option">
//                       <div className="add-to-wishlist">
//                         <h2> Thêm vào Wishlist</h2>
//                       </div>

//                       <div className="cart-product-quantity">
//                         <button
//                           className="sub-product"
//                           ref={addSubBtnToRefs}
//                           onClick={() => {
//                             if (+inputRef.current[index].value > 0) {
//                               inputRef.current[index].value = +inputRef.current[index].value - 1;
//                             } else {
//                               inputRef.current[index].value = 0;
//                             }
//                           }}
//                         >
//                           -
//                         </button>

//                         <input
//                           type="number"
//                           className="product-qty"
//                           value={() => setProductQty(product.quantity ? +product.quantity : 1)}
//                           onChange={(e) => setProductQty(e.target.value)}
//                           ref={addToRefs}
//                         />
//                         {console.log(inputRef)}
//                         {console.log(productQty)}

//                         {/* <p className="product-quantity">{product.quantity ? product.quantity : 1}</p> */}
//                         <button
//                           className="plus-product"
//                           onClick={() => {
//                             // inputRef.current[index].value = +inputRef.current[index].value + 1;
//                             setProductQty(productQty + 1);
//                           }}
//                         >
//                           +
//                         </button>

//                         <button className="remove-product" onClick={() => dispatch(deleteCart(product))}>
//                           <i className="fa-solid fa-trash-can"></i>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               <button className="update-cart-btn">Cập nhật giỏ hàng</button>
//             </div>

//             <div className="col-12 col-sm-6 col-md-5">
//               <div className="wrap-cart-infos">
//                 <h1 className="cart-title">Thông tin đơn hàng</h1>

//                 <div className="cart-qty">
//                   <div className="cart-qty-title">
//                     <p>Số lượng</p>
//                   </div>

//                   <div className="cart-total-qty">
//                     <p>{cartQty}</p>
//                   </div>
//                 </div>

//                 <div className="cart-prize">
//                   <div className="cart-prize-title">
//                     <p>Thành tiền</p>
//                   </div>

//                   <div className="cart-prize-money">
//                     <p>{cartTotal}₫</p>
//                   </div>
//                 </div>

//                 <div className="cart-ship">
//                   <div className="cart-ship-title">
//                     <p>Vận chuyển</p>
//                   </div>

//                   <div className="cart-ship-money">
//                     <p>Liên hệ phí vận chuyển sau</p>
//                   </div>
//                 </div>

//                 <div className="cart-infos">
//                   <ul>
//                     <li>
//                       <div className="discount-code">
//                         <input type="text" placeholder="Mã giảm giá" />
//                         <button>Sử dụng</button>
//                       </div>
//                     </li>

//                     <li>
//                       <div className="cart-total">
//                         <div className="cart-total-title">
//                           <p>Khuyến mại</p>
//                         </div>

//                         <div className="cart-total-money">
//                           <p>-500,000₫</p>
//                         </div>
//                       </div>
//                     </li>

//                     <li>
//                       <div className="cart-total">
//                         <div className="cart-total-title">
//                           <p>Tổng cộng</p>
//                         </div>

//                         <div className="cart-total-money">
//                           <p>{cartTotal}₫</p>
//                         </div>
//                       </div>
//                     </li>

//                     <li>
//                       <p className="shipment-details-title">Thông tin giao hàng</p>

//                       <p className="shipment-details-info">
//                         Đối với những sản phẩm có sẵn tại khu vực, Nhà Xinh sẽ giao hàng trong vòng 2-7 ngày. Đối với
//                         những sản phẩm không có sẵn, thời gian giao hàng sẽ được nhân viên Nhà Xinh thông báo đến quý
//                         khách.
//                       </p>
//                     </li>

//                     <li>
//                       <p className="shipment-time">Từ 2-6: 8:30 - 17:30</p>
//                     </li>

//                     <li>
//                       <p className="shipment-time">Thứ 7, CN: 9:30 - 16:30</p>
//                     </li>

//                     <li>
//                       <a href="#" className="address-near-you">
//                         Cửa hàng gần bạn
//                       </a>
//                     </li>

//                     <li>
//                       <div className="wrap-cart-btn">
//                         {/* <button className="more-purchase" onclick="goToCate()"> */}
//                         <button className="more-purchase">Tiếp tục mua hàng</button>
//                         {/* <button className="purchasing" onclick="payment()"> */}
//                         <button className="purchasing">Đặt mua hàng</button>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <!-- Cart-content --> */}
//     </div>
//   );
// });

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartSelector } from '../../redux/selectors';
import './cart.css';
import { deleteCart, fetchCart } from './cartSlice';

export default React.memo(function Cart() {
  const cartList = useSelector(cartSelector);

  const dispatch = useDispatch();

  const [productQty, setProductQty] = useState(0);

  let updateCartAr = [];

  // useEffect(() => {
  //   dispatch(fetchCart());
  // }, []);

  // const cartQty = cartList.reduce((acc, cur) => {
  //   return cur.quantity ? acc + cur.quantity : acc + 1;
  // }, 0);

  // const cartTotal = cartList.reduce((acc, cur) => {
  //   return cur.quantity ? acc + cur.price * cur.quantity : acc + cur.price;
  // }, 0);

  const cartQty = useMemo(() => {
    const result = cartList.reduce((acc, cur) => {
      return cur.quantity ? acc + cur.quantity : acc + 1;
    }, 0);
    return result;
  }, [cartList]);

  const cartTotal = useMemo(() => {
    const result = cartList.reduce((acc, cur) => {
      return cur.quantity ? acc + cur.price * cur.quantity : acc + cur.price;
    }, 0);
    return result;
  }, [cartList]);

  // useEffect(() => {

  // }, [productQty]);

  const inputRef = useRef([]);
  inputRef.current = [];

  const subBtnRef = useRef([]);
  subBtnRef.current = [];

  const addToRefs = (el) => {
    if (el && !inputRef.current.includes(el)) {
      inputRef.current.push(el);
    }
    // console.log(inputRef.current);
  };

  const addSubBtnToRefs = (el) => {
    if (el && !subBtnRef.current.includes(el)) {
      subBtnRef.current.push(el);
    }
    // console.log(subBtnRef.current);
  };

  return (
    <div>
      {/* <!-- Cart-content --> */}

      <div className="wrap-cart-title">
        <div className="container">
          <h1>
            Giỏ hàng <span>{cartQty}</span>
          </h1>
        </div>
      </div>

      <div className="wrap-cart-content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-7">
              {cartList.map((product, index) => (
                <div className="products-in-cart" key={product.id}>
                  <div className="cart-product-img">
                    <img alter="image-alter" src={product.image} />
                  </div>

                  <div className="cart-product-info">
                    <div className="cart-product-title">
                      <div className="cart-product-name">
                        <h2>{product.title}</h2>
                      </div>
                    </div>

                    <p className="cart-product-material">pa_vat-lieu: 688</p>

                    <p className="cart-product-size">pa_kich-thuoc: 689</p>

                    <p className="cart-product-prize">{product.price}₫</p>

                    <div className="cart-product-option">
                      <div className="add-to-wishlist">
                        <h2> Thêm vào Wishlist</h2>
                      </div>

                      <div className="cart-product-quantity">
                        <button
                          className="sub-product"
                          ref={addSubBtnToRefs}
                          onClick={() => {
                            if (+inputRef.current[index].value > 0) {
                              inputRef.current[index].value = +inputRef.current[index].value - 1;
                            } else {
                              inputRef.current[index].value = 0;
                            }
                          }}
                        >
                          -
                        </button>

                        <input
                          type="number"
                          className="product-qty"
                          value={product.quantity ? +product.quantity : 1}
                          onChange={(e) => console.log(e.target.value)}
                          // onChange={(e) => console.log(`e change`, e.target.value)}
                          ref={addToRefs}
                        />
                        {console.log(inputRef)}
                        {console.log(`ivalue`, inputRef)}

                        {/* <p className="product-quantity">{product.quantity ? product.quantity : 1}</p> */}
                        <button
                          className="plus-product"
                          onClick={() => {
                            inputRef.current[index].value = +inputRef.current[index].value + 1;
                          }}
                        >
                          +
                        </button>

                        <button className="remove-product" onClick={() => dispatch(deleteCart(product))}>
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <button className="update-cart-btn">Cập nhật giỏ hàng</button>
            </div>

            <div className="col-12 col-sm-6 col-md-5">
              <div className="wrap-cart-infos">
                <h1 className="cart-title">Thông tin đơn hàng</h1>

                <div className="cart-qty">
                  <div className="cart-qty-title">
                    <p>Số lượng</p>
                  </div>

                  <div className="cart-total-qty">
                    <p>{cartQty}</p>
                  </div>
                </div>

                <div className="cart-prize">
                  <div className="cart-prize-title">
                    <p>Thành tiền</p>
                  </div>

                  <div className="cart-prize-money">
                    <p>{cartTotal}₫</p>
                  </div>
                </div>

                <div className="cart-ship">
                  <div className="cart-ship-title">
                    <p>Vận chuyển</p>
                  </div>

                  <div className="cart-ship-money">
                    <p>Liên hệ phí vận chuyển sau</p>
                  </div>
                </div>

                <div className="cart-infos">
                  <ul>
                    <li>
                      <div className="discount-code">
                        <input type="text" placeholder="Mã giảm giá" />
                        <button>Sử dụng</button>
                      </div>
                    </li>

                    <li>
                      <div className="cart-total">
                        <div className="cart-total-title">
                          <p>Khuyến mại</p>
                        </div>

                        <div className="cart-total-money">
                          <p>-500,000₫</p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="cart-total">
                        <div className="cart-total-title">
                          <p>Tổng cộng</p>
                        </div>

                        <div className="cart-total-money">
                          <p>{cartTotal}₫</p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <p className="shipment-details-title">Thông tin giao hàng</p>

                      <p className="shipment-details-info">
                        Đối với những sản phẩm có sẵn tại khu vực, Nhà Xinh sẽ giao hàng trong vòng 2-7 ngày. Đối với
                        những sản phẩm không có sẵn, thời gian giao hàng sẽ được nhân viên Nhà Xinh thông báo đến quý
                        khách.
                      </p>
                    </li>

                    <li>
                      <p className="shipment-time">Từ 2-6: 8:30 - 17:30</p>
                    </li>

                    <li>
                      <p className="shipment-time">Thứ 7, CN: 9:30 - 16:30</p>
                    </li>

                    <li>
                      <a href="#" className="address-near-you">
                        Cửa hàng gần bạn
                      </a>
                    </li>

                    <li>
                      <div className="wrap-cart-btn">
                        {/* <button className="more-purchase" onclick="goToCate()"> */}
                        <button className="more-purchase">Tiếp tục mua hàng</button>
                        {/* <button className="purchasing" onclick="payment()"> */}
                        <button className="purchasing">Đặt mua hàng</button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Cart-content --> */}
    </div>
  );
});
