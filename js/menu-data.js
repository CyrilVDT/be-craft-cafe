/* ============================================================
   Kavárna u Valentýny — menu data (from the printed menu)
   Bilingual: cs / en. Rendered by js/main.js.
   Prices in CZK.
   ============================================================ */

const MENU_DATA = [
  {
    id: "kava",
    title: { cs: "Káva", en: "Coffee" },
    items: [
      { name: { cs: "Espresso", en: "Espresso" }, desc: { cs: "espresso", en: "espresso" }, price: "55" },
      { name: { cs: "Doppio", en: "Doppio" }, desc: { cs: "dvojité espresso", en: "double espresso" }, price: "65" },
      { name: { cs: "Americano", en: "Americano" }, desc: { cs: "espresso, voda", en: "espresso, water" }, price: "59" },
      { name: { cs: "Cappuccino", en: "Cappuccino" }, desc: { cs: "espresso, mléko", en: "espresso, milk" }, price: "70" },
      { name: { cs: "Flat White", en: "Flat White" }, desc: { cs: "espresso, mléko", en: "espresso, milk" }, price: "80" },
      { name: { cs: "Latte", en: "Latte" }, desc: { cs: "espresso, mléko", en: "espresso, milk" }, price: "80" },
      { name: { cs: "Iced Latte", en: "Iced Latte" }, desc: { cs: "espresso, mléko, led", en: "espresso, milk, ice" }, price: "85" },
      { name: { cs: "Espresso Tonic", en: "Espresso Tonic" }, desc: { cs: "espresso, tonic, led", en: "espresso, tonic, ice" }, price: "90" },
      { name: { cs: "Espresso Orange", en: "Espresso Orange" }, desc: { cs: "espresso, pomerančový džus, led", en: "espresso, orange juice, ice" }, price: "90" },
    ],
  },
  {
    id: "matcha",
    title: { cs: "Matcha & More", en: "Matcha & More" },
    items: [
      { name: { cs: "Matcha Latte", en: "Matcha Latte" }, desc: { cs: "matcha, mléko, sladidlo", en: "matcha, milk, sweetener" }, price: "109" },
      { name: { cs: "Iced Matcha", en: "Iced Matcha" }, desc: { cs: "matcha, mléko, led", en: "matcha, milk, ice" }, price: "119" },
      { name: { cs: "Hot Chocolate", en: "Hot Chocolate" }, desc: { cs: "čokoláda, mléko", en: "chocolate, milk" }, price: "99" },
      { name: { cs: "Čaj", en: "Tea" }, desc: { cs: "černý, zelený nebo ovocný", en: "black, green or fruit" }, price: "65" },
    ],
  },
  {
    id: "limo",
    title: { cs: "Limonády & Milkshake", en: "Lemonades & Milkshakes" },
    items: [
      { name: { cs: "Strawberry Lemonade", en: "Strawberry Lemonade" }, desc: { cs: "jahody, citron, voda", en: "strawberry, lemon, water" }, price: "85" },
      { name: { cs: "Raspberry Lemonade", en: "Raspberry Lemonade" }, desc: { cs: "maliny, citron, voda", en: "raspberry, lemon, water" }, price: "85" },
      { name: { cs: "Milkshake Chocolate", en: "Chocolate Milkshake" }, desc: { cs: "mléko, čokoláda, zmrzlina", en: "milk, chocolate, ice cream" }, price: "75" },
      { name: { cs: "Milkshake Strawberry", en: "Strawberry Milkshake" }, desc: { cs: "mléko, jahody, zmrzlina", en: "milk, strawberry, ice cream" }, price: "77" },
      { name: { cs: "Milkshake Oreo", en: "Oreo Milkshake" }, desc: { cs: "mléko, sušenky Oreo, zmrzlina", en: "milk, Oreo cookies, ice cream" }, price: "77" },
      { name: { cs: "Milkshake Pistachio", en: "Pistachio Milkshake" }, desc: { cs: "mléko, pistácie, zmrzlina", en: "milk, pistachio, ice cream" }, price: "77" },
    ],
  },
  {
    id: "croissant",
    title: { cs: "Croissanty", en: "Croissants" },
    items: [
      { name: { cs: "Máslový croissant", en: "Butter croissant" }, price: "45" },
      { name: { cs: "Croissant s Nutellou", en: "Croissant with Nutella" }, desc: { cs: "s čokoládovou polevou", en: "with chocolate glaze" }, price: "65" },
      { name: { cs: "Jahodový croissant", en: "Strawberry croissant" }, desc: { cs: "s vanilkovým krémem", en: "with vanilla cream" }, price: "65" },
      { name: { cs: "Croissant se šunkou a sýrem", en: "Ham & cheese croissant" }, price: "85" },
      { name: { cs: "Croissant s lososem", en: "Salmon croissant" }, price: "120" },
    ],
  },
  {
    id: "combo",
    title: { cs: "Morning Combo", en: "Morning Combo" },
    note: { cs: "8:00 – 11:30", en: "8:00 – 11:30" },
    items: [
      { name: { cs: "Káva + máslový croissant", en: "Coffee + butter croissant" }, price: "115" },
      { name: { cs: "Káva + plněný croissant", en: "Coffee + filled croissant" }, price: "130" },
    ],
  },
  {
    id: "sendvice",
    title: { cs: "Sendviče", en: "Sandwiches" },
    items: [
      { name: { cs: "Grilled Cheese", en: "Grilled Cheese" }, price: "139" },
      { name: { cs: "Grilled Ham & Cheese", en: "Grilled Ham & Cheese" }, price: "149" },
    ],
  },
  {
    id: "snacks",
    title: { cs: "Snacks", en: "Snacks" },
    items: [
      { name: { cs: "Oříšky", en: "Mixed nuts" }, price: "55" },
      { name: { cs: "Olivy", en: "Olives" }, price: "55" },
      { name: { cs: "Hranolky", en: "Fries" }, price: "50" },
      { name: { cs: "Sýrové tyčinky", en: "Cheese sticks" }, desc: { cs: "s brusinkovou omáčkou", en: "with cranberry sauce" }, price: "99" },
    ],
  },
  {
    id: "tepla",
    title: { cs: "Teplá jídla & Sharing", en: "Hot Food & Sharing" },
    note: { cs: "K jídlu 2 omáčky v ceně", en: "2 sauces included" },
    items: [
      { name: { cs: "Kuřecí křídla", en: "Chicken wings" }, desc: { cs: "3 / 6 / 9 ks", en: "3 / 6 / 9 pcs" }, price: "99 / 149 / 199" },
      { name: { cs: "Kuřecí stripsy", en: "Chicken strips" }, desc: { cs: "3 / 6 / 9 ks", en: "3 / 6 / 9 pcs" }, price: "99 / 149 / 199" },
      { name: { cs: "Pečený Camembert", en: "Baked Camembert" }, desc: { cs: "s brusinkovou omáčkou a bagetou", en: "with cranberry sauce & baguette" }, price: "169" },
      { name: { cs: "Mix prkénko", en: "Sharing board" }, desc: { cs: "výběr sýrů, uzenin, oliv a oříšků", en: "selection of cheeses, cured meats, olives & nuts" }, price: "210" },
    ],
  },
  {
    id: "pivo",
    title: { cs: "Pivo", en: "Beer" },
    items: [
      { name: { cs: "Jedenáctka 11°", en: "Jedenáctka 11°" }, desc: { cs: "světlý ležák, čepované", en: "pale lager, on tap" }, price: "65" },
      { name: { cs: "Brüstock", en: "Brüstock" }, desc: { cs: "IPA, čepované", en: "IPA, on tap" }, price: "75" },
      { name: { cs: "Ležák 12°", en: "Lager 12°" }, desc: { cs: "český světlý ležák", en: "Czech pale lager" }, price: "70" },
      { name: { cs: "Řemeslné pivo v plechu", en: "Craft beer (can)" }, desc: { cs: "IPA, NEIPA, sour ale a další — ptejte se obsluhy", en: "IPA, NEIPA, sour ale & more — ask our staff" }, price: "90" },
    ],
  },
  {
    id: "vino",
    title: { cs: "Víno & Prosecco", en: "Wine & Prosecco" },
    note: { cs: "0,15 l / láhev", en: "0.15 l / bottle" },
    items: [
      { name: { cs: "Ryzlink rýnský", en: "Riesling" }, desc: { cs: "bílé", en: "white" }, price: "79 / 359" },
      { name: { cs: "Kazayak Muscat", en: "Kazayak Muscat" }, desc: { cs: "bílé", en: "white" }, price: "79 / 359" },
      { name: { cs: "Frankovka", en: "Frankovka" }, desc: { cs: "červené", en: "red" }, price: "79 / 359" },
      { name: { cs: "Mionetto Prosecco Brut", en: "Mionetto Prosecco Brut" }, price: "89 / 349" },
    ],
  },
  {
    id: "cocktails",
    title: { cs: "Koktejly", en: "Cocktails" },
    items: [
      { name: { cs: "Aperol Spritz", en: "Aperol Spritz" }, price: "149" },
      { name: { cs: "Hugo Spritz", en: "Hugo Spritz" }, price: "149" },
      { name: { cs: "Gin & Tonic", en: "Gin & Tonic" }, price: "159" },
      { name: { cs: "Margarita", en: "Margarita" }, price: "159" },
      { name: { cs: "Daiquiri", en: "Daiquiri" }, price: "149" },
      { name: { cs: "Blue Lagoon", en: "Blue Lagoon" }, price: "149" },
      { name: { cs: "Espresso Martini", en: "Espresso Martini" }, price: "169" },
      { name: { cs: "Negroni", en: "Negroni" }, price: "169" },
      { name: { cs: "Cuba Libre", en: "Cuba Libre" }, price: "139" },
    ],
  },
];
