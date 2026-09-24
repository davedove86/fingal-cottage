export const BOOKING_URL =
  "https://portal.freetobook.com/reservations?w_id=23269&w_tkn=J65Rtrgqqs4sineSZUThwQaf3NPPjOqFjwHSgVN488fgKUgjAjtl5Hioojc4C";

export const FACEBOOK_PAGE =
  "https://www.facebook.com/pages/Fingal-Cottage-Lochdon-Isle-of-Mull/261275883887093";

export const PHONE_TEL = "07870293810";
export const PHONE_LABEL = "07870 293810";
export const EMAIL = "fingalcottagemull@gmail.com";

/** Public file URL. Stays `/…` on the live site, and gains the GitHub Pages prefix when built for Pages. */
export function publicUrl(path: string) {
  const base = import.meta.env.BASE_URL || "/";
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${normalized}`;
}

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/accommodation", label: "Accommodation" },
  { to: "/pricing", label: "Pricing & Bookings" },
  { to: "/see", label: "See & Do" },
  { to: "/contact", label: "Contact Us" },
] as const;

export const QUOTES = [
  "Wonderful location, lovely cottage, superb wildlife. Weather mixed….. A most enjoyable week on a delightful island",
  "Second visit - very relaxing. Spotted otter three days in a row, also red deer, hen harriers and buzzard.",
  "Third visit and just as fab as the others. Wildlife in abundance!! Even saw the elusive otter! Everyday different but just as amazing. Will be back next year",
  "Brilliant time, lovely place. Otters, sea eagles, hen harriers, deer , all sorts seen. Will be back",
  "Another fantastic holiday at Fingal Cottage. Lucky with the weather – great walks and wonderful wildlife. Couldn’t be better – sea eagles and otter 100 yds from front door!!",
  "Another lovely week in a very comfortable and well appointed cottage. Walks, cycles, boat trips, nice meals out. Sea and golden eagles, hares and a seal swimming up the bridge, amongst other sightings.",
  "Perfect week, perfect cottage. So much to see and do, a week is not long enough!! Otter in the loch appeared 1st night!! Too much nature to mention to be honest – did sea eagle boat trip from Ulva Pier – fab!! ….. We will definitely be back!!",
];

export const PRICES = [
  { when: "May – June 2025", amount: "£1015" },
  { when: "July – August 2025", amount: "£1120" },
  { when: "September – October 2025", amount: "£1015" },
  { when: "Rally Week", amount: "£1120" },
  { when: "November 2025 – March 2026", amount: "£700" },
  { when: "April 2026", amount: "£945" },
  { when: "May – October 2026", amount: "£1085" },
  { when: "Nov 2026 – March 2027", amount: "£700" },
];
