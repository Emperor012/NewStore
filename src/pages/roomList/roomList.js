import './roomList.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { roomListSelector } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export default function RoomList() {
  const roomList = useSelector(roomListSelector);

  return (
    <div>
      {/* <!-- #region Banner.living-room --> */}
      <div className="owl-carousel owl-theme owl-banner">
        <div className="banner-living-room banner-common">
          <div className="box-content">
            <div className="box-promo-title">
              <h1>Phòng khách</h1>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- #endregion  Banner.living-room --> */}

      {/* <!--#region  living-room-content --> */}
      <div className="living-room-content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-3">
              <div className="living-room-menu">
                <div className="living-menu-title">
                  <a href="#">Nội thất phòng khách</a>
                </div>

                <div className="living-menu-items">
                  <ul>
                    <li>
                      <Link to="/sofalist"> Sofa </Link>
                    </li>

                    <li>
                      <Link to="/sofalist"> Sofa góc </Link>
                    </li>

                    <li>
                      <a href="#">
                        <br />
                      </a>
                    </li>

                    <li>
                      <Link to="/sofalist"> Ghế thư dẫn </Link>
                    </li>

                    <li>
                      <Link to="/sofalist"> Amchair </Link>
                    </li>

                    <li>
                      <Link to="/sofalist"> Ghế dài và đôn </Link>
                    </li>

                    <li>
                      <a href="#">
                        <br />
                      </a>
                    </li>

                    <li>
                      <Link to="/sofalist"> Bàn nước </Link>
                    </li>

                    <li>
                      <Link to="/sofalist"> Bàn bên </Link>
                    </li>

                    <li>
                      <Link to="/sofalist"> Bàn console </Link>
                    </li>

                    <li>
                      <Link to="/sofalist"> Tủ tivi </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-9">
              <div className="wrap-room-type row">
                {roomList.map((room) => (
                  <div className="col-12 col-sm-6 room-type" key={room.id}>
                    <Link to="/sofalist">
                      <img src={room.image} className="product-img-alter" />
                      <p className="type">Phòng khách hiện đại với tone màu xanh nổi bật</p>
                      <p className="description">Nổi bật với thiết kế hiện đại nhưng vẫn toát [...]</p>

                      <p href="assets/html/sofa-catagory.html" className="description-view">
                        Xem chi tiết
                      </p>
                    </Link>
                  </div>
                ))}

                {/* <div className="room-type">
                    <Link to="/sofalist">
                      <img src="assets/images/phong-khach-bac-au-miami-tuoi-sang-3.jpg" className="product-img-alter" />
                      <p className="type">Phòng khách hiện đại với tone màu xanh nổi bật</p>
                      <p className="description">Một thiết kế mang nét tối giản của Bắc Âu [...]</p>

                      <p href="assets/html/sofa-catagory.html" className="description-view">
                        Xem chi tiết
                      </p>
                    </Link>
                  </div> */}
              </div>

              {/* <div className="wrap-room-type">
                <div className="room-type">
                  <Link to="/sofalist">
                    <img
                      src="assets/images/phong-khach-combo-xanh-hien-dai-goc-dai-dien.jpg"
                      className="product-img-alter"
                    />
                    <p className="type">Phòng khách hiện đại với tone màu xanh nổi bật</p>
                    <p className="description">Nổi bật với thiết kế hiện đại nhưng vẫn toát [...]</p>

                    <p href="assets/html/sofa-catagory.html" className="description-view">
                      Xem chi tiết
                    </p>
                  </Link>
                </div>

                <div className="room-type">
                  <Link to="/sofalist">
                    <img src="assets/images/phong-khach-bac-au-miami-tuoi-sang-3.jpg" className="product-img-alter" />
                    <p className="type">Phòng khách hiện đại với tone màu xanh nổi bật</p>
                    <p className="description">Một thiết kế mang nét tối giản của Bắc Âu [...]</p>

                    <p href="assets/html/sofa-catagory.html" className="description-view">
                      Xem chi tiết
                    </p>
                  </Link>
                </div>
              </div>

              <div className="wrap-room-type">
                <div className="room-type">
                  <Link to="/sofalist">
                    <img src="assets/images/phong-khach-tram-am-osaka.jpg" className="product-img-alter" />
                    <p className="type">Phòng khách hiện đại với tone màu xanh nổi bật</p>
                    <p className="description">Nổi bật với thiết kế hiện đại nhưng vẫn toát [...]</p>

                    <p href="assets/html/sofa-catagory.html" className="description-view">
                      Xem chi tiết
                    </p>
                  </Link>
                </div>

                <div className="room-type">
                  <Link to="/sofalist">
                    <img src="assets/images/SOFA-GOC-PHAI-COMBO-VAI-MB-204jpg.jpg" className="product-img-alter" />
                    <p className="type">Phòng khách bắc âu tinh tế</p>
                    <p className="description">Một thiết kế mang nét tối giản của Bắc Âu [...]</p>

                    <p href="assets/html/sofa-catagory.html" className="description-view">
                      Xem chi tiết
                    </p>
                  </Link>
                </div>
              </div>

              <div className="wrap-room-type">
                <div className="room-type">
                  <Link to="/sofalist">
                    <img
                      src="assets/images/phong-khach-mua-he-nhieu-mau-sac-tuoi-mat.jpg"
                      className="product-img-alter"
                    />
                    <p className="type">Phòng khách trầm ấm Osaka</p>
                    <p className="description">Trong không khí chuyển mùa, bầu trời xanh trong hơn, [...]</p>

                    <p href="assets/html/sofa-catagory.html" className="description-view">
                      Xem chi tiết
                    </p>
                  </Link>
                </div>

                <div className="room-type">
                  <Link to="/sofalist">
                    <img src="assets/images/phong-khach-nha-xinh-cam-hung.jpg" className="product-img-alter" />
                    <p className="type">Không gian đong đầy màu sắc tươi mới</p>
                    <p className="description">Trong không khí chuyển mùa, bầu trời xanh trong hơn, [...]</p>

                    <p href="assets/html/sofa-catagory.html" className="description-view">
                      Xem chi tiết
                    </p>
                  </Link>
                </div>
              </div>

              <div className="wrap-room-type">
                <div className="room-type">
                  <Link to="/sofalist">
                    <img src="assets/images/sofa-maxine-vai-vang-2.jpg" className="product-img-alter" />
                    <p className="type">Phòng khách hiện đại với tone màu xanh nổi bật</p>
                    <p className="description">Nổi bật với thiết kế hiện đại nhưng vẫn toát [...]</p>

                    <p href="assets/html/sofa-catagory.html" className="description-view">
                      Xem chi tiết
                    </p>
                  </Link>
                </div>

                <div className="room-type">
                  <Link to="/sofalist">
                    <img
                      src="assets/images/phong-khach-toi-gian-hien-dai-mau-sac-trung-tinh-600x400.jpg"
                      className="product-img-alter"
                    />
                    <p className="type">Phòng khách hiện đại với tone màu xanh nổi bật</p>
                    <p className="description">Một thiết kế mang nét tối giản của Bắc Âu [...]</p>

                    <p href="assets/html/sofa-catagory.html" className="description-view">
                      Xem chi tiết
                    </p>
                  </Link>
                </div>
              </div>

              <div className="wrap-room-type">
                <div className="room-type">
                  <Link to="/sofalist">
                    <img src="assets/images/sofa-opal-da-xam-1-600x400.jpg" className="product-img-alter" />
                    <p className="type">Phòng khách hiện đại với tone màu xanh nổi bật</p>
                    <p className="description">Trong không khí chuyển mùa, bầu trời xanh trong hơn, [...]</p>

                    <p href="assets/html/sofa-catagory.html" className="description-view">
                      Xem chi tiết
                    </p>
                  </Link>
                </div>

                <div className="room-type">
                  <Link to="/sofalist">
                    <img src="assets/images/sofa-poppy-3-cho-vai-vang-5-600x400.jpg" className="product-img-alter" />
                    <p className="type">Phòng khách hiện đại với tone màu xanh nổi bật</p>
                    <p className="description">Trong không khí chuyển mùa, bầu trời xanh trong hơn, [...]</p>

                    <p href="assets/html/sofa-catagory.html" className="description-view">
                      Xem chi tiết
                    </p>
                  </Link>
                </div>
              </div>

              <div className="wrap-room-type">
                <div className="room-type">
                  <Link to="/sofalist">
                    <img src="assets/images/sofa-penny-vai-xanh-4-600x400.jpg" className="product-img-alter" />
                    <p className="type">Phòng khách hiện đại với tone màu xanh nổi bật</p>
                    <p className="description">Nổi bật với thiết kế hiện đại nhưng vẫn toát [...]</p>

                    <p href="assets/html/sofa-catagory.html" className="description-view">
                      Xem chi tiết
                    </p>
                  </Link>
                </div>

                <div className="room-type">
                  <Link to="/sofalist">
                    <img src="assets/images/sofa-shadow-600x400.jpg" className="product-img-alter" />
                    <p className="type">Phòng khách bắc âu tinh tế</p>
                    <p className="description">Một thiết kế mang nét tối giản của Bắc Âu [...]</p>

                    <p href="assets/html/sofa-catagory.html" className="description-view">
                      Xem chi tiết
                    </p>
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!--#endregion  living-room-content --> */}

      {/* <!-- #region  banner addition address.Start --> */}
      <div className="owl-carousel owl-theme owl-banner-addition-address">
        <div className="banner-addition-address banner-common">
          <div className="box-content">
            <div className="box-promo-title">
              <h1>Xem, chạm và cảm nhận</h1>

              <a href="#">Tìm cửa hàng</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- #endregion  banner addition address.End --> */}
    </div>
  );
}
