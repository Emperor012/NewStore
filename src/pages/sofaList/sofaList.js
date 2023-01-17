import './sofaList.css';

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CartModal from '../cartModal/cartModal';
import { productListSelector, sofaFiltersSelector, sofaListSelector } from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import filtersSlice from './sofaListSlice';

export default function SofaList() {
  const sofaList = useSelector(sofaFiltersSelector);

  const dispatch = useDispatch();

  const priceOptions = ['Từ thấp đến cao', 'Từ cao xuống thấp'];
  const materialOptions = ['All', 'Da', 'Da Công Nghiệp', 'Da và Vải'];
  const sizeOptions = ['All', '2', '2.5', '3'];

  const [isPriceActive, setIsPriceActive] = useState(false);
  const [priceSelected, setPriceSelected] = useState('Từ thấp đến cao');

  const [isMaterialActive, setIsMaterialActive] = useState(false);
  const [materialSelected, setMaterialSelected] = useState('All');

  const [isSizeActive, setIsSizeActive] = useState(false);
  const [sizeSelected, setSizeSelected] = useState('All');

  let menuRef = useRef();
  let menuMaterialRef = useRef();
  let menuSizeRef = useRef();

  const handlePriceChange = (value) => {
    // setFilterPriorities(value);
    console.log('price value', value);
    dispatch(filtersSlice.actions.priceFilterChange(value));
  };

  const handleMaterialChange = (value) => {
    // setFilterPriorities(value);
    dispatch(filtersSlice.actions.materialFilterChange(value));
  };

  const handleSizeChange = (value) => {
    // setFilterPriorities(value);
    dispatch(filtersSlice.actions.sizeFilterChange(value));
  };

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsPriceActive(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  useEffect(() => {
    let handler = (e) => {
      if (!menuMaterialRef.current.contains(e.target)) {
        setIsMaterialActive(false);
        console.log(menuMaterialRef.current);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  useEffect(() => {
    let handler = (e) => {
      if (!menuSizeRef.current.contains(e.target)) {
        setIsSizeActive(false);
        console.log(menuSizeRef.current);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <div>
      {/* <!-- #region Banner.sofa-categoty--> */}
      <div className="owl-carousel owl-theme owl-banner">
        <div className="banner-sofa-categoty banner-common">
          <div className="box-content">
            <div className="box-promo-title">
              <h1>Sofa</h1>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- #endregion  --> */}

      <div className="wrap-breadcrumb">
        <div className="container">
          <div className="row">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Trang chủ</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/roomList">Phòng khách</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Danh sách Sofa
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="sofa-category-filter">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="dropdown filter-dropdown"
                ref={menuRef}
                onChange={handlePriceChange}
                value={priceSelected}
              >
                <div
                  className="btn dropdown-toggle  filter-dropdown-toggle"
                  onClick={() => {
                    setIsPriceActive(!isPriceActive);
                    // console.log(`priceSelected`, priceSelected);
                  }}
                >
                  Giá : {priceSelected}
                  <i className="fa-solid fa-angle-down"></i>
                </div>

                {isPriceActive && (
                  <div className="dropdown-menu  filter-dropdown-menu">
                    {priceOptions.map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          setPriceSelected(option);
                          setIsPriceActive(false);
                          console.log(`option`, option);
                          dispatch(filtersSlice.actions.priceFilterChange(option));
                        }}
                      >
                        <p className="dropdown-item  filter-dropdown-item">Giá : {option}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-4 col-lg-3">
              <div className="dropdown  filter-dropdown" ref={menuMaterialRef}>
                <div
                  className="btn dropdown-toggle  filter-dropdown-toggle"
                  onClick={() => {
                    setIsMaterialActive(!isMaterialActive);
                    // console.log(`materialSelected`, materialSelected);
                  }}
                >
                  Chất liệu : {materialSelected}
                  <i className="fa-solid fa-angle-down"></i>
                </div>

                {isMaterialActive && (
                  <div className="dropdown-menu  filter-dropdown-menu">
                    {materialOptions.map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          setMaterialSelected(option);
                          setIsMaterialActive(false);
                          // console.log(`option`, option);
                          dispatch(filtersSlice.actions.materialFilterChange(option));
                        }}
                      >
                        <p className="dropdown-item  filter-dropdown-item">Giá : {option}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-4 col-lg-3">
              <div className="dropdown  filter-dropdown" ref={menuSizeRef}>
                <div
                  className="btn dropdown-toggle filter-dropdown-toggle"
                  onClick={() => {
                    setIsSizeActive(!isSizeActive);
                    // console.log(`sizeSelected`, sizeSelected);
                  }}
                >
                  Kích cỡ : {sizeSelected}
                  <i className="fa-solid fa-angle-down"></i>
                </div>

                {isSizeActive && (
                  <div className="dropdown-menu  filter-dropdown-menu">
                    {sizeOptions.map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          setSizeSelected(option);
                          setIsSizeActive(false);
                          // console.log(`option`, option);
                          dispatch(filtersSlice.actions.sizeFilterChange(option));
                        }}
                      >
                        <p className="dropdown-item  filter-dropdown-item">Giá : {option}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* <div className="col-12 col-sm-12 col-md-12 col-lg-3">
              <div className="wrap-filter-btn">
                <button type="button">Áp dụng</button>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* <!-- list-new-product --> */}
      <div className="list-new-product">
        <div className="container">
          <div className="row">
            {sofaList.map((product) => (
              <div className="col-12 col-sm-4 col-md-3" key={product.id}>
                <div className="wrap-product">
                  <Link to="/productdetail">
                    <img alt="alter-img" src={product.image} className="product-img" />
                    <img alt="alter-img" src={product.alterImage} className="product-img-alter" />
                    <p className="name">{product.title}</p>
                    <p className="price">{product.price}₫</p>
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

      <CartModal></CartModal>
    </div>
  );
}
