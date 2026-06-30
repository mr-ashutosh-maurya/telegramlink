export const CONTACT_EMAIL = "youremail@example.com";
export const TELEGRAM_CONTACT = "yourusername";

export const CHANNELS = [
  // ... existing channels ...

  // 👇 Add your new channels below
  {
    name: "Loot Deals Portal",
    handle: "@LootDealsPortal",
    category: "Loot deals",
    description: "Welcome to Loot Deals Portal 🤗 Real-Time Loot Deals, Price Drops & Hidden Offers (Since 2023).",
    members: 71800,
    addedDaysAgo: 2,
    link: "https://t.me/LootDealsPortal",
    // link not needed – uses https://t.me/LootDealsPortal
  },
  {
    name: "AMAZING LOOTS DEALS OFFERS 🛍️🛒",
    handle: "@amazinglootsdealsoffers",       // handle might not be public, but we override with link
    category: "Loot deals",
    description: "We share genuine deals, discounts & product recommendations.",
    members: 154750,
    addedDaysAgo: 7,
    link: "https://t.me/amazinglootsdealsoffers",
  },
  {
    name: "Loot Unboxing",
    handle: "Lootunboxing",       // handle might not be public, but we override with link
    category: "Loot deals",
    description: "We share genuine deals, discounts & product recommendations.",
    members: 100750,
    addedDaysAgo: 7,
    link: "https://t.me/Lootunboxing",
  },
  {
    name: "🇱🇴🇴🇹 𝙊𝙁𝙁𝙀𝙍𝙎 🛍️",
    handle: "+syySIj5m85llZGM1",       // handle might not be public, but we override with link
    category: "Loot deals",
    description: "We share genuine deals, discounts & product recommendations.",
    members: 7600,
    addedDaysAgo: 7,
    link: "https://t.me/+syySIj5m85llZGM1",
  },
//   {
//     name: "Loot Unboxing",
//     handle: "Lootunboxing",       // handle might not be public, but we override with link
//     category: "Loot deals",
//     description: "We share genuine deals, discounts & product recommendations.",
//     members: 8900,
//     addedDaysAgo: 7,
//     link: "https://t.me/Lootunboxing",
//   },
//   {
//     name: "Loot Unboxing",
//     handle: "Lootunboxing",       // handle might not be public, but we override with link
//     category: "Loot deals",
//     description: "We share genuine deals, discounts & product recommendations.",
//     members: 8900,
//     addedDaysAgo: 7,
//     link: "https://t.me/Lootunboxing",
//   },
//   {
//     name: "Weekend Memes",
//     handle: "weekendmemes",
//     category: "Entertainment",
//     description: "Funny memes to brighten your weekend.",
//     members: 45000,
//     addedDaysAgo: 15,
//   },
];

export const ALL = "All";
export const CATEGORIES = [ALL, ...new Set(CHANNELS.map((c) => c.category))];
export const PAGE_SIZE = 6;

export const SORTS = [
  { id: "trending", label: "Trending" },
  { id: "members", label: "Most members" },
  { id: "new", label: "Newest" },
];