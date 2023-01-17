import React from 'react';
import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <div>
      {/* <!-- top-bar .Start --> */}
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8 col-md-8">
              <div className="wrap-navbar-center">
                <div className="wrap-language">
                  <img src="../../assets/images/vi.png" alt="" />
                  <p className="lang">vn</p>
                </div>

                <div className="menu-topbar">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-phone"></i>
                        1800 7200
                      </a>
                    </li>
                    <li>
                      <a href="#">Giới thiệu</a>
                    </li>
                    <li>
                      <a href="#">Khuyến mãi</a>
                    </li>
                    <li>
                      <a href="#">Giảm giá đặc biệt</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-4 col-md-4">
              <div className="wrap-navbar-right">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-location-dot"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <Link to="/cart">
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </Link>
                  </li>
                  <li>
                    <a href="#">
                      Đăng nhập
                      <i className="fa-solid fa-user"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- top-bar .End --> */}
    </div>
  );
}
