const Cart = {
  getItems() {
    return JSON.parse(localStorage.getItem('xpbooks_cart') || '[]');
  },
  saveItems(items) {
    localStorage.setItem('xpbooks_cart', JSON.stringify(items));
  },
  addItem(book) {
    const items = this.getItems();
    const existing = items.find(i => i.id === book.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      items.push({ id: book.id, title: book.title, author: book.author, price: book.price, cover: book.cover, quantity: 1 });
    }
    this.saveItems(items);
    this.updateBadge();
    this.showToast(book.title);
  },
  removeItem(id) {
    const items = this.getItems().filter(i => i.id !== id);
    this.saveItems(items);
    this.updateBadge();
  },
  updateQuantity(id, qty) {
    if (qty <= 0) { this.removeItem(id); return; }
    const items = this.getItems();
    const item = items.find(i => i.id === id);
    if (item) item.quantity = qty;
    this.saveItems(items);
    this.updateBadge();
  },
  clearCart() {
    localStorage.removeItem('xpbooks_cart');
    this.updateBadge();
  },
  getTotal() {
    return this.getItems().reduce((sum, i) => sum + i.price * i.quantity, 0);
  },
  getCount() {
    return this.getItems().reduce((sum, i) => sum + i.quantity, 0);
  },
  updateBadge() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
      const count = this.getCount();
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline-flex' : 'none';
    }
  },
  showToast(title) {
    let toast = document.getElementById('cart-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'cart-toast';
      toast.className = 'position-fixed bottom-0 end-0 m-3 toast align-items-center text-bg-success border-0';
      toast.setAttribute('role', 'alert');
      toast.innerHTML = `<div class="d-flex"><div class="toast-body" id="cart-toast-body"></div><button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button></div>`;
      document.body.appendChild(toast);
    }
    document.getElementById('cart-toast-body').textContent = `"${title}" đã được thêm vào giỏ hàng!`;
    const bsToast = new bootstrap.Toast(toast, { delay: 2500 });
    bsToast.show();
  }
};

// Format currency
function formatPrice(price) {
  return price.toLocaleString('vi-VN') + 'đ';
}

// Star rating HTML
function renderStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    stars += `<i class="bi bi-star${i <= Math.floor(rating) ? '-fill' : (i - 0.5 <= rating ? '-half' : '')} text-warning" style="font-size:.85rem"></i>`;
  }
  return stars;
}

// Render a book card (reference b-card style with overlay tools)
function renderBookCard(book) {
  const discount = Math.round((1 - book.price / book.originalPrice) * 100);
  const cartData = JSON.stringify({ id: book.id, title: book.title, author: book.author, price: book.price, cover: book.cover });
  let badge = '';
  if (book.isNew) badge = `<span class="badge bg-success position-absolute top-0 start-0 m-2" style="z-index:3">MỚI</span>`;
  if (book.isBestSeller) badge += `<span class="badge bg-danger position-absolute top-0 end-0 m-2" style="z-index:3">BÁN CHẠY</span>`;

  return `
    <div class="col-6 col-lg-3">
      <div class="card b-card h-100">
        <div class="img-wrapper shadow-sm position-relative">
          ${badge}
          <img src="${book.cover}" alt="${book.title}" />
          <div class="overlay-tools">
            <a href="book-detail.html?id=${book.id}" class="tool-btn text-primary" title="Xem chi tiết">
              <i class="bi bi-eye"></i>
            </a>
            <button class="tool-btn text-danger" title="Yêu thích" onclick="event.preventDefault()">
              <i class="bi bi-heart"></i>
            </button>
            <button class="tool-btn text-success" title="Thêm vào giỏ" onclick='event.preventDefault(); Cart.addItem(${cartData})'>
              <i class="bi bi-plus-lg"></i>
            </button>
          </div>
        </div>
        <div class="card-body px-0 text-center">
          <small class="text-muted">${book.category}</small>
          <h6 class="fw-bold mb-1 mt-1 text-truncate-2" style="min-height:2.4rem;font-size:.88rem">${book.title}</h6>
          <p class="text-muted small mb-2">${book.author}</p>
          <div class="text-warning mb-2">${renderStars(book.rating)}</div>
          <h5 class="text-primary fw-bold mb-0">${formatPrice(book.price)}</h5>
          ${discount > 0 ? `<small class="text-muted text-decoration-line-through">${formatPrice(book.originalPrice)}</small>` : ''}
        </div>
        <a href="book-detail.html?id=${book.id}" class="stretched-link"></a>
      </div>
    </div>`;
}

// Init badge on page load
document.addEventListener('DOMContentLoaded', () => Cart.updateBadge());
