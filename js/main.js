/* ============================================================
   Kavárna u Valentýny — interactions + i18n (CS / EN)
   ============================================================ */

const translations = {
  cs: {
    meta_desc: "Krém a Káva — výběrová káva, croissanty, snídaně a řemeslné pivo v srdci Prahy.",

    nav_home: "Úvod",
    nav_menu: "Menu",
    nav_about: "O nás",
    nav_gallery: "Galerie",
    nav_contact: "Kontakt",

    hero_eyebrow: "Praha · Kavárna & bar",
    hero_title: "Krém a Káva",
    hero_sub: "Výběrová káva, čerstvé croissanty a domácí snídaně — v příjemné atmosféře v centru Prahy.",
    hero_cta_menu: "Zobrazit menu",
    hero_cta_visit: "Navštivte nás",

    menu_eyebrow: "Menu",
    menu_title: "Naše nabídka",
    menu_lead: "Vše připravené s láskou. Ceny v Kč.",
    menu_note: "* U alergenů se řiďte značením v tištěném menu. Zeptejte se obsluhy na dnešní speciality.",

    about_eyebrow: "O nás",
    about_title: "Útulná kavárna se srdcem",
    about_p1: "Krém a Káva je útulné místo schované v tiché dlážděné uličce v Praze. Kávu připravujeme s trpělivostí a ke každému hostovi se chováme jako ke stálému.",
    about_p2: "Ráno u nás dostanete výběrovou kávu, čerstvé croissanty a snídaňové kombo. Odpoledne a večer čepujeme řemeslné pivo, rozléváme víno a mícháme koktejly — ideální místo, kde zpomalit.",
    about_point1: "Výběrová káva & matcha",
    about_point2: "Čerstvé croissanty a snídaně",
    about_point3: "Řemeslné pivo, víno & koktejly",

    gallery_eyebrow: "Galerie",
    gallery_title: "Pojďte dál",

    contact_eyebrow: "Kontakt",
    contact_title: "Najdete nás",
    contact_address_label: "Adresa",
    contact_hours_label: "Otevírací doba",
    hours_fallback: "Aktuální otvírací dobu najdete na Googlu.",
    hours_loading: "Načítání otvírací doby…",
    open_now: "Otevřeno",
    closed_now: "Zavřeno",
    contact_phone_label: "Telefon",
    contact_social_label: "Sítě",
    contact_map_link: "Otevřít v mapě ↗",

    footer_made: "Vytvořeno s kávou v Praze",
    footer_top: "Nahoru ↑",
  },

  en: {
    meta_desc: "Krém a Káva — specialty coffee, croissants, breakfast and craft beer in the heart of Prague.",

    nav_home: "Home",
    nav_menu: "Menu",
    nav_about: "About",
    nav_gallery: "Gallery",
    nav_contact: "Contact",

    hero_eyebrow: "Prague · Café & bar",
    hero_title: "Krém a Káva",
    hero_sub: "Specialty coffee, fresh croissants and homemade breakfast — in a warm spot in the centre of Prague.",
    hero_cta_menu: "See the menu",
    hero_cta_visit: "Visit us",

    menu_eyebrow: "Menu",
    menu_title: "Our menu",
    menu_lead: "Everything made with care. Prices in CZK.",
    menu_note: "* For allergens please refer to the printed menu. Ask our staff about today's specials.",

    about_eyebrow: "About us",
    about_title: "A cosy café with a heart",
    about_p1: "Krém a Káva is a cosy spot tucked into a quiet cobblestone street in Prague. We pour our coffee with patience and treat every guest like a regular.",
    about_p2: "In the morning we serve specialty coffee, fresh croissants and breakfast combos. In the afternoon and evening we pour craft beer, wine and cocktails — the perfect place to slow down.",
    about_point1: "Specialty coffee & matcha",
    about_point2: "Fresh croissants & breakfast",
    about_point3: "Craft beer, wine & cocktails",

    gallery_eyebrow: "Gallery",
    gallery_title: "Come on in",

    contact_eyebrow: "Contact",
    contact_title: "Find us",
    contact_address_label: "Address",
    contact_hours_label: "Opening hours",
    hours_fallback: "You can find current opening hours on Google.",
    hours_loading: "Loading opening hours…",
    open_now: "Open now",
    closed_now: "Closed",
    contact_phone_label: "Phone",
    contact_social_label: "Social",
    contact_map_link: "Open in map ↗",

    footer_made: "Made with coffee in Prague",
    footer_top: "Back to top ↑",
  },
};

const STORAGE_KEY = "uvalentyny-lang";
let currentLang = "cs";

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderMenu(lang) {
  const grid = document.getElementById("menuGrid");
  if (!grid || typeof MENU_DATA === "undefined") return;

  grid.innerHTML = MENU_DATA.map((cat) => {
    const title = escapeHtml(cat.title[lang] || cat.title.cs);
    const note = cat.note ? `<span class="menu-card-note">${escapeHtml(cat.note[lang] || cat.note.cs)}</span>` : "";

    const items = cat.items.map((it) => {
      const name = escapeHtml(it.name[lang] || it.name.cs);
      const desc = it.desc ? `<span class="mi-desc">${escapeHtml(it.desc[lang] || it.desc.cs)}</span>` : "";
      return `
        <li class="mi">
          <div class="mi-main">
            <span class="mi-name">${name}</span>
            <span class="mi-dots"></span>
            <span class="mi-price">${escapeHtml(it.price)}</span>
          </div>
          ${desc}
        </li>`;
    }).join("");

    return `
      <article class="menu-card" id="menu-${cat.id}">
        <header class="menu-card-head">
          <h3>${title}</h3>
          ${note}
        </header>
        <ul class="menu-list">${items}</ul>
      </article>`;
  }).join("");
}

/* ---------- Google Places: live phone & opening hours ---------- */

function renderPhone(place) {
  const el = document.getElementById("phoneLink");
  const phone = place.formatted_phone_number || place.international_phone_number;
  if (el && phone) {
    el.textContent = phone;
    const dial = (place.international_phone_number || phone).replace(/\s+/g, "");
    el.href = "tel:" + dial;
  }
}

function renderOpeningHours(place, lang) {
  const list = document.getElementById("openingHours");
  const statusEl = document.getElementById("openStatus");
  const dict = translations[lang] || translations.cs;
  const oh = place.opening_hours;
  if (!list || !oh) return;

  if (Array.isArray(oh.weekday_text) && oh.weekday_text.length) {
    list.innerHTML = oh.weekday_text
      .map((t) => `<li>${escapeHtml(t)}</li>`)
      .join("");
  }

  let openNow;
  try {
    if (typeof oh.isOpen === "function") openNow = oh.isOpen();
  } catch (_) { /* ignore */ }
  if (openNow === undefined && typeof oh.open_now === "boolean") openNow = oh.open_now;

  if (statusEl && typeof openNow === "boolean") {
    statusEl.hidden = false;
    statusEl.textContent = openNow ? dict.open_now : dict.closed_now;
    statusEl.classList.toggle("is-open", openNow);
    statusEl.classList.toggle("is-closed", !openNow);
  }
}

window.__initPlaces = function () {
  try {
    const cfg = window.GMAPS_CONFIG || {};
    const svc = new google.maps.places.PlacesService(document.createElement("div"));
    const bias = cfg.lat && cfg.lng ? { lat: cfg.lat, lng: cfg.lng } : undefined;

    svc.findPlaceFromQuery(
      { query: cfg.placeQuery, fields: ["place_id"], locationBias: bias },
      (results, status) => {
        if (status !== google.maps.places.PlacesServiceStatus.OK || !results || !results[0]) return;
        svc.getDetails(
          {
            placeId: results[0].place_id,
            fields: [
              "formatted_phone_number",
              "international_phone_number",
              "opening_hours",
              "utc_offset_minutes",
              "url",
              "name",
            ],
          },
          (place, st) => {
            if (st !== google.maps.places.PlacesServiceStatus.OK || !place) return;
            window.__placeData = place;
            renderPhone(place);
            renderOpeningHours(place, currentLang);
          }
        );
      }
    );
  } catch (_) { /* keep fallback values */ }
};

function loadGooglePlaces() {
  const cfg = window.GMAPS_CONFIG || {};
  if (!cfg.key || /^YOUR_/.test(cfg.key)) return; // no key yet — keep fallback
  if (document.getElementById("gmaps-sdk")) return;

  const list = document.getElementById("openingHours");
  if (list) {
    const dict = translations[currentLang] || translations.cs;
    list.innerHTML = `<li class="hours-fallback">${escapeHtml(dict.hours_loading)}</li>`;
  }

  const s = document.createElement("script");
  s.id = "gmaps-sdk";
  s.async = true;
  const lang = document.documentElement.lang || "cs";
  s.src =
    "https://maps.googleapis.com/maps/api/js?key=" +
    encodeURIComponent(cfg.key) +
    "&libraries=places&language=" +
    lang +
    "&callback=__initPlaces";
  document.head.appendChild(s);
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.cs;
  currentLang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (value === undefined) return;
    if (el.tagName === "META") {
      el.setAttribute("content", value);
    } else {
      el.textContent = value;
    }
  });

  document.documentElement.lang = lang;

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  renderMenu(lang);

  if (window.__placeData) {
    renderPhone(window.__placeData);
    renderOpeningHours(window.__placeData, lang);
  }

  try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) { /* ignore */ }
}

function initLanguage() {
  let lang = "cs";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) {
      lang = saved;
    } else if ((navigator.language || "").toLowerCase().startsWith("en")) {
      lang = "en";
    }
  } catch (_) { /* ignore */ }

  applyLanguage(lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });
}

function initNav() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initNav();
  initYear();
  loadGooglePlaces();
});
