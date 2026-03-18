/* ============================================================
   CRAVE - Food Ordering App | script.js
   Vanilla JS ES6+ | Modular, Clean, Commented
   ============================================================ */

'use strict';

/* ===== DATA: FOOD MENU ===== */
const MENU_DATA = [
  // --- PIZZA ---
  {
    id: 1, category: 'pizza', name: 'Margherita Classic',
    desc: 'Fresh tomato base, buffalo mozzarella, basil leaves & extra virgin olive oil.',
    price: 299, rating: 4.8, reviews: 1240,
    badge: 'veg', badgeLabel: '🌿 Veg',
    img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80',
  },
  {
    id: 2, category: 'pizza', name: 'Pepperoni Blaze',
    desc: 'Loaded with premium pepperoni, smoked mozzarella & jalapeños on a crispy crust.',
    price: 449, rating: 4.9, reviews: 2100,
    badge: 'popular', badgeLabel: '🔥 Popular',
    img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80',
  },
  {
    id: 3, category: 'pizza', name: 'BBQ Chicken',
    desc: 'Smoky BBQ sauce, grilled chicken, caramelised onions & cheddar blend.',
    price: 499, rating: 4.7, reviews: 890,
    badge: 'spicy', badgeLabel: '🌶 Spicy',
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
  },
  {
    id: 4, category: 'pizza', name: 'Truffle Mushroom',
    desc: 'White truffle oil, wild mushrooms, garlic cream, parmesan & rocket.',
    price: 549, rating: 4.6, reviews: 430,
    badge: 'new', badgeLabel: '✨ New',
    img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80',
  },
  // --- BURGER ---
  {
    id: 5, category: 'burger', name: 'Smash Classic',
    desc: 'Double smash patty, American cheese, pickles, special sauce & brioche bun.',
    price: 249, rating: 4.9, reviews: 3200,
    badge: 'popular', badgeLabel: '🔥 Popular',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80',
  },
  {
    id: 6, category: 'burger', name: 'Crispy Chicken',
    desc: 'Southern fried chicken thigh, slaw, sriracha mayo on a toasted sesame bun.',
    price: 279, rating: 4.8, reviews: 1780,
    badge: 'spicy', badgeLabel: '🌶 Spicy',
    img: 'https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?w=400&q=80',
  },
  {
    id: 7, category: 'burger', name: 'Veggie Stack',
    desc: 'Black bean patty, avocado, lettuce, tomato, chipotle mayo & vegan bun.',
    price: 229, rating: 4.5, reviews: 650,
    badge: 'veg', badgeLabel: '🌿 Veg',
    img: 'https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&q=80',
  },
  {
    id: 8, category: 'burger', name: 'Truffle Wagyu',
    desc: '100g Wagyu beef patty, truffle aioli, caramelised onion & aged gruyère.',
    price: 599, rating: 4.9, reviews: 310,
    badge: 'new', badgeLabel: '✨ New',
    img: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&q=80',
  },
  // --- DRINKS ---
  {
    id: 9, category: 'drinks', name: 'Mango Colada',
    desc: 'Alphonso mango, coconut cream, lime & fresh mint — blended to perfection.',
    price: 149, rating: 4.7, reviews: 890,
    badge: 'veg', badgeLabel: '🌿 Veg',
    img: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=400&q=80',
  },
  {
    id: 10, category: 'drinks', name: 'Cold Brew Coffee',
    desc: 'Slow-steeped for 20 hours, served over ice with oat milk & vanilla syrup.',
    price: 179, rating: 4.8, reviews: 1340,
    badge: 'popular', badgeLabel: '🔥 Popular',
    img: 'https://images.unsplash.com/photo-1517959105821-eaf2591984d2?w=400&q=80',
  },
  {
    id: 11, category: 'drinks', name: 'Berry Blast',
    desc: 'Strawberry, blueberry, raspberry, banana & apple juice — power packed.',
    price: 159, rating: 4.6, reviews: 720,
    badge: 'veg', badgeLabel: '🌿 Veg',
    img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80',
  },
  {
    id: 12, category: 'drinks', name: 'Matcha Latte',
    desc: 'Ceremonial grade matcha, steamed oat milk, honey & a pinch of sea salt.',
    price: 199, rating: 4.7, reviews: 540,
    badge: 'new', badgeLabel: '✨ New',
    img: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=400&q=80',
  },
  // --- DESSERTS ---
  {
    id: 13, category: 'desserts', name: 'Lava Brownie',
    desc: 'Warm dark chocolate brownie with molten centre, served with vanilla gelato.',
    price: 199, rating: 4.9, reviews: 1890,
    badge: 'popular', badgeLabel: '🔥 Popular',
    img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80',
  },
  {
    id: 14, category: 'desserts', name: 'Tiramisu Cup',
    desc: 'Espresso-soaked ladyfingers, mascarpone cream & a dusting of cocoa.',
    price: 229, rating: 4.8, reviews: 660,
    badge: 'veg', badgeLabel: '🌿 Veg',
    img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80',
  },
  {
    id: 15, category: 'desserts', name: 'Mango Cheesecake',
    desc: 'Baked New York cheesecake with fresh Alphonso mango coulis & graham cracker crust.',
    price: 259, rating: 4.7, reviews: 480,
    badge: 'new', badgeLabel: '✨ New',
    img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80',
  },
  {
    id: 16, category: 'desserts', name: 'Churros & Dip',
    desc: 'Crispy cinnamon churros with three dipping sauces — chocolate, caramel & berry.',
    price: 179, rating: 4.6, reviews: 790,
    badge: 'veg', badgeLabel: '🌿 Veg',
    img: 'https://images.unsplash.com/photo-1624303398286-63fc0e7a1a5c?w=400&q=80',
  },
];

/* ===== STATE ===== */
let state = {
  cart: [],       // { ...item, quantity }
  category: 'all',
  search: '',
  theme: 'dark',
  favorites: new Set(),
};

/* ===== LOCAL STORAGE ===== */
const LS_CART = 'crave_cart';
const LS_THEME = 'crave_theme';
const LS_FAVS = 'crave_favs';

const saveCart = () => localStorage.setItem(LS_CART, JSON.stringify(state.cart));
const loadCart = () => {
  try { state.cart = JSON.parse(localStorage.getItem(LS_CART)) || []; } catch { state.cart = []; }
};
const loadTheme = () => {
  state.theme = localStorage.getItem(LS_THEME) || 'dark';
};
const loadFavs = () => {
  try { state.favorites = new Set(JSON.parse(localStorage.getItem(LS_FAVS)) || []); } catch { state.favorites = new Set(); }
};
const saveFavs = () => localStorage.setItem(LS_FAVS, JSON.stringify([...state.favorites]));

/* ===== DOM SELECTORS ===== */
const $ = (id) => document.getElementById(id);
const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];

const foodGrid   = $('foodGrid');
const cartPanel  = $('cartPanel');
const cartOverlay = $('cartOverlay');
const cartBody   = $('cartBody');
const cartEmpty  = $('cartEmpty');
const cartFooter = $('cartFooter');
const cartBadge  = $('cartBadge');
const floatCartBtn = $('floatCartBtn');
const floatBadge = $('floatBadge');
const floatTotal = $('floatTotal');
const subtotalVal = $('subtotalVal');
const gstVal     = $('gstVal');
const totalVal   = $('totalVal');
const itemCount  = $('itemCount');
const emptyState = $('emptyState');
const toastContainer = $('toastContainer');
const modalOverlay = $('modalOverlay');
const searchInput = $('searchInput');
const searchClear = $('searchClear');
const themeToggle = $('themeToggle');
const loaderScreen = $('loaderScreen');

/* ===== UTILITIES ===== */

/**
 * Show a toast notification
 * @param {string} message
 * @param {string} icon
 */
const showToast = (message, icon = '✅') => {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('fade-out');
    toast.addEventListener('animationend', () => toast.remove());
  }, 3000);
};

/**
 * Format currency
 * @param {number} val
 */
const formatPrice = (val) => `₹${val.toFixed(0)}`;

/**
 * Generate a random order ID
 */
const randomOrderId = () => Math.floor(100000 + Math.random() * 900000);

/**
 * Render star rating HTML
 * @param {number} rating
 */
const renderStars = (rating) =>
  `<span class="star-icon">★</span> ${rating}`;

/* ===== THEME ===== */
const applyTheme = () => {
  document.documentElement.setAttribute('data-theme', state.theme);
  themeToggle.querySelector('.theme-icon').textContent =
    state.theme === 'dark' ? '☽' : '☀';
  localStorage.setItem(LS_THEME, state.theme);
};

themeToggle.addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme();
  showToast(`${state.theme === 'dark' ? 'Dark' : 'Light'} mode activated`, state.theme === 'dark' ? '🌙' : '☀️');
});

/* ===== LOADER ===== */
const hideLoader = () => {
  setTimeout(() => loaderScreen.classList.add('hide'), 1800);
};

/* ===== FILTER & SEARCH ===== */

/**
 * Get filtered menu items based on category + search
 */
const getFilteredItems = () => {
  const { category, search } = state;
  return MENU_DATA.filter(item => {
    const matchCat = category === 'all' || item.category === category;
    const q = search.toLowerCase().trim();
    const matchSearch = !q ||
      item.name.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });
};

/* ===== RENDER FOOD GRID ===== */
const renderGrid = () => {
  const items = getFilteredItems();
  foodGrid.innerHTML = '';

  // Update count
  itemCount.textContent = `${items.length} item${items.length !== 1 ? 's' : ''}`;

  if (items.length === 0) {
    emptyState.style.display = 'block';
    return;
  }
  emptyState.style.display = 'none';

  // Animation stagger delay
  items.forEach((item, i) => {
    const card = createFoodCard(item, i);
    foodGrid.appendChild(card);
  });
};

/**
 * Create a food card DOM element
 * @param {Object} item
 * @param {number} index
 */
const createFoodCard = (item, index) => {
  const { id, name, desc, price, rating, reviews, badge, badgeLabel, img, category } = item;
  const cartItem = state.cart.find(c => c.id === id);
  const inCart = !!cartItem;
  const qty = inCart ? cartItem.quantity : 0;
  const isFav = state.favorites.has(id);

  const card = document.createElement('div');
  card.className = 'food-card';
  card.style.animationDelay = `${index * 0.06}s`;
  card.dataset.id = id;

  card.innerHTML = `
    <div class="card-img-wrap">
      <img src="${img}" alt="${name}" loading="lazy" />
      <div class="card-badge badge-${badge}">${badgeLabel}</div>
      <button class="card-fav ${isFav ? 'active' : ''}" data-fav="${id}" title="Favourite">❤</button>
    </div>
    <div class="card-body">
      <div class="card-meta">
        <span class="card-category">${category.charAt(0).toUpperCase() + category.slice(1)}</span>
        <span class="card-rating">${renderStars(rating)} <span class="rating-count">(${reviews.toLocaleString()})</span></span>
      </div>
      <div class="card-name">${name}</div>
      <div class="card-desc">${desc}</div>
      <div class="card-footer">
        <div class="card-price">${formatPrice(price)} <span class="card-price-unit"></span></div>
        ${inCart
          ? `<div class="qty-control" data-id="${id}">
               <button class="qty-btn" data-action="dec" data-id="${id}">−</button>
               <span class="qty-num">${qty}</span>
               <button class="qty-btn" data-action="inc" data-id="${id}">+</button>
             </div>`
          : `<button class="add-btn" data-add="${id}">
               <span>Add</span> <span>+</span>
             </button>`
        }
      </div>
    </div>
  `;
  return card;
};

/* ===== CART LOGIC ===== */

/**
 * Add item to cart or increment quantity
 * @param {number} id
 */
const addToCart = (id) => {
  const item = MENU_DATA.find(m => m.id === id);
  if (!item) return;

  const existing = state.cart.find(c => c.id === id);
  if (existing) {
    existing.quantity++;
  } else {
    state.cart = [...state.cart, { ...item, quantity: 1 }];
  }

  saveCart();
  updateCartUI();
  renderGrid(); // refresh card to show qty control
  showToast(`${item.name} added to cart`, '🛒');
  animateBadge();
};

/**
 * Update quantity in cart
 * @param {number} id
 * @param {'inc'|'dec'} action
 */
const updateQty = (id, action) => {
  const itemIndex = state.cart.findIndex(c => c.id === id);
  if (itemIndex === -1) return;

  if (action === 'inc') {
    state.cart[itemIndex].quantity++;
  } else {
    state.cart[itemIndex].quantity--;
    if (state.cart[itemIndex].quantity <= 0) {
      removeFromCart(id, false);
      return;
    }
  }
  saveCart();
  updateCartUI();
  renderGrid();
};

/**
 * Remove item from cart
 * @param {number} id
 * @param {boolean} showMsg
 */
const removeFromCart = (id, showMsg = true) => {
  const item = state.cart.find(c => c.id === id);
  state.cart = state.cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
  renderGrid();
  if (showMsg && item) showToast(`${item.name} removed`, '🗑️');
};

/* ===== CART UI ===== */

/**
 * Render all cart items in the side panel
 */
const renderCartItems = () => {
  // Remove existing items (keep #cartEmpty)
  $$('.cart-item', cartBody).forEach(el => el.remove());

  if (state.cart.length === 0) {
    cartEmpty.style.display = 'flex';
    cartFooter.style.display = 'none';
    return;
  }

  cartEmpty.style.display = 'none';
  cartFooter.style.display = 'block';

  state.cart.forEach(({ id, name, img, price, quantity }) => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.dataset.id = id;
    el.innerHTML = `
      <img class="cart-item-img" src="${img}" alt="${name}" />
      <div class="cart-item-info">
        <div class="cart-item-name">${name}</div>
        <div class="cart-item-price">${formatPrice(price * quantity)}</div>
      </div>
      <div class="cart-item-controls">
        <button class="cart-qty-btn" data-cart-action="dec" data-cart-id="${id}">−</button>
        <span class="cart-qty-num">${quantity}</span>
        <button class="cart-qty-btn" data-cart-action="inc" data-cart-id="${id}">+</button>
        <button class="cart-remove" data-cart-remove="${id}" title="Remove">✕</button>
      </div>
    `;
    cartBody.appendChild(el);
  });
};

/**
 * Update billing summary
 */
const updateBilling = () => {
  const subtotal = state.cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  const gst = subtotal * 0.05;
  const total = subtotal + gst;

  subtotalVal.textContent = formatPrice(subtotal);
  gstVal.textContent = formatPrice(gst);
  totalVal.textContent = formatPrice(total);

  // Update floating cart button total
  floatTotal.textContent = formatPrice(total);
};

/**
 * Update cart badge count
 */
const updateBadgeCount = () => {
  const count = state.cart.reduce((sum, c) => sum + c.quantity, 0);
  cartBadge.textContent = count;
  floatBadge.textContent = count;

  // Show/hide floating button on mobile
  if (count > 0) {
    floatCartBtn.style.display = 'flex';
  } else {
    floatCartBtn.style.display = 'none';
  }
};

/**
 * Animate cart badge
 */
const animateBadge = () => {
  cartBadge.classList.add('bump');
  setTimeout(() => cartBadge.classList.remove('bump'), 400);
};

/**
 * Master cart UI update
 */
const updateCartUI = () => {
  renderCartItems();
  updateBilling();
  updateBadgeCount();
};

/* ===== CART PANEL TOGGLE ===== */
const openCart = () => {
  cartPanel.classList.add('open');
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

const closeCart = () => {
  cartPanel.classList.remove('open');
  cartOverlay.classList.remove('active');
  document.body.style.overflow = '';
};

/* ===== CHECKOUT ===== */
const placeOrder = () => {
  if (state.cart.length === 0) return;

  // Show success modal
  $('orderId').textContent = randomOrderId();
  modalOverlay.classList.add('active');

  // Clear cart
  state.cart = [];
  saveCart();
  updateCartUI();
  renderGrid();
  closeCart();
};

/* ===== FAVOURITES ===== */
const toggleFav = (id) => {
  const numId = parseInt(id);
  if (state.favorites.has(numId)) {
    state.favorites.delete(numId);
    showToast('Removed from favourites', '💔');
  } else {
    state.favorites.add(numId);
    showToast('Added to favourites!', '❤️');
  }
  saveFavs();
  // Re-render just the fav button
  const btn = document.querySelector(`.card-fav[data-fav="${id}"]`);
  if (btn) btn.classList.toggle('active', state.favorites.has(numId));
};

/* ===== CATEGORY TABS ===== */
const initNavPills = () => {
  const pills = $$('.nav-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.category = pill.dataset.category;
      renderGrid();
    });
  });
};

/* ===== SEARCH ===== */
const initSearch = () => {
  searchInput.addEventListener('input', (e) => {
    state.search = e.target.value;
    searchClear.classList.toggle('visible', state.search.length > 0);
    renderGrid();
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    state.search = '';
    searchClear.classList.remove('visible');
    searchInput.focus();
    renderGrid();
  });
};

/* ===== EVENT DELEGATION ===== */

/**
 * Food grid events (add, qty, fav)
 */
foodGrid.addEventListener('click', (e) => {
  // Add to cart button
  const addBtn = e.target.closest('[data-add]');
  if (addBtn) {
    addBtn.classList.add('adding');
    addBtn.addEventListener('animationend', () => addBtn.classList.remove('adding'), { once: true });
    addToCart(parseInt(addBtn.dataset.add));
    return;
  }

  // Qty buttons on card
  const qtyBtn = e.target.closest('.qty-btn');
  if (qtyBtn) {
    updateQty(parseInt(qtyBtn.dataset.id), qtyBtn.dataset.action);
    return;
  }

  // Favourite button
  const favBtn = e.target.closest('[data-fav]');
  if (favBtn) {
    toggleFav(favBtn.dataset.fav);
    return;
  }
});

/**
 * Cart panel events (qty, remove)
 */
cartBody.addEventListener('click', (e) => {
  const qtyBtn = e.target.closest('[data-cart-action]');
  if (qtyBtn) {
    updateQty(parseInt(qtyBtn.dataset.cartId), qtyBtn.dataset.cartAction);
    return;
  }

  const removeBtn = e.target.closest('[data-cart-remove]');
  if (removeBtn) {
    removeFromCart(parseInt(removeBtn.dataset.cartRemove));
    return;
  }
});

/* ===== HERO CTA → SCROLL TO MENU ===== */
$('heroCta').addEventListener('click', () => {
  $('menuSection').scrollIntoView({ behavior: 'smooth' });
});

/* ===== CART OPEN/CLOSE ===== */
$('cartBtn').addEventListener('click', openCart);
$('cartClose').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
floatCartBtn.addEventListener('click', openCart);

/* ===== CHECKOUT BUTTON ===== */
$('checkoutBtn').addEventListener('click', placeOrder);

/* ===== MODAL CLOSE ===== */
$('modalCloseBtn').addEventListener('click', () => {
  modalOverlay.classList.remove('active');
});
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) modalOverlay.classList.remove('active');
});

/* ===== HEADER SCROLL EFFECT ===== */
const header = $('header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10
    ? '0 4px 30px rgba(0,0,0,0.3)'
    : 'none';
}, { passive: true });

/* ===== KEYBOARD SHORTCUTS ===== */
document.addEventListener('keydown', (e) => {
  // Press '/' to focus search
  if (e.key === '/' && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput.focus();
  }
  // Escape closes cart or modal
  if (e.key === 'Escape') {
    if (modalOverlay.classList.contains('active')) {
      modalOverlay.classList.remove('active');
    } else {
      closeCart();
    }
  }
});

/* ===== INIT ===== */
const init = () => {
  loadTheme();
  loadCart();
  loadFavs();
  applyTheme();
  initNavPills();
  initSearch();
  renderGrid();
  updateCartUI();
  hideLoader();
};

init();
