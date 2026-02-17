// Shared navbar and footer components
// Injected into every page via main.js

export function getNavbarHTML() {
  return `
<nav
    class="fixed top-0 left-0 right-0 z-50"
    style="
        background: rgba(20, 29, 57, 0.85);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-bottom: 1px solid rgba(0, 161, 224, 0.2);
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
    "
>
    <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between"
    >
        <!-- Logo (clickable, links to homepage) -->
        <a href="index.html" class="flex items-center gap-2 sm:gap-4">
            <img
                src="/hidromod_logo.png"
                alt="Hidromod Logo"
                class="h-10 sm:h-12 w-auto"
            />
            <div
                class="flex flex-col border-l-2 border-[#00a1e0]/60 pl-2 sm:pl-3.5"
            >
                <div
                    class="text-sm sm:text-lg font-bold leading-none tracking-tight text-white"
                >
                    <span>HIDRO</span><span>MOD</span>
                </div>
                <p
                    class="text-[8px] sm:text-[10px] text-gray-300 mt-1 leading-tight max-w-[120px] sm:max-w-[180px]"
                    data-i18n="companySubtitle"
                >
                    Hidrometeorolojik Tahmin &amp; Analiz Merkezi
                </p>
            </div>
        </a>

        <!-- Navigation Items & Actions -->
        <div class="flex items-center gap-6 lg:gap-12 ml-auto">
            <!-- Navigation Links -->
            <nav class="hidden lg:flex items-center gap-8 lg:gap-10">
                <!-- Home -->
                <a
                    href="index.html"
                    class="text-white hover:text-[#00a1e0] transition-all duration-200 font-medium text-sm relative group"
                    data-i18n="home"
                >
                    Ana Sayfa
                    <span
                        class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00a1e0] to-[#4fd1c5] group-hover:w-full transition-all duration-300"
                    ></span>
                </a>

                <!-- Solutions Dropdown -->
                <div class="relative group">
                    <button
                        class="text-white hover:text-[#00a1e0] transition-all duration-200 flex items-center gap-1.5 font-medium text-sm relative"
                    >
                        <span data-i18n="solutions">Çözümler</span>
                        <svg
                            class="w-4 h-4 group-hover:rotate-180 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            stroke-width="2.5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </button>
                    <!-- Dropdown Menu -->
                    <div
                        class="absolute top-full left-0 mt-3 w-64 lg:w-72 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 z-50"
                    >
                        <a
                            href="/askeri-hava-tahmini.html"
                            class="block px-4 lg:px-6 py-2.5 lg:py-3 text-gray-700 hover:bg-blue-50 hover:text-[#00a1e0] font-medium text-sm lg:text-base"
                            data-i18n="militaryWeather"
                            >Askeri Hava Tahmini
                        </a>
                        <a
                            href="/sivil-havacilik.html"
                            class="block px-4 lg:px-6 py-2.5 lg:py-3 text-gray-700 hover:bg-blue-50 hover:text-[#00a1e0] font-medium text-sm lg:text-base"
                            data-i18n="civilAviation"
                            >Sivil Havacılık</a
                        >
                        <a
                            href="/uzay-meteorolojisi.html"
                            class="block px-4 lg:px-6 py-2.5 lg:py-3 text-gray-700 hover:bg-blue-50 hover:text-[#00a1e0] font-medium text-sm lg:text-base"
                            data-i18n="spaceMeteorology"
                            >Uzay Meteorolojisi</a
                        >
                        <a
                            href="/hava-durumu.html"
                            class="block px-4 lg:px-6 py-2.5 lg:py-3 text-gray-700 hover:bg-blue-50 hover:text-[#00a1e0] first:rounded-t-xl font-medium text-sm lg:text-base"
                            data-i18n="weather"
                            >Hava Durumu</a
                        >
                        <a
                            href="/yenilenebilir-enerji.html"
                            class="block px-4 lg:px-6 py-2.5 lg:py-3 text-gray-700 hover:bg-blue-50 hover:text-[#00a1e0] font-medium text-sm lg:text-base"
                            data-i18n="renewableEnergy"
                            >Yenilenebilir Enerji</a
                        >
                        <a
                            href="/tarim.html"
                            class="block px-4 lg:px-6 py-2.5 lg:py-3 text-gray-700 hover:bg-blue-50 hover:text-[#00a1e0] font-medium text-sm lg:text-base"
                            data-i18n="agriculture"
                            >Tarım</a
                        >
                        <a
                            href="/afet-tahmini.html"
                            class="block px-4 lg:px-6 py-2.5 lg:py-3 text-gray-700 hover:bg-blue-50 hover:text-[#00a1e0] font-medium text-sm lg:text-base"
                            data-i18n="disasterRisk"
                            >Afet Riski ve Tahmini</a
                        >
                        <a
                            href="/iklim-degisikligi.html"
                            class="block px-4 lg:px-6 py-2.5 lg:py-3 text-gray-700 hover:bg-blue-50 hover:text-[#00a1e0] last:rounded-b-xl font-medium text-sm lg:text-base"
                            data-i18n="climateChange"
                            >İklim Değişikliği Simülasyonları</a
                        >
                    </div>
                </div>

                <!-- Contact Us Button -->
                <a
                    href="/iletisim.html"
                    class="relative bg-gradient-to-r from-[#00a1e0] to-[#0088c7] text-white px-4 lg:px-5 py-2 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-[#00a1e0]/30 transition-all duration-300 hover:scale-105"
                    data-i18n="contact"
                >
                    İletişim
                </a>
            </nav>

            <!-- Language Switcher -->
            <div
                class="flex items-center gap-1 bg-white/5 backdrop-blur-sm border border-[#00a1e0]/30 rounded-lg p-1"
            >
                <button
                    class="lang-btn text-white hover:bg-[#00a1e0] font-semibold text-xs px-2 lg:px-3 py-1.5 rounded-md transition-all duration-200 active-lang"
                    data-lang="en"
                >
                    EN
                </button>
                <button
                    class="lang-btn text-white hover:bg-[#00a1e0] font-semibold text-xs px-2 lg:px-3 py-1.5 rounded-md transition-all duration-200"
                    data-lang="tr"
                >
                    TR
                </button>
            </div>
        </div>

        <!-- Mobile Menu Button -->
        <button class="lg:hidden text-white p-2" id="mobile-menu-btn">
            <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                ></path>
            </svg>
        </button>
    </div>
</nav>

<!-- Mobile Menu -->
<div
    id="mobile-menu"
    class="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 hidden"
>
    <div
        class="bg-gradient-to-br from-[#141d39] to-[#0f1729] w-full max-w-sm ml-auto h-full overflow-y-auto"
    >
        <!-- Header -->
        <div
            class="sticky top-0 bg-gradient-to-br from-[#141d39] to-[#0f1729] border-b border-white/10 p-4"
        >
            <div class="flex items-center justify-between gap-2">
                <a href="index.html" class="flex items-center gap-2 min-w-0 flex-1">
                    <img
                        src="/hidromod_logo.png"
                        alt="Hidromod Logo"
                        class="h-8 w-auto flex-shrink-0"
                    />
                    <div class="text-white min-w-0">
                        <div class="text-xs font-bold">HIDROMOD</div>
                        <div class="text-[10px] text-gray-300 truncate">
                            Hidrometeoroloji
                        </div>
                    </div>
                </a>
                <button
                    id="mobile-menu-close"
                    class="text-white p-2 hover:bg-white/20 rounded-lg transition-all flex-shrink-0 border border-white/30"
                >
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        stroke-width="2.5"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Navigation Links -->
        <nav class="p-4 space-y-2">
            <a
                href="index.html"
                class="block text-white hover:bg-white/10 rounded-lg px-4 py-3 transition-all duration-200"
            >
                <span class="font-medium" data-i18n="home">Ana Sayfa</span>
            </a>

            <!-- Solutions Section -->
            <div class="pt-4 pb-2">
                <div
                    class="text-xs font-bold text-gray-400 uppercase tracking-wider px-4 mb-2"
                    data-i18n="solutions"
                >
                    Çözümler
                </div>
                <div class="space-y-1">
                    <a
                        href="/hava-durumu.html"
                        class="block text-gray-300 hover:bg-white/5 hover:text-white rounded-lg px-4 py-3 transition-all duration-200"
                    >
                        <span class="text-sm" data-i18n="weather">Hava Durumu</span>
                    </a>
                    <a
                        href="/sivil-havacilik.html"
                        class="block text-gray-300 hover:bg-white/5 hover:text-white rounded-lg px-4 py-3 transition-all duration-200"
                    >
                        <span class="text-sm" data-i18n="civilAviation">Sivil Havacılık</span>
                    </a>
                    <a
                        href="/askeri-hava-tahmini.html"
                        class="block text-gray-300 hover:bg-white/5 hover:text-white rounded-lg px-4 py-3 transition-all duration-200"
                    >
                        <span class="text-sm" data-i18n="militaryWeather">Askeri Hava Tahmini</span>
                    </a>
                    <a
                        href="/yenilenebilir-enerji.html"
                        class="block text-gray-300 hover:bg-white/5 hover:text-white rounded-lg px-4 py-3 transition-all duration-200"
                    >
                        <span class="text-sm" data-i18n="renewableEnergy">Yenilenebilir Enerji</span>
                    </a>
                    <a
                        href="/tarim.html"
                        class="block text-gray-300 hover:bg-white/5 hover:text-white rounded-lg px-4 py-3 transition-all duration-200"
                    >
                        <span class="text-sm" data-i18n="agriculture">Tarım</span>
                    </a>
                    <a
                        href="/afet-tahmini.html"
                        class="block text-gray-300 hover:bg-white/5 hover:text-white rounded-lg px-4 py-3 transition-all duration-200"
                    >
                        <span class="text-sm" data-i18n="disasterRisk">Afet Riski ve Tahmini</span>
                    </a>
                    <a
                        href="/iklim-degisikligi.html"
                        class="block text-gray-300 hover:bg-white/5 hover:text-white rounded-lg px-4 py-3 transition-all duration-200"
                    >
                        <span class="text-sm" data-i18n="climateChange">İklim Değişikliği</span>
                    </a>
                    <a
                        href="/uzay-meteorolojisi.html"
                        class="block text-gray-300 hover:bg-white/5 hover:text-white rounded-lg px-4 py-3 transition-all duration-200"
                    >
                        <span class="text-sm" data-i18n="spaceMeteorology">Uzay Meteorolojisi</span>
                    </a>
                </div>
            </div>

            <!-- Contact & Language -->
            <div class="pt-4 border-t border-white/10">
                <div
                    class="flex items-center justify-between px-4 py-2.5"
                >
                    <a
                        href="/iletisim.html"
                        class="text-gray-300 hover:text-white text-sm transition-all duration-200"
                        data-i18n="contact"
                    >
                        İletişim
                    </a>
                    <div class="flex gap-1.5">
                        <button
                            class="lang-btn-mobile bg-[#00a1e0] text-white text-xs px-2.5 py-1 rounded transition-all duration-200"
                            data-lang="en"
                        >
                            EN
                        </button>
                        <button
                            class="lang-btn-mobile bg-white/10 text-white hover:bg-white/20 text-xs px-2.5 py-1 rounded transition-all duration-200"
                            data-lang="tr"
                        >
                            TR
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</div>
`;
}

export function getFooterHTML() {
  return `
<footer
    class="relative bg-gradient-to-br from-[#0a0f1a] via-[#0f1420] to-[#141d39] border-t border-[#00a1e0]/20"
>
    <div class="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10">
        <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8"
        >
            <!-- Company Info -->
            <div class="lg:col-span-2">
                <div class="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <img
                        src="/hidromod_logo.png"
                        alt="Hidromod Logo"
                        class="h-10 md:h-14 w-auto"
                    />
                    <div
                        class="flex flex-col border-l-2 border-[#00a1e0]/60 pl-2 md:pl-3.5"
                    >
                        <div
                            class="text-lg md:text-xl font-bold leading-none tracking-tight text-white"
                        >
                            <span>HIDRO</span><span>MOD</span>
                        </div>
                        <p
                            class="text-[10px] md:text-[11px] text-gray-400 mt-1 leading-tight max-w-[200px]"
                            data-i18n="companySubtitle"
                        >
                            Hidrometeorolojik Tahmin &amp; Analiz Merkezi
                        </p>
                    </div>
                </div>
                <p
                    class="text-gray-400 leading-relaxed mb-3 md:mb-4 max-w-md text-xs md:text-sm"
                    data-i18n="footerTagline"
                >
                    Geleceği doğru verilerle şekillendiriyoruz. Yüksek
                    çözünürlüklü hidrometeorolojik tahmin ve analiz
                    hizmetleri.
                </p>
            </div>

            <!-- Contact Info -->
            <div>
                <h3
                    class="text-white font-bold text-base md:text-lg mb-3 md:mb-4"
                    data-i18n="contactInfo"
                >
                    İletişim
                </h3>
                <div class="space-y-3 md:space-y-4">
                    <!-- Address -->
                    <div class="flex items-start gap-2 md:gap-3">
                        <div
                            class="w-8 h-8 md:w-10 md:h-10 bg-[#00a1e0]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                        >
                            <svg
                                class="w-5 h-5 text-[#00a1e0]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                ></path>
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                ></path>
                            </svg>
                        </div>
                        <div>
                            <p
                                class="text-gray-400 text-xs md:text-sm leading-relaxed"
                            >
                                Mustafa Kemal Mah., Dumlupınar Bulv.,<br />
                                280/G, No:1260, ODTÜ TEKNOKENT,<br />
                                Çankaya, Ankara / Türkiye
                            </p>
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="flex items-start gap-2 md:gap-3">
                        <div
                            class="w-8 h-8 md:w-10 md:h-10 bg-[#00a1e0]/10 rounded-lg flex items-center justify-center flex-shrink-0"
                        >
                            <svg
                                class="w-5 h-5 text-[#00a1e0]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                ></path>
                            </svg>
                        </div>
                        <div>
                            <a
                                href="mailto:info@hidromod.com.tr"
                                class="text-gray-400 hover:text-[#00a1e0] transition-colors duration-200 text-xs md:text-sm"
                            >
                                info@hidromod.com.tr
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="pt-4 md:pt-6 border-t border-[#00a1e0]/20">
            <div
                class="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4"
            >
                <div
                    class="text-gray-400 text-xs md:text-sm"
                    data-i18n="copyright"
                >
                    © 2026 HIDROMOD. Tüm hakları saklıdır.
                </div>
                <div class="flex items-center gap-4 md:gap-6">
                    <a
                        href="#"
                        class="text-gray-400 hover:text-[#00a1e0] transition-colors duration-200 text-xs md:text-sm"
                        data-i18n="privacyPolicy"
                    >
                        Gizlilik Politikası
                    </a>
                    <a
                        href="#"
                        class="text-gray-400 hover:text-[#00a1e0] transition-colors duration-200 text-xs md:text-sm"
                        data-i18n="termsOfUse"
                    >
                        Kullanım Koşulları
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Decorative Elements -->
    <div
        class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00a1e0] to-transparent opacity-50"
    ></div>
</footer>
`;
}

export function initNavbar() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenuClose = document.getElementById("mobile-menu-close");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  }

  if (mobileMenuClose && mobileMenu) {
    mobileMenuClose.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      document.body.style.overflow = "";
    });
  }

  if (mobileMenu) {
    mobileMenu.addEventListener("click", (e) => {
      if (e.target === mobileMenu) {
        mobileMenu.classList.add("hidden");
        document.body.style.overflow = "";
      }
    });
  }
}
