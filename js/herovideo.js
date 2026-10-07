/**
 * ABCD CARS - HERO CINEMATIC VIDEO CONTROLLER
 * Smooth autoplaying video background (Clean luxury presentation without cursor scrub)
 * Designed & Developed for ABCD Car by RightClicks.lk
 */

class HeroCinemaVideo {
  constructor() {
    this.video = document.getElementById("hero-main-video");
    if (!this.video) return;

    this.init();
  }

  init() {
    // Force mute and inline playback for mobile and browser autoplay policies
    this.video.muted = true;
    this.video.playsInline = true;
    this.video.loop = true;
    this.video.playbackRate = 1.0;

    const startPlay = () => {
      this.video.play().catch(() => {
        // Fallback for strict browser policies: play on first tap/click
        const unlock = () => {
          this.video.play().catch(() => {});
          window.removeEventListener("click", unlock);
          window.removeEventListener("touchstart", unlock);
        };
        window.addEventListener("click", unlock, { once: true });
        window.addEventListener("touchstart", unlock, { once: true });
      });
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", startPlay);
    } else {
      startPlay();
    }
  }
}

// Auto-initialize
document.addEventListener("DOMContentLoaded", () => {
  window.heroCinemaVideo = new HeroCinemaVideo();
});
