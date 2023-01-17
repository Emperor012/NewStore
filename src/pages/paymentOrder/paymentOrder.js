import React from 'react';
import CartModal from '../cartModal/cartModal';
import './paymentOrder.css';

export default function PaymentOrder() {
  return (
    <div>
      {/* <!-- Payment-content --> */}
      <div className="wrap-cart-content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-7">
              <div className="user-payment-info">
                <form action="" className="user-payment-form">
                  <h1 className="payment-address-title">ĐỊA CHỈ GIAO HÀNG</h1>

                  <label className="form-label">
                    Họ và tên
                    <span className="obligatory-field"> *</span>
                  </label>
                  <input type="text" className="form-control" placeholder="Nhập họ và tên " name="uname" />

                  <div className="user-payment-contact">
                    <div className="user-payment-phone">
                      <label className="form-label">
                        Số điện thoại
                        <span className="obligatory-field"> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập số điện thoại của bạn"
                        name="uname"
                      />
                    </div>

                    <div className="user-payment-email">
                      <label className="form-label">
                        Địa chỉ email
                        <span className="obligatory-field"> *</span>
                      </label>
                      <input type="text" className="form-control" placeholder="Nhập email" name="uname" />
                    </div>
                  </div>

                  <div className="user-payment-address">
                    <div className="user-payment-province">
                      <label className="form-label">
                        Tỉnh / Thành phố
                        <span className="obligatory-field"> *</span>
                      </label>
                      <div className="user-province">
                        <select className="form-control user-arrow" id="sel1">
                          <option disabled>Chọn tỉnh/thành phố</option>

                          <option>Hà Nội</option>
                          <option>Tp Hồ Chí Minh</option>
                          <option>Bắc Ninh</option>
                        </select>
                      </div>
                    </div>

                    <div className="user-payment-district">
                      <label className="form-label">
                        Quận / Huyện
                        <span className="obligatory-field"> *</span>
                      </label>
                      <select className="form-control" id="sel1">
                        <option disabled>Chọn quận/huyện</option>
                        <option>Bắc Từ Liêm</option>
                        <option>Nam Từ Liêm</option>
                        <option>Ba Đình</option>
                        <option>Cầu Giấy</option>
                      </select>
                    </div>
                  </div>

                  <div className="user-address">
                    <label className="form-label">
                      Địa chỉ
                      <span className="obligatory-field"> *</span>
                    </label>
                    <input type="text" className="form-control" placeholder="Nhập địa chỉ " name="uname" />
                  </div>

                  <h1 className="user-more-title">THÔNG TIN THÊM</h1>

                  <div className="wrap-user-note">
                    <label className="form-label">Lưu ý cho đơn hàng (tuỳ chọn)</label>

                    <textarea
                      name=""
                      id=""
                      cols="72"
                      rows="10"
                      placeholder="Viết lưu ý cho đơn hàng của bạn"
                    ></textarea>
                  </div>

                  <h1 className="user-more-title">PHƯƠNG THỨC THANH TOÁN</h1>

                  <div className="payment-mathod">
                    <button className="method-bank">
                      <i className="fa-solid fa-money-check"></i>
                      <br />
                      Chuyển khoản ngân hàng
                    </button>

                    <button className="method-upon-delevery">
                      <i className="fa-solid fa-truck-ramp-box"></i>
                      <br />
                      Thanh toán khi nhân hàng
                    </button>
                  </div>

                  <div className="method-detail">
                    <h1 className="user-more-title">Ngân hàng Vietcombank</h1>

                    <p className="bank-number">Số tài khoản : 0071000745809</p>

                    <p className="bank-owner-title">Tên chủ tài khoản:</p>

                    <p className="bank-owner-name">CT CP NOI THAT AKA VIETCOMBANK – CHI NHÁNH TP.HCM.</p>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-5">
              <div className="wrap-payment-infos">
                <h1 className="payment-title">Tóm tắt đơn hàng</h1>

                <div className="wrap-product-payment">
                  <h1 className="product-payment-title">Sản phẩm</h1>

                  <div className="payment-infos">
                    <div className="product-payment-img">
                      <img src="assets/images/cart-TU-LY-BARBIER-WALNUT-410043Z-1-300x200.jpg" alt="" />
                    </div>

                    <div className="product-payment">
                      <p className="product-payment-name">Tủ Ly Barbier Walnut 410043Z</p>

                      <div className="product-payment-info">
                        <div className="product-payment-quantity">
                          <i className="fa-solid fa-xmark"></i> 1
                        </div>

                        <div className="product-payment-total">
                          <p>49,690,000₫</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="payment-infos">
                    <div className="product-payment-img">
                      <img src="assets/images/cart-ghe-an-peak-mau-xanh-1-300x200.jpg" alt="" />
                    </div>

                    <div className="product-payment">
                      <p className="product-payment-name">Tủ Ly Barbier Walnut 410043Z</p>

                      <div className="product-payment-info">
                        <div className="product-payment-quantity">
                          <i className="fa-solid fa-xmark"></i> 1
                        </div>

                        <div className="product-payment-total">
                          <p>4,900,000₫</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="payment-prize">
                  <div className="payment-prize-title">
                    <p>Thành tiền</p>
                  </div>

                  <div className="payment-prize-money">
                    <p>54,090,000₫</p>
                  </div>
                </div>

                <div className="payment-ship">
                  <div className="cart-ship-title">
                    <p>Vận chuyển</p>
                  </div>

                  <div className="payment-ship-money">
                    <p>Liên hệ phí vận chuyển sau</p>
                  </div>
                </div>

                <div className="payment-ship">
                  <div className="cart-ship-title">
                    <p>Khuyến mãi</p>
                  </div>

                  <div className="payment-ship-money">
                    <p>-500,000đ</p>
                  </div>
                </div>

                <div className="payment-total">
                  <div className="payment-total-title">
                    <p>Tổng cộng</p>
                  </div>

                  <div className="payment-total-money">
                    <p>54,090,000₫</p>
                  </div>
                </div>

                <div className="comfirm-payment">
                  <input className="form-check-input" type="checkbox" id="myCheck" name="remember" />
                  <label className="form-check-label" htmlFor="myCheck">
                    Tôi đã đọc và đồng ý điều kiện đổi trả hàng, giao hàng, chính sách bảo mật, điều khoản dịch vụ mua
                    hàng online *
                  </label>
                </div>

                <button className="payment-purchasing" data-bs-toggle="modal" data-bs-target="#success-modal">
                  Đặt mua
                </button>

                {/* <button className="back-to-cart" onclick="goToCart()"> */}
                <button className="back-to-cart">Quay lại giỏ hàng</button>
              </div>

              <CartModal></CartModal>
            </div>
          </div>
        </div>
        {/* <!-- Payment-content --> */}
      </div>
    </div>
  );
}
