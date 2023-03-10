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
//             Gi??? h??ng <span>{cartQty}</span>
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

//                     <p className="cart-product-prize">{product.price}???</p>

//                     <div className="cart-product-option">
//                       <div className="add-to-wishlist">
//                         <h2> Th??m v??o Wishlist</h2>
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

//               <button className="update-cart-btn">C???p nh???t gi??? h??ng</button>
//             </div>

//             <div className="col-12 col-sm-6 col-md-5">
//               <div className="wrap-cart-infos">
//                 <h1 className="cart-title">Th??ng tin ????n h??ng</h1>

//                 <div className="cart-qty">
//                   <div className="cart-qty-title">
//                     <p>S??? l?????ng</p>
//                   </div>

//                   <div className="cart-total-qty">
//                     <p>{cartQty}</p>
//                   </div>
//                 </div>

//                 <div className="cart-prize">
//                   <div className="cart-prize-title">
//                     <p>Th??nh ti???n</p>
//                   </div>

//                   <div className="cart-prize-money">
//                     <p>{cartTotal}???</p>
//                   </div>
//                 </div>

//                 <div className="cart-ship">
//                   <div className="cart-ship-title">
//                     <p>V???n chuy???n</p>
//                   </div>

//                   <div className="cart-ship-money">
//                     <p>Li??n h??? ph?? v???n chuy???n sau</p>
//                   </div>
//                 </div>

//                 <div className="cart-infos">
//                   <ul>
//                     <li>
//                       <div className="discount-code">
//                         <input type="text" placeholder="M?? gi???m gi??" />
//                         <button>S??? d???ng</button>
//                       </div>
//                     </li>

//                     <li>
//                       <div className="cart-total">
//                         <div className="cart-total-title">
//                           <p>Khuy???n m???i</p>
//                         </div>

//                         <div className="cart-total-money">
//                           <p>-500,000???</p>
//                         </div>
//                       </div>
//                     </li>

//                     <li>
//                       <div className="cart-total">
//                         <div className="cart-total-title">
//                           <p>T???ng c???ng</p>
//                         </div>

//                         <div className="cart-total-money">
//                           <p>{cartTotal}???</p>
//                         </div>
//                       </div>
//                     </li>

//                     <li>
//                       <p className="shipment-details-title">Th??ng tin giao h??ng</p>

//                       <p className="shipment-details-info">
//                         ?????i v???i nh???ng s???n ph???m c?? s???n t???i khu v???c, Nh?? Xinh s??? giao h??ng trong v??ng 2-7 ng??y. ?????i v???i
//                         nh???ng s???n ph???m kh??ng c?? s???n, th???i gian giao h??ng s??? ???????c nh??n vi??n Nh?? Xinh th??ng b??o ?????n qu??
//                         kh??ch.
//                       </p>
//                     </li>

//                     <li>
//                       <p className="shipment-time">T??? 2-6: 8:30 - 17:30</p>
//                     </li>

//                     <li>
//                       <p className="shipment-time">Th??? 7, CN: 9:30 - 16:30</p>
//                     </li>

//                     <li>
//                       <a href="#" className="address-near-you">
//                         C???a h??ng g???n b???n
//                       </a>
//                     </li>

//                     <li>
//                       <div className="wrap-cart-btn">
//                         {/* <button className="more-purchase" onclick="goToCate()"> */}
//                         <button className="more-purchase">Ti???p t???c mua h??ng</button>
//                         {/* <button className="purchasing" onclick="payment()"> */}
//                         <button className="purchasing">?????t mua h??ng</button>
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
            Gi??? h??ng <span>{cartQty}</span>
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

                    <p className="cart-product-prize">{product.price}???</p>

                    <div className="cart-product-option">
                      <div className="add-to-wishlist">
                        <h2> Th??m v??o Wishlist</h2>
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

              <button className="update-cart-btn">C???p nh???t gi??? h??ng</button>
            </div>

            <div className="col-12 col-sm-6 col-md-5">
              <div className="wrap-cart-infos">
                <h1 className="cart-title">Th??ng tin ????n h??ng</h1>

                <div className="cart-qty">
                  <div className="cart-qty-title">
                    <p>S??? l?????ng</p>
                  </div>

                  <div className="cart-total-qty">
                    <p>{cartQty}</p>
                  </div>
                </div>

                <div className="cart-prize">
                  <div className="cart-prize-title">
                    <p>Th??nh ti???n</p>
                  </div>

                  <div className="cart-prize-money">
                    <p>{cartTotal}???</p>
                  </div>
                </div>

                <div className="cart-ship">
                  <div className="cart-ship-title">
                    <p>V???n chuy???n</p>
                  </div>

                  <div className="cart-ship-money">
                    <p>Li??n h??? ph?? v???n chuy???n sau</p>
                  </div>
                </div>

                <div className="cart-infos">
                  <ul>
                    <li>
                      <div className="discount-code">
                        <input type="text" placeholder="M?? gi???m gi??" />
                        <button>S??? d???ng</button>
                      </div>
                    </li>

                    <li>
                      <div className="cart-total">
                        <div className="cart-total-title">
                          <p>Khuy???n m???i</p>
                        </div>

                        <div className="cart-total-money">
                          <p>-500,000???</p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="cart-total">
                        <div className="cart-total-title">
                          <p>T???ng c???ng</p>
                        </div>

                        <div className="cart-total-money">
                          <p>{cartTotal}???</p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <p className="shipment-details-title">Th??ng tin giao h??ng</p>

                      <p className="shipment-details-info">
                        ?????i v???i nh???ng s???n ph???m c?? s???n t???i khu v???c, Nh?? Xinh s??? giao h??ng trong v??ng 2-7 ng??y. ?????i v???i
                        nh???ng s???n ph???m kh??ng c?? s???n, th???i gian giao h??ng s??? ???????c nh??n vi??n Nh?? Xinh th??ng b??o ?????n qu??
                        kh??ch.
                      </p>
                    </li>

                    <li>
                      <p className="shipment-time">T??? 2-6: 8:30 - 17:30</p>
                    </li>

                    <li>
                      <p className="shipment-time">Th??? 7, CN: 9:30 - 16:30</p>
                    </li>

                    <li>
                      <a href="#" className="address-near-you">
                        C???a h??ng g???n b???n
                      </a>
                    </li>

                    <li>
                      <div className="wrap-cart-btn">
                        {/* <button className="more-purchase" onclick="goToCate()"> */}
                        <button className="more-purchase">Ti???p t???c mua h??ng</button>
                        {/* <button className="purchasing" onclick="payment()"> */}
                        <button className="purchasing">?????t mua h??ng</button>
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
