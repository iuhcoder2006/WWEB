
function renderNavbar(activePage) {
  const isActive = (key) => activePage === key ? 'active-page' : '';

  document.getElementById('navbar-placeholder').innerHTML = `
    <header>
      <div class="announcement-bar">
        MIỄN PHÍ VẬN CHUYỂN CHO ĐƠN HÀNG TỪ 500.000đ &nbsp;|&nbsp; MUA NGAY!
      </div>
      <nav class="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
        <div class="container">
          <a class="navbar-brand d-flex align-items-center gap-2 text-decoration-none" href="index.html">
            <div class="brand-icon"><i class="bi bi-lightning-charge-fill"></i></div>
            <span class="brand-name">XP<span>BOOKS</span></span>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item dropdown position-static">
                <a class="nav-link dropdown-toggle px-3 ${isActive('categories')}" href="categories.html" data-bs-toggle="dropdown">DANH MỤC SÁCH</a>
                <div class="dropdown-menu dr-menu">
                  <div class="container py-3">
                    <div class="row">
                      <div class="col-md-3">
                        <h6 class="fw-bold mb-3"><i class="bi bi-star me-2"></i>Kỹ Năng Sống</h6>
                        <a class="dropdown-item p-1" href="categories.html?cat=K%E1%BB%B9+n%C4%83ng+s%E1%BB%91ng">Kỹ năng sống</a>
                        <a class="dropdown-item p-1" href="categories.html?cat=T%C3%A2m+l%C3%BD+h%E1%BB%8Dc">Tâm lý học</a>
                        <a class="dropdown-item p-1" href="categories.html?cat=Ikigai">Phong cách sống</a>
                      </div>
                      <div class="col-md-3">
                        <h6 class="fw-bold mb-3"><i class="bi bi-graph-up-arrow me-2"></i>Kinh Doanh</h6>
                        <a class="dropdown-item p-1" href="categories.html?cat=Kinh+doanh">Kinh doanh</a>
                        <a class="dropdown-item p-1" href="categories.html?cat=T%C3%A0i+ch%C3%ADnh">Tài chính</a>
                        <a class="dropdown-item p-1" href="categories.html?cat=Kinh+doanh">Khởi nghiệp</a>
                      </div>
                      <div class="col-md-3">
                        <h6 class="fw-bold mb-3"><i class="bi bi-book me-2"></i>Văn Học</h6>
                        <a class="dropdown-item p-1" href="categories.html?cat=Ti%E1%BB%83u+thuy%E1%BA%BFt">Tiểu thuyết</a>
                        <a class="dropdown-item p-1" href="categories.html?cat=L%E1%BB%8Bch+s%E1%BB%AD">Lịch sử</a>
                        <a class="dropdown-item p-1" href="categories.html?cat=V%C4%83n+h%E1%BB%8Dc+thi%E1%BA%BFu+nhi">Thiếu nhi</a>
                      </div>
                      <div class="col-md-3 bg-light p-4 rounded text-center">
                        <h5>Ưu đãi 30%</h5>
                        <p class="small text-muted">Dành cho sách thiếu nhi trong tuần này.</p>
                        <a href="categories.html?cat=V%C4%83n+h%E1%BB%8Dc+thi%E1%BA%BFu+nhi" class="btn btn-outline-primary btn-sm">Xem ngay</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link px-3 ${isActive('shop')}" href="shop.html">CỬA HÀNG</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-3 ${isActive('checkout')}" href="checkout.html">THANH TOÁN</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-3 ${isActive('blog')}" href="blog.html">BLOG</a>
              </li>
            </ul>
            <div class="d-flex align-items-center gap-4">
              <div class="d-none d-xl-block">
                <form onsubmit="handleSearch(event)" class="d-flex">
                  <div class="input-group" style="width:190px">
                    <input type="text" id="navbar-search" class="form-control border-0 bg-light" placeholder="Tìm sách..." style="border-radius:20px 0 0 20px">
                    <button type="submit" class="input-group-text border-0 bg-light" style="border-radius:0 20px 20px 0"><i class="bi bi-search"></i></button>
                  </div>
                </form>
              </div>
              <a href="cart.html" class="text-dark position-relative" title="Giỏ hàng">
                <i class="bi bi-bag fs-4"></i>
                <span id="cart-badge">0</span>
              </a>
              <a href="account.html" class="text-dark" title="Tài khoản">
                <i class="bi bi-person fs-4"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>`;
  Cart.updateBadge();
}

function renderFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer class="pt-5 mt-5 border-top">
      <div class="container">
        <div class="row gy-4 pb-5">
          <div class="col-lg-4">
            <h4 class="fw-bold mb-4">
              <a href="index.html"><span class="brand-name fw-bold fs-4">XP<span style="color:#0d6efd">BOOKS</span></span></a>
            </h4>
            <p class="mb-3">Hệ thống nhà sách trực tuyến hàng đầu Việt Nam. Nơi bạn tìm thấy mọi kho tàng tri thức của nhân loại.</p>
            <div class="d-flex gap-2">
              <a href="#" class="social-icon"><i class="bi bi-facebook"></i></a>
              <a href="#" class="social-icon"><i class="bi bi-twitter-x"></i></a>
              <a href="#" class="social-icon"><i class="bi bi-instagram"></i></a>
              <a href="#" class="social-icon"><i class="bi bi-youtube"></i></a>
            </div>
          </div>
          <div class="col-6 col-lg-2">
            <h5>Dịch vụ</h5>
            <a href="#" class="footer-link">Điều khoản sử dụng</a>
            <a href="#" class="footer-link">Chính sách bảo mật</a>
            <a href="#" class="footer-link">Hệ thống cửa hàng</a>
          </div>
          <div class="col-6 col-lg-2">
            <h5>Hỗ trợ</h5>
            <a href="#" class="footer-link">Trung tâm trợ giúp</a>
            <a href="#" class="footer-link">Chính sách vận chuyển</a>
            <a href="#" class="footer-link">Hướng dẫn mua hàng</a>
            <a href="blog.html" class="footer-link">Blog sách</a>
          </div>
          <div class="col-lg-4">
            <h5>Đăng ký nhận mã giảm giá</h5>
            <p class="small">Chúng tôi sẽ gửi các deal hot nhất vào mail của bạn hàng tuần.</p>
            <div class="input-group mb-3">
              <input type="email" class="form-control bg-dark text-white border-0" placeholder="Email của bạn">
              <button class="btn btn-primary px-4">Đăng ký</button>
            </div>
            <small class="text-muted"><i class="bi bi-geo-alt me-1"></i>123 Đường Sách, Q.1, TP.HCM</small><br>
            <small class="text-muted"><i class="bi bi-telephone me-1"></i>0123 456 789</small>
          </div>
        </div>
        <div class="border-top py-4 text-center">
          <p class="mb-0 text-muted">&copy; 2026 XP Bookstore. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>`;
}

function handleSearch(e) {
  e.preventDefault();
  const q = document.getElementById('navbar-search').value.trim();
  if (q) window.location.href = `shop.html?search=${encodeURIComponent(q)}`;
}
