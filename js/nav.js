const toggle = document.getElementById("navToggle");
const nav = document.getElementById("mobileNav");
const backdrop = document.getElementById("navBackdrop");

/* =========================
   Mobile nav
   ========================= */
if (toggle && nav && backdrop) {
  toggle.onclick = () => {
    nav.classList.toggle("open");
    backdrop.classList.toggle("show");
  };

  backdrop.onclick = () => {
    nav.classList.remove("open");
    backdrop.classList.remove("show");
  };

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      backdrop.classList.remove("show");
    });
  });
}

/* =========================
   Download page platform detect
   Desktop:
   - show both iOS and Google Play buttons
   Mobile:
   - iPhone/iPad only shows App Store buttons
   - Android only shows Google Play / APK buttons
   ========================= */

function detectMobilePlatform() {
  const ua = navigator.userAgent || navigator.vendor || window.opera;

  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  const isAndroid = /Android/i.test(ua);
  const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;

  if (!isSmallScreen) return "desktop";
  if (isIOS) return "ios";
  if (isAndroid) return "android";
  return "other";
}

function applyDownloadPlatformFilter() {
  const downloadGrid = document.getElementById("downloadGrid");
  if (!downloadGrid) return;

  const platform = detectMobilePlatform();
  const cards = downloadGrid.querySelectorAll(".download-card[data-platform]");
  const storeButtons = document.querySelectorAll(".store-btn[data-platform]");
  const moreWrap = document.getElementById("downloadMore");

  cards.forEach(card => card.classList.remove("is-hidden"));
  storeButtons.forEach(button => button.classList.remove("is-hidden"));

  if (moreWrap) {
    moreWrap.style.display = "none";
  }

  if (platform === "ios") {
    cards.forEach(card => {
      if (card.dataset.platform !== "ios") {
        card.classList.add("is-hidden");
      }
    });

    storeButtons.forEach(button => {
      if (button.dataset.platform !== "ios") {
        button.classList.add("is-hidden");
      }
    });

    if (moreWrap) moreWrap.style.display = "block";
  }

  if (platform === "android") {
    cards.forEach(card => {
      if (card.dataset.platform !== "android") {
        card.classList.add("is-hidden");
      }
    });

    storeButtons.forEach(button => {
      if (button.dataset.platform !== "android") {
        button.classList.add("is-hidden");
      }
    });

    if (moreWrap) moreWrap.style.display = "block";
  }
}

function bindShowAllAppsButton() {
  const showAllAppsBtn = document.getElementById("showAllApps");
  if (!showAllAppsBtn) return;

  showAllAppsBtn.addEventListener("click", function () {
    document.querySelectorAll(".download-card[data-platform]").forEach(card => {
      card.classList.remove("is-hidden");
    });

    document.querySelectorAll(".store-btn[data-platform]").forEach(button => {
      button.classList.remove("is-hidden");
    });

    const moreWrap = document.getElementById("downloadMore");
    if (moreWrap) {
      moreWrap.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  applyDownloadPlatformFilter();
  bindShowAllAppsButton();
});

window.addEventListener("resize", applyDownloadPlatformFilter);
