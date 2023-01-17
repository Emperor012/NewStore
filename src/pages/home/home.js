import CartModal from '../cartModal/cartModal';
import NewProductList from '../newProductList/newProductList';
import ViewedProductList from '../viewedProductList/viewedProductList';

import './home.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import BannerStart from '../bannerStart/bannerStart';

function Home() {
  return (
    <div>
      {/* <!-- Banner.Start --> */}
      <BannerStart></BannerStart>
      {/* <!-- Banner.End --> */}

      {/* <!-- room-category.Start --> */}
      <div className="catalog-by-room">
        <div className="fluid=container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6">
              <div className="living-room">
                <a href="assets/html/living-room.html">
                  <img alt="alter-img" src="assets/images/nha-xinh-mau-phong-khach.jpg" />
                </a>

                <div className="room-desc">
                  <h2>Không gian phòng khách</h2>

                  <p>Phòng khách là không gian chính của ngôi nhà, là nơi sum họp gia đình</p>

                  <a href="assets/html/living-room.html">
                    KHÁM PHÁ
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6">
              <div className="wrap-decorations">
                <div className="room-desc">
                  <h2>Không gian phòng khách</h2>

                  <p>Phòng khách là không gian chính của ngôi nhà, là nơi sum họp gia đình</p>

                  <a href="assets/html/living-room.html">
                    MẪU THIẾT KẾ
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>

                <div className="room-desc">
                  <h2>Đồ trang trí</h2>

                  <p>Mang lại những nguồn cảm hứng và nét sinh động cho không gian</p>

                  <a href="assets/html/living-room.html">
                    MẪU THIẾT KẾ
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>

                <div className="decorations">
                  <a href="assets/html/living-room.html">
                    <img alt="alter-img" src="assets/images/hang-trang-tri-banner-nha-xinh.jpg" />
                  </a>

                  <div className="box-promo-title">
                    <h2>Đồ trang trí</h2>

                    <p>Phòng khách là không gian chính của ngôi nhà, là nơi sum họp gia đình</p>

                    <a href="assets/html/living-room.html">
                      KHÁM PHÁ <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6">
              <div className="wrap-bedroom">
                <a href="assets/html/living-room.html" className="bedroom-link">
                  <img alt="alter-img" src="assets/images/nha-xinh-phong-ngu-bannerchinh.jpg" />
                </a>

                <div className="room-desc">
                  <h2>Không gian phòng ngủ</h2>

                  <p>Phòng khách là không gian chính của ngôi nhà, là nơi sum họp gia đình</p>

                  <a href="assets/html/living-room.html">
                    MẪU PHÒNG NGỦ
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6">
              <div className="wrap-dinningroom">
                <a href="assets/html/living-room.html" className="dinningroom-link">
                  <img alt="alter-img" src="assets/images/nha-xinh-phong-an-chinh-banner.jpg" />
                </a>

                <div className="room-desc">
                  <h2>Không gian phòng ngủ</h2>

                  <p>Phòng khách là không gian chính của ngôi nhà, là nơi sum họp gia đình</p>

                  <a href="assets/html/living-room.html">
                    MẪU PHÒNG NGỦ
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- rom-category.End --> */}

      {/* <!-- banner addition 1.Start --> */}
      <div className="owl-carousel owl-theme owl-banner-addition-1">
        <div className="banner-addition-1 banner-common">
          <div className="box-content">
            <div className="box-promo-title">
              <h1>MICHAEL ARAM</h1>

              <p className="box-promo-title-desc">Tinh hoa nghệ thuật thủ công</p>

              <a href="assets/html/product-detail.html">Xem chi tiết</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- banner addition 1.End --> */}

      <NewProductList></NewProductList>

      {/* <!-- banner addition 2.Start --> */}
      <div className="owl-carousel owl-theme owl-banner-addition-1">
        <div className="banner-addition-2 banner-common">
          <div className="box-content">
            <div className="box-promo-title">
              <h1>Giường công năng giá tốt</h1>

              <a href="assets/html/product-detail.html">Xem chi tiết</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- banner addition 2.End --> */}

      <ViewedProductList></ViewedProductList>

      {/* <!-- banner addition address.Start --> */}
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
      {/* <!-- banner addition address.End --> */}

      <CartModal></CartModal>
    </div>
  );
}

export default Home;
