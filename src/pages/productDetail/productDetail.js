import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axiosClient from '../../api/axiosClient';

import { cartSelector, productDetailSelector } from '../../redux/selectors';
import CartModal from '../cartModal/cartModal';
import NewProductList from '../newProductList/newProductList';
import YouCanLikeList from '../youCanLike/youCanLikeList';
import ViewedProductList from '../viewedProductList/viewedProductList';
import './productDetail.css';
import {
  addCartSecond,
  AddMoreCart,
  addNewCart,
  fetchProductDetail,
  updateCart,
  updateDetailProduct,
} from './productDetailSlice';
import updateData from './productDetailSlice';

export default function ProductDetail() {
  const [isLoading, setLoading] = useState(false);
  const { productId } = useParams();
  const { updatedDetail } = useParams();

  const productDetail = useSelector(productDetailSelector);
  const cartList = useSelector(cartSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductDetail(productId));
    // console.log(`view-2`, productDetail);
  }, []);

  useEffect(() => {
    dispatch(updateDetailProduct(productId));
  }, []);

  // console.log(productId);
  // console.log(productDetail);

  const handleAddToCartBtnClick = () => {
    const productInCart = cartList.find((p) => p.id === productDetail.id);

    if (!productInCart) {
      dispatch(
        addNewCart({
          id: productDetail.id,
          title: productDetail.title,
          price: productDetail.price,
          // quantity: 1,
          image: productDetail.image,
          alterImage: productDetail.alterImage,
        }),
      );
    } else {
      const objIndex = cartList.findIndex((obj) => obj.id === productDetail.id);
      if (cartList[objIndex].quantity === undefined) {
        dispatch(addCartSecond(productDetail.id));
      } else {
        dispatch(AddMoreCart(productDetail.id));
      }
    }
  };
  if (isLoading === 'true') return <p>...Loading</p>;
  return (
    <div>
      <div className="wrap-breadcrumb">
        <div className="container">
          <div className="row">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Trang chủ</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="../html/living-room.html">Phòng khách</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Sofa
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="wrap-product-detail">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6">
              <div className="product-img">
                <img src={productDetail.image} alt="" />
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-6">
              <div className="wrap-product-infos">
                <h1 className="product-name">{productDetail.title}</h1>

                <p className="product-prize">{productDetail.price}₫</p>

                <div className="product-infos">
                  <ul>
                    <li>
                      <p className="product-size">
                        Kích thước
                        <span className="product-size-info">D2400 - R880 - C850</span>
                      </p>
                    </li>

                    <li>
                      <p className="product-material">
                        Vật liệu
                        <span className="product-material-info">
                          Chân kim loại sơn, nệm bọc da tự nhiên, nệm ngồi & lưng rời
                        </span>
                      </p>
                    </li>

                    <li>
                      <p className="product-code">Mã: 3*105072</p>
                    </li>

                    <li>
                      <p className="prodcut-cate-link">
                        Danh mục: <a href="#"> Phòng khách</a>,<a href="#">Sofa</a>
                      </p>
                    </li>

                    <li>
                      <p className="prodcut-filter-link">
                        Tags: <a href="#"> 3 chỗ</a>, <a href="#">Da</a> ,<a href="#">Kim loại</a>
                      </p>
                    </li>

                    <li>
                      <p className="product-available"> Có hàng</p>
                    </li>

                    <li>
                      <button
                        className="add-to-cart open-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#cartModal"
                        onClick={handleAddToCartBtnClick}
                      >
                        Thêm vào giỏ
                      </button>
                    </li>
                  </ul>

                  <div className="more-info">
                    <ul className="nav nav-tabs">
                      <li className="active">
                        <a data-toggle="tab" href="#menu0">
                          Đánh giá
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#menu1">
                          Bảo hành
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#menu2">
                          Vận chuyển
                        </a>
                      </li>
                    </ul>

                    <div className="tab-content">
                      <div id="menu0" className="product-rate tab-pane active">
                        <p>Chưa có bài đánh giá nào</p>

                        <div className="product-rating">
                          <p>Viết đánh giá cho "Sofa 3 chỗ PENNY – DA 508MB"</p>

                          <p>
                            <a href="#">Đăng nhập để đánh giá</a>
                          </p>
                        </div>
                      </div>
                      <div id="menu1" className="tab-pane">
                        <h3>Menu 1</h3>
                        <p>
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat.
                        </p>
                      </div>
                      <div id="menu2" className="tab-pane">
                        <h3>Menu 2</h3>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                          laudantium, totam rem aperiam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <YouCanLikeList></YouCanLikeList>

      <NewProductList></NewProductList> */}

      <ViewedProductList></ViewedProductList>

      <CartModal></CartModal>
    </div>
  );
}
