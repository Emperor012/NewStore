import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './bannerStart.css';

function BannerStart() {
  return (
    <div>
      {/* <!-- Banner.Start --> */}
      <div className="owl-carousel owl-theme owl-banner">
        <div className="banner-bordeaux banner-common">
          <div className="box-content">
            <div className="box-promo-title">
              <h1>Bộ sưu tập Bordeux</h1>

              <a href="assets/html/sofa-catagory.html">Khám phá ngay</a>
            </div>
          </div>
        </div>

        <div className="banner-marseille banner-common">
          <div className="box-content">
            <div className="box-promo-title">
              <h1>Bộ sưu tập marseille </h1>

              <a href="assets/html/sofa-catagory.html">Khám phá ngay</a>
            </div>
          </div>
        </div>

        <div className="banner-psg banner-common">
          <div className="box-content">
            <div className="box-promo-title">
              <h1>Bộ sưu tập paris sain germain</h1>

              <a href="assets/html/sofa-catagory.html">Khám phá ngay</a>
            </div>
          </div>
        </div>

        <div className="banner-dubai banner-common">
          <div className="box-content">
            <div className="box-promo-title">
              <h1>Phong cách làm việc Dubai </h1>

              <a href="assets/html/sofa-catagory.html">Khám phá ngay</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Banner.End --> */}
    </div>
  );
}

export default BannerStart;
