/* ============================================================
   BE CRAFT CAFÉ — interactions + i18n (EN / CS)
   ============================================================ */

const translations = {
  en: {
    meta_desc: "BE CRAFT CAFÉ — craft coffee, food and beer in the heart of Prague.",

    nav_home: "Home",
    nav_menu: "Menu",
    nav_about: "About",
    nav_gallery: "Gallery",
    nav_contact: "Contact",

    hero_eyebrow: "Prague · Craft coffee bar",
    hero_title: "BE CRAFT CAFÉ",
    hero_sub: "Craft coffee, fresh food and local beer — in a cosy corner of the old town.",
    hero_cta_menu: "See the menu",
    hero_cta_visit: "Visit us",

    menu_eyebrow: "Menu",
    menu_title: "What's on",
    menu_lead: "Everything made with care. Prices in CZK.",
    menu_coffee: "Coffee",
    menu_food: "Food",
    menu_beer: "Beer & Bar",
    menu_note: "* The menu changes with the seasons — ask our baristas about today's specials.",

    mi_espresso_orange: "Espresso Orange",
    mi_grilled_cheese: "Grilled Cheese",
    mi_reuben: 'Grilled Panini "Reuben"',
    mi_panini_veggie: "Panini Veggie",
    mi_panini_chicken: "Panini Chicken",
    mi_sardine: "Sardine Sandwich",
    mi_kolac: "Koláč (pastry)",
    mi_kolac_crisps: "Koláč Crisps",
    mi_mix_starter: "Mix Starter Board",
    mi_dark_beer: "Dark beer (draught)",
    mi_lager: "Lager (draught)",
    mi_ipa: "Craft IPA",
    mi_wine: "House wine (glass)",
    mi_lemonade: "Homemade lemonade",

    about_eyebrow: "About us",
    about_title: "A small café with a big heart",
    about_p1: "BE CRAFT CAFÉ is a cosy craft coffee bar tucked into a quiet cobblestone street in Prague. We roast for flavour, pour with patience and treat every guest like a regular.",
    about_p2: "By day we serve specialty coffee, fresh paninis and homemade pastries. By evening we pour local craft beer and wine — the perfect spot to slow down. And yes, we're a little bit mad about cats. 🐱",
    about_point1: "Specialty coffee, freshly ground",
    about_point2: "Homemade food & pastries",
    about_point3: "Local craft beer on tap",

    gallery_eyebrow: "Gallery",
    gallery_title: "Come on in",

    contact_eyebrow: "Contact",
    contact_title: "Find us",
    contact_address_label: "Address",
    contact_hours_label: "Opening hours",
    contact_hours_week: "Mon–Fri: 8:00 – 20:00",
    contact_hours_weekend: "Sat–Sun: 9:00 – 22:00",
    contact_phone_label: "Phone",
    contact_social_label: "Social",
    contact_map_link: "Open in map ↗",

    footer_made: "Made with coffee in Prague",
    footer_top: "Back to top ↑",
  },

  cs: {
    meta_desc: "BE CRAFT CAFÉ — řemeslná káva, jídlo a pivo v srdci Prahy.",

    nav_home: "Úvod",
    nav_menu: "Menu",
    nav_about: "O nás",
    nav_gallery: "Galerie",
    nav_contact: "Kontakt",

    hero_eyebrow: "Praha · Řemeslná kavárna",
    hero_title: "BE CRAFT CAFÉ",
    hero_sub: "Řemeslná káva, čerstvé jídlo a lokální pivo — v útulném koutě starého města.",
    hero_cta_menu: "Zobrazit menu",
    hero_cta_visit: "Navštivte nás",

    menu_eyebrow: "Menu",
    menu_title: "Nabídka",
    menu_lead: "Vše připravené s láskou. Ceny v Kč.",
    menu_coffee: "Káva",
    menu_food: "Jídlo",
    menu_beer: "Pivo & bar",
    menu_note: "* Menu se mění podle sezóny — zeptejte se baristů na dnešní speciality.",

    mi_espresso_orange: "Espresso s pomerančem",
    mi_grilled_cheese: "Grilovaný sýr",
    mi_reuben: 'Grilované panini "Reuben"',
    mi_panini_veggie: "Panini vegetariánské",
    mi_panini_chicken: "Panini s kuřecím",
    mi_sardine: "Sendvič se sardinkami",
    mi_kolac: "Koláč",
    mi_kolac_crisps: "Koláčové chipsy",
    mi_mix_starter: "Mix předkrmů",
    mi_dark_beer: "Tmavé pivo (točené)",
    mi_lager: "Ležák (točený)",
    mi_ipa: "Řemeslné IPA",
    mi_wine: "Víno rozlévané (sklenka)",
    mi_lemonade: "Domácí limonáda",

    about_eyebrow: "O nás",
    about_title: "Malá kavárna s velkým srdcem",
    about_p1: "BE CRAFT CAFÉ je útulná řemeslná kavárna schovaná v tiché dlážděné uličce v Praze. Kávu pražíme kvůli chuti, připravujeme ji s trpělivostí a ke každému hostovi se chováme jako ke stálému.",
    about_p2: "Přes den podáváme výběrovou kávu, čerstvá panini a domácí koláče. Večer čepujeme lokální řemeslné pivo a víno — ideální místo, kde zpomalit. A ano, jsme tak trochu blázni do koček. 🐱",
    about_point1: "Výběrová káva, čerstvě mletá",
    about_point2: "Domácí jídlo & koláče",
    about_point3: "Lokální řemeslné pivo z pípy",

    gallery_eyebrow: "Galerie",
    gallery_title: "Pojďte dál",

    contact_eyebrow: "Kontakt",
    contact_title: "Najdete nás",
    contact_address_label: "Adresa",
    contact_hours_label: "Otevírací doba",
    contact_hours_week: "Po–Pá: 8:00 – 20:00",
    contact_hours_weekend: "So–Ne: 9:00 – 22:00",
    contact_phone_label: "Telefon",
    contact_social_label: "Sítě",
    contact_map_link: "Otevřít v mapě ↗",

    footer_made: "Vytvořeno s kávou v Praze",
    footer_top: "Nahoru ↑",
  },
};

const STORAGE_KEY = "becraft-lang";

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

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

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (_) { /* ignore */ }
}

function initLanguage() {
  let lang = "en";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) {
      lang = saved;
    } else if ((navigator.language || "").toLowerCase().startsWith("cs")) {
      lang = "cs";
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
});
