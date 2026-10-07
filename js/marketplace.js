/**
 * ABCD CARS - MARKETPLACE & INVENTORY DATA ENGINE
 * Pre-owned & Exotic Luxury Vehicle Showcase
 * Designed & Developed for ABCD Car by RightClicks.lk
 */

const VEHICLE_INVENTORY = [
  {
    id: "porsche-gt3-2024",
    make: "Porsche",
    model: "911 GT3 (992)",
    year: 2024,
    category: "supercars",
    price: 279800,
    mileage: "4,200 km",
    engine: "4.0L Naturally Aspirated Boxer-6",
    power: "502 HP",
    transmission: "7-Speed PDK Dual-Clutch",
    drivetrain: "Rear-Wheel Drive",
    acceleration: "3.2s (0-100 km/h)",
    exteriorColor: "Obsidian Black Metallic",
    interiorColor: "Black Leather / Red Contrast Stitching",
    badge: "Just Arrived",
    image: "images/porsche_gt3.jpg",
    vin: "WP0AC2A98RS192831",
    status: "In Stock - Richmond Showroom",
    description: "Immaculate 2024 Porsche 911 GT3 with Carbon Ceramic Brakes (PCCB), Chrono Package with Porsche Track Precision App, Full Bucket Seats, Front Axle Lift System, and Porsche Dynamic Light System (PDLS+)."
  },
  {
    id: "amg-g63-2023",
    make: "Mercedes-AMG",
    model: "G63 4MATIC SUV",
    year: 2023,
    category: "suvs",
    price: 238900,
    mileage: "11,500 km",
    engine: "4.0L Handcrafted Biturbo V8",
    power: "577 HP",
    transmission: "AMG SPEEDSHIFT TCT 9G",
    drivetrain: "All-Wheel Drive (AWD)",
    acceleration: "4.5s (0-100 km/h)",
    exteriorColor: "Night Black Magno (Matte)",
    interiorColor: "Exclusive Nappa Black / Bengal Red",
    badge: "AMG Certified",
    image: "images/amg_g63.jpg",
    vin: "W1NYH88J7PX401928",
    status: "In Stock - Richmond Showroom",
    description: "Stunning Night Black Magno G63 equipped with AMG Night Package II, 22-inch Forged Cross-Spoke Matte Black Wheels, Burmester Surround Sound, Carbon Trim Package, and Active Multicontour Front Seats."
  },
  {
    id: "lambo-revuelto-2024",
    make: "Lamborghini",
    model: "Revuelto V12 HPEV",
    year: 2024,
    category: "supercars",
    price: 689888,
    mileage: "1,100 km",
    engine: "6.5L V12 + Triple Electric Motors",
    power: "1,001 HP",
    transmission: "8-Speed Dual-Clutch Transverse",
    drivetrain: "All-Wheel Drive (E-AWD)",
    acceleration: "2.5s (0-100 km/h)",
    exteriorColor: "Rosso Efesto / Dark Crimson Metallic",
    interiorColor: "Nero Ade / Rosso Alcantara",
    badge: "Exotic Flagship",
    image: "images/lambo_revuelto.jpg",
    vin: "ZHWUE61C2RL002149",
    status: "VIP Showroom Exclusive",
    description: "The next generation hybrid benchmark. 1001 combined horsepower with carbon monocoque, open-air aerodynamics, bespoke titanium sports exhaust, and Lamborghini telemetry suite."
  },
  {
    id: "bmw-m4-comp-2024",
    make: "BMW",
    model: "M4 Competition xDrive",
    year: 2024,
    category: "coupes",
    price: 98500,
    mileage: "8,900 km",
    engine: "3.0L BMW M TwinPower Turbo Inline-6",
    power: "503 HP",
    transmission: "8-Speed M Steptronic",
    drivetrain: "M xDrive All-Wheel Drive",
    acceleration: "3.4s (0-100 km/h)",
    exteriorColor: "Aventurin Red Metallic",
    interiorColor: "Black Extended Merino Leather",
    badge: "M Performance",
    image: "images/bmw_m4.jpg",
    vin: "WBA43AZ01RCK91823",
    status: "In Stock - Richmond Showroom",
    description: "Equipped with M Carbon Exterior Package, M Carbon Bucket Seats, Harman Kardon Surround Sound, Head-Up Display, Icon Adaptive LED Headlights with Laserlight accents."
  },
  {
    id: "audi-rs7-sportback-2023",
    make: "Audi",
    model: "RS7 Sportback 4.0T",
    year: 2023,
    category: "coupes",
    price: 142000,
    mileage: "14,200 km",
    engine: "4.0L Twin-Turbocharged V8 MHEV",
    power: "591 HP",
    transmission: "8-Speed Tiptronic",
    drivetrain: "Quattro Sport Rear Differential",
    acceleration: "3.5s (0-100 km/h)",
    exteriorColor: "Mythos Black Metallic",
    interiorColor: "Valcona Black Leather with Honeycomb Stitching",
    badge: "RS Edition",
    image: "images/audi_rs7.jpg",
    vin: "WAUBCGBM9PN019284",
    status: "In Stock - Richmond Showroom",
    description: "Dynamic Package Plus, RS Ceramic Brakes with Red Calipers, Bang & Olufsen Advanced 3D Sound System, Night Vision Assistant, and Carbon Optic Package."
  },
  {
    id: "aurora-hypercar-2025",
    make: "Aurora Exotics",
    model: "Agil V12 Quad-Turbo",
    year: 2025,
    category: "supercars",
    price: 550000,
    mileage: "450 km (Delivery)",
    engine: "6.6L Quad-Turbo V12 + Electric Boost",
    power: "1,250 HP",
    transmission: "7-Speed Paddle Shift",
    drivetrain: "All-Wheel Drive",
    acceleration: "2.4s (0-100 km/h)",
    exteriorColor: "Deep Crimson Pearl Metallic",
    interiorColor: "Exposed Carbon / Black Alcantara",
    badge: "Showcase Vehicle",
    image: "images/hero_car.jpg",
    vin: "AUR9901848X091824",
    status: "Featured Showroom Centerpiece",
    description: "Bespoke handcrafted limited production hypercar. Active aerodynamic downforce generates 880 kg at 250 km/h. Monocoque carbon safety tub with pushrod suspension."
  }
];

class MarketplaceManager {
  constructor() {
    this.vehicles = [...VEHICLE_INVENTORY];
    this.currentCategory = "all";
    this.searchQuery = "";
    this.selectedMake = "all";
    this.sortBy = "default";
    this.wishlist = new Set(JSON.parse(localStorage.getItem("abcd_wishlist") || "[]"));

    this.initElements();
    this.bindEvents();
    this.renderVehicles();
    this.initFinanceCalculator();
  }

  initElements() {
    this.gridContainer = document.getElementById("vehicle-grid");
    this.resultsCount = document.getElementById("results-count");
    this.searchInput = document.getElementById("search-input");
    this.makeFilter = document.getElementById("make-filter");
    this.sortFilter = document.getElementById("sort-filter");
    this.categoryTabs = document.querySelectorAll(".tab-btn");

    // Modal elements
    this.quickViewModal = document.getElementById("quick-view-modal");
    this.modalContent = document.getElementById("modal-dynamic-content");
    this.testDriveModal = document.getElementById("test-drive-modal");
  }

  bindEvents() {
    // Search input
    if (this.searchInput) {
      this.searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderVehicles();
      });
    }

    // Make dropdown
    if (this.makeFilter) {
      this.makeFilter.addEventListener("change", (e) => {
        this.selectedMake = e.target.value;
        this.renderVehicles();
      });
    }

    // Sort dropdown
    if (this.sortFilter) {
      this.sortFilter.addEventListener("change", (e) => {
        this.sortBy = e.target.value;
        this.renderVehicles();
      });
    }

    // Category Tabs
    this.categoryTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        this.categoryTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        this.currentCategory = tab.getAttribute("data-category");
        this.renderVehicles();
      });
    });

    // Close modals on backdrop click or close btn
    document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop || e.target.closest(".modal-close-btn")) {
          backdrop.classList.remove("active");
          document.body.style.overflow = "auto";
        }
      });
    });

    // Handle escape key
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.querySelectorAll(".modal-backdrop.active").forEach(m => m.classList.remove("active"));
        document.body.style.overflow = "auto";
      }
    });

    // Re-render when language changes
    window.addEventListener("abcdLanguageChanged", () => {
      this.renderVehicles();
    });
  }

  formatPrice(num) {
    return "$" + num.toLocaleString("en-US");
  }

  calculateMonthly(price) {
    // Standard 60 months, 20% down, 5.99% APR estimate
    const principal = price * 0.8;
    const rate = 0.0599 / 12;
    const months = 60;
    const monthly = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    return Math.round(monthly);
  }

  getFilteredVehicles() {
    return this.vehicles.filter(car => {
      // Category filter
      if (this.currentCategory !== "all" && car.category !== this.currentCategory) {
        return false;
      }
      // Make filter
      if (this.selectedMake !== "all" && car.make !== this.selectedMake) {
        return false;
      }
      // Search term
      if (this.searchQuery) {
        const fullString = `${car.year} ${car.make} ${car.model} ${car.engine} ${car.exteriorColor}`.toLowerCase();
        if (!fullString.includes(this.searchQuery)) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (this.sortBy === "price-asc") return a.price - b.price;
      if (this.sortBy === "price-desc") return b.price - a.price;
      if (this.sortBy === "year-desc") return b.year - a.year;
      if (this.sortBy === "power-desc") return parseInt(b.power) - parseInt(a.power);
      return 0;
    });
  }

  renderVehicles() {
    if (!this.gridContainer) return;

    const filtered = this.getFilteredVehicles();
    const lblShowing = typeof t === "function" ? t("market.showing", "Showing") : "Showing";
    const lblVehicles = typeof t === "function" ? t("market.vehicles", "vehicles available") : "vehicles in inventory";
    const lblNoVehicles = typeof t === "function" ? t("market.noVehicles", "No matching vehicles found.") : "No matching vehicles found.";
    const lblReset = typeof t === "function" ? t("market.resetFilters", "Clear Search Filters") : "Clear Search Filters";
    const lblDetails = typeof t === "function" ? t("market.viewDetails", "Details") : "Details";
    const lblInquire = typeof t === "function" ? t("market.inquireVip", "VIP Test Drive") : "VIP Test Drive";
    const lblEstLease = typeof t === "function" ? t("market.estLease", "Est.") : "Est.";
    const lblPerMonth = typeof t === "function" ? t("market.perMonth", "/mo") : "/mo";

    if (this.resultsCount) {
      this.resultsCount.innerHTML = `${lblShowing} <strong>${filtered.length}</strong> ${lblVehicles}`;
    }

    if (filtered.length === 0) {
      this.gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
          <p style="font-size: 1.3rem; color: var(--text-muted); margin-bottom: 12px;">${lblNoVehicles}</p>
          <button class="btn btn-outline btn-sm" onclick="window.marketplace.resetFilters()">${lblReset}</button>
        </div>
      `;
      return;
    }

    this.gridContainer.innerHTML = filtered.map(car => {
      const isWishlisted = this.wishlist.has(car.id);
      const monthly = this.calculateMonthly(car.price);

      return `
        <article class="car-card" data-id="${car.id}">
          <div class="car-card-media">
            <span class="badge-overlay">${car.badge}</span>
            <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" 
                    aria-label="Add to wishlist" 
                    onclick="window.marketplace.toggleWishlist('${car.id}', this)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <img src="${car.image}" alt="${car.year} ${car.make} ${car.model}" loading="lazy">
          </div>

          <div class="car-card-body">
            <div class="car-meta-top">
              <span class="car-year-make">${car.year} • ${car.make}</span>
              <span class="car-mileage-tag">${car.mileage}</span>
            </div>

            <h3 class="car-title">${car.model}</h3>

            <div class="car-specs-chips">
              <div class="spec-chip">
                <span class="spec-chip-val">${car.power}</span>
                <span class="spec-chip-lbl">Power</span>
              </div>
              <div class="spec-chip">
                <span class="spec-chip-val">${car.acceleration}</span>
                <span class="spec-chip-lbl">0-100</span>
              </div>
              <div class="spec-chip">
                <span class="spec-chip-val">${car.drivetrain.includes("All") ? 'AWD' : 'RWD'}</span>
                <span class="spec-chip-lbl">Drive</span>
              </div>
            </div>

            <div class="car-card-footer">
              <div class="car-price-wrap">
                <div class="car-price">${this.formatPrice(car.price)}</div>
                <div class="car-finance-est">${lblEstLease} <span>$${monthly.toLocaleString()}${lblPerMonth}</span></div>
              </div>

              <div class="card-actions">
                <button class="btn btn-outline btn-sm" onclick="window.marketplace.openQuickView('${car.id}')">
                  ${lblDetails}
                </button>
                <button class="btn btn-primary btn-sm" onclick="window.marketplace.openTestDrive('${car.id}')">
                  ${lblInquire}
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  toggleWishlist(carId, btnElement) {
    if (this.wishlist.has(carId)) {
      this.wishlist.delete(carId);
      btnElement.classList.remove("active");
      const svg = btnElement.querySelector("svg");
      if (svg) svg.setAttribute("fill", "none");
      window.showToast("Vehicle removed from saved favorites.");
    } else {
      this.wishlist.add(carId);
      btnElement.classList.add("active");
      const svg = btnElement.querySelector("svg");
      if (svg) svg.setAttribute("fill", "currentColor");
      window.showToast("Vehicle saved to VIP Shortlist!");
    }
    localStorage.setItem("abcd_wishlist", JSON.stringify([...this.wishlist]));
  }

  openQuickView(carId) {
    const car = this.vehicles.find(v => v.id === carId);
    if (!car || !this.quickViewModal || !this.modalContent) return;

    const monthly = this.calculateMonthly(car.price);

    this.modalContent.innerHTML = `
      <div class="modal-content-grid">
        <div class="modal-media-col">
          <img src="${car.image}" alt="${car.model}" class="modal-main-img">
          <span class="badge-overlay" style="top: 20px; left: 20px;">${car.badge}</span>
        </div>

        <div class="modal-info-col">
          <div class="section-tag" style="margin-bottom: 8px;">${car.status}</div>
          <h2 class="modal-car-title">${car.year} ${car.make} ${car.model}</h2>
          
          <div style="display: flex; align-items: baseline; gap: 12px; margin-bottom: 18px;">
            <span class="car-price" style="font-size: 2.2rem; color: var(--red-bright);">${this.formatPrice(car.price)}</span>
            <span style="color: var(--text-muted); font-size: 0.95rem;">(Est. $${monthly.toLocaleString()} / mo)</span>
          </div>

          <p style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6; margin-bottom: 20px;">
            ${car.description}
          </p>

          <table class="modal-spec-table">
            <tr>
              <td>Engine / Powertrain</td>
              <td>${car.engine}</td>
            </tr>
            <tr>
              <td>Power Output</td>
              <td>${car.power}</td>
            </tr>
            <tr>
              <td>Acceleration (0-100)</td>
              <td>${car.acceleration}</td>
            </tr>
            <tr>
              <td>Transmission</td>
              <td>${car.transmission}</td>
            </tr>
            <tr>
              <td>Drivetrain</td>
              <td>${car.drivetrain}</td>
            </tr>
            <tr>
              <td>Mileage</td>
              <td>${car.mileage}</td>
            </tr>
            <tr>
              <td>Exterior Finish</td>
              <td>${car.exteriorColor}</td>
            </tr>
            <tr>
              <td>Interior</td>
              <td>${car.interiorColor}</td>
            </tr>
            <tr>
              <td>VIN #</td>
              <td><span style="font-family: var(--font-mono); color: var(--red-accent);">${car.vin}</span></td>
            </tr>
          </table>

          <div style="display: flex; gap: 14px; margin-top: auto;">
            <button class="btn btn-primary" style="flex: 1;" onclick="window.marketplace.openTestDrive('${car.id}')">
              Schedule Private Viewing
            </button>
            <button class="btn btn-outline" onclick="window.marketplace.loadIntoCalculator(${car.price})">
              Calculate Lease
            </button>
          </div>
        </div>
      </div>
    `;

    this.quickViewModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  openTestDrive(carId) {
    const car = this.vehicles.find(v => v.id === carId);
    if (!this.testDriveModal) return;

    // Prefill vehicle in booking modal if element exists
    const selectElem = document.getElementById("td-vehicle-select");
    if (selectElem && car) {
      selectElem.value = `${car.year} ${car.make} ${car.model}`;
    }

    if (this.quickViewModal) this.quickViewModal.classList.remove("active");
    this.testDriveModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  resetFilters() {
    this.currentCategory = "all";
    this.searchQuery = "";
    this.selectedMake = "all";
    this.sortBy = "default";
    if (this.searchInput) this.searchInput.value = "";
    if (this.makeFilter) this.makeFilter.value = "all";
    if (this.sortFilter) this.sortFilter.value = "default";
    this.categoryTabs.forEach(t => t.classList.toggle("active", t.getAttribute("data-category") === "all"));
    this.renderVehicles();
  }

  initFinanceCalculator() {
    const priceSlider = document.getElementById("calc-price-slider");
    const downSlider = document.getElementById("calc-down-slider");
    const aprSlider = document.getElementById("calc-apr-slider");
    const termButtons = document.querySelectorAll(".term-btn");

    if (!priceSlider) return;

    this.calcTerm = 60;

    const updateCalc = () => {
      const price = parseFloat(priceSlider.value);
      const downPercent = parseFloat(downSlider.value);
      const apr = parseFloat(aprSlider.value);

      const downAmount = price * (downPercent / 100);
      const loanAmount = price - downAmount;
      const monthlyRate = (apr / 100) / 12;

      let monthlyPayment = 0;
      if (monthlyRate > 0) {
        monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, this.calcTerm)) / (Math.pow(1 + monthlyRate, this.calcTerm) - 1);
      } else {
        monthlyPayment = loanAmount / this.calcTerm;
      }

      // Update text values
      document.getElementById("calc-price-disp").textContent = "$" + price.toLocaleString();
      document.getElementById("calc-down-disp").textContent = `${downPercent}% ($${Math.round(downAmount).toLocaleString()})`;
      document.getElementById("calc-apr-disp").textContent = `${apr.toFixed(2)}%`;
      document.getElementById("calc-monthly-disp").textContent = "$" + Math.round(monthlyPayment).toLocaleString();
      document.getElementById("calc-total-finance").textContent = "$" + Math.round(loanAmount).toLocaleString();
      document.getElementById("calc-term-disp").textContent = `${this.calcTerm} Mos`;
    };

    priceSlider.addEventListener("input", updateCalc);
    downSlider.addEventListener("input", updateCalc);
    aprSlider.addEventListener("input", updateCalc);

    termButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        termButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.calcTerm = parseInt(btn.getAttribute("data-term"));
        updateCalc();
      });
    });

    updateCalc();
  }

  loadIntoCalculator(carPrice) {
    if (this.quickViewModal) this.quickViewModal.classList.remove("active");
    document.body.style.overflow = "auto";

    const priceSlider = document.getElementById("calc-price-slider");
    if (priceSlider) {
      priceSlider.value = carPrice;
      priceSlider.dispatchEvent(new Event("input"));
    }

    const calcSection = document.getElementById("financing");
    if (calcSection) {
      calcSection.scrollIntoView({ behavior: "smooth" });
    }
  }
}

// Global Toast Notice
window.showToast = function(message) {
  let toast = document.getElementById("global-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "global-toast";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--red-bright)" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;
  toast.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
};

// Auto initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  window.marketplace = new MarketplaceManager();
});
