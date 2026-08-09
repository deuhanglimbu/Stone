import './style.css';

const app = document.querySelector('#app');
app.innerHTML = `
  <header class="site-header">
    <div class="brand">
      <span class="brand-mark">STONE</span>
      <span class="brand-name">LOADS</span>
    </div>

    <nav class="nav-links">
      <a href="#marketplace">Marketplace</a>
      <a href="#">Stone Types</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#" class="nav-cta">Request a Load</a>
    </nav>

    <a href="#pricing" class="login-link">Log in for Wholesale Pricing</a>
  </header>

  <main>
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Wholesale Natural Stone Direct from the Quarry</p>
        <h1>Wholesale Natural Stone Direct<br/>from the Quarry</h1>
        <p>Shop premium stone loads at wholesale pricing. Fast fulfillment, bulk inventory, and direct quarry sourcing for landscapers and builders.</p>
      </div>
    </section>

    <section class="filters" id="marketplace">
      <input type="search" placeholder="Search for flagging, steps, etc..." />
      <div class="filter-buttons">
        <button id="lioz-btn">Lioz Claro</button>
        <button>Color</button>
        <button>Stone Type</button>
        <button>Category</button>
        <button>Status</button>
        <button>Size</button>
        <button>Supplier</button>
        <button>Availability</button>
        <button>Price</button>
        <button>Region</button>
      </div>
    </section>

    <section id="lioz-panel" class="lioz-panel hidden">
      <div class="lioz-grid">
        <div class="frame-card">
          <div class="frame-inner">Frame 1</div>
        </div>
        <div class="frame-card">
          <div class="frame-inner">Frame 2</div>
        </div>
        <div class="frame-card">
          <div class="frame-inner">Frame 3</div>
        </div>
        <div class="frame-card">
          <div class="frame-inner">Frame 4</div>
        </div>
        <div class="frame-card">
          <div class="frame-inner">Frame 5</div>
        </div>
        <div class="frame-card">
          <div class="frame-inner">Frame 6</div>
        </div>
        <div class="frame-card">
          <div class="frame-inner">Frame 7</div>
        </div>
        <div class="frame-card">
          <div class="frame-inner">Frame 8</div>
        </div>
      </div>
    </section>

    <section class="popular" id="pricing">
      <h2>Popular Now</h2>
      <div class="product-grid">
        <article class="product-card">
          <div class="image-wrap">
            <img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&w=800&q=80" alt="Landscaper Specimen 3000 lbs" />
          </div>
          <div class="product-details">
            <p class="supplier">Supplier Hidden - VA</p>
            <p class="product-title">Landscaper Specimen 3000 lbs</p>
          </div>
        </article>

        <article class="product-card">
          <div class="image-wrap">
            <img src="https://images.unsplash.com/photo-1570132258183-3ffae7299f51?auto=format&fit=crop&w=800&q=80" alt="Landscape 500-1000 lbs" />
          </div>
          <div class="product-details">
            <p class="supplier">Supplier Hidden - VA</p>
            <p class="product-title">Landscape 500-1000 lbs</p>
          </div>
        </article>

        <article class="product-card">
          <div class="image-wrap">
            <img src="https://images.unsplash.com/photo-1443890923422-7819ed4101c0?auto=format&fit=crop&w=800&q=80" alt="Landscaper 3000 lbs 8-12 per pallet" />
          </div>
          <div class="product-details">
            <p class="supplier">Supplier Hidden - VA</p>
            <p class="product-title">Landscaper 3000 lbs 8-12 per pallet</p>
          </div>
        </article>

        <article class="product-card out-of-stock">
          <div class="image-wrap">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Flint Hills Gray thin veneer" />
            <span class="stock-badge">Out of stock</span>
          </div>
          <div class="product-details">
            <p class="supplier">Supplier Hidden - KS</p>
            <p class="product-title">Flint Hills Gray/Plaza Gray thin veneer Rumble/ashlar pattern</p>
          </div>
        </article>
      </div>

      <div class="pagination">
        <button class="page active" aria-label="Page 1">1</button>
        <button class="page" aria-label="Page 2">2</button>
        <button class="page" aria-label="Page 3">3</button>
        <button class="page" aria-label="Page 4">4</button>
        <button class="page" aria-label="Page 5">5</button>
        <button class="page" aria-label="Page 6">6</button>
        <button class="page" aria-label="Page 7">7</button>
      </div>

      <div class="cta-card">
        <div>
          <p class="cta-label">See Wholesale Pricing</p>
          <p class="cta-subtitle">Create an account to unlock pricing and volume quotes.</p>
        </div>
        <a href="#" class="cta-button">Create Account</a>
      </div>
    </section>

    <section class="supplier-products">
      <div class="section-header">
        <h2>Other products from this supplier</h2>
        <span class="product-count">12 Products</span>
      </div>

      <div class="product-grid supplier-grid">
        <article class="product-card">
          <div class="image-wrap">
            <img src="https://images.unsplash.com/photo-1545259742-9bf7e9d72d33?auto=format&fit=crop&w=800&q=80" alt="Oklahoma moss waterfall 1"-"3" />
          </div>
          <div class="product-details">
            <p class="supplier">Texanna, OK</p>
            <p class="product-title">Oklahoma moss waterfall 1"-3"</p>
          </div>
        </article>

        <article class="product-card">
          <div class="image-wrap">
            <img src="https://images.unsplash.com/photo-1495562569060-2eec283d3391?auto=format&fit=crop&w=800&q=80" alt="Oklahoma moss builders 3"-"5" />
          </div>
          <div class="product-details">
            <p class="supplier">Texanna, OK</p>
            <p class="product-title">Oklahoma moss builders 3"-5"</p>
          </div>
        </article>

        <article class="product-card">
          <div class="image-wrap">
            <img src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80" alt="1-1.25 premium oklahoma flagstone" />
          </div>
          <div class="product-details">
            <p class="supplier">Texanna, OK</p>
            <p class="product-title">1"-1.25" premium oklahoma flagstone</p>
          </div>
        </article>

        <article class="product-card">
          <div class="image-wrap">
            <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80" alt="Oklahoma Thin Veneer Squares and Recs Brown" />
          </div>
          <div class="product-details">
            <p class="supplier">Texanna, OK</p>
            <p class="product-title">Oklahoma Thin Veneer Squares and Recs. Brown</p>
          </div>
        </article>
      </div>
    </section>

    <button class="floating-chat" aria-label="Chat with us">
      <span>💬</span>
    </button>

    <footer class="site-footer">
      <div class="footer-top">
        <div class="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Insights</h3>
          <ul>
            <li><a href="#">Merchandise</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Industries</h3>
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
        <div class="footer-section footer-contact">
          <h3>Head Office</h3>
          <p>2A International Square,<br/>Tullamarine VIC 3043, Australia.</p>
          <p><a href="#">Direction on Google</a></p>
          <p><strong>Email</strong><br/><a href="mailto:contact@unitedcarriers.com">contact@unitedcarriers.com</a></p>
          <p><strong>Hotline</strong><br/>1300 000 082</p>
          <p><strong>Office Hours</strong><br/>Monday - Friday / 8:30AM - 5PM</p>
        </div>
      </div>
      <div class="footer-bottom">
        <span>All prices in AUD, inclusive of GST. Powered by Stripe.</span>
      </div>
    </footer>
  </main>
`;

// Toggle Lioz panel when the button is clicked
const liozBtn = document.getElementById('lioz-btn');
const liozPanel = document.getElementById('lioz-panel');
if (liozBtn && liozPanel) {
  liozBtn.addEventListener('click', () => {
    liozPanel.classList.toggle('hidden');
    liozBtn.setAttribute('aria-expanded', String(!liozPanel.classList.contains('hidden')));
  });
}
