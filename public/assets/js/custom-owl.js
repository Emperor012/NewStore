$("document").ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0, // margin : khoảng cách giữa 2 items
    nav: false, // Ẩn hiện 2 nút mũi tên
    autoplay: false, // Slide tự đọng chạy
    mouseDrag: false,
    responsive: {
      0: {
        items: 1, // items : số item muốn xem trên màn hình
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
