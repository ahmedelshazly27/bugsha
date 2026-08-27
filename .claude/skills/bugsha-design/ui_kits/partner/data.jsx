// Partner portal — copy tables (EN + Kuwaiti Arabic) and fixture data.
(function(){
const COPY = {
en:{dir:"ltr",
 nav:["Tonight","List a bundle","My bundles","Payouts","Inspection log","Reviews","Analytics","Branches"],
 brand:"Bugsha · Partner", branch:"Kuwait Bakehouse", area:"Salmiya", switchBranch:"Switch branch",
 signedIn:"Yousef K. · Shift manager",
 tonight:"Tonight", closesIn:"Pickup closes in", live:"Bundles live", reserved:"Reserved", collected:"Collected", net:"Net tonight",
 listedAt:"listed 21:04", waiting:"waiting", ofBundles:"of 6 bundles", afterFee:"after commission",
 attested:"Handling attested at 21:06", attestedBody:"Yousef K. confirmed the bundles were packed within 90 minutes of close.",
 board:"Tonight's orders", handOver:"Hand over", done:"Collected", late:"Late", waitingS:"Waiting",
 listCta:"List tonight's bundles", pause:"Pause listing", paused:"Paused — hidden from customers", resume:"Resume",
 howMany:"How many bundles?", lastNight:"Last night: 6", sameAsLast:"Same as last night", next:"Next",
 window:"Pickup window", windowHint:"Default 21:30–22:30", priceStep:"Price & attestation",
 priceHint:"Worth KD 6.500 · you charge KD 2.000", price:"Price", worth:"Original value",
 attestLabel:"I confirm these bundles were packed today and are handed over inside the pickup window.",
 publish:n=>`Publish ${n} bundles`, published:"Bundles live · 21:04", view:"View",
 preview:"Customer preview", previewNote:"Exactly what the customer sees.", bakedToday:"Baked today",
 bundles:"My bundles", bundlesNote:"Saved presets. One tap at close of shift.", schedule:"Runs", edit:"Edit", useNow:"Use now",
 payouts:"Payouts", nextPayout:"Next payout", thisWeek:"This week", bundlesSold:"bundles sold", arriving:"Arriving",
 bank:"NBK · ending 4417", history:"Payout history", period:"Period", gross:"Gross", fee:"Commission", netCol:"Net", status:"Status", paid:"Paid", pending:"Pending",
 ledger:"Inspection log", ledgerNote:"Every bundle keeps its own record. Export any period, per branch, on the spot.",
 allBranches:"All branches", last7:"Last 7 nights", export:"Export CSV",
 colOrder:"Order", colListed:"Listed", colCloses:"Window ends", colCollected:"Collected", colAttest:"Attested",
 reviews:"Reviews", avgTonight:"Average tonight", allTime:"All time", reviewsNote:"Reviews are a quality signal and inspection evidence at the same time.",
 branches:"Branches", staff:"Staff on this branch", notif:"Notifications",
 notifNew:"New reservation", notifNewSub:"Ping when a bundle is reserved", notifClose:"Window closing", notifCloseSub:"15 minutes before pickup closes",
 language:"Language", addBranch:"Add branch", active:"Active", closedTonight:"Closed tonight",
 liveListings:"Live tonight", noListings:"Nothing listed tonight yet", noListingsBody:"Publish a bundle and it shows up here — and in the app within seconds.",
 sold:"sold", remaining:"left", pauseOne:"Pause", resumeOne:"Resume", removeOne:"Remove", editOne:"Edit",
 newBundle:"New bundle", editBundle:"Edit bundle", nameEn:"Name (English)", nameAr:"Name (Arabic)",
 qtyLabel:"Bundles per night", windowLabel:"Pickup window", save:"Save", saveAdd:"Save bundle", del:"Delete",
 cancelEdit:"Cancel", savedToast:"Bundle saved", deletedToast:"Bundle deleted", removedToast:"Listing removed",
 pausedToast:"Listing paused — hidden from customers", resumedToast:"Listing live again",
 startFrom:"Start from a saved bundle", orBlank:"Or fill it in",
 savePreset:"Save these settings as a bundle", presetSaved:"Saved to My bundles",
 publishedFrom:n=>n+" live · customers can reserve now", days:"Nights it runs", customWindow:"Custom",
 addBundle:"Add bundle", editorNote:"Changes apply the next time you publish. Tonight's live listings keep their own price.",
 impact:"Analytics", impactNote:"How the branch is performing on the numbers your operations team is judged on — sell-through, rescue volume, and the waste you stopped paying to throw away.",
 sellThrough:"Sell-through", sellThroughSub:"bundles sold vs listed", bestNight:"Best night", bestNightSub:"this month", avgPrice:"Average price", avgPriceSub:"per bundle, this month",
 photo:"Photo", photoNote:"Your storefront, counter or packaging — never a photo of the contents, since the bundle is a surprise.", uploadPhoto:"Upload photo", yourPhotos:"Your photos", noPhoto:"No photo",
 internal:"Internal — this month", bundlesRescued:"Bundles rescued", mealsDiverted:"Meals diverted from waste",
 kgFood:"Food kept in the chain", co2:"CO₂e avoided", disposalSaved:"Disposal cost avoided", ytd:"Year to date",
 perBranch:"By branch", claim:"Publishable claim", claimNote:"Generated from your verified ledger — every figure traces back to an attested order, so legal can sign it.",
 claimEn:"Kuwait Bakehouse rescued 1,284 meals from waste in 2026 — 642 kg of food kept out of landfill.",
 claimAr:"مخبز الكويت أنقذ 1,284 وجبة من الإسراف في 2026 — 642 كجم أكل ما وصل المكب.",
 copyClaim:"Copy claim", copied:"Copied", assets:"Co-branded assets", assetsNote:"Bilingual, print and social, your logo beside ours.",
 stickerName:"Window sticker · A5", stickerSub:"Arabic and English, for the door", socialName:"Social card · 1080×1080",
 socialSub:"Monthly number, ready to post", reportName:"CSR report · PDF", reportSub:"Month or year, per branch, with the ledger attached",
 receiptName:"Receipt line", receiptSub:"One line for your printed receipts", download:"Download", generate:"Generate",
 verified:"Verified against the inspection log", equivalents:"What that means", eqMeals:"meals a family of four could eat",
 eqDrives:"km driven in a car", eqWater:"litres of water not spent growing it", targetLabel:"Nights with zero waste", targetSub:"this month"},
ar:{dir:"rtl",
 nav:["الليلة","أدرج بقشة","البقش المحفوظة","المستحقات","سجل التفتيش","التقييمات","التحليلات","الفروع"],
 brand:"بقشة · شريك", branch:"مخبز الكويت", area:"السالمية", switchBranch:"بدّل الفرع",
 signedIn:"يوسف ك. · مشرف الشفت",
 tonight:"الليلة", closesIn:"الاستلام يقفل بعد", live:"بقش منشورة", reserved:"محجوزة", collected:"تسلّمت", net:"صافي الليلة",
 listedAt:"نُشرت 21:04", waiting:"بالانتظار", ofBundles:"من 6 بقش", afterFee:"بعد العمولة",
 attested:"الإقرار مسجّل 21:06", attestedBody:"يوسف ك. أكد إن البقش عُبّئت خلال 90 دقيقة من الإغلاق.",
 board:"طلبات الليلة", handOver:"سلّمها", done:"تسلّمت", late:"متأخر", waitingS:"بالانتظار",
 listCta:"انشر بقش الليلة", pause:"وقّف النشر", paused:"موقوفة — ما تبيّن للزباين", resume:"رجّعها",
 howMany:"كم بقشة؟", lastNight:"أمس: 6", sameAsLast:"مثل أمس", next:"التالي",
 window:"وقت الاستلام", windowHint:"الافتراضي 21:30–22:30", priceStep:"السعر والإقرار",
 priceHint:"قيمتها KD 6.500 · تبيعها بـ KD 2.000", price:"السعر", worth:"القيمة الأصلية",
 attestLabel:"أقرّ إن هالبقش عُبّئت اليوم وتُسلّم داخل وقت الاستلام.",
 publish:n=>`انشر ${n} بقش`, published:"البقش منشورة · 21:04", view:"شوفها",
 preview:"شكلها عند الزبون", previewNote:"هذا بالضبط اللي يشوفه الزبون.", bakedToday:"مخبوز اليوم",
 bundles:"البقش المحفوظة", bundlesNote:"إعدادات محفوظة. ضغطة واحدة بنهاية الشفت.", schedule:"تنشر", edit:"عدّل", useNow:"استخدمها الحين",
 payouts:"المستحقات", nextPayout:"التحويل الجاي", thisWeek:"هذا الأسبوع", bundlesSold:"بقشة مبيعة", arriving:"يوصل",
 bank:"الوطني · تنتهي 4417", history:"سجل التحويلات", period:"الفترة", gross:"الإجمالي", fee:"العمولة", netCol:"الصافي", status:"الحالة", paid:"محوّل", pending:"بالطريق",
 ledger:"سجل التفتيش", ledgerNote:"كل بقشة لها سجلها. صدّر أي فترة، ولأي فرع، على طول.",
 allBranches:"كل الفروع", last7:"آخر 7 ليالٍ", export:"تصدير CSV",
 colOrder:"الطلب", colListed:"نُشرت", colCloses:"يقفل", colCollected:"تسلّمت", colAttest:"الإقرار",
 reviews:"التقييمات", avgTonight:"معدل الليلة", allTime:"الكل", reviewsNote:"التقييم دليل جودة ودليل تفتيش بنفس الوقت.",
 branches:"الفروع", staff:"الشباب في هالفرع", notif:"التنبيهات",
 notifNew:"حجز جديد", notifNewSub:"نبّهني أول ما تُحجز بقشة", notifClose:"الوقت يقرب يخلص", notifCloseSub:"قبل 15 دقيقة من قفل الاستلام",
 language:"اللغة", addBranch:"أضف فرع", active:"شغّال", closedTonight:"مسكّر الليلة",
 liveListings:"منشورة الليلة", noListings:"ما نشرت شي الليلة", noListingsBody:"انشر بقشة وتطلع لك هني — وبالتطبيق بثواني.",
 sold:"مبيعة", remaining:"باقي", pauseOne:"وقّف", resumeOne:"رجّعها", removeOne:"احذف", editOne:"عدّل",
 newBundle:"بقشة جديدة", editBundle:"عدّل البقشة", nameEn:"الاسم (إنجليزي)", nameAr:"الاسم (عربي)",
 qtyLabel:"كم بقشة بالليلة", windowLabel:"وقت الاستلام", save:"احفظ", saveAdd:"احفظ البقشة", del:"احذف",
 cancelEdit:"إلغاء", savedToast:"انحفظت البقشة", deletedToast:"انحذفت البقشة", removedToast:"انشالت من المنشورة",
 pausedToast:"وقّفناها — ما تبيّن للزباين", resumedToast:"رجعت منشورة",
 startFrom:"ابدأ من بقشة محفوظة", orBlank:"أو عبّيها بنفسك",
 savePreset:"احفظ هالإعدادات كبقشة", presetSaved:"انحفظت في البقش المحفوظة",
 publishedFrom:n=>n+" منشورة · الزباين يقدرون يحجزون الحين", days:"الليالي اللي تنشر فيها", customWindow:"غير",
 addBundle:"أضف بقشة", editorNote:"التعديل يشتغل بالنشر الجاي. البقش المنشورة الليلة تثبت على سعرها.",
 impact:"التحليلات", impactNote:"شلون أداء الفرع بالأرقام اللي يتحاسب عليها التشغيل — نسبة البيع، وكم بقشة انقذت، والإسراف اللي بطّلت تدفع عشان ترميه.",
 sellThrough:"نسبة البيع", sellThroughSub:"مبيعة من المنشورة", bestNight:"أفضل ليلة", bestNightSub:"هذا الشهر", avgPrice:"معدل السعر", avgPriceSub:"للبقشة، هذا الشهر",
 photo:"الصورة", photoNote:"محلك أو الكاونتر أو التغليف — مو صورة المحتويات، لأن البقشة مفاجأة.", uploadPhoto:"ارفع صورة", yourPhotos:"صورك", noPhoto:"بدون صورة",
 internal:"داخلي — هذا الشهر", bundlesRescued:"بقش انقذت", mealsDiverted:"وجبات ما وصلت الإسراف",
 kgFood:"أكل بقي بالسلسلة", co2:"CO₂e تفاديناه", disposalSaved:"تكلفة تخلّص وفّرتها", ytd:"من أول السنة",
 perBranch:"حسب الفرع", claim:"كلام تقدر تنشره", claimNote:"مولّد من سجلك الموثّق — كل رقم يرجع لطلب عليه إقرار، فالقانوني يقدر يعتمده.",
 claimEn:"Kuwait Bakehouse rescued 1,284 meals from waste in 2026 — 642 kg of food kept out of landfill.",
 claimAr:"مخبز الكويت أنقذ 1,284 وجبة من الإسراف في 2026 — 642 كجم أكل ما وصل المكب.",
 copyClaim:"انسخ النص", copied:"انتسخ", assets:"مواد مشتركة", assetsNote:"باللغتين، للطبع وللسوشال، شعارك جنب شعارنا.",
 stickerName:"ملصق واجهة · A5", stickerSub:"عربي وإنجليزي، للباب", socialName:"صورة سوشال · 1080×1080",
 socialSub:"رقم الشهر، جاهزة للنشر", reportName:"تقرير مسؤولية · PDF", reportSub:"شهر أو سنة، ولكل فرع، ومعه السجل",
 receiptName:"سطر الفاتورة", receiptSub:"سطر واحد تحطه على فواتيرك", download:"نزّلها", generate:"طلّعها",
 verified:"موثّق من سجل التفتيش", equivalents:"شنو يعني هالرقم", eqMeals:"وجبة تكفي عايلة من أربعة",
 eqDrives:"كم بالسيارة", eqWater:"لتر ماي ما انصرف عليه", targetLabel:"ليالٍ بصفر إسراف", targetSub:"هذا الشهر"}};

const ORDERS = [
 {code:"KW-4821", customer:"Noura A.", customerAr:"نورة ع.", qty:1, by:"22:30", status:"waiting"},
 {code:"KW-4822", customer:"Rahul S.", customerAr:"راهول س.", qty:2, by:"22:30", status:"late"},
 {code:"KW-4823", customer:"Maria D.", customerAr:"ماريا د.", qty:1, by:"22:30", status:"waiting"},
 {code:"KW-4819", customer:"Mishari K.", customerAr:"مشاري ك.", qty:1, by:"22:00", status:"collected"}];

const PRESETS = [
 {id:"bakery", en:"Bakery mix", ar:"خليط المخبز", price:"2.000", worth:"6.500", window:"21:30–22:30", qty:6, days:{en:"Sat–Thu",ar:"السبت–الخميس"}, photo:"../../assets/photos/tone-bakehouse.png"},
 {id:"savoury", en:"Savoury tray", ar:"صواني مالحة", price:"2.500", worth:"7.000", window:"22:00–23:00", qty:4, days:{en:"Fri",ar:"الجمعة"}, photo:"../../assets/photos/tone-mezze.png"},
 {id:"sweets", en:"Sweets box", ar:"صندوق حلويات", price:"3.000", worth:"9.000", window:"21:00–22:00", qty:3, days:{en:"Thu–Fri",ar:"الخميس–الجمعة"}, photo:"../../assets/photos/tone-bread.png"}];

const PAYOUTS = [
 {period:{en:"27 Jul – 2 Aug",ar:"27 يوليو – 2 أغسطس"}, gross:"230.000", fee:"34.500", net:"195.500", paid:true},
 {period:{en:"20 – 26 Jul",ar:"20 – 26 يوليو"}, gross:"212.500", fee:"31.875", net:"180.625", paid:true},
 {period:{en:"13 – 19 Jul",ar:"13 – 19 يوليو"}, gross:"197.500", fee:"29.625", net:"167.875", paid:true}];

const LEDGER = [
 {orderId:"KW-4821", listedAt:"21:04", windowEnd:"22:30", collectedAt:"22:11", attested:true},
 {orderId:"KW-4822", listedAt:"21:04", windowEnd:"22:30", collectedAt:"22:26", attested:true},
 {orderId:"KW-4823", listedAt:"21:04", windowEnd:"22:30", collectedAt:"", attested:true},
 {orderId:"KW-4819", listedAt:"20:12", windowEnd:"22:00", collectedAt:"21:48", attested:true},
 {orderId:"KW-4812", listedAt:"20:58", windowEnd:"22:30", collectedAt:"22:04", attested:true},
 {orderId:"KW-4808", listedAt:"20:58", windowEnd:"22:30", collectedAt:"22:20", attested:true}];

const REVIEWS = [
 {name:"Noura A.", nameAr:"نورة ع.", stars:5, en:"Still warm. Two za'atar and a whole cake for KD 2.", ar:"لِسع حارّة. زعتر وكيكة كاملة بـ KD 2."},
 {name:"Rahul S.", nameAr:"راهول س.", stars:5, en:"Staff had it ready at the counter. In and out in a minute.", ar:"الطلب جاهز عند الكاونتر. دخلت وطلعت بدقيقة."},
 {name:"Maria D.", nameAr:"ماريا د.", stars:4, en:"Good value. Would like more savoury next time.", ar:"سعرها زين. أتمنى مالح أكثر المرة الجاية."}];

const BRANCHES = [
 {en:"Salmiya · Block 10", ar:"السالمية · قطعة 10", live:true},
 {en:"Shaab · Arabian Gulf St", ar:"الشعب · شارع الخليج العربي", live:true},
 {en:"Jabriya · Block 4", ar:"الجابرية · قطعة 4", live:false}];

const STAFF = [
 {en:"Yousef K.", ar:"يوسف ك.", role:{en:"Shift manager",ar:"مشرف شفت"}},
 {en:"Anitha R.", ar:"أنيثا ر.", role:{en:"Counter",ar:"كاونتر"}},
 {en:"Hassan M.", ar:"حسن م.", role:{en:"Counter",ar:"كاونتر"}}];

const LISTINGS = [
 {id:"l1", en:"Bakery mix", ar:"خليط المخبز", price:"2.000", worth:"6.500", window:"21:30–22:30", qty:6, sold:3, live:true, photo:"../../assets/photos/tone-bakehouse.png"}];

const IMPACT_BRANCHES = [
 {en:"Salmiya · Block 10", ar:"السالمية · قطعة 10", bundles:312, meals:624, kg:156, co2:398},
 {en:"Shaab · Arabian Gulf St", ar:"الشعب · شارع الخليج العربي", bundles:184, meals:368, kg:92, co2:235},
 {en:"Jabriya · Block 4", ar:"الجابرية · قطعة 4", bundles:96, meals:192, kg:48, co2:122}];

const PHOTO_LIBRARY = ["tone-bakehouse","tone-bread","tone-mezze","tone-cafe","tone-coop","tone-night"].map(n=>"../../assets/photos/"+n+".png");

Object.assign(window, { PARTNER_PHOTOS: PHOTO_LIBRARY, PARTNER_IMPACT_BRANCHES: IMPACT_BRANCHES, PARTNER_LISTINGS: LISTINGS, PARTNER_COPY: COPY, PARTNER_ORDERS: ORDERS, PARTNER_PRESETS: PRESETS,
  PARTNER_PAYOUTS: PAYOUTS, PARTNER_LEDGER: LEDGER, PARTNER_REVIEWS: REVIEWS, PARTNER_BRANCHES: BRANCHES, PARTNER_STAFF: STAFF });
})();
