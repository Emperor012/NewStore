import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderMain() {
  return (
    <div>
      {/* <!-- header-main.Start --> */}
      <div className="header-main">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
              <div className="wrap-menu-header">
                {/* <!-- The Modal --> */}
                <div className="modal menu-header-modal" id="myModal">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      {/* <!-- Modal Header --> */}
                      <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                      </div>

                      {/* <!-- Modal body --> */}
                      <div className="modal-body">
                        <div id="sidebarModal" className="sidebarModal">
                          <li className="nav-item dropdown"></li>

                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle show-item-1" href="#">
                              Sofa và Armchair
                              <i className="fa-solid fa-chevron-down"></i>
                            </a>

                            <ul className="show-list-1">
                              <li>
                                <Link to="/sofalist">Sofa</Link>
                              </li>
                              <li>
                                <Link to="/sofalist">Sofa góc</Link>
                              </li>
                              <li>
                                <Link to="/sofalist">Amchair</Link>
                              </li>
                              <li>
                                <Link to="/sofalist">Ghế dài & đôn</Link>
                              </li>
                              <li>
                                <Link to="/sofalist">Ghế thư dãn</Link>
                              </li>
                            </ul>
                          </li>

                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle show-item-2" href="#">
                              Bàn <i className="fa-solid fa-chevron-down"></i>
                            </a>

                            <ul className="show-list-2">
                              <li>
                                <Link to="/sofalist">Sofa</Link>
                              </li>
                              <li>
                                <Link to="/sofalist">Sofa góc</Link>
                              </li>
                              <li>
                                <Link to="/sofalist">Amchair</Link>
                              </li>
                              <li>
                                <Link to="/sofalist">Ghế dài & đôn</Link>
                              </li>
                              <li>
                                <Link to="/sofalist">Ghế thư dãn</Link>
                              </li>
                            </ul>
                          </li>

                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle show-item-3" href="#">
                              Ghế <i className="fa-solid fa-chevron-down"></i>
                            </a>

                            <ul className="show-list-3">
                              <li>
                                <Link to="/sofalist">Sofa</Link>
                              </li>
                              <li>
                                <Link to="/sofalist">Sofa góc</Link>
                              </li>
                              <li>
                                <Link to="/sofalist">Amchair</Link>
                              </li>
                              <li>
                                <Link to="/sofalist">Ghế dài & đôn</Link>
                              </li>
                              <li>
                                <Link to="/sofalist">Ghế thư dãn</Link>
                              </li>
                            </ul>
                          </li>

                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle show-item-4" href="#">
                              Giường ngủ <i className="fa-solid fa-chevron-down"></i>
                            </a>

                            <ul className="show-list-4">
                              <li>
                                <Link to="/sofalist">Sofa</Link>
                              </li>
                              <li>
                                <Link to="/sofalist">Sofa góc</Link>
                              </li>
                              <li>
                                <Link to="/sofalist">Amchair</Link>
                              </li>
                              <li>
                                <Link to="/sofalist">Ghế dài & đôn</Link>
                              </li>
                              <li>
                                <Link to="/sofalist">Ghế thư dãn</Link>
                              </li>
                            </ul>
                          </li>

                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle show-item-5" href="#">
                              Tủ và kệ <i className="fa-solid fa-chevron-down"></i>
                            </a>

                            <ul className="show-list-5">
                              <li>
                                <Link to="/sofalist">Sofa</Link>
                              </li>
                              <li>
                                <Link to="/sofalist">Sofa góc</Link>
                              </li>
                              <li>
                                <Link to="/sofalist">Amchair</Link>
                              </li>
                              <li>
                                <Link to="/sofalist">Ghế dài & đôn</Link>
                              </li>
                              <li>
                                <Link to="/sofalist">Ghế thư dãn</Link>
                              </li>
                            </ul>
                          </li>

                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle show-item-6" href="#">
                              Hàng trang trí
                              <i className="fa-solid fa-chevron-down"></i>
                            </a>

                            <ul className="show-list-6">
                              <li>
                                <Link to="/sofalist">Sofa</Link>
                              </li>
                              <li>
                                <Link to="/sofalist">Sofa góc</Link>
                              </li>
                              <li>
                                <Link to="/sofalist">Amchair</Link>
                              </li>
                              <li>
                                <Link to="/sofalist">Ghế dài & đôn</Link>
                              </li>
                              <li>
                                <Link to="/sofalist">Ghế thư dãn</Link>
                              </li>
                            </ul>
                          </li>

                          <li className="nav-item dropdown show-list-7">
                            <a className="nav-link dropdown-toggle show-item7" href="#">
                              Ngoại thất <i className="fa-solid fa-chevron-down"></i>
                            </a>
                          </li>

                          <ul className="show-list-7">
                            <li>
                              <Link to="/sofalist">Sofa</Link>
                            </li>
                            <li>
                              <Link to="/sofalist">Sofa góc</Link>
                            </li>
                            <li>
                              <Link to="/sofalist">Amchair</Link>
                            </li>
                            <li>
                              <Link to="/sofalist">Ghế dài & đôn</Link>
                            </li>
                            <li>
                              <Link to="/sofalist">Ghế thư dãn</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="wrap-store-logo">
                  {/* <!-- <button className="openbtn" onClick="openNav()">☰</button> --> */}

                  <button type="button" className="openbtn" data-bs-toggle="modal" data-bs-target="#myModal">
                    ☰
                  </button>

                  <Link to="/" className="store-logo">
                    <img src="assets/images/logo-nha-xinh-moi.png" alt="" />
                  </Link>
                </div>

                <div className="wrap-navbar-right">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa fa-search"></i>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <i className="fa-solid fa-location-dot"></i>
                      </a>
                    </li>

                    <li>
                      <Link to="/cart">
                        <i className="fa-solid fa-cart-arrow-down"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-5 col-md-5 col-lg-6 col-xl-7">
              <div className="wrap-nav-header">
                <ul className="nav nav-pills">
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle product-list-menu" id="product-list-menu" to="/sofalist">
                      SẢN PHẨM
                      <i className="fa-solid fa-chevron-down"></i>
                    </Link>

                    <div className="mega-box-submenu">
                      <div className="submenu-content container">
                        <div className="row">
                          <ul className="mega-links">
                            <li>
                              <Link to="/sofalist">Sofa</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Sofa góc</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Ghế thư dãn</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Amchair</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Ghế dài và đôn</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Bàn bên</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Bàn nước</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="row">
                          <ul className="mega-links">
                            <li>
                              <Link to="/sofalist">Bàn ăn</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Ghế Bar</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Tủ ly</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Xe đẩy</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Tủ bếp</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Thiết bị bếp</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="row">
                          <ul className="mega-links">
                            <li>
                              <Link to="/sofalist">Giường ngủ</Link>
                            </li>
                            <li>
                              <Link to="/sofalist">Bàn đầu giường</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Bản trang điểm</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Bản tủ áo</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Tủ âm tường</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Tủ nệm</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="row">
                          <ul className="mega-links">
                            <li>
                              <Link to="/sofalist">Sofa</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Sofa góc</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Ghế thư dãn</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Amchair</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Ghế dài và đôn</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Bàn bên</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Bàn nước</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="row">
                          <ul className="mega-links">
                            <li>
                              <Link to="/sofalist">Sofa</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Sofa góc</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Ghế thư dãn</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Amchair</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Ghế dài và đôn</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Bàn bên</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Bàn nước</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="row">
                          <ul className="mega-links">
                            <li>
                              <Link to="/sofalist">Sofa</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Sofa góc</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Ghế thư dãn</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Amchair</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Ghế dài và đôn</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Bàn bên</Link>
                            </li>

                            <li>
                              <Link to="/sofalist">Bàn nước</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="row">
                          <img src="assets/images/nha-xinh-phong-khach-hien-dai-poppy.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/roomlist">
                      PHÒNG
                      <i className="fa-solid fa-chevron-down"></i>
                    </Link>

                    <ul className="room-submenu">
                      <li>
                        <Link to="/roomlist">Phòng khách</Link>
                      </li>

                      <li>
                        <Link to="/roomlist">Phòng ăn</Link>
                      </li>

                      <li>
                        <Link to="/roomlist">Phòng ngủ</Link>
                      </li>

                      <li>
                        <Link to="/roomlist">Phòng làm việc</Link>
                      </li>

                      <li>
                        <Link to="/roomlist">Tủ bếp</Link>
                      </li>

                      <li>
                        <Link to="/roomlist">Hàng trang trí</Link>
                      </li>
                    </ul>

                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Link 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Link 3
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/roomlist">
                      BỘ SƯU TẬP
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/roomlist">
                      THIẾT KẾ NỘI THẤT
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/roomlist">
                      SHOWROOM ẢO
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/roomlist">
                      GÓC CẢM HỨNG
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3">
              <div className="wrap-search">
                <input type="text" className="searchTerm" placeholder="Tìm sản phẩm" />
                <button type="submit" className="searchButton">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>

            {/* <!-- <a href="#" id="product-list-menu">product-list-menu</a> --> */}
          </div>
        </div>
      </div>

      {/* <!-- header-main.End --> */}
    </div>
  );
}
