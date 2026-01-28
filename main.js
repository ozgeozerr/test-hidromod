import "./styles.css";

// Language Switcher
//
let currentLang = "en";

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;

    // Update active state
    document
      .querySelectorAll(".lang-btn")
      .forEach((b) => b.classList.remove("active-lang"));
    btn.classList.add("active-lang");

    // Switch language content (will implement translations later)
    switchLanguage(currentLang);
  });
});

function switchLanguage(lang) {
  // Language switching logic will be implemented here
  console.log("Switched to:", lang);
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMobileMenu = document.getElementById("close-mobile-menu");

mobileMenuBtn?.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});

closeMobileMenu?.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});

// Close mobile menu when clicking outside
mobileMenu?.addEventListener("click", (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.classList.add("hidden");
  }
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
