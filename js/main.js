/**
 * ABCD CARS - MAIN APPLICATION LOGIC
 * Navigation, Mobile Drawer & Dock, VIP Form Submissions, Smooth Interactions
 * Designed & Developed for ABCD Car by RightClicks.lk
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Sticky Navigation on Scroll
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });

  // 2. Mobile Navigation Drawer & Toggle System
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileDrawer = document.getElementById("mobile-nav-drawer");
  const mobileBackdrop = document.getElementById("mobile-nav-backdrop");
  const mobileClose = document.getElementById("mobile-nav-close");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  const openMobileMenu = () => {
    if (mobileDrawer) mobileDrawer.classList.add("active");
    if (mobileBackdrop) mobileBackdrop.classList.add("active");
    if (mobileToggle) mobileToggle.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closeMobileMenu = () => {
    if (mobileDrawer) mobileDrawer.classList.remove("active");
    if (mobileBackdrop) mobileBackdrop.classList.remove("active");
    if (mobileToggle) mobileToggle.classList.remove("open");
    document.body.style.overflow = "";
  };

  if (mobileToggle) {
    mobileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      if (mobileDrawer && mobileDrawer.classList.contains("active")) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileClose) {
    mobileClose.addEventListener("click", (e) => {
      e.stopPropagation();
      closeMobileMenu();
    });
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener("click", () => {
      closeMobileMenu();
    });
  }

  // Close drawer when any mobile nav link is clicked
  mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  // Close drawer on Escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMobileMenu();
    }
  });

  // 3. Smooth scrolling for internal anchor links & close drawer
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;
      
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        closeMobileMenu();

        const headerHeight = header ? header.offsetHeight : 70;
        const targetPosition = targetElem.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  });

  // 4. Active Section Scroll Spy for Desktop Nav, Mobile Drawer & Bottom Dock
  const isSubPage = window.location.pathname.includes("about.html") || window.location.pathname.includes("sell-your-car.html");
  const sections = document.querySelectorAll("section[id]");
  const desktopLinks = document.querySelectorAll(".desktop-nav .nav-link");
  const drawerLinks = document.querySelectorAll(".mobile-nav-link");
  const dockLinks = document.querySelectorAll(".mobile-bottom-dock .dock-item");

  const updateActiveNav = () => {
    if (isSubPage) return; // Keep active state on subpages

    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        // Update Desktop (only touch hash links)
        desktopLinks.forEach(link => {
          const href = link.getAttribute("href");
          if (href === `#${sectionId}`) {
            link.classList.add("active");
          } else if (href && href.startsWith("#")) {
            link.classList.remove("active");
          }
        });

        // Update Drawer (only touch hash links)
        drawerLinks.forEach(link => {
          const href = link.getAttribute("href");
          if (href === `#${sectionId}`) {
            link.classList.add("active");
          } else if (href && href.startsWith("#")) {
            link.classList.remove("active");
          }
        });

        // Update Bottom Dock
        dockLinks.forEach(item => {
          if (item.getAttribute("data-target") === sectionId) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();

  // 5. VIP Booking Form Submissions
  const bookingForms = document.querySelectorAll(".vip-booking-form");
  bookingForms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin-icon">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a10 10 0 0 1 10 10"></path>
        </svg>
        <span>Confirming VIP Booking...</span>
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();

        // Close any active modal
        const activeModal = document.querySelector(".modal-backdrop.active");
        if (activeModal) {
          activeModal.classList.remove("active");
          document.body.style.overflow = "";
        }

        if (window.showToast) {
          window.showToast("VIP Viewing Request Received! Our Private Client Advisor will contact you within 15 minutes.");
        } else {
          alert("VIP Viewing Request Received! Our Private Client Advisor will contact you within 15 minutes.");
        }
      }, 1000);
    });
  });

  // 6. Newsletter Form
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector("input");
      if (input && input.value) {
        if (window.showToast) {
          window.showToast("Subscribed to ABCD Car VIP Private Inventory Drops!");
        } else {
          alert("Subscribed to ABCD Car VIP Private Inventory Drops!");
        }
        input.value = "";
      }
    });
  }
});
