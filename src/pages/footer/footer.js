import './footer.css';

import React from 'react';

export const Footer = () => {
  return (
    <div>
      {/* <!-- footer --> */}
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4 col-md-3">
              <div className="wrap-footer-item">
                <div className="footer-item-title">
                  <img src="assets/images/logo.png" alt="" />
                </div>

                <div className="footer-item-content">
                  <ul>
                    <li>
                      <p>FOLLOW US</p>
                    </li>

                    <li>
                      <a className="follow-us-link" href="#">
                        Instagram–Youtube–Facebook
                      </a>
                    </li>

                    <li>
                      <a className="follow-us-chain" href="#">
                        {' '}
                        HỆ THỐNG CỬA HÀNG{' '}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-4 col-md-3">
              <div className="wrap-footer-item">
                <div className="footer-item-title">
                  <p>VỀ NHÀ XINH</p>
                </div>

                <div className="footer-item-content">
                  <ul>
                    <li>
                      <a className="follow-us-link" href="#">
                        {' '}
                        Tin tức{' '}
                      </a>
                    </li>

                    <li>
                      <a className="follow-us-link" href="#">
                        Giới thiệu công ty (MWG.vn)
                      </a>
                    </li>

                    <li>
                      <a className="follow-us-link" href="#">
                        {' '}
                        Tuyển dụng{' '}
                      </a>
                    </li>

                    <li>
                      <br />
                    </li>

                    <li>
                      <a className="follow-us-link" href="#">
                        Gửi góp ý, khiếu nại
                      </a>
                    </li>

                    <li>
                      <a className="follow-us-link" href="#">
                        Tìm hiểu về mua trả góp
                      </a>
                    </li>

                    <li>
                      <a className="follow-us-link" href="#">
                        {' '}
                        Chính sách bảo hành{' '}
                      </a>
                    </li>

                    <li>
                      <a className="follow-us-link" href="#">
                        {' '}
                        Giao hàng{' '}
                      </a>
                    </li>

                    <li>
                      <a className="follow-us-link" href="#">
                        {' '}
                        Bảo hành{' '}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-4 col-md-3">
              <div className="wrap-footer-item">
                <div className="footer-item-title">
                  <a href="#">CẢM HỨNG #NHAXINH</a>
                </div>

                <div className="footer-item-content">
                  <ul>
                    <li>
                      <a className="follow-us-link" href="#">
                        {' '}
                        Sản phẩm{' '}
                      </a>
                    </li>

                    <li>
                      <a href="#"> Ý tưởng và cảm hứng </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-3">
              <div className="wrap-footer-item">
                <div className="footer-item-title">
                  <a href="#">NEWSLETTER</a>
                </div>

                <div className="footer-item-content">
                  <ul>
                    <li>
                      <p>
                        Hãy để lại email của bạn để nhận được những ý tưởng trang trí mới và những thông tin, ưu đãi từ
                        Nhà Xinh
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="wrap-license">
                <p>
                  © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH & ĐT TP.HCM cấp ngày 02/01/2007.
                  GPMXH: 238/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 04/06/2020. Địa chỉ: 128 Trần Quang Khải,
                  P. Tân Định, Q.1, TP.Hồ Chí Minh. Điện thoại: 028 38125960. Email: cskh@thegioididong.com. Chịu trách
                  nhiệm nội dung: Huỳnh Văn Tốt. Xem chính sách sử dụng
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
