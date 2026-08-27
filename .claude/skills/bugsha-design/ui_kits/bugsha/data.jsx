// Bugsha app — copy tables and fixture data. Every string exists in both languages.
const T = {
  en: { dir: "ltr", nu: "en",
    loc: "Salmiya", change: "Change", search: "Search bakeries, cafés, co-ops", searchAr: false,
    all: "All", bakery: "Bakery", meals: "Meals", cafe: "Café", grocery: "Co-op", sweets: "Sweets",
    tonight: "Tonight near you", closing: "Closing soon", featured: "Worth the drive",
    bundles: n => `${n} bundles`, left: n => `${n} left`, one: "1 left", sold: "All claimed",
    list: "List", map: "Map", filters: "Filters", apply: "Show bundles", clear: "Clear",
    type: "Type", maxDist: "Max distance", maxPrice: "Max price", sort: "Sort by",
    sortOpts: [["closest", "Closest"], ["cheapest", "Cheapest"], ["ending", "Ending soonest"], ["value", "Best value"]],
    inside: "What's in the bundle", insideBody: "Whatever the kitchen made today and didn't sell. Contents change nightly — that's the point. Ask at the counter for allergens on any item.",
    collect: "Collecting", collectBody: "Show your code at the counter inside the pickup window. Drive-up lane is open.",
    worth: "Worth", save: "You keep", qty: "How many?", reserve: "Reserve", payKnet: "Pay with KNET",
    payApple: "Pay with Apple Pay", paying: "Opening your bank…", payNote: "You'll return here automatically.",
    window: "Collect between", code: "Show this at the counter", reserved: "Reserved",
    collected: "Collected. Enjoy it.", rate: "How was the bundle?", thanks: "Thanks — that helps the next person.",
    reviewPh: "Anything the kitchen should know? (optional)", sendReview: "Send",
    late: "Running late?", lateBody: "Tell them and they'll hold your bundle 15 extra minutes.", tell: "Tell the partner",
    told: "They know you're on the way.", cancel: "Cancel reservation?", cancelBody: "You'll be refunded to KNET within 3 working days.",
    keep: "Keep it", drop: "Cancel bundle", cancelled: "Bundle cancelled",
    tabs: ["Browse", "Map", "Orders", "Me"],
    active: "Active", past: "Past", noOrders: "No active bundles", noOrdersBody: "Reserve one and your code lands here.",
    browseCta: "Browse tonight", empty: "All bundles claimed tonight", emptyBody: "New bundles usually drop around 20:00.",
    notify: "Notify me at 20:00", notifyOn: "We'll ping you at 20:00",
    me: "Noura A.", member: "With Bugsha since March", impact: "Your rescue log",
    rescued: "bundles rescued", kept: "kept", co2: "kg CO₂e avoided",
    settings: "Settings", lang: "Language", theme: "Appearance", light: "Light", dark: "Dark",
    payment: "Payment methods", notifs: "Notifications", help: "Help & contact", terms: "Terms",
    howto: "How Bugsha works", steps: [
      ["Find a bundle", "Kitchens post what's left at the end of the day, at about a third of the price."],
      ["Reserve it", "Pay in the app with KNET or Apple Pay. Your code appears straight away."],
      ["Collect it", "Show your code at the counter inside the window. That's it."]],
    got: "Got it", skip: "Skip", surprise: "Surprise Bundle", perDay: "Posted daily",
    partnerSince: "Bugsha partner", listedAt: "Listed", ratingOf: n => `${n} reviews`,
    dietary: ["Vegetarian option", "Contains dairy", "Contains nuts"], distance: "away",
    nearest: "Nearest first", pins: n => `${n} bundles on the map`, directions: "Directions",
    offline: "You're offline", offlineBody: "Your code still works — it's saved on this phone.",
    locTitle: "Show bundles near you?", locBody: "We use your location to sort by distance. Nothing is shared with partners.",
    locAllow: "Allow while using the app", locDeny: "Not now",
  },
  ar: { dir: "rtl", nu: "ar",
    loc: "السالمية", change: "بدّل", search: "دوّر على مخابز، كافيهات، جمعيات", searchAr: true,
    all: "الكل", bakery: "مخبز", meals: "وجبات", cafe: "كافيه", grocery: "جمعية", sweets: "حلويات",
    tonight: "الليلة قريب منك", closing: "قرب يخلص", featured: "تستاهل الطلعة",
    bundles: n => `${n} بقشة`, left: n => `باقي ${n}`, one: "باقي وحدة", sold: "خلصت",
    list: "قائمة", map: "خريطة", filters: "فلاتر", apply: "وريني البقش", clear: "مسح",
    type: "النوع", maxDist: "أبعد مسافة", maxPrice: "أعلى سعر", sort: "ترتيب حسب",
    sortOpts: [["closest", "الأقرب"], ["cheapest", "الأرخص"], ["ending", "قرب يخلص"], ["value", "أفضل قيمة"]],
    inside: "شنو داخل البقشة", insideBody: "اللي سواه المطبخ اليوم وما انباع. المحتويات تتغير كل ليلة — وهذي متعتها. إذا عندك حساسية من شي، اسأل عند الكاونتر.",
    collect: "الاستلام", collectBody: "وريهم الرمز عند الكاونتر داخل وقت الاستلام. ممر السيارات مفتوح.",
    worth: "القيمة", save: "توفّر", qty: "كم بقشة؟", reserve: "احجز", payKnet: "ادفع بكي-نت",
    payApple: "ادفع بـ Apple Pay", paying: "نفتح صفحة بنكك…", payNote: "بترجع لهني على طول.",
    window: "الاستلام بين", code: "وريهم هالرمز عند الكاونتر", reserved: "محجوزة",
    collected: "استلمتها. بالعافية!", rate: "شلون كانت البقشة؟", thanks: "شكرًا — هذا يساعد اللي بعدك.",
    reviewPh: "شي تحب المطبخ يعرفه؟ (اختياري)", sendReview: "أرسل",
    late: "متأخر؟", lateBody: "خبّرهم ويحفظون لك البقشة 15 دقيقة زيادة.", tell: "خبّر الشريك",
    told: "خبّرناهم إنك في الطريق.", cancel: "تلغي الحجز؟", cancelBody: "يرجع لك المبلغ على كي-نت خلال 3 أيام عمل.",
    keep: "خلّها", drop: "ألغِ البقشة", cancelled: "لغينا البقشة",
    tabs: ["تصفح", "خريطة", "طلباتي", "حسابي"],
    active: "نشطة", past: "السابقة", noOrders: "ما عندك بقش نشطة", noOrdersBody: "احجز وحدة ويطلع رمزك هني.",
    browseCta: "تصفح الليلة", empty: "خلصت بقش الليلة", emptyBody: "عادة البقش الجديدة تنزل حدود 20:00.",
    notify: "خبّرني الساعة 20:00", notifyOn: "بنخبرك الساعة 20:00",
    me: "نورة ع.", member: "مع بقشة من مارس", impact: "سجل إنقاذك",
    rescued: "بقشة انقذتها", kept: "وفّرتها", co2: "كجم CO₂e تفاديتها",
    settings: "الإعدادات", lang: "اللغة", theme: "المظهر", light: "فاتح", dark: "غامق",
    payment: "طرق الدفع", notifs: "الإشعارات", help: "المساعدة والتواصل", terms: "الشروط",
    howto: "شلون تشتغل بقشة", steps: [
      ["دوّر على بقشة", "المطابخ تنشر اللي باقي عندها بآخر اليوم، بحدود ثلث السعر."],
      ["احجزها", "ادفع بالتطبيق كي-نت أو Apple Pay. ورمزك يطلع لك على طول."],
      ["استلمها", "وريهم الرمز عند الكاونتر داخل الوقت. وبس، خلصنا."]],
    got: "تمام", skip: "بعدين", surprise: "بقشة مفاجأة", perDay: "تنزل كل يوم",
    partnerSince: "شريك بقشة", listedAt: "نُشرت", ratingOf: n => `${n} تقييم`,
    dietary: ["فيه خيار نباتي", "يحتوي حليب", "يحتوي مكسرات"], distance: "بعيد",
    nearest: "الأقرب أول", pins: n => `${n} بقشة على الخريطة`, directions: "الاتجاهات",
    offline: "ما عندك اتصال", offlineBody: "رمزك يشتغل — محفوظ بهالجهاز.",
    locTitle: "نوريك البقش القريبة منك؟", locBody: "نستخدم موقعك بس للترتيب حسب المسافة. ولا نشارك شي مع الشركاء.",
    locAllow: "اسمح أثناء استخدام التطبيق", locDeny: "مو الحين",
  },
};

const BAGS = [
  { id: "b1", p: "Kuwait Bakehouse", pa: "مخبز الكويت", cat: "bakery", img: "tone-bakehouse", now: 2, was: 6.5, from: "21:30", to: "22:30", km: 1.4, left: 2, r: 4.7, rc: 218, m: 42, listed: "21:04", x: 26, y: 30 },
  { id: "b2", p: "Beit Beirut", pa: "بيت بيروت", cat: "meals", img: "tone-mezze", now: 3, was: 9, from: "22:00", to: "23:00", km: 2.1, left: 5, r: 4.5, rc: 96, m: 88, listed: "20:58", x: 62, y: 46 },
  { id: "b3", p: "Ubon Café", pa: "كافيه أوبون", cat: "cafe", img: "tone-cafe", now: 2.5, was: 7, from: "20:30", to: "21:30", km: 3.4, left: 1, r: 4.8, rc: 412, m: 11, listed: "21:02", x: 40, y: 68 },
  { id: "b4", p: "Co-op Jabriya", pa: "جمعية الجابرية", cat: "grocery", img: "tone-coop", now: 1.5, was: 5, from: "20:00", to: "21:00", km: 0.8, left: 9, r: 4.2, rc: 77, m: 150, listed: "19:41", x: 74, y: 22 },
  { id: "b5", p: "Sadu Sweets", pa: "حلويات السدو", cat: "sweets", img: "tone-bread", now: 2, was: 8, from: "21:00", to: "22:00", km: 4.6, left: 3, r: 4.9, rc: 61, m: 64, listed: "20:36", x: 18, y: 58 },
];
const PAST = [
  { id: "p1", p: "Kuwait Bakehouse", pa: "مخبز الكويت", date: "2 Aug", dateAr: "2 أغسطس", now: 2, was: 6.5, rated: 5 },
  { id: "p2", p: "Ubon Café", pa: "كافيه أوبون", date: "29 Jul", dateAr: "29 يوليو", now: 2.5, was: 7, rated: 4 },
  { id: "p3", p: "Co-op Jabriya", pa: "جمعية الجابرية", date: "24 Jul", dateAr: "24 يوليو", now: 1.5, was: 5, rated: 5 },
];
const catLabel = (t, c) => ({ bakery: t.bakery, meals: t.meals, cafe: t.cafe, grocery: t.grocery, sweets: t.sweets }[c] || c);
const mfmt = ar => m => ar
  ? (m >= 60 ? `باقي ${Math.floor(m / 60)} س ${m % 60} د` : `باقي ${m} د`)
  : (m >= 60 ? `${Math.floor(m / 60)}h ${m % 60}m left` : `${m} min left`);
const kd = n => "KD " + Number(n).toFixed(3);
const sortBags = (bags, sort) => [...bags].sort((a, b) =>
  sort === "cheapest" ? a.now - b.now : sort === "ending" ? a.m - b.m
  : sort === "value" ? (b.was - b.now) - (a.was - a.now) : a.km - b.km);

Object.assign(window, { BugshaT: T, BugshaBags: BAGS, BugshaPast: PAST, bugshaCat: catLabel, bugshaMfmt: mfmt, bugshaKd: kd, bugshaSort: sortBags });
