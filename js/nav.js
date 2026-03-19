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

  // 点击手机菜单里的链接后自动关闭菜单
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      backdrop.classList.remove("show");
    });
  });
}

/* =========================
   Download page platform detect
   手机端：
   - iPhone 只显示 iOS
   - Android 只显示 Android
   桌面端：
   - 两个都显示
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
  const moreWrap = document.getElementById("downloadMore");

  // 先全部显示
  cards.forEach(card => card.classList.remove("is-hidden"));

  if (moreWrap) {
    moreWrap.style.display = "none";
  }

  // 手机端 iPhone：只显示 iOS
  if (platform === "ios") {
    cards.forEach(card => {
      if (card.dataset.platform !== "ios") {
        card.classList.add("is-hidden");
      }
    });
    if (moreWrap) moreWrap.style.display = "block";
  }

  // 手机端 Android：只显示 Android
  if (platform === "android") {
    cards.forEach(card => {
      if (card.dataset.platform !== "android") {
        card.classList.add("is-hidden");
      }
    });
    if (moreWrap) moreWrap.style.display = "block";
  }

  // 其他情况（桌面 / 未识别）全部显示
}

function bindShowAllAppsButton() {
  const showAllAppsBtn = document.getElementById("showAllApps");
  if (!showAllAppsBtn) return;

  showAllAppsBtn.addEventListener("click", function () {
    document.querySelectorAll(".download-card[data-platform]").forEach(card => {
      card.classList.remove("is-hidden");
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
