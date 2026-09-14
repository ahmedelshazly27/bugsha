// Bugsha app — the stages around the marketplace: first run, sign-in, profile, every order state,
// wallet, saved stores, disputes and account. Mirrors the platform's state machines
// (public.order_status, public.city_stage, app.complete_profile, app.open_dispute, app.wallet_balance…).
(function () {
const NS = window.SurplusKWDesignSystem_97ec90;
const { Logo, Button, IconButton, Icon, Chip, Badge, Input, SegmentedControl, Switch, ListRow, Card, Banner,
  EmptyState, PickupWindow, ImpactStat, RatingStars, PriceTag, Skeleton, CountdownPill, RedemptionCode } = NS;

/* ---------- copy: every string in both languages ---------- */
const S = {
  en: {
    pickLang: "Choose your language", pickLangBody: "You can change this any time from Me.",
    langs: [["en", "English", "Kuwait · Egypt"], ["ar-KW", "العربية", "الكويت"], ["ar-EG", "العربية", "مصر"]],
    continue: "Continue", skip: "Skip", next: "Next", start: "Start browsing", back: "Back",
    intro: [
      ["Tonight's best food is already made", "Kitchens near you list what's left at the end of the day as a surprise bag, at about a third of the counter price."],
      ["Reserve it in a tap", "Pay in the app. Your code appears straight away, and the bag is yours inside the pickup window."],
      ["Collect it, untie it at home", "Show the code at the counter. Every bag you rescue is logged — meals, money and CO₂e."]],
    signin: "Sign in", signinBody: "We'll email you an 8-digit code. No password.", email: "Email", emailPh: "you@example.com",
    sendCode: "Send code", codeTitle: "Check your inbox", codeBody: e => `We sent an 8-digit code to ${e}.`, codeLabel: "8-digit code",
    resend: "Resend code", resendIn: s => `Resend in ${s}s`, wrongCode: "That code isn't right — check the newest email.", verify: "Verify",
    terms: "By continuing you agree to the Terms and the Privacy policy.",
    profileTitle: "Almost there", profileBody: "Your name is what the counter calls out. Your city decides what you see.",
    firstName: "First name", lastName: "Last name (optional)", phone: "Phone (optional)", market: "Country", city: "City",
    kw: "Kuwait", eg: "Egypt", save: "Save", cityWait: "Not open yet", waitTitle: c => `${c} isn't open yet`,
    waitBody: "We're signing kitchens there now. Leave your email on the list and we'll tell you the night it opens.",
    waitCta: "Put me on the list", waitDone: "You're on the list", pickAnother: "Choose another city",
    dietaryTitle: "Anything we should know?", dietaryBody: "Kitchens see this on the order. It filters nothing — a surprise bag is a surprise.",
    flags: [["vegetarian", "Vegetarian"], ["vegan", "Vegan"], ["halal_only", "Halal only"], ["no_nuts", "No nuts"], ["no_dairy", "No dairy"], ["gluten_free", "Gluten-free"]],
    allergenAck: "I understand contents vary and allergen notes come from the kitchen, not Bugsha.", later: "Not now",
    /* payment */
    payWith: "Pay with", knet: "KNET", applepay: "Apple Pay", card: "Card", wallet: "Mobile wallet", instapay: "InstaPay", fawry: "Fawry", cash: "Cash at counter",
    hints: { knet: "Opens your bank page", applepay: "Face ID", card: "Visa · Mastercard", wallet: "Vodafone Cash · Orange", instapay: "Instant bank transfer", fawry: "Pay at any Fawry point within 20 min", cash: "Pay when you collect · 1 bag per order" },
    useCredit: "Use wallet credit", creditLeft: b => `${b} available`, promo: "Promo code", apply: "Apply", promoOk: c => `${c} applied`, promoBad: "That code isn't valid tonight",
    subtotal: "Subtotal", fee: "Service fee", discount: "Discount", vat: "VAT", total: "Total", pay: "Reserve", payCash: "Reserve · pay at counter",
    holding: "Holding your bag", holdBody: m => `Finish paying within ${m} — then it's yours.`, opening: k => `Opening ${k}…`, paid: "I've paid", holdCancel: "Release the bag",
    fawryRef: "Fawry reference", fawryBody: "Show this at any Fawry point. The bag is released if it isn't paid in 20 minutes.",
    /* order states */
    st: { held: "Payment pending", reserved: "Reserved", redeemed: "Collected", no_show: "Not collected", cancelled_consumer: "Cancelled", cancelled_partner: "Cancelled by the kitchen", refunded: "Refunded" },
    noShowTitle: "The window closed", noShowBody: "Your bag wasn't collected. Bags that aren't collected aren't refunded — the kitchen packed it for you.",
    noShowWarn: n => `${n} missed pickup${n === 1 ? "" : "s"} in 90 days. After 3, reservations pause for a while.`,
    partnerCancelTitle: s => `${s} had to cancel`, partnerCancelBody: "Full refund on the way, nothing for you to do. We added KD 0.500 credit to your wallet for the trouble.",
    refundTitle: "Refunded", refundTo: { knet: "Refunded to KNET — it lands within 3 working days.", card: "Refunded to your card — 5 to 7 working days.", applepay: "Refunded to your card — 5 to 7 working days.", wallet: "Refunded to your mobile wallet — within 24 hours.", instapay: "Refunded by InstaPay — within 24 hours.", fawry: "Refunded to your Bugsha wallet — instant.", cash: "Nothing was charged.", wallet_credit: "Returned to your Bugsha wallet — instant." },
    cancelCutoff: h => `Free cancellation until ${h} before the window`, cancelDest: "Refund to", cancelSource: "Original payment", cancelWallet: "Bugsha wallet (instant)",
    receipt: "Receipt", orderCode: "Order", qr: "Or let staff scan", showQr: "Show QR", showCode: "Show code", lateGrace: "Late by a few minutes? Staff can still hand it over for 15 minutes after close.",
    report: "Report a problem", reportBody: "Tell us what went wrong. We answer within 24 hours, faster for food safety.",
    cats: [["quality", "Quality"], ["missing", "Missing items"], ["illness", "Felt unwell"], ["closed", "Store was closed"], ["staff", "Staff"], ["other", "Other"]],
    statement: "What happened?", statementPh: "As much detail as you can — time, what was in the bag…", photos: "Add photos", illness: "When did symptoms start?", send: "Send report",
    caseOpen: r => `Case ${r} opened`, caseBody: "We'll reply here and by email. Food-safety reports are read within 2 hours.",
    /* wallet + saved + store */
    walletTitle: "Wallet", balance: "Balance", expires: d => `expires ${d}`, txn: "Activity", noTxn: "Nothing here yet", noTxnBody: "Refunds and credits land here and apply to your next bag.",
    saved: "Saved kitchens", savedBody: "Get a ping the moment they list.", notifyMe: "Notify me", noSaved: "No saved kitchens", noSavedBody: "Tap the heart on any kitchen to follow it.",
    tonightAt: "Tonight", pickupAt: "Pickup point", hours: "Hours", reviews: "Reviews", closedNow: "Closed tonight", follow: "Follow", following: "Following",
    /* account */
    profile: "Profile", dietary: "Dietary preferences", notifs: "Notifications", quiet: "Quiet hours", quietBody: "Nothing except your pickup reminders between these times.",
    channels: "Channels", push: "Push", emailCh: "Email", sms: "SMS",
    ncat: [["order", "Order updates", "Confirmations, reminders, cancellations"], ["saved", "Saved kitchens", "When a kitchen you follow lists"], ["deals", "Tonight near you", "One evening ping, only when there's something close"], ["campaign", "Seasonal", "Ramadan hours and the like"]],
    signOut: "Sign out", deleteAcc: "Delete account", deleteTitle: "Delete your account?", deleteBody: d => `Your data is removed after ${d} days. Active reservations are cancelled and refunded. Sign in again before then to undo.`,
    deleteConfirm: "Delete", deleteQueued: d => `Deletion scheduled · ${d} days`, restricted: "Reservations paused",
    restrictedBody: (d, r) => `Because of ${r}, you can browse but not reserve until ${d}. Reply to the email if that's wrong.`,
    reasons: { repeat_no_show: "repeated missed pickups", suspected_abuse: "unusual activity" },
    since: d => `With Bugsha since ${d}`, savedMoney: "kept", bags: "bags rescued", kg: "kg kept out of the bin", kitchens: "kitchens",
    loading: "Finding tonight's bags…",
  },
  ar: {
    pickLang: "اختر لغتك", pickLangBody: "تقدر تغيّرها أي وقت من حسابي.",
    langs: [["en", "English", "Kuwait · Egypt"], ["ar-KW", "العربية", "الكويت"], ["ar-EG", "العربية", "مصر"]],
    continue: "كمّل", skip: "بعدين", next: "التالي", start: "ابدأ التصفح", back: "رجوع",
    intro: [
      ["أحسن أكل الليلة جاهز من الحين", "المطابخ القريبة منك تنشر اللي باقي عندها بآخر اليوم كبقشة مفاجأة، بحدود ثلث سعر الكاونتر."],
      ["احجزها بضغطة", "ادفع بالتطبيق. رمزك يطلع على طول، والبقشة لك داخل وقت الاستلام."],
      ["استلمها وفكّها بالبيت", "ورّيهم الرمز عند الكاونتر. كل بقشة تنقذها تنسجّل — وجبات وفلوس وCO₂e."]],
    signin: "تسجيل الدخول", signinBody: "بنرسل لك رمز من 8 أرقام على إيميلك. بدون كلمة سر.", email: "الإيميل", emailPh: "you@example.com",
    sendCode: "أرسل الرمز", codeTitle: "شيّك إيميلك", codeBody: e => `أرسلنا رمز من 8 أرقام إلى ${e}.`, codeLabel: "الرمز (8 أرقام)",
    resend: "أعد الإرسال", resendIn: s => `أعد الإرسال بعد ${s} ث`, wrongCode: "الرمز مو صحيح — شيّك آخر إيميل.", verify: "تأكيد",
    terms: "بالمتابعة توافق على الشروط وسياسة الخصوصية.",
    profileTitle: "باقي شوي", profileBody: "اسمك هو اللي ينادون عليه عند الكاونتر. ومدينتك تحدد شنو تشوف.",
    firstName: "الاسم الأول", lastName: "اسم العائلة (اختياري)", phone: "الهاتف (اختياري)", market: "الدولة", city: "المدينة",
    kw: "الكويت", eg: "مصر", save: "احفظ", cityWait: "مو مفتوحة بعد", waitTitle: c => `${c} مو مفتوحة بعد`,
    waitBody: "قاعدين نوقّع مع المطابخ هناك الحين. خلّ إيميلك بالقائمة وبنخبرك ليلة الافتتاح.",
    waitCta: "حطني بالقائمة", waitDone: "إنت بالقائمة", pickAnother: "اختر مدينة ثانية",
    dietaryTitle: "شي لازم نعرفه؟", dietaryBody: "المطبخ يشوفها على الطلب. ما تفلتر شي — البقشة مفاجأة.",
    flags: [["vegetarian", "نباتي"], ["vegan", "نباتي صرف"], ["halal_only", "حلال بس"], ["no_nuts", "بدون مكسرات"], ["no_dairy", "بدون حليب"], ["gluten_free", "خالي من الجلوتين"]],
    allergenAck: "أفهم إن المحتويات تتغير، وملاحظات الحساسية من المطبخ مو من بقشة.", later: "مو الحين",
    payWith: "ادفع بـ", knet: "كي-نت", applepay: "Apple Pay", card: "بطاقة", wallet: "محفظة موبايل", instapay: "إنستاباي", fawry: "فوري", cash: "كاش عند الكاونتر",
    hints: { knet: "يفتح صفحة بنكك", applepay: "بصمة الوجه", card: "فيزا · ماستركارد", wallet: "فودافون كاش · أورنج", instapay: "تحويل بنكي فوري", fawry: "ادفع بأي نقطة فوري خلال 20 دقيقة", cash: "ادفع وقت الاستلام · بقشة وحدة بالطلب" },
    useCredit: "استخدم رصيد المحفظة", creditLeft: b => `${b} متوفر`, promo: "كود خصم", apply: "طبّق", promoOk: c => `انطبّق ${c}`, promoBad: "الكود مو شغّال الليلة",
    subtotal: "المجموع", fee: "رسوم الخدمة", discount: "الخصم", vat: "الضريبة", total: "الإجمالي", pay: "احجز", payCash: "احجز · ادفع عند الكاونتر",
    holding: "حاجزين لك البقشة", holdBody: m => `كمّل الدفع خلال ${m} — وبعدها لك.`, opening: k => `نفتح ${k}…`, paid: "دفعت", holdCancel: "فكّ الحجز",
    fawryRef: "رقم فوري", fawryBody: "ورّيه بأي نقطة فوري. البقشة تنفك إذا ما اندفعت خلال 20 دقيقة.",
    st: { held: "بانتظار الدفع", reserved: "محجوزة", redeemed: "استلمتها", no_show: "ما استلمتها", cancelled_consumer: "ملغية", cancelled_partner: "المطبخ ألغى", refunded: "رجع المبلغ" },
    noShowTitle: "خلص الوقت", noShowBody: "ما استلمت بقشتك. البقش اللي ما تنستلم ما يرجع مبلغها — المطبخ عبّاها لك.",
    noShowWarn: n => `${n} استلام فايت خلال 90 يوم. بعد 3، يتوقف الحجز فترة.`,
    partnerCancelTitle: s => `${s} اضطر يلغي`, partnerCancelBody: "المبلغ كامل راجع لك، ما عليك شي. وحطينا لك 0.500 د.ك رصيد بالمحفظة عشان الإزعاج.",
    refundTitle: "رجع المبلغ", refundTo: { knet: "رجعناها على كي-نت — توصلك خلال 3 أيام عمل.", card: "رجعناها على بطاقتك — 5 إلى 7 أيام عمل.", applepay: "رجعناها على بطاقتك — 5 إلى 7 أيام عمل.", wallet: "رجعناها على محفظة موبايلك — خلال 24 ساعة.", instapay: "رجعناها بإنستاباي — خلال 24 ساعة.", fawry: "رجعناها على محفظة بقشة — فوري.", cash: "ما انخصم شي.", wallet_credit: "رجعت لمحفظة بقشة — فوري." },
    cancelCutoff: h => `إلغاء مجاني حتى ${h} قبل وقت الاستلام`, cancelDest: "يرجع المبلغ إلى", cancelSource: "نفس طريقة الدفع", cancelWallet: "محفظة بقشة (فوري)",
    receipt: "الفاتورة", orderCode: "الطلب", qr: "أو خلّ الموظف يمسح", showQr: "ورّي QR", showCode: "ورّي الرمز", lateGrace: "تأخرت دقايق؟ الموظف يقدر يسلّمك لين 15 دقيقة بعد القفل.",
    report: "بلّغ عن مشكلة", reportBody: "قول لنا شنو صار. نرد خلال 24 ساعة، وأسرع لو الموضوع سلامة أكل.",
    cats: [["quality", "الجودة"], ["missing", "شي ناقص"], ["illness", "تعبت بعدها"], ["closed", "المحل مسكّر"], ["staff", "الموظفين"], ["other", "غير"]],
    statement: "شنو صار؟", statementPh: "بأكبر قدر من التفاصيل — الوقت، شنو كان بالبقشة…", photos: "أضف صور", illness: "متى بدت الأعراض؟", send: "أرسل البلاغ",
    caseOpen: r => `انفتحت الحالة ${r}`, caseBody: "بنرد عليك هني وبالإيميل. بلاغات سلامة الأكل تنقرا خلال ساعتين.",
    walletTitle: "المحفظة", balance: "الرصيد", expires: d => `ينتهي ${d}`, txn: "الحركات", noTxn: "ما فيه شي بعد", noTxnBody: "المبالغ الراجعة والرصيد تنزل هني وتنطبّق على بقشتك الجاية.",
    saved: "مطابخ محفوظة", savedBody: "نبّهك أول ما ينشرون.", notifyMe: "نبّهني", noSaved: "ما عندك مطابخ محفوظة", noSavedBody: "اضغط القلب على أي مطبخ عشان تتابعه.",
    tonightAt: "الليلة", pickupAt: "مكان الاستلام", hours: "الدوام", reviews: "التقييمات", closedNow: "مسكّر الليلة", follow: "تابع", following: "متابَع",
    profile: "الملف", dietary: "تفضيلات الأكل", notifs: "الإشعارات", quiet: "ساعات الهدوء", quietBody: "ما يوصلك شي غير تذكير الاستلام بين هالأوقات.",
    channels: "القنوات", push: "إشعار", emailCh: "إيميل", sms: "رسالة",
    ncat: [["order", "تحديثات الطلب", "التأكيد والتذكير والإلغاء"], ["saved", "المطابخ المحفوظة", "لما مطبخ تتابعه ينشر"], ["deals", "الليلة قريب منك", "تنبيه واحد بالمساء، بس لو فيه شي قريب"], ["campaign", "موسمي", "أوقات رمضان وشبهها"]],
    signOut: "تسجيل الخروج", deleteAcc: "احذف الحساب", deleteTitle: "تحذف حسابك؟", deleteBody: d => `بياناتك تنشال بعد ${d} يوم. الحجوزات النشطة تنلغي ويرجع مبلغها. سجّل دخول قبلها عشان تتراجع.`,
    deleteConfirm: "احذف", deleteQueued: d => `الحذف مجدول · ${d} يوم`, restricted: "الحجز موقوف",
    restrictedBody: (d, r) => `بسبب ${r}، تقدر تتصفح بس ما تقدر تحجز لين ${d}. رد على الإيميل لو هذا غلط.`,
    reasons: { repeat_no_show: "تكرار فوات الاستلام", suspected_abuse: "نشاط غير معتاد" },
    since: d => `مع بقشة من ${d}`, savedMoney: "وفّرتها", bags: "بقشة انقذتها", kg: "كجم ما راحت للزبالة", kitchens: "مطبخ",
    loading: "ندوّر على بقش الليلة…",
  },
};

/* ---------- market fixtures: mirrors public.market_config + public.city ---------- */
const MARKETS = {
  KW: { currency: "KD", exp: 3, methods: ["knet", "applepay", "card"], cash: false, holdMin: 10, cutoffH: 2, vatBp: 0, feeMinor: 0, deletionDays: 30,
    cities: [["al-asimah", "Al Asimah", "العاصمة", "live"], ["hawalli", "Hawalli", "حولي", "live"], ["farwaniya", "Farwaniya", "الفروانية", "live"], ["ahmadi", "Ahmadi", "الأحمدي", "live"], ["jahra", "Jahra", "الجهراء", "live"], ["mubarak", "Mubarak Al-Kabeer", "مبارك الكبير", "live"]], scale: 1 },
  EG: { currency: "EGP", exp: 2, methods: ["card", "wallet", "instapay", "fawry", "cash"], cash: true, holdMin: 10, cutoffH: 2, vatBp: 1400, feeMinor: 0, deletionDays: 30,
    cities: [["cairo", "Cairo", "القاهرة", "live"], ["giza", "Giza", "الجيزة", "live"], ["alex", "Alexandria", "الإسكندرية", "live"], ["qalyubia", "Qalyubia", "القليوبية", "waitlist"], ["dakahlia", "Dakahlia", "الدقهلية", "waitlist"], ["port-said", "Port Said", "بورسعيد", "waitlist"]], scale: 15 },
};
const money = (mk, n) => `${MARKETS[mk].currency} ${(Number(n) * MARKETS[mk].scale).toFixed(MARKETS[mk].exp)}`;
const WALLET = [{ id: "w1", kind: "refund", amt: 2.0, date: "2 Aug", dateAr: "2 أغسطس", exp: "2 Nov", expAr: "2 نوفمبر", en: "Refund · Kuwait Bakehouse", ar: "مبلغ راجع · مخبز الكويت" },
  { id: "w2", kind: "goodwill", amt: 0.5, date: "29 Jul", dateAr: "29 يوليو", exp: "29 Oct", expAr: "29 أكتوبر", en: "Credit · sorry for the cancellation", ar: "رصيد · اعتذار عن الإلغاء" }];

const Num = ({ children, ...r }) => <span className="ds-numeric" dir="ltr" {...r}>{children}</span>;
const H = ({ children, size = "var(--text-title-lg-size)", ...r }) => <h2 style={{ fontSize: size, fontWeight: 600, letterSpacing: "-0.02em", margin: 0, lineHeight: 1.2 }} {...r}>{children}</h2>;
const P = ({ children, ...r }) => <p style={{ margin: 0, color: "var(--color-text-secondary)", lineHeight: 1.6 }} {...r}>{children}</p>;
const Page = ({ children, pad = "24px 20px 28px", ...r }) => <div style={{ padding: pad, display: "grid", gap: 18, alignContent: "start", minHeight: "100%" }} {...r}>{children}</div>;
const Top = ({ onBack, title, right }) => <div style={{ display: "flex", alignItems: "center", gap: 8, minHeight: 40 }}>
  {onBack ? <IconButton icon="chevron-left" label="Back" mirror onClick={onBack} /> : <span style={{ width: 8 }} />}
  <strong style={{ flex: 1, fontSize: "var(--text-headline-size)", fontWeight: 600 }}>{title}</strong>{right}</div>;
const Select = ({ value, onChange, options, label }) => <label style={{ display: "grid", gap: 6 }}>
  <span style={{ fontSize: "var(--text-label-size)", fontWeight: 500, color: "var(--color-text-secondary)" }}>{label}</span>
  <select value={value} onChange={e => onChange(e.target.value)} style={{ minHeight: "var(--size-control-md)", padding: "0 12px", borderRadius: "var(--radius-control)",
    border: "1px solid var(--color-border-default)", background: "var(--color-surface-raised)", color: "var(--color-text-primary)", fontSize: "var(--text-body-size)" }}>
    {options.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select></label>;

/* ---------- S-C-001 language ---------- */
function Language({ s, locale, setLocale, onNext }) {
  return <Page pad="40px 20px 28px" style={{ gap: 22 }}>
    <Logo lang={locale.startsWith("ar") ? "ar" : "en"} size={30} color="var(--color-brand-primary)" style={{ justifySelf: "center", marginTop: 12 }} />
    <div style={{ display: "grid", gap: 6, textAlign: "center" }}><H>{s.pickLang}</H><P>{s.pickLangBody}</P></div>
    <div style={{ display: "grid", gap: 8 }}>
      {s.langs.map(([k, l, sub]) => <button key={k} onClick={() => setLocale(k)} aria-pressed={locale === k} dir={k.startsWith("ar") ? "rtl" : "ltr"}
        style={{ display: "flex", alignItems: "center", gap: 12, minHeight: 60, padding: "0 16px", textAlign: "start", cursor: "pointer", borderRadius: "var(--radius-card)",
          background: "var(--color-surface-raised)", border: `1.5px solid ${locale === k ? "var(--color-border-focus)" : "var(--color-border-default)"}`,
          fontFamily: k.startsWith("ar") ? "var(--font-arabic-body)" : "inherit" }}>
        <span style={{ flex: 1, display: "grid" }}><strong style={{ fontSize: "var(--text-headline-size)", fontWeight: 600 }}>{l}</strong>
          <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{sub}</span></span>
        {locale === k ? <Icon name="check" size={20} style={{ color: "var(--color-brand-primary)" }} /> : null}</button>)}
    </div>
    <Button size="lg" fullWidth onClick={onNext} style={{ marginTop: "auto" }}>{s.continue}</Button>
  </Page>;
}

/* ---------- S-C-002 intro ---------- */
function Intro({ s, onDone }) {
  const [i, setI] = React.useState(0);
  const last = i === s.intro.length - 1;
  const art = ["../../assets/site/bugsha-pickup-scene.webp", "../../assets/site/bugsha-real-cookie.webp", "../../assets/site/bugsha-shared-meal.webp"][i];
  return <div style={{ display: "grid", gridTemplateRows: "auto 1fr auto", minHeight: "100%" }}>
    <div style={{ display: "flex", justifyContent: "flex-end", padding: "12px 12px 0" }}><Button variant="ghost" size="sm" onClick={onDone}>{s.skip}</Button></div>
    <div style={{ padding: "8px 20px", display: "grid", gap: 18, alignContent: "center" }}>
      <div style={{ height: 250, borderRadius: "var(--radius-card)", overflow: "hidden", background: "var(--color-brand-tint)" }}>
        <img src={art} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div>
      <H>{s.intro[i][0]}</H><P>{s.intro[i][1]}</P>
      <div style={{ display: "flex", gap: 6 }}>{s.intro.map((_, k) => <span key={k} style={{ width: k === i ? 22 : 8, height: 8, borderRadius: 4, background: k === i ? "var(--color-brand-primary)" : "var(--color-border-default)", transition: "width var(--motion-duration-fast)" }} />)}</div>
    </div>
    <div style={{ padding: "0 20px 28px" }}><Button size="lg" fullWidth onClick={() => last ? onDone() : setI(i + 1)}>{last ? s.start : s.next}</Button></div>
  </div>;
}

/* ---------- S-C-003 / 004 sign in + code (Supabase email OTP, 8 digits) ---------- */
function SignIn({ s, onCode }) {
  const [email, setEmail] = React.useState("");
  const ok = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email.trim());
  return <Page pad="28px 20px 28px">
    <Logo lang="en" size={22} color="var(--color-brand-primary)" />
    <div style={{ display: "grid", gap: 6, marginTop: 8 }}><H>{s.signin}</H><P>{s.signinBody}</P></div>
    <Input label={s.email} icon="mail" placeholder={s.emailPh} value={email} onChange={e => setEmail(e.target.value)} />
    <Button size="lg" fullWidth disabled={!ok} onClick={() => onCode(email.trim().toLowerCase())}>{s.sendCode}</Button>
    <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-tertiary)", textAlign: "center", marginTop: "auto" }}>{s.terms}</span>
  </Page>;
}
function Code({ s, email, onBack, onVerified }) {
  const [digits, setDigits] = React.useState("");
  const [err, setErr] = React.useState(false);
  const [left, setLeft] = React.useState(30);
  React.useEffect(() => { if (left <= 0) return; const id = setTimeout(() => setLeft(left - 1), 1000); return () => clearTimeout(id); }, [left]);
  const submit = () => { if (digits === "00000000") { setErr(true); return; } onVerified(); };
  return <Page pad="16px 20px 28px">
    <Top onBack={onBack} title="" />
    <div style={{ display: "grid", gap: 6 }}><H>{s.codeTitle}</H><P>{s.codeBody(email)}</P></div>
    <label style={{ display: "grid", gap: 8 }}>
      <span style={{ fontSize: "var(--text-label-size)", fontWeight: 500, color: "var(--color-text-secondary)" }}>{s.codeLabel}</span>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 5 }} dir="ltr">
        {Array.from({ length: 8 }, (_, i) => <span key={i} className="ds-numeric" style={{ height: 48, display: "grid", placeItems: "center", fontSize: 20, fontWeight: 600,
          borderRadius: "var(--radius-control)", background: "var(--color-surface-raised)", border: `1.5px solid ${err ? "var(--color-error)" : i === digits.length ? "var(--color-border-focus)" : "var(--color-border-default)"}` }}>{digits[i] || ""}</span>)}</div>
      <input inputMode="numeric" autoFocus value={digits} maxLength={8} onChange={e => { setErr(false); setDigits(e.target.value.replace(/\D/g, "").slice(0, 8)); }}
        aria-label={s.codeLabel} style={{ position: "absolute", opacity: 0, width: 1, height: 1 }} />
      {err ? <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-error)" }}>{s.wrongCode}</span> : null}
    </label>
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>{["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map(d => <Button key={d} variant="secondary" size="sm" onClick={() => { setErr(false); setDigits(x => (x + d).slice(0, 8)); }}><Num>{d}</Num></Button>)}
      <Button variant="ghost" size="sm" onClick={() => setDigits(x => x.slice(0, -1))}>⌫</Button></div>
    <Button size="lg" fullWidth disabled={digits.length < 8} onClick={submit}>{s.verify}</Button>
    <Button variant="ghost" disabled={left > 0} onClick={() => setLeft(30)}>{left > 0 ? s.resendIn(left) : s.resend}</Button>
  </Page>;
}

/* ---------- S-C-006 complete profile (app.complete_profile) → S-C-005 city waitlist ---------- */
function Profile({ s, ar, market, setMarket, profile, setProfile, onDone, onWaitlist }) {
  const m = MARKETS[market];
  const city = m.cities.find(c => c[0] === profile.city) || m.cities[0];
  return <Page pad="28px 20px 28px">
    <div style={{ display: "grid", gap: 6 }}><H>{s.profileTitle}</H><P>{s.profileBody}</P></div>
    <Input label={s.firstName} value={profile.first} onChange={e => setProfile({ ...profile, first: e.target.value })} />
    <Input label={s.lastName} value={profile.last} onChange={e => setProfile({ ...profile, last: e.target.value })} />
    <div style={{ display: "grid", gap: 6 }}><span style={{ fontSize: "var(--text-label-size)", fontWeight: 500, color: "var(--color-text-secondary)" }}>{s.market}</span>
      <SegmentedControl fullWidth value={market} onChange={v => { setMarket(v); setProfile({ ...profile, city: MARKETS[v].cities[0][0] }); }} options={[{ value: "KW", label: s.kw }, { value: "EG", label: s.eg }]} /></div>
    <Select label={s.city} value={city[0]} onChange={v => setProfile({ ...profile, city: v })} options={m.cities.map(c => [c[0], (ar ? c[2] : c[1]) + (c[3] !== "live" ? ` · ${s.cityWait}` : "")])} />
    <Input label={s.phone} icon="phone" placeholder={market === "KW" ? "+965 5xxx xxxx" : "+20 1xx xxx xxxx"} value={profile.phone} onChange={e => setProfile({ ...profile, phone: e.target.value })} />
    <Button size="lg" fullWidth disabled={!profile.first.trim()} onClick={() => city[3] === "live" ? onDone() : onWaitlist(city)}>{s.continue}</Button>
  </Page>;
}
function CityWait({ s, ar, city, onBack, onList }) {
  const [done, setDone] = React.useState(false);
  return <Page pad="16px 20px 28px">
    <Top onBack={onBack} title="" />
    <EmptyState icon="map-pin" title={s.waitTitle(ar ? city[2] : city[1])} body={s.waitBody} />
    {done ? <Banner tone="fresh" title={s.waitDone} /> : <Button size="lg" fullWidth onClick={() => { setDone(true); onList && onList(); }}>{s.waitCta}</Button>}
    <Button variant="secondary" fullWidth onClick={onBack}>{s.pickAnother}</Button>
  </Page>;
}

/* ---------- S-C-007 dietary (app.set_dietary) ---------- */
function Dietary({ s, flags, setFlags, ack, setAck, onDone, embedded }) {
  const toggle = k => setFlags(flags.includes(k) ? flags.filter(x => x !== k) : [...flags, k]);
  return <Page pad={embedded ? "0" : "28px 20px 28px"}>
    {!embedded ? <div style={{ display: "grid", gap: 6 }}><H>{s.dietaryTitle}</H><P>{s.dietaryBody}</P></div> : null}
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>{s.flags.map(([k, l]) => <Chip key={k} selected={flags.includes(k)} onClick={() => toggle(k)}>{l}</Chip>)}</div>
    <label style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "var(--text-label-size)", lineHeight: 1.6, color: "var(--color-text-secondary)" }}>
      <input type="checkbox" checked={ack} onChange={e => setAck(e.target.checked)} style={{ width: 20, height: 20, marginTop: 2, accentColor: "var(--color-surface-brand)" }} />{s.allergenAck}</label>
    {!embedded ? <div style={{ display: "grid", gap: 8, marginTop: "auto" }}><Button size="lg" fullWidth onClick={onDone}>{s.save}</Button><Button variant="ghost" onClick={onDone}>{s.later}</Button></div> : null}
  </Page>;
}

/* ---------- payment block (market_config.payment_methods, wallet_credit, apply_promotion) ---------- */
const METHOD_ICON = { knet: "credit-card", applepay: "smartphone", card: "credit-card", wallet: "smartphone", instapay: "zap", fawry: "store", cash: "banknote" };
function MethodRow({ s, k, selected, onSelect }) {
  return <button onClick={onSelect} aria-pressed={selected} style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, minHeight: 52, padding: 12, cursor: "pointer", textAlign: "start",
    background: "var(--color-surface-raised)", borderRadius: "var(--radius-control)", border: `1.5px solid ${selected ? "var(--color-border-focus)" : "var(--color-border-default)"}` }}>
    <Icon name={METHOD_ICON[k]} size={20} /><span style={{ flex: 1, display: "grid" }}><strong style={{ fontSize: "var(--text-body-size)" }}>{s[k]}</strong>
      <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{s.hints[k]}</span></span>
    {selected ? <Icon name="check" size={18} style={{ color: "var(--color-brand-primary)" }} /> : null}</button>;
}
function PaymentBlock({ s, market, method, setMethod, qty, unit, walletBal, useCredit, setUseCredit, promo, setPromo, restricted }) {
  const m = MARKETS[market];
  const [code, setCode] = React.useState(""); const [promoState, setPromoState] = React.useState(null);
  const subtotal = unit * qty, discount = promo ? Math.min(subtotal, promo.value) : 0, vat = m.vatBp ? (subtotal - discount) * m.vatBp / 10000 : 0;
  const credit = useCredit ? Math.min(walletBal, subtotal - discount + vat) : 0;
  const total = Math.max(0, subtotal - discount + vat - credit);
  const row = (l, v, strong) => <div style={{ display: "flex", justifyContent: "space-between", fontSize: strong ? "var(--text-label-size)" : "var(--text-caption-size)", fontWeight: strong ? 600 : 400, color: strong ? "var(--color-text-primary)" : "var(--color-text-secondary)" }}><span>{l}</span><Num>{v}</Num></div>;
  return <div style={{ display: "grid", gap: 12 }}>
    <strong style={{ fontSize: "var(--text-label-size)", fontWeight: 600 }}>{s.payWith}</strong>
    {m.methods.filter(k => k !== "cash" || qty === 1).map(k => <MethodRow key={k} s={s} k={k} selected={method === k} onSelect={() => setMethod(k)} />)}
    {walletBal > 0 ? <ListRow icon="wallet" label={s.useCredit} value={<Switch checked={useCredit} onChange={setUseCredit} label={s.useCredit} />} style={{ border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-control)" }} /> : null}
    {walletBal > 0 ? <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)", marginTop: -8 }}>{s.creditLeft(money(market, walletBal))}</span> : null}
    <div style={{ display: "flex", gap: 8, alignItems: "end" }}>
      <Input label={s.promo} value={code} onChange={e => { setCode(e.target.value.toUpperCase()); setPromoState(null); }} error={promoState === "bad" ? s.promoBad : undefined} hint={promo ? s.promoOk(promo.code) : undefined} style={{ flex: 1 }} />
      <Button variant="secondary" onClick={() => { if (code === "FIRSTBAG") { setPromo({ code, value: 0.5 }); setPromoState("ok"); } else setPromoState("bad"); }} style={{ marginBottom: promoState || promo ? 22 : 0 }}>{s.apply}</Button></div>
    <div style={{ display: "grid", gap: 6, padding: "12px 0", borderTop: "1px solid var(--color-border-subtle)" }}>
      {row(s.subtotal, money(market, subtotal))}
      {discount ? row(s.discount, "−" + money(market, discount)) : null}
      {vat ? row(`${s.vat} 14%`, money(market, vat)) : null}
      {credit ? row(s.useCredit, "−" + money(market, credit)) : null}
      {row(s.total, money(market, total), true)}</div>
    {restricted ? <Banner tone="error" title={s.restricted}>{s.restrictedBody("14 Sep", s.reasons.repeat_no_show)}</Banner> : null}
  </div>;
}

/* ---------- S-C-020 order: every public.order_status ---------- */
function OrderState({ s, ar, market, order, go, onRedeem, onRate, rated, told, onTell, onPaid, onRelease, showQr, setShowQr }) {
  const b = order.bag, st = order.state;
  const window = `${b.from}–${b.to}`;
  const holdSecs = order.holdSecs;
  const head = <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <IconButton icon="chevron-left" label="Back" mirror onClick={() => go({ screen: "browse", tab: "orders" })} />
    <strong style={{ fontSize: "var(--text-headline-size)", fontWeight: 600 }}>{s.st[st]}</strong>
    <IconButton icon="receipt" label={s.receipt} onClick={() => go({ screen: "receipt" })} /></div>;
  const where = <Card padded style={{ display: "grid", gap: 8 }}>
    <PickupWindow day={ar ? "الليلة" : "Tonight"} from={b.from} to={b.to} size="lg" />
    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "var(--text-label-size)", color: "var(--color-text-secondary)" }}>
      <Icon name="navigation" size={15} /><Num>{b.km} km</Num> · {ar ? "قطعة 10، السالمية" : "Block 10, Salmiya"}
      <Button variant="secondary" size="sm" style={{ marginInlineStart: "auto" }}>{ar ? "الاتجاهات" : "Directions"}</Button></div></Card>;

  if (st === "held") return <Page pad="16px 16px 24px">{head}
    <Card padded style={{ display: "grid", gap: 10, justifyItems: "center", textAlign: "center" }}>
      <Icon name="timer" size={28} style={{ color: "var(--color-time)" }} />
      <strong style={{ fontSize: "var(--text-headline-size)" }}>{s.holding}</strong>
      <Num style={{ fontSize: "var(--text-numeric-xl-size)", fontWeight: 700, color: "var(--color-time)" }}>{String(Math.floor(holdSecs / 60)).padStart(2, "0")}:{String(holdSecs % 60).padStart(2, "0")}</Num>
      <P>{s.holdBody(`${MARKETS[market].holdMin} min`)}</P></Card>
    {order.method === "fawry" ? <Card padded style={{ display: "grid", gap: 6 }}><span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{s.fawryRef}</span>
      <Num style={{ fontSize: "var(--text-title-lg-size)", fontWeight: 700, letterSpacing: ".08em" }}>9 3 4 1 2 0 5 7 7</Num><P style={{ fontSize: "var(--text-caption-size)" }}>{s.fawryBody}</P></Card>
      : order.method === "cash" ? <Banner tone="info" title={s.cash}>{s.hints.cash}</Banner>
      : <Banner tone="time" title={s.opening(s[order.method])}>{ar ? "بترجع لهني على طول." : "You'll return here automatically."}</Banner>}
    {where}
    <Button size="lg" fullWidth onClick={onPaid}>{order.method === "cash" ? s.pay : s.paid}</Button>
    <Button variant="ghost" onClick={onRelease}>{s.holdCancel}</Button></Page>;

  if (st === "reserved") return <Page pad="16px 16px 24px">{head}
    <p style={{ margin: 0, textAlign: "center", color: "var(--color-text-secondary)" }}>{ar ? "وريهم هالرمز عند الكاونتر" : "Show this at the counter"}</p>
    {showQr ? <Card padded style={{ display: "grid", gap: 10, justifyItems: "center" }}>
      <svg width="168" height="168" viewBox="0 0 21 21" shapeRendering="crispEdges" aria-label={order.code}>{QR.map((r, y) => r.split("").map((c, x) => c === "1" ? <rect key={x + "-" + y} x={x} y={y} width="1" height="1" fill="var(--color-text-primary)" /> : null))}</svg>
      <Num style={{ fontWeight: 600, letterSpacing: ".1em" }}>{order.code}</Num>
      <Button variant="ghost" size="sm" onClick={() => setShowQr(false)}>{s.showCode}</Button></Card>
      : <RedemptionCode code={order.code} partner={ar ? b.pa : b.p} window={window} quantity={order.qty} state="ready" onRedeem={onRedeem}
        bagLabel={ar ? "بقشة" : undefined} slideLabel={ar ? "اسحب لما الموظف يكون جاهز" : undefined} />}
    {!showQr ? <Button variant="secondary" size="sm" iconStart="qr-code" onClick={() => setShowQr(true)} style={{ justifySelf: "center" }}>{s.showQr}</Button> : null}
    <CountdownPill minutesLeft={26} state="reserved" format={window_fmt(ar)} style={{ justifySelf: "center" }} />
    {where}
    <Banner tone={told ? "fresh" : "time"} title={told ? (ar ? "خبّرناهم إنك في الطريق." : "They know you're on the way.") : (ar ? "متأخر؟" : "Running late?")}
      action={told ? undefined : <Button size="sm" variant="secondary" onClick={onTell}>{ar ? "خبّر الشريك" : "Tell the partner"}</Button>}>{told ? undefined : s.lateGrace}</Banner>
    <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-tertiary)", textAlign: "center" }}>{s.cancelCutoff(`${MARKETS[market].cutoffH} h`)}</span>
    <Button variant="ghost" onClick={() => go({ dialog: "cancel" })}>{ar ? "ألغِ البقشة" : "Cancel bundle"}</Button></Page>;

  if (st === "redeemed") return <Page pad="16px 16px 24px">{head}
    <RedemptionCode code={order.code} partner={ar ? b.pa : b.p} window={window} quantity={order.qty} state="redeemed" bagLabel={ar ? "بقشة" : undefined} doneLabel={ar ? "تم الاستلام" : undefined} />
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
      <ImpactStat icon="shopping-bag" value={12} unit={ar ? "بقشة" : "bags"} label={s.bags} />
      <ImpactStat icon="wallet" value={money(market, 41)} tone="brand" label={s.savedMoney} /></div>
    <Card padded style={{ display: "grid", gap: 10, justifyItems: "center" }}>
      <span style={{ fontSize: "var(--text-label-size)", color: "var(--color-text-secondary)" }}>{rated ? (ar ? "شكرًا — هذا يساعد اللي بعدك." : "Thanks — that helps the next person.") : (ar ? "شلون كانت البقشة؟" : "How was the bundle?")}</span>
      <RatingStars value={rated || 0} size={28} onRate={onRate} />
      {rated ? <React.Fragment>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center" }}>{(ar ? ["لِسع حارّ", "كمية زينة", "سريع", "تغليف زين"] : ["Still warm", "Generous", "Quick handover", "Well packed"]).map(t => <Chip key={t}>{t}</Chip>)}</div>
        <Input placeholder={ar ? "شي تحب المطبخ يعرفه؟ (اختياري)" : "Anything the kitchen should know? (optional)"} style={{ width: "100%" }} />
        <div style={{ display: "flex", gap: 8 }}><Button size="sm" variant="secondary" iconStart="camera">{s.photos}</Button><Button size="sm">{ar ? "أرسل" : "Send"}</Button></div></React.Fragment> : null}</Card>
    <Button variant="ghost" iconStart="flag" onClick={() => go({ screen: "problem" })}>{s.report}</Button></Page>;

  if (st === "no_show") return <Page pad="16px 16px 24px">{head}
    <EmptyState icon="clock" title={s.noShowTitle} body={s.noShowBody} />
    <Banner tone="time" title={s.noShowWarn(1)} />
    {where}
    <Button variant="secondary" fullWidth onClick={() => go({ screen: "browse", tab: "browse" })}>{ar ? "تصفح الليلة" : "Browse tonight"}</Button></Page>;

  if (st === "cancelled_partner") return <Page pad="16px 16px 24px">{head}
    <Banner tone="error" title={s.partnerCancelTitle(ar ? b.pa : b.p)}>{s.partnerCancelBody}</Banner>
    <Card padded style={{ display: "grid", gap: 6 }}><strong style={{ fontSize: "var(--text-label-size)" }}>{s.refundTitle} · <Num>{money(market, b.now * order.qty)}</Num></strong>
      <P style={{ fontSize: "var(--text-caption-size)" }}>{s.refundTo[order.method]}</P></Card>
    <Button fullWidth onClick={() => go({ screen: "wallet", tab: "me" })} iconStart="wallet">{s.walletTitle}</Button>
    <Button variant="ghost" iconStart="flag" onClick={() => go({ screen: "problem" })}>{s.report}</Button></Page>;

  return <Page pad="16px 16px 24px">{head}
    <Card padded style={{ display: "grid", gap: 6 }}><strong style={{ fontSize: "var(--text-label-size)" }}>{s.refundTitle} · <Num>{money(market, b.now * order.qty)}</Num></strong>
      <P style={{ fontSize: "var(--text-caption-size)" }}>{s.refundTo[order.refundTo === "wallet" ? "wallet_credit" : order.method]}</P></Card>
    {where}
    <Button variant="secondary" fullWidth onClick={() => go({ screen: "browse", tab: "browse" })}>{ar ? "تصفح الليلة" : "Browse tonight"}</Button></Page>;
}
const window_fmt = ar => m => ar ? `باقي ${m} د` : `${m} min left`;
const QR = ["111111101011101111111", "100000101100101000001", "101110100110101011101", "101110101001001011101", "101110100101101011101", "100000101011101000001", "111111101010101111111", "000000001101000000000",
  "110101110011011101010", "011010010101110010101", "101101110110011011100", "010010011001100100110", "111011101010111010011", "000000001101010010100", "111111100110101011010", "100000101011100100101",
  "101110101100110111100", "101110100011010001011", "101110101010111101010", "100000100101001010101", "111111101110110111011"];

/* ---------- receipt (app.order_detail) ---------- */
function Receipt({ s, ar, market, order, go }) {
  const b = order.bag, sub = b.now * order.qty, vat = MARKETS[market].vatBp ? sub * MARKETS[market].vatBp / 10000 : 0;
  const row = (l, v, strong) => <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--text-label-size)", fontWeight: strong ? 600 : 400, color: strong ? "var(--color-text-primary)" : "var(--color-text-secondary)" }}><span>{l}</span><Num>{v}</Num></div>;
  return <Page pad="16px 16px 24px"><Top onBack={() => go({ screen: "order" })} title={s.receipt} />
    <Card padded style={{ display: "grid", gap: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}><strong>{ar ? b.pa : b.p}</strong><Num style={{ color: "var(--color-text-secondary)" }}>{order.code}</Num></div>
      <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{order.qty} × {ar ? "بقشة مفاجأة" : "Surprise bundle"} · <Num>{b.from}–{b.to}</Num></span>
      <div style={{ display: "grid", gap: 6, borderTop: "1px solid var(--color-border-subtle)", paddingTop: 10 }}>
        {row(s.subtotal, money(market, sub))}{row(s.fee, money(market, 0))}{vat ? row(`${s.vat} 14%`, money(market, vat)) : null}{row(s.total, money(market, sub + vat), true)}</div>
      <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}><Icon name={METHOD_ICON[order.method]} size={15} />{s[order.method]} · <Badge tone={order.state === "refunded" ? "neutral" : "fresh"}>{s.st[order.state]}</Badge></div>
    </Card>
    <Button variant="secondary" iconStart="download">{ar ? "نزّل PDF" : "Download PDF"}</Button></Page>;
}

/* ---------- report a problem (app.open_dispute) ---------- */
function Problem({ s, ar, order, go, onOpen }) {
  const [cat, setCat] = React.useState(null); const [txt, setTxt] = React.useState(""); const [done, setDone] = React.useState(null);
  if (done) return <Page pad="16px 16px 24px"><Top onBack={() => go({ screen: "order" })} title={s.report} />
    <EmptyState icon="circle-check" title={s.caseOpen(done)} body={s.caseBody} actionLabel={ar ? "رجوع للطلب" : "Back to order"} onAction={() => go({ screen: "order" })} /></Page>;
  return <Page pad="16px 16px 24px"><Top onBack={() => go({ screen: "order" })} title={s.report} />
    <P>{s.reportBody}</P>
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>{s.cats.map(([k, l]) => <Chip key={k} selected={cat === k} onClick={() => setCat(k)}>{l}</Chip>)}</div>
    <label style={{ display: "grid", gap: 6 }}><span style={{ fontSize: "var(--text-label-size)", fontWeight: 500, color: "var(--color-text-secondary)" }}>{s.statement}</span>
      <textarea value={txt} onChange={e => setTxt(e.target.value)} placeholder={s.statementPh} rows={4} style={{ padding: 12, borderRadius: "var(--radius-control)", border: "1px solid var(--color-border-default)", background: "var(--color-surface-raised)", resize: "vertical" }} /></label>
    {cat === "illness" ? <Input label={s.illness} icon="clock" placeholder={ar ? "مثال: بعد 3 ساعات" : "e.g. 3 hours after"} /> : null}
    <Button variant="secondary" iconStart="camera">{s.photos}</Button>
    <Button size="lg" fullWidth disabled={!cat || txt.trim().length < 10} onClick={() => { const ref = "DS-" + (2400 + Math.floor(Math.random() * 90)); setDone(ref); onOpen && onOpen(ref); }}>{s.send}</Button></Page>;
}

/* ---------- wallet (app.wallet_balance, public.wallet_transaction) ---------- */
function Wallet({ s, ar, market, balance, go }) {
  return <Page pad="16px 16px 24px"><Top onBack={() => go({ screen: "browse", tab: "me" })} title={s.walletTitle} />
    <Card padded style={{ background: "var(--color-surface-brand)", color: "#fff", border: "none", display: "grid", gap: 4 }}>
      <span style={{ fontSize: "var(--text-caption-size)", opacity: .85 }}>{s.balance}</span>
      <Num style={{ fontSize: "var(--text-numeric-xl-size)", fontWeight: 700 }}>{money(market, balance)}</Num>
      {balance > 0 ? <span style={{ fontSize: "var(--text-caption-size)", opacity: .85 }}>{s.expires(ar ? "2 نوفمبر" : "2 Nov")}</span> : null}</Card>
    <strong style={{ fontSize: "var(--text-label-size)", fontWeight: 600 }}>{s.txn}</strong>
    {balance > 0 ? <Card style={{ overflow: "hidden" }}>{WALLET.map(w => <ListRow key={w.id} icon={w.kind === "refund" ? "rotate-ccw" : "gift"} label={<span style={{ display: "grid" }}><span>{ar ? w.ar : w.en}</span>
      <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-tertiary)", fontWeight: 400 }}>{ar ? w.dateAr : w.date} · {s.expires(ar ? w.expAr : w.exp)}</span></span>} value={<Num style={{ fontWeight: 600, color: "var(--color-text-primary)" }}>+{money(market, w.amt)}</Num>} />)}</Card>
      : <EmptyState icon="wallet" title={s.noTxn} body={s.noTxnBody} />}</Page>;
}

/* ---------- saved kitchens (public.saved_store) + store profile (app.store_profile) ---------- */
function Saved({ s, ar, market, saved, setSaved, notify, setNotify, go }) {
  const { BugshaBags: BAGS } = window;
  const list = BAGS.filter(b => saved.includes(b.id));
  return <Page pad="16px 16px 24px"><Top onBack={() => go({ screen: "browse", tab: "me" })} title={s.saved} />
    <P style={{ fontSize: "var(--text-caption-size)" }}>{s.savedBody}</P>
    {list.length ? <Card style={{ overflow: "hidden" }}>{list.map(b => <ListRow key={b.id} icon="store" label={<button onClick={() => go({ screen: "store", bag: b })} style={{ all: "unset", cursor: "pointer" }}>{ar ? b.pa : b.p}</button>}
      value={<span style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{s.notifyMe}</span>
        <Switch checked={notify.includes(b.id)} onChange={v => setNotify(v ? [...notify, b.id] : notify.filter(x => x !== b.id))} label={s.notifyMe} /></span>} />)}</Card>
      : <EmptyState icon="heart" title={s.noSaved} body={s.noSavedBody} actionLabel={ar ? "تصفح الليلة" : "Browse tonight"} onAction={() => go({ screen: "browse", tab: "browse" })} />}</Page>;
}
function Store({ s, ar, market, b, saved, toggleSaved, go }) {
  const { bugshaMfmt: mfmt } = window;
  const on = saved.includes(b.id);
  return <div>
    <div style={{ position: "relative", height: 180, background: `url(../../assets/photos/${b.img}.png) center/cover` }}>
      <div style={{ position: "absolute", insetInlineStart: 12, top: 14 }}><IconButton icon="chevron-left" label="Back" variant="solid" size={38} mirror onClick={() => go({ screen: "browse" })} /></div>
      <div style={{ position: "absolute", insetInlineEnd: 12, top: 14 }}><IconButton icon="heart" label={s.follow} variant="solid" size={38} onClick={toggleSaved} style={on ? { color: "var(--color-brand-primary)" } : undefined} /></div></div>
    <Page pad="16px 16px 24px">
      <div style={{ display: "grid", gap: 6 }}><H size="var(--text-title-size)">{ar ? b.pa : b.p}</H><RatingStars value={b.r} count={b.rc} />
        <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{ar ? "مخبز · قطعة 10، السالمية" : "Bakery · Block 10, Salmiya"} · <Num>{b.km} km</Num></span></div>
      <Button variant={on ? "secondary" : "primary"} iconStart="heart" onClick={toggleSaved}>{on ? s.following : s.follow}</Button>
      <strong style={{ fontSize: "var(--text-label-size)", fontWeight: 600 }}>{s.tonightAt}</strong>
      {b.left > 0 ? <NS.BagCard layout="row" partner={ar ? b.pa : b.p} title={ar ? "بقشة مفاجأة" : "Surprise Bundle"} category={b.cat} cover={`../../assets/photos/${b.img}.png`} priceNow={b.now * MARKETS[market].scale} priceWas={b.was * MARKETS[market].scale} currency={MARKETS[market].currency}
        from={b.from} to={b.to} distanceKm={b.km} bagsLeft={b.left} rating={b.r} minutesLeft={b.m} countdownFormat={mfmt(ar)} onClick={() => go({ screen: "detail", bag: b })} /> : <Banner tone="info" title={s.closedNow} />}
      <Card style={{ overflow: "hidden" }}>
        <ListRow icon="map-pin" label={s.pickupAt} value={ar ? "الكاونتر الرئيسي، جنب الكاشير" : "Main counter, by the till"} />
        <ListRow icon="clock" label={s.hours} value={<Num>07:00–23:00</Num>} />
        <ListRow icon="phone" label={ar ? "اتصال" : "Call"} value={<Num>+965 2222 0000</Num>} chevron /></Card>
      <strong style={{ fontSize: "var(--text-label-size)", fontWeight: 600 }}>{s.reviews}</strong>
      {[["Noura A.", "نورة ع.", 5, "Still warm. Two za'atar and a whole cake.", "لِسع حارّة. زعتر وكيكة كاملة."], ["Rahul S.", "راهول س.", 5, "Ready at the counter. In and out in a minute.", "جاهز عند الكاونتر. دخلت وطلعت بدقيقة."]].map(r =>
        <Card key={r[0]} padded style={{ display: "grid", gap: 4 }}><div style={{ display: "flex", justifyContent: "space-between" }}><strong style={{ fontSize: "var(--text-label-size)" }}>{ar ? r[1] : r[0]}</strong><RatingStars value={r[2]} size={13} /></div>
          <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{ar ? r[4] : r[3]}</span></Card>)}
    </Page></div>;
}

/* ---------- account: profile, notifications, delete ---------- */
function ProfileEdit({ s, ar, market, profile, setProfile, flags, setFlags, ack, setAck, go }) {
  const m = MARKETS[market];
  return <Page pad="16px 16px 24px"><Top onBack={() => go({ screen: "browse", tab: "me" })} title={s.profile} />
    <Input label={s.firstName} value={profile.first} onChange={e => setProfile({ ...profile, first: e.target.value })} />
    <Input label={s.lastName} value={profile.last} onChange={e => setProfile({ ...profile, last: e.target.value })} />
    <Input label={s.email} icon="mail" value={profile.email} onChange={() => {}} hint={ar ? "الإيميل من تسجيل الدخول — ما ينعدّل من هني." : "From your sign-in — can't be edited here."} />
    <Input label={s.phone} icon="phone" value={profile.phone} onChange={e => setProfile({ ...profile, phone: e.target.value })} />
    <Select label={s.city} value={profile.city} onChange={v => setProfile({ ...profile, city: v })} options={m.cities.map(c => [c[0], (ar ? c[2] : c[1]) + (c[3] !== "live" ? ` · ${s.cityWait}` : "")])} />
    <strong style={{ fontSize: "var(--text-label-size)", fontWeight: 600 }}>{s.dietary}</strong>
    <Dietary s={s} flags={flags} setFlags={setFlags} ack={ack} setAck={setAck} embedded />
    <Button size="lg" fullWidth onClick={() => go({ screen: "browse", tab: "me" })}>{s.save}</Button></Page>;
}
function Notifs({ s, ar, prefs, setPrefs, go }) {
  const set = (k, v) => setPrefs({ ...prefs, [k]: v });
  return <Page pad="16px 16px 24px"><Top onBack={() => go({ screen: "browse", tab: "me" })} title={s.notifs} />
    <Card style={{ overflow: "hidden" }}>{s.ncat.map(([k, l, sub]) => <ListRow key={k} icon="bell" label={<span style={{ display: "grid" }}><span>{l}</span><span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-tertiary)", fontWeight: 400 }}>{sub}</span></span>}
      value={<Switch checked={prefs.cats.includes(k)} onChange={v => set("cats", v ? [...prefs.cats, k] : prefs.cats.filter(x => x !== k))} label={l} />} />)}</Card>
    <strong style={{ fontSize: "var(--text-label-size)", fontWeight: 600 }}>{s.quiet}</strong>
    <Card padded style={{ display: "grid", gap: 10 }}><P style={{ fontSize: "var(--text-caption-size)" }}>{s.quietBody}</P>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}><Input label={ar ? "من" : "From"} value={prefs.from} onChange={e => set("from", e.target.value)} /><Input label={ar ? "إلى" : "To"} value={prefs.to} onChange={e => set("to", e.target.value)} /></div></Card>
    <strong style={{ fontSize: "var(--text-label-size)", fontWeight: 600 }}>{s.channels}</strong>
    <div style={{ display: "flex", gap: 8 }}>{[["push", s.push], ["email", s.emailCh], ["sms", s.sms]].map(([k, l]) => <Chip key={k} selected={prefs.ch.includes(k)} onClick={() => set("ch", prefs.ch.includes(k) ? prefs.ch.filter(x => x !== k) : [...prefs.ch, k])}>{l}</Chip>)}</div></Page>;
}

Object.assign(window, { BugshaStages: { Language, Intro, SignIn, Code, Profile, CityWait, Dietary, PaymentBlock, OrderState, Receipt, Problem, Wallet, Saved, Store, ProfileEdit, Notifs, S, MARKETS, money } });
})();
