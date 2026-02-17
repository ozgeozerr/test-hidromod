import "./styles.css";
import { getNavbarHTML, getFooterHTML, initNavbar } from "./components.js";

// Inject shared navbar and footer into every page
const navbarPlaceholder = document.getElementById("navbar-placeholder");
const footerPlaceholder = document.getElementById("footer-placeholder");
if (navbarPlaceholder) navbarPlaceholder.innerHTML = getNavbarHTML();
if (footerPlaceholder) footerPlaceholder.innerHTML = getFooterHTML();
initNavbar();

// Language Switcher
let currentLang = "en";

// Translations object
const translations = {
  en: {
    // Navbar
    home: "Home",
    solutions: "Solutions",
    contact: "Contact",

    // Solutions dropdown
    militaryWeather: "Military Weather Forecast",
    civilAviation: "Civil Aviation",
    spaceMeteorology: "Space Meteorology",
    weather: "Weather",
    renewableEnergy: "Renewable Energy",
    agriculture: "Agriculture",
    disasterRisk: "Disaster Risk and Forecast",
    climateChange: "Climate Change Simulations",

    // Footer
    contactInfo: "Contact",
    footerTagline: "Shaping the future with accurate data. High-resolution hydrometeorological forecasting and analysis services.",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
    copyright: "© 2026 HIDROMOD. All rights reserved.",
    companySubtitle: "Hydrometeorological Forecasting & Analysis Center",

    // Contact page
    contactTitle: "Contact Us",
    contactSubtitle: "Get in touch with us for professional meteorological solutions and consultancy services.",
    fullName: "Full Name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    subject: "Subject",
    message: "Message",
    send: "Send",
    contactFormTitle: "Contact Form"
  },
  tr: {
    // Navbar
    home: "Ana Sayfa",
    solutions: "Çözümler",
    contact: "İletişim",

    // Solutions dropdown
    militaryWeather: "Askeri Hava Tahmini",
    civilAviation: "Sivil Havacılık",
    spaceMeteorology: "Uzay Meteorolojisi",
    weather: "Hava Durumu",
    renewableEnergy: "Yenilenebilir Enerji",
    agriculture: "Tarım",
    disasterRisk: "Afet Riski ve Tahmini",
    climateChange: "İklim Değişikliği Simülasyonları",

    // Footer
    contactInfo: "İletişim",
    footerTagline: "Geleceği doğru verilerle şekillendiriyoruz. Yüksek çözünürlüklü hidrometeorolojik tahmin ve analiz hizmetleri.",
    privacyPolicy: "Gizlilik Politikası",
    termsOfUse: "Kullanım Koşulları",
    copyright: "© 2026 HIDROMOD. Tüm hakları saklıdır.",
    companySubtitle: "Hidrometeorolojik Tahmin & Analiz Merkezi",

    // Contact page
    contactTitle: "Bizimle İletişime Geçin",
    contactSubtitle: "Projeleriniz için profesyonel meteorolojik çözümler ve danışmanlık hizmetlerimiz hakkında detaylı bilgi almak için formu doldurun.",
    fullName: "Ad Soyad",
    emailAddress: "E-posta Adresi",
    phoneNumber: "Telefon Numarası",
    subject: "Konu",
    message: "Mesajınız",
    send: "Gönder",
    contactFormTitle: "İletişim Formu"
  }
};

// Desktop language switcher
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;

    // Update active state for desktop buttons
    document
      .querySelectorAll(".lang-btn")
      .forEach((b) => b.classList.remove("active-lang"));
    btn.classList.add("active-lang");

    // Update mobile buttons too
    document.querySelectorAll(".lang-btn-mobile").forEach((b) => {
      if (b.dataset.lang === currentLang) {
        b.classList.add("bg-[#00a1e0]", "text-white");
        b.classList.remove("bg-white/10", "hover:bg-white/20");
      } else {
        b.classList.remove("bg-[#00a1e0]", "text-white");
        b.classList.add("bg-white/10", "hover:bg-white/20");
      }
    });

    // Switch language content
    switchLanguage(currentLang);
  });
});

// Mobile language switcher
document.querySelectorAll(".lang-btn-mobile").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;

    // Update active state for mobile buttons
    document.querySelectorAll(".lang-btn-mobile").forEach((b) => {
      if (b.dataset.lang === currentLang) {
        b.classList.add("bg-[#00a1e0]", "text-white");
        b.classList.remove("bg-white/10", "hover:bg-white/20");
      } else {
        b.classList.remove("bg-[#00a1e0]", "text-white");
        b.classList.add("bg-white/10", "hover:bg-white/20");
      }
    });

    // Update desktop buttons too
    document
      .querySelectorAll(".lang-btn")
      .forEach((b) => b.classList.remove("active-lang"));
    document
      .querySelector(`.lang-btn[data-lang="${currentLang}"]`)
      ?.classList.add("active-lang");

    // Switch language content
    switchLanguage(currentLang);

    // Close mobile menu after language change
    const mobileMenuEl = document.getElementById("mobile-menu");
    if (mobileMenuEl) mobileMenuEl.style.display = "none";
  });
});

function switchLanguage(lang) {
  const t = translations[lang];

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (t[key]) {
      element.innerHTML = t[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      element.placeholder = t[key];
    }
  });

  // Switch video on index page
  const videoSource = document.getElementById('intro-video-source');
  const video = document.getElementById('intro-video');
  if (videoSource && video) {
    const currentTime = video.currentTime;
    if (lang === 'en') {
      videoSource.src = '/hidromod-en.mp4';
    } else {
      videoSource.src = '/hidromod-tr.mp4';
    }
    video.load();
    video.currentTime = currentTime;
  }

  // Save language preference
  localStorage.setItem('preferredLanguage', lang);

  console.log("Switched to:", lang);
}

// Load saved language preference on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage') || 'en';
  currentLang = savedLang;

  // Update button states
  document.querySelectorAll(".lang-btn").forEach((b) => {
    if (b.dataset.lang === currentLang) {
      b.classList.add("active-lang");
    } else {
      b.classList.remove("active-lang");
    }
  });

  document.querySelectorAll(".lang-btn-mobile").forEach((b) => {
    if (b.dataset.lang === currentLang) {
      b.classList.add("bg-[#00a1e0]", "text-white");
      b.classList.remove("bg-white/10", "hover:bg-white/20");
    } else {
      b.classList.remove("bg-[#00a1e0]", "text-white");
      b.classList.add("bg-white/10", "hover:bg-white/20");
    }
  });

  // Apply translations
  switchLanguage(currentLang);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// World Map Animation (Lottie)
import lottie from "lottie-web";
import "@lottiefiles/dotlottie-wc";

function renderWorldMap() {
  const mapContainer = document.getElementById("world-map");
  if (!mapContainer) return;

  try {
    lottie.loadAnimation({
      container: mapContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/World.json",
    });
  } catch (error) {
    console.error("Error loading world map animation:", error);
  }
}

function renderWeatherIcon() {
  const weatherContainer = document.getElementById("weather-icon");
  if (!weatherContainer) return;

  try {
    lottie.loadAnimation({
      container: weatherContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/Weather-snow.json",
    });
  } catch (error) {
    console.error("Error loading weather icon animation:", error);
  }
}

function renderEnergyIcon() {
  const energyContainer = document.getElementById("energy-icon");
  if (!energyContainer) return;

  try {
    lottie.loadAnimation({
      container: energyContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/Solar Sun Power Animation.json",
    });
  } catch (error) {
    console.error("Error loading energy icon animation:", error);
  }
}

function renderAviationIcon() {
  const aviationContainer = document.getElementById("aviation-icon");
  if (!aviationContainer) return;

  try {
    lottie.loadAnimation({
      container: aviationContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/plane flying.json",
    });
  } catch (error) {
    console.error("Error loading aviation icon animation:", error);
  }
}

function renderDefenseIcon() {
  const defenseContainer = document.getElementById("defense-icon");
  if (!defenseContainer) return;

  try {
    lottie.loadAnimation({
      container: defenseContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/Submarine.json",
    });
  } catch (error) {
    console.error("Error loading defense icon animation:", error);
  }
}

function renderAgricultureIcon() {
  const agricultureContainer = document.getElementById("agriculture-icon");
  if (!agricultureContainer) return;

  try {
    lottie.loadAnimation({
      container: agricultureContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/Tractor.json",
    });
  } catch (error) {
    console.error("Error loading agriculture icon animation:", error);
  }
}

function renderDisasterIcon() {
  const disasterContainer = document.getElementById("disaster-icon");
  if (!disasterContainer) return;

  try {
    lottie.loadAnimation({
      container: disasterContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/World kopyası.json",
    });
  } catch (error) {
    console.error("Error loading disaster icon animation:", error);
  }
}

function renderClimateChangeIcon() {
  const climateChangeContainer = document.getElementById("climate-change-icon");
  if (!climateChangeContainer) return;

  try {
    lottie.loadAnimation({
      container: climateChangeContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/Weather-snow.json",
    });
  } catch (error) {
    console.error("Error loading climate change icon animation:", error);
  }
}

// Initialize animations when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    renderWorldMap();
    renderWeatherIcon();
    renderAviationIcon();
    renderDefenseIcon();
    renderEnergyIcon();
    renderAgricultureIcon();
    renderDisasterIcon();
    renderClimateChangeIcon();
  });
} else {
  renderWorldMap();
  renderWeatherIcon();
  renderAviationIcon();
  renderDefenseIcon();
  renderEnergyIcon();
  renderAgricultureIcon();
  renderDisasterIcon();
  renderClimateChangeIcon();
}
