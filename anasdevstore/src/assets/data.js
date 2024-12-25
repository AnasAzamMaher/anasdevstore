// Importing images
import cat1 from "./category/cat-1.jpg";
import cat2 from "./category/cat-2.jpg";
import cat3 from "./category/cat-3.jpg";
import cat4 from "./category/cat-4.jpg";

import prod1 from "./products/earbuds-prod-1.webp";
import prod2 from "./products/earbuds-prod-2.webp";
import prod3 from "./products/earbuds-prod-3.webp";
import prod4 from "./products/earbuds-prod-4.webp";
import prod5 from "./products/earbuds-prod-5.webp";
import prod6 from "./products/headphone-prod-1.webp";
import prod7 from "./products/headphone-prod-2.webp";
import prod8 from "./products/headphone-prod-3.webp";
import prod9 from "./products/headphone-prod-4.webp";
import prod10 from "./products/headphone-prod-5.webp";
import prod11 from "./products/headphone-prod-6.webp";
import prod12 from "./products/speaker-prod-1.webp";
import prod13 from "./products/speaker-prod-2.webp";
import prod14 from "./products/speaker-prod-3.webp";
import prod15 from "./products/speaker-prod-4.webp";
import prod16 from "./products/speaker-prod-5.webp";
import prod17 from "./products/watch-prod-1.webp";
import prod18 from "./products/watch-prod-2.webp";
import prod19 from "./products/watch-prod-3.webp";

// Categories Data
export const categories = [
  {
    id: 1,
    title: "Headphones",
    img: cat1,
  },
  {
    id: 2,
    title: "Bluetooth Speakers",
    img: cat2,
  },
  {
    id: 3,
    title: "Smart Watches",
    img: cat3,
  },
  {
    id: 4,
    title: "Wireless Airbuds",
    img: cat4,
  },
];

// Products Data
export const products = [
  {
    id: 1,
    title: "In-Ear Earbuds With 10mm Driver, IPX4 Sweat",
    desc: "The time hath come for you, my ladies, to walk with elegance dripping with every step you take. Let the royal shine and distinguish yourself from the crowd with boAt Airdopes 402, designed solely to compliment you and your personality. These are the best women wireless earbuds that come in shades matching your moods! Connect and experience the magic of Nirvana with total 30 hours of playtime and Bluetooth V5.2 that never lets you down. Let yourself loose and free, choosing for your own self, with this immersive audio built just to make you experience the unreal boAt signature sound. Weighing as light as opinions should, TRebel Airdopes 402 with its 450mAh battery charging case will assist you in blocking the outside world for a long time.",
    price: 2999,
    img: prod1,
    category: "Earbuds",
    categoryId: 4,
  },
  {
    id: 2,
    title:
      "Airdopes 441 | Wireless Earbuds with 6mm Driver For Immersive Sound",
    desc: "The time hath come for you, my ladies, to walk with elegance dripping with every step you take. Let the royal shine and distinguish yourself from the crowd with boAt Airdopes 402, designed solely to compliment you and your personality. These are the best women wireless earbuds that come in shades matching your moods! Connect and experience the magic of Nirvana with",
    price: 4999,
    img: prod2,
    category: "Earbuds",
    categoryId: 4,
  },
  {
    id: 3,
    title:
      "Airdopes 141 Pro | 12mm Drivers, Upto 45 Hours Playback, Quad Mics with ENx™️ Technology",
    desc: "Take a step up on your listening experience with boAt Airdopes 141 Pro. Start playing your tracks on our best wireless earbuds and don't stop with a total playback of 45 hours. Never miss a beat with boAt Signature Sound on our all-new boAt Airdopes so that every song that you listen to shines through. Plug-in and live the sound.",
    price: 7499,
    img: prod3,
    category: "Earbuds",
    categoryId: 4,
  },
  {
    id: 4,
    title:
      "Airdopes 131 DC Edition with 13 mm Drivers, Type-C Carry Case, 12 hours Nonstop Music",
    desc: "Sleek. Comfortable. Stylish. And a splash of amazing acoustic powers. Airdopes 131 true wireless earbuds are equipped with 13mm drivers that offer you beyond the ordinary sound. Keep going on for long like the DC heroes with its 12 hours of capacity. Plug-in be prepared to be awe struck",
    price: 4499,
    img: prod4,
    category: "Earbuds",
    categoryId: 4,
  },
  {
    id: 5,
    title:
      "Airdopes 141 | 8mm drivers, Upto 42 Hours Total Playback, ENxTM Technology, ASAPTM Charge",
    desc: "Hello sassy and fierce ladies! We see you soaring high for your dreams, and we want to support them. Let TRebel Airdopes 141 be your biggest cheerleader while you win the world with your go-getter attitude! Shun their opinions by indulging in your rhythm with the 8mm Dynamic Drivers. Ace those business calls with its ENx™ Technology that makes you heard every time. ASAP™ Charge empowers you with 75 minutes of playback with just 5 minutes of charging. IPX4 makes it easier to roll in the good times as you rock that sweat, changing your lifestyle. Connect instantly with its IWP™ Technology & keep everything under control with its Quick Response Touch.",
    price: 11499,
    img: prod5,
    category: "Earbuds",
    categoryId: 4,
  },
  {
    id: 6,
    title:
      "Rockerz 450 DC edition | Wireless Headphone with 40mm Dynamic Driver",
    desc: "Rockerz 450 DC is a powerful headphone with a 40mm Dynamic Driver that makes you feel like you're playing a game. The headphone is designed to deliver the ultimate sound experience and is compatible with most devices. It's a perfect choice for those who want to rock out with their music. The headphone is equipped with a 24-hour battery life and is available in a variety of colors.",
    price: 3999,
    img: prod6,
    category: "Headphones",
    categoryId: 1,
  },
  {
    id: 7,
    title: "Rockerz 550 Over Ear Bluetooth Headphone",
    desc: "boAt Rockerz 550 is an over-ear wireless headset that has been ergonomically designed to meet the needs of music lovers. The headphones come equipped with the latest Bluetooth v5.0 for instant wireless connectivity. Its powerful 500mAh battery provides playtime of up to 20 hours for an extended audio bliss. Its 50mm dynamic drivers help supply immersive musical experience to the user with immersive sound. The user can utilize the headset via dual connectivity in the form of Bluetooth and AUX.",
    price: 4999,
    img: prod7,
    category: "Headphones",
    categoryId: 1,
  },
  {
    id: 8,
    title: "Rockerz 750 | Wireless Headphones with 50mm Dynamic Driver",
    desc: "boAt Rockerz 750 is a powerful over-ear wireless headset that has been ergonomically designed to meet the needs of music lovers. The headphones come equipped with the latest Bluetooth v5.0 for instant wireless connectivity. Its powerful 500mAh battery provides playtime of up to 20 hours for an extended audio bliss. Its 50mm dynamic drivers help supply immersive musical experience to the user with immersive sound. The user can utilize the headset via dual connectivity in the form of Bluetooth and AUX.",
    price: 6499,
    img: prod8,
    category: "Headphones",
    categoryId: 1,
  },
  {
    id: 9,
    title: "Rockerz 850 | Wireless Headphones with 50mm Dynamic Driver",
    desc: "boAt Rockerz 850 is a powerful over-ear wireless headset that has been ergonomically designed to meet the needs of music lovers. The headphones come equipped with the latest Bluetooth v5.0 for instant wireless connectivity. Its powerful 500mAh battery provides playtime of up to 20 hours for an extended audio bliss. Its 50mm dynamic drivers help supply immersive musical experience to the user with immersive sound. The user can utilize the headset via dual connectivity in the form of Bluetooth and AUX.",
    price: 7999,
    img: prod9,
    category: "Headphones",
    categoryId: 1,
  },
  {
    id: 10,
    title: "Rockerz 950 | Wireless Headphones with 50mm Dynamic Driver",
    desc: "boAt Rockerz 950 is a powerful over-ear wireless headset that has been ergonomically designed to meet the needs of music lovers. The headphones come equipped with the latest Bluetooth v5.0 for instant wireless connectivity. Its powerful 500mAh battery provides playtime of up to 20 hours for an extended audio bliss. Its 50mm dynamic drivers help supply immersive musical experience to the user with immersive sound. The user can utilize the headset via dual connectivity in the form of Bluetooth and AUX.",
    price: 9499,
    img: prod10,
    category: "Headphones",
    categoryId: 1,
  },
  {
    id: 11,
    title: "Rockerz 1050 | Wireless Headphones with 50mm Dynamic Driver",
    desc: "boAt Rockerz 1050 is a powerful over-ear wireless headset that has been ergonomically designed to meet the needs of music lovers. The headphones come equipped with the latest Bluetooth v5.0 for instant wireless connectivity. Its powerful 500mAh battery provides playtime of up to 20 hours for an extended audio bliss. Its 50mm dynamic drivers help supply immersive musical experience to the user with immersive sound. The user can utilize the headset via dual connectivity in the form of Bluetooth and AUX.",
    price: 10999,
    img: prod11,
    category: "Headphones",
    categoryId: 1,
  },
  {
    id: 12,
    title: "AnasDevStore Party Pal 50 - Bluetooth Speaker",
    desc: "AnasDevStore Party Pal 50 is a wireless Bluetooth speaker that is designed to create a perfect sound environment for parties, concerts, and events. The speaker comes equipped with the latest Bluetooth v5.0 for instant wireless connectivity. Its powerful 500mAh battery provides playtime of up to 20 hours for an extended audio bliss. Its 50mm dynamic drivers help supply immersive musical experience to the user with immersive",
    price: 11999,
    img: prod12,
    category: "Speakers",
    categoryId: 2,
  },
  {
    id: 13,
    title: "AnasDevStore Party Pal 70 - Bluetooth Speaker",
    desc: "AnasDevStore Party Pal 70 is a wireless Bluetooth speaker that is designed to create a perfect sound environment for parties, concerts, and events. The speaker comes equipped with the latest Bluetooth v5.0 for instant wireless connectivity. Its powerful 500mAh battery provides playtime of up to 20 hours for an extended audio bliss. Its 50mm dynamic drivers help supply immersive musical experience to the user with immersive sound.",
    price: 12999,
    img: prod13,
    category: "Speakers",
    categoryId: 2,
  },
  {
    id: 14,
    title: "AnasDevStore Party Pal 90 - Bluetooth Speaker",
    desc: "AnasDevStore Party Pal 90 is a wireless Bluetooth speaker that is designed to create a perfect sound environment for parties, concerts, and events. The speaker comes equipped with the latest Bluetooth v5.0 for instant wireless connectivity. Its powerful 500mAh battery provides playtime of up to 20 hours for an extended audio bliss. Its 50mm dynamic drivers help supply immersive musical experience to the user with immersive sound.",
    price: 13999,
    img: prod14,
    category: "Speakers",
    categoryId: 2,
  },
  {
    id: 15,
    title: "AnasDevStore Party Pal 100 - Bluetooth Speaker",
    desc: "AnasDevStore Party Pal 100 is a wireless Bluetooth speaker that is designed to create a perfect sound environment for parties, concerts, and events. The speaker comes equipped with the latest Bluetooth v5.0 for instant wireless connectivity. Its powerful 500mAh battery provides playtime of up to 20 hours for an extended audio bliss. Its 50mm dynamic drivers help supply immersive musical experience to the user with immersive sound.",
    price: 14999,
    img: prod15,
    category: "Speakers",
    categoryId: 2,
  },
  {
    id: 16,
    title: "AnasDevStore Party Pal 110 - Bluetooth Speaker",
    desc: "AnasDevStore Party Pal 110 is a wireless Bluetooth speaker that is designed to create a perfect sound environment for parties, concerts, and events. The speaker comes equipped with the latest Bluetooth v5.0 for instant wireless connectivity. Its powerful 500mAh battery provides playtime of up to 20 hours for an extended audio bliss. Its 50mm dynamic drivers help supply immersive musical experience to the user with immersive sound.",
    price: 15999,
    img: prod16,
    category: "Speakers",
    categoryId: 2,
  },
  {
    id: 17,
    title:
      "Anas Wave Neo Watch | 1.69 HD Display, Upto 7 Days Battery Life, IP68 Sweat",
    desc: "AnasWave Neo Watch is a sleek and stylish smartwatch that is designed to be easy to wear and carry around. The watch comes with a 1.69 HD display, which offers a beautiful and clear viewing experience. It has a battery life of up to 7 days, making it ideal for daily use. The watch also features IP68 sweat resistance, which helps protect it from harsh weather conditions.",
    price: 8999,
    img: prod17,
    category: "Watch",
    categoryId: 3,
  },
  {
    id: 18,
    title:
      "AnasWave X Watch | 2.0 HD Display, Upto 7 Days Battery Life, IP68 Sweat",
    desc: "AnasWave X Watch is a sleek and stylish smartwatch that is designed to be easy to wear and carry around. The watch comes with a 2.0 HD display, which offers a beautiful and clear viewing experience. It has a battery life of up to 7 days, making it ideal for daily use. The watch also features IP68 sweat resistance, which helps protect it from harsh weather conditions.",
    price: 9999,
    img: prod18,
    category: "Watch",
    categoryId: 3,
  },
  {
    id: 19,
    title:
      "AnasWave Y Watch | 2.5 HD Display, Upto 7 Days Battery Life, IP68 Sweat",
    desc: "AnasWave Y Watch is a sleek and stylish smartwatch that is designed to be easy to wear and carry around. The watch comes with a 2.5 HD display, which offers a beautiful and clear viewing experience. It has a battery life of up to 7 days, making it ideal for daily use. The watch also features IP68 sweat resistance, which helps protect it from harsh weather conditions.",
    price: 10999,
    img: prod19,
    category: "Watch",
    categoryId: 3,
  },
];
