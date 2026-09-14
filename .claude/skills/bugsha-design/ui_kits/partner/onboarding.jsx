// Partner portal — sign-in, code-gated sign-up, request-a-code, and one screen per public.onboarding_status.
// Mirrors app.submit_application, app.my_documents / upload_document, app.accept_contract, app.upsert_store / set_hours,
// app.partner_ready → activate_partner_if_ready, and the ops-side reject / suspend reason codes.
(function(){
const { Logo, Button, IconButton, Icon, Input, SegmentedControl, Badge, Card, Banner, Chip, Switch, ListRow, EmptyState, Stepper } = window.SurplusKWDesignSystem_97ec90;
const mono = "var(--font-plex-mono), monospace";

const COPY = {
en: {
  signin: "Partner sign-in", signinBody: "Use the email your kitchen registered with. We'll send an 8-digit code — no password.", email: "Work email", sendCode: "Send code",
  codeTitle: "Check your inbox", codeBody: e => `We sent an 8-digit code to ${e}.`, codeLabel: "8-digit code", verify: "Verify", resend: "Resend code", resendIn: s => `Resend in ${s}s`, wrongCode: "That code isn't right — check the newest email.",
  back: "Back", next: "Next", cont: "Continue", save: "Save and continue", terms: "By continuing you agree to the Partner Terms.",
  joinTitle: "Join Bugsha as a partner", joinBody: "Partner accounts are opened with a code from the Bugsha team. If you have one, you can sign up in a few minutes. If not, request one and we'll come back to you within two working days.",
  haveCode: "I have a partner code", requestCode: "Request a partner code", noAccess: "This email isn't linked to a kitchen yet.",
  codeScreen: "Enter your partner code", codeHint: "Looks like BG-XXXX-XXXX. It's in the email from partners@bugsha.app.", partnerCode: "Partner code",
  codeBad: "That code isn't valid. Check for typos, or ask the person who sent it.", codeExpired: "This code expired. Ask us for a new one — reply to the email it came in.", codeUsed: "This code was already used to open an account. Sign in with that email instead.",
  codeOk: "Code accepted", codeFor: (n, m) => `Issued to ${n} · ${m}`, check: "Check code",
  appTitle: "Tell us about your kitchen", appBody: "What Bugsha needs to open your account. Legal details match your commercial licence.",
  legalName: "Legal name (on the licence)", tradingName: "Trading name (what customers see)", categories: "What you make", cats: [["bakery", "Bakery"], ["cafe", "Café"], ["meals", "Meals"], ["grocery", "Co-op / grocery"], ["sweets", "Sweets"], ["other", "Other"]],
  contactName: "Your name", contactPhone: "Phone", contactEmail: "Email", city: "City", branches: "Branches", referral: "How did you hear about us?", surplus: "Surplus on a typical night", surplusHint: "Rough retail value of what you throw away. Helps us size your first listings.",
  market: "Country", kw: "Kuwait", eg: "Egypt", submit: "Submit application", alcohol: "Alcohol is never listed on Bugsha.",
  reqTitle: "Request a partner code", reqBody: "Tell us about your kitchen and we'll walk through Bugsha with you before your city goes live. Codes go out within two working days.", reqSent: "Request sent", reqSentBody: e => `We'll email ${e} with a partner code, or with questions, within two working days.`, sendReq: "Send request",
  /* status hub */
  hub: "Your application", stageOf: (i, n) => `Step ${i} of ${n}`, statusLabel: "Status", updated: "Updated", helpLine: "Questions? partners@bugsha.app",
  stages: { lead: "Enquiry", applied: "Application received", documents_pending: "Documents needed", under_review: "Under review", approved: "Approved", contract_pending: "Contract to sign", contract_signed: "Contract signed", store_setup: "Set up your branch", first_listing_pending: "Publish your first bundle", active: "Active", rejected: "Not approved", suspended: "Suspended" },
  stageBody: {
    applied: "Thanks — we've got it. Upload your documents now and we'll review everything together, usually within two working days.",
    documents_pending: "We need the documents below before we can approve you. Photos from your phone are fine as long as every corner is readable.",
    under_review: "Everything is in. A person is checking it — you'll get an email when it's done.",
    approved: "You're approved. One last thing before you can list: the partner contract.",
    contract_pending: "Read and accept the partner contract. It sets your commission and how you get paid.",
    contract_signed: "Contract on file. Now set up the branch customers will collect from.",
    store_setup: "Add the branch details and its opening hours. Listings need both.",
    first_listing_pending: "You're one bundle away from going live. Publish tonight's bundle and your account activates on its own.",
    active: "Your account is active.",
    rejected: "We couldn't approve this application.",
    suspended: "Listing is paused on this account." },
  uploadDocs: "Upload documents", viewDocs: "View documents", signContract: "Review the contract", setupStore: "Set up the branch", listFirst: "Publish a bundle", goConsole: "Open the console",
  /* documents (app.my_documents) */
  docs: "Documents", docsNote: m => `Required in ${m}. Per-branch documents are needed for every branch you add.`, perStore: "per branch", expires: d => `Expires ${d}`, noExpiry: "No expiry",
  docStatus: { missing: "Not uploaded", pending: "Uploaded", under_review: "Under review", approved: "Approved", rejected: "Rejected", expired: "Expired" },
  upload: "Upload", reupload: "Upload again", expiryLabel: "Expiry date", rejectReasons: { doc_mismatch: "Details don't match the application", doc_illegible: "Document is not readable", doc_expired: "Document has expired" },
  docExpiring: (d, n) => `${d} expires in ${n} days — upload the renewed one before then or new listings pause.`, docExpired: d => `New listings paused — ${d} expired`, docExpiredBody: "Bags already sold are unaffected. Customers will collect as normal. Upload the renewed document to resume.",
  /* contract (app.accept_contract) */
  contract: "Partner contract", contractV: v => `Version ${v}`, commission: "Commission", commissionSub: "on each bundle sold, before VAT", payoutCadence: "Payouts", weekly: "Weekly", payoutMin: "Minimum payout", carried: "Anything below is carried to the next week.",
  pspFee: "Card and KNET fees", chargeback: "Chargebacks", bearer: { platform: "Bugsha pays", partner: "Partner pays" }, noShow: "No-shows", noShowPolicy: "Partner keeps the full price when a customer doesn't collect.", cashMode: "Cash orders", cashModeBody: "Cash collected at the counter is netted from your next payout.",
  accept: "Accept contract", acceptAck: "I'm authorised to sign for this business and I accept the partner terms and this contract.", acceptedAt: (d) => `Accepted ${d}`, download: "Download PDF",
  /* store setup (app.upsert_store, app.set_hours) */
  store: "Branch", storeName: "Branch name", address: "Address", addressPh: "Block, street, building", pickupEn: "Pickup point (English)", pickupAr: "Pickup point (Arabic)", pickupPh: "e.g. Main counter, by the till", storePhone: "Branch phone", pin: "Map pin", pinBody: "Drag the pin to the door customers walk in through.", geocoded: "We placed the pin from the address — check it.",
  hours: "Opening hours", hoursBody: "Pickup windows must fall inside these hours.", closed: "Closed", ramadan: "Ramadan hours", ramadanBody: "Separate hours used automatically during Ramadan.", day: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"], opens: "Opens", closes: "Closes",
  saveStore: "Save branch", storeSaved: "Branch saved · hours set",
  /* rejected / suspended */
  rejReason: "Reason", rejBody: "You can apply again once this is resolved. Reply to the email if you think we got it wrong.", reasons: { docs: "Documents could not be verified", category: "Category not eligible", duplicate: "Duplicate application", licence_expired: "Food licence expired", safety_incident: "Food safety incident under investigation" },
  suspUntil: d => `Until ${d}`, suspHonour: "Bundles already reserved will still be collected. New listings are paused.", suspContact: "Contact us",
  applyAgain: "Apply again", signOut: "Sign out",
  ready: "All set — your account is now active", readyBody: "Documents approved, contract accepted, branch hours set. Customers can see your bundles from tonight.",
},
ar: {
  signin: "دخول الشركاء", signinBody: "استخدم الإيميل اللي سجّلتم فيه المطبخ. بنرسل لك رمز من 8 أرقام — بدون كلمة سر.", email: "إيميل العمل", sendCode: "أرسل الرمز",
  codeTitle: "شيّك إيميلك", codeBody: e => `أرسلنا رمز من 8 أرقام إلى ${e}.`, codeLabel: "الرمز (8 أرقام)", verify: "تأكيد", resend: "أعد الإرسال", resendIn: s => `أعد الإرسال بعد ${s} ث`, wrongCode: "الرمز مو صحيح — شيّك آخر إيميل.",
  back: "رجوع", next: "التالي", cont: "كمّل", save: "احفظ وكمّل", terms: "بالمتابعة توافق على شروط الشركاء.",
  joinTitle: "انضم لبقشة كشريك", joinBody: "حسابات الشركاء تنفتح برمز من فريق بقشة. إذا عندك رمز، تقدر تسجّل بدقايق. وإذا ما عندك، اطلبه وبنرد عليك خلال يومين عمل.",
  haveCode: "عندي رمز شريك", requestCode: "اطلب رمز شريك", noAccess: "هالإيميل مو مربوط بمطبخ لين الحين.",
  codeScreen: "أدخل رمز الشريك", codeHint: "شكله BG-XXXX-XXXX. تلقاه بالإيميل من partners@bugsha.app.", partnerCode: "رمز الشريك",
  codeBad: "الرمز مو صحيح. شيّك الأحرف، أو اسأل اللي أرسله لك.", codeExpired: "الرمز انتهى. اطلب واحد جديد — رد على الإيميل اللي جاك فيه.", codeUsed: "هالرمز انستخدم من قبل لفتح حساب. سجّل دخول بذاك الإيميل.",
  codeOk: "الرمز مقبول", codeFor: (n, m) => `صادر لـ ${n} · ${m}`, check: "تحقق من الرمز",
  appTitle: "عرّفنا على مطبخك", appBody: "اللي تحتاجه بقشة عشان تفتح حسابك. البيانات القانونية تطابق الرخصة التجارية.",
  legalName: "الاسم القانوني (بالرخصة)", tradingName: "الاسم التجاري (اللي يشوفه الزبون)", categories: "شنو تسوون", cats: [["bakery", "مخبز"], ["cafe", "كافيه"], ["meals", "وجبات"], ["grocery", "جمعية / بقالة"], ["sweets", "حلويات"], ["other", "غير"]],
  contactName: "اسمك", contactPhone: "الهاتف", contactEmail: "الإيميل", city: "المدينة", branches: "عدد الفروع", referral: "شلون سمعت عنا؟", surplus: "الفائض بليلة عادية", surplusHint: "القيمة التقريبية للي ينرمي. تساعدنا نحدد حجم أول قوائمك.",
  market: "الدولة", kw: "الكويت", eg: "مصر", submit: "أرسل الطلب", alcohol: "الكحول ما ينعرض على بقشة أبدًا.",
  reqTitle: "اطلب رمز شريك", reqBody: "عرّفنا على مطبخك وبنمر عليك ونشرح لك بقشة قبل ما تفتح مدينتك. الرموز تطلع خلال يومين عمل.", reqSent: "وصل طلبك", reqSentBody: e => `بنرسل على ${e} رمز الشريك، أو أسئلتنا، خلال يومين عمل.`, sendReq: "أرسل الطلب",
  hub: "طلبك", stageOf: (i, n) => `خطوة ${i} من ${n}`, statusLabel: "الحالة", updated: "آخر تحديث", helpLine: "أسئلة؟ partners@bugsha.app",
  stages: { lead: "استفسار", applied: "وصل الطلب", documents_pending: "نحتاج مستندات", under_review: "قيد المراجعة", approved: "معتمد", contract_pending: "عقد للتوقيع", contract_signed: "العقد موقّع", store_setup: "جهّز فرعك", first_listing_pending: "انشر أول بقشة", active: "نشط", rejected: "ما انعتمد", suspended: "موقوف" },
  stageBody: {
    applied: "شكرًا — وصلنا طلبك. ارفع مستنداتك الحين وبنراجع كل شي مع بعض، عادة خلال يومين عمل.",
    documents_pending: "نحتاج المستندات اللي تحت قبل ما نعتمدك. صور من التلفون تكفي، بس خلّ كل زاوية واضحة.",
    under_review: "كل شي وصل. فيه شخص يراجعه — بيوصلك إيميل لما يخلص.",
    approved: "انعتمدت. باقي شي واحد قبل النشر: عقد الشراكة.",
    contract_pending: "اقرأ عقد الشراكة ووافق عليه. يحدد عمولتك وشلون توصلك فلوسك.",
    contract_signed: "العقد محفوظ. الحين جهّز الفرع اللي الزباين بيستلمون منه.",
    store_setup: "أضف بيانات الفرع وأوقات الدوام. النشر يحتاج الاثنين.",
    first_listing_pending: "باقي لك بقشة وحدة وتشتغل. انشر بقشة الليلة وحسابك ينشّط على طول.",
    active: "حسابك نشط.",
    rejected: "ما قدرنا نعتمد هالطلب.",
    suspended: "النشر موقوف على هالحساب." },
  uploadDocs: "ارفع المستندات", viewDocs: "شوف المستندات", signContract: "راجع العقد", setupStore: "جهّز الفرع", listFirst: "انشر بقشة", goConsole: "افتح اللوحة",
  docs: "المستندات", docsNote: m => `مطلوبة في ${m}. مستندات الفرع مطلوبة لكل فرع تضيفه.`, perStore: "لكل فرع", expires: d => `ينتهي ${d}`, noExpiry: "بدون انتهاء",
  docStatus: { missing: "ما انرفع", pending: "انرفع", under_review: "قيد المراجعة", approved: "معتمد", rejected: "مرفوض", expired: "منتهي" },
  upload: "ارفع", reupload: "ارفع من جديد", expiryLabel: "تاريخ الانتهاء", rejectReasons: { doc_mismatch: "البيانات ما تطابق الطلب", doc_illegible: "المستند مو واضح", doc_expired: "المستند منتهي" },
  docExpiring: (d, n) => `${d} ينتهي بعد ${n} يوم — ارفع المجدد قبلها وإلا يتوقف النشر.`, docExpired: d => `النشر موقوف — ${d} انتهى`, docExpiredBody: "البقش المبيعة ما تتأثر. الزباين يستلمون عادي. ارفع المستند المجدد عشان ترجع تنشر.",
  contract: "عقد الشراكة", contractV: v => `نسخة ${v}`, commission: "العمولة", commissionSub: "على كل بقشة مبيعة، قبل الضريبة", payoutCadence: "التحويلات", weekly: "أسبوعي", payoutMin: "أقل تحويل", carried: "أي مبلغ أقل ينتقل للأسبوع الجاي.",
  pspFee: "رسوم البطاقات وكي-نت", chargeback: "الاعتراضات البنكية", bearer: { platform: "بقشة تدفع", partner: "الشريك يدفع" }, noShow: "عدم الاستلام", noShowPolicy: "الشريك يحتفظ بكامل السعر إذا الزبون ما استلم.", cashMode: "الطلبات الكاش", cashModeBody: "الكاش اللي ينقبض عند الكاونتر ينخصم من تحويلك الجاي.",
  accept: "أوافق على العقد", acceptAck: "أنا مخوّل أوقّع عن هالمنشأة وأوافق على شروط الشركاء وهالعقد.", acceptedAt: d => `تمت الموافقة ${d}`, download: "نزّل PDF",
  store: "الفرع", storeName: "اسم الفرع", address: "العنوان", addressPh: "القطعة، الشارع، المبنى", pickupEn: "مكان الاستلام (إنجليزي)", pickupAr: "مكان الاستلام (عربي)", pickupPh: "مثال: الكاونتر الرئيسي، جنب الكاشير", storePhone: "هاتف الفرع", pin: "الموقع على الخريطة", pinBody: "اسحب الدبوس على الباب اللي يدخل منه الزبون.", geocoded: "حطينا الدبوس من العنوان — تأكد منه.",
  hours: "أوقات الدوام", hoursBody: "أوقات الاستلام لازم تكون داخل هالدوام.", closed: "مسكّر", ramadan: "دوام رمضان", ramadanBody: "دوام منفصل ينطبّق تلقائيًا في رمضان.", day: ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"], opens: "يفتح", closes: "يسكّر",
  saveStore: "احفظ الفرع", storeSaved: "انحفظ الفرع · الدوام مضبوط",
  rejReason: "السبب", rejBody: "تقدر تقدّم من جديد لما ينحل. رد على الإيميل إذا تشوف إن فيه غلط.", reasons: { docs: "ما قدرنا نتحقق من المستندات", category: "الفئة غير مؤهلة", duplicate: "طلب مكرر", licence_expired: "رخصة الأغذية منتهية", safety_incident: "حادثة سلامة أكل قيد التحقيق" },
  suspUntil: d => `لين ${d}`, suspHonour: "البقش المحجوزة بتتسلّم عادي. النشر الجديد موقوف.", suspContact: "تواصل معنا",
  applyAgain: "قدّم من جديد", signOut: "تسجيل الخروج",
  ready: "خلصنا — حسابك نشط الحين", readyBody: "المستندات معتمدة، العقد موافَق عليه، ودوام الفرع مضبوط. الزباين يشوفون بقشك من الليلة.",
}};

/* fixtures that mirror public.market_document_requirement + a sample partner_document set */
const DOC_REQ = {
  KW: [["moci_licence", "MOCI commercial licence", "رخصة تجارية (وزارة التجارة)", false, true], ["food_permit", "Food permit", "تصريح أغذية", true, true], ["civil_id", "Civil ID", "البطاقة المدنية", false, true], ["signatory_authorisation", "Signatory authorisation", "تفويض بالتوقيع", false, false], ["bank_iban", "Bank IBAN", "آيبان البنك", false, false]],
  EG: [["commercial_register", "Commercial register extract", "مستخرج السجل التجاري", false, true], ["tax_card", "Tax card", "البطاقة الضريبية", false, true], ["health_licence", "Health licence", "الرخصة الصحية", true, true], ["national_id", "National ID", "البطاقة الشخصية", false, true], ["bank_or_wallet", "Bank account or wallet", "حساب بنكي أو محفظة", false, false]],
};
const CITIES = { KW: [["hawalli", "Hawalli", "حولي"], ["al-asimah", "Al Asimah", "العاصمة"], ["farwaniya", "Farwaniya", "الفروانية"], ["ahmadi", "Ahmadi", "الأحمدي"], ["jahra", "Jahra", "الجهراء"], ["mubarak", "Mubarak Al-Kabeer", "مبارك الكبير"]],
  EG: [["cairo", "Cairo", "القاهرة"], ["giza", "Giza", "الجيزة"], ["alex", "Alexandria", "الإسكندرية"]] };
const STAGE_ORDER = ["applied", "documents_pending", "under_review", "contract_pending", "store_setup", "first_listing_pending", "active"];
const stageIndex = st => ({ applied: 0, documents_pending: 1, under_review: 2, approved: 3, contract_pending: 3, contract_signed: 4, store_setup: 4, first_listing_pending: 5, active: 6 }[st] ?? 0);

const Num = ({ children, ...r }) => <span className="ds-numeric" dir="ltr" style={{ fontFamily: mono }} {...r}>{children}</span>;
const H1 = ({ children, sub }) => <div style={{ display: "grid", gap: 6 }}><h1 style={{ fontSize: "var(--text-title-lg-size)", lineHeight: 1.25, fontWeight: 600, margin: 0 }}>{children}</h1>
  {sub && <p style={{ margin: 0, color: "var(--color-text-secondary)", lineHeight: 1.7, maxWidth: "62ch" }}>{sub}</p>}</div>;
const Field = ({ label, children, hint }) => <label style={{ display: "grid", gap: 6, minWidth: 0 }}><span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{label}</span>{children}
  {hint ? <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-tertiary)" }}>{hint}</span> : null}</label>;
const Select = ({ value, onChange, options }) => <select value={value} onChange={e => onChange(e.target.value)} style={{ minHeight: "var(--size-control-md)", padding: "0 12px", borderRadius: "var(--radius-control)", border: "1px solid var(--color-border-default)", background: "var(--color-surface-raised)", color: "inherit", font: "inherit" }}>
  {options.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select>;
const Centre = ({ children, width = 520 }) => <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, background: "var(--color-surface-canvas)" }}>
  <div style={{ width: "100%", maxWidth: width, display: "grid", gap: 18 }}>{children}</div></div>;
const Panel = ({ children, pad = 24 }) => <Card padded={false}><div style={{ padding: pad, display: "grid", gap: 16 }}>{children}</div></Card>;

/* ---------- P-000 sign in + code ---------- */
function SignIn({ c, onCode }) {
  const [email, setEmail] = React.useState("");
  const ok = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email.trim());
  return <Centre width={440}><Logo lang={c.dir === "rtl" ? "ar" : "en"} size={26} color="var(--color-brand-primary)" style={{ justifySelf: "start" }} />
    <Panel><H1 sub={c.signinBody}>{c.signin}</H1>
      <Input label={c.email} icon="mail" placeholder="manager@kitchen.com" value={email} onChange={e => setEmail(e.target.value)} />
      <Button size="lg" fullWidth disabled={!ok} onClick={() => onCode(email.trim().toLowerCase())}>{c.sendCode}</Button>
      <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-tertiary)" }}>{c.terms}</span></Panel></Centre>;
}
function Code({ c, email, onBack, onVerified }) {
  const [d, setD] = React.useState(""); const [err, setErr] = React.useState(false); const [left, setLeft] = React.useState(30);
  React.useEffect(() => { if (left <= 0) return; const id = setTimeout(() => setLeft(left - 1), 1000); return () => clearTimeout(id); }, [left]);
  return <Centre width={440}><Logo lang={c.dir === "rtl" ? "ar" : "en"} size={26} color="var(--color-brand-primary)" style={{ justifySelf: "start" }} />
    <Panel><H1 sub={c.codeBody(email)}>{c.codeTitle}</H1>
      <Input label={c.codeLabel} inputMode="numeric" value={d} onChange={e => { setErr(false); setD(e.target.value.replace(/\D/g, "").slice(0, 8)); }} error={err ? c.wrongCode : undefined} placeholder="12345678" />
      <Button size="lg" fullWidth disabled={d.length < 8} onClick={() => d === "00000000" ? setErr(true) : onVerified()}>{c.verify}</Button>
      <div style={{ display: "flex", justifyContent: "space-between" }}><Button variant="ghost" onClick={onBack}>{c.back}</Button><Button variant="ghost" disabled={left > 0} onClick={() => setLeft(30)}>{left > 0 ? c.resendIn(left) : c.resend}</Button></div></Panel></Centre>;
}

/* ---------- P-001 join: code or request ---------- */
function Join({ c, email, onHaveCode, onRequest, onSignOut }) {
  return <Centre width={560}><Logo lang={c.dir === "rtl" ? "ar" : "en"} size={26} color="var(--color-brand-primary)" style={{ justifySelf: "start" }} />
    <Panel><Banner tone="info" title={email}>{c.noAccess}</Banner>
      <H1 sub={c.joinBody}>{c.joinTitle}</H1>
      <div style={{ display: "grid", gap: 10 }}>
        <Button size="lg" fullWidth iconStart="key" onClick={onHaveCode}>{c.haveCode}</Button>
        <Button size="lg" fullWidth variant="secondary" iconStart="send" onClick={onRequest}>{c.requestCode}</Button></div>
      <Button variant="ghost" onClick={onSignOut} style={{ justifySelf: "start" }}>{c.signOut}</Button></Panel></Centre>;
}

/* ---------- P-002 enter code (public.partner_invite_code) ---------- */
function EnterCode({ c, ar, onBack, onValid }) {
  const [code, setCode] = React.useState(""); const [state, setState] = React.useState(null);
  const norm = code.toUpperCase().replace(/[^A-Z0-9]/g, "");
  const fmt = norm.length > 2 ? "BG-" + norm.slice(2, 6) + (norm.length > 6 ? "-" + norm.slice(6, 10) : "") : norm;
  const check = () => {
    if (norm === "BG7K2M9Q4A") setState("expired"); else if (norm === "BGUSED0000") setState("used");
    else if (/^BG[A-Z0-9]{8}$/.test(norm)) setState("ok"); else setState("bad");
  };
  const msg = { bad: c.codeBad, expired: c.codeExpired, used: c.codeUsed }[state];
  return <Centre width={480}><Logo lang={ar ? "ar" : "en"} size={26} color="var(--color-brand-primary)" style={{ justifySelf: "start" }} />
    <Panel><H1 sub={c.codeHint}>{c.codeScreen}</H1>
      <Input label={c.partnerCode} icon="key" value={fmt} onChange={e => { setCode(e.target.value); setState(null); }} placeholder="BG-XXXX-XXXX" error={msg} style={{ fontFamily: mono }} />
      {state === "ok" ? <Banner tone="fresh" title={c.codeOk}>{c.codeFor("Kuwait Bakehouse", ar ? "الكويت" : "Kuwait")}</Banner> : null}
      <div style={{ display: "flex", gap: 8 }}><Button variant="secondary" onClick={onBack}>{c.back}</Button>
        {state === "ok" ? <Button style={{ flex: 1 }} onClick={() => onValid({ code: fmt, legal: "Kuwait Bakehouse Co. W.L.L.", trading: "Kuwait Bakehouse", market: "KW" })}>{c.cont}</Button>
          : <Button style={{ flex: 1 }} disabled={norm.length < 10} onClick={check}>{c.check}</Button>}</div>
      <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-tertiary)" }}>{ar ? "للتجربة: أي BG-XXXX-XXXX يقبل · BG-7K2M-9Q4A منتهي · BG-USED-0000 مستخدم" : "Try: any BG-XXXX-XXXX is accepted · BG-7K2M-9Q4A is expired · BG-USED-0000 is used"}</span></Panel></Centre>;
}

/* ---------- P-003 application (app.submit_application) / P-004 request a code ---------- */
function ApplicationForm({ c, ar, market, setMarket, seed, mode, onBack, onSubmit }) {
  const [f, setF] = React.useState({ legal: seed?.legal || "", trading: seed?.trading || "", cats: seed ? ["bakery"] : [], name: "", phone: "", email: seed?.email || "", city: CITIES[market][0][0], branches: 1, referral: "", surplus: "" });
  const [done, setDone] = React.useState(false);
  const set = (k, v) => setF({ ...f, [k]: v });
  const ok = f.legal.trim() && f.trading.trim() && f.cats.length && f.name.trim() && f.phone.trim() && /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(f.email);
  const isReq = mode === "request";
  if (done && isReq) return <Centre width={520}><Panel><EmptyState icon="send" title={c.reqSent} body={c.reqSentBody(f.email)} actionLabel={c.back} onAction={onBack} /></Panel></Centre>;
  return <Centre width={640}><Logo lang={ar ? "ar" : "en"} size={26} color="var(--color-brand-primary)" style={{ justifySelf: "start" }} />
    <Panel>
      <H1 sub={isReq ? c.reqBody : c.appBody}>{isReq ? c.reqTitle : c.appTitle}</H1>
      {seed ? <Banner tone="fresh" title={c.codeOk}><Num>{seed.code}</Num> · {c.codeFor(seed.trading, market === "KW" ? c.kw : c.eg)}</Banner> : null}
      <Field label={c.market}><SegmentedControl value={market} onChange={v => { setMarket(v); set("city", CITIES[v][0][0]); }} options={[{ value: "KW", label: c.kw }, { value: "EG", label: c.eg }]} /></Field>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <Field label={c.legalName}><Input value={f.legal} onChange={e => set("legal", e.target.value)} /></Field>
        <Field label={c.tradingName}><Input value={f.trading} onChange={e => set("trading", e.target.value)} /></Field></div>
      <Field label={c.categories}><div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>{c.cats.map(([k, l]) => <Chip key={k} selected={f.cats.includes(k)} onClick={() => set("cats", f.cats.includes(k) ? f.cats.filter(x => x !== k) : [...f.cats, k])}>{l}</Chip>)}</div></Field>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
        <Field label={c.contactName}><Input value={f.name} onChange={e => set("name", e.target.value)} /></Field>
        <Field label={c.contactPhone}><Input value={f.phone} onChange={e => set("phone", e.target.value)} placeholder={market === "KW" ? "+965 5xxx xxxx" : "+20 1xx xxx xxxx"} /></Field>
        <Field label={c.contactEmail}><Input value={f.email} onChange={e => set("email", e.target.value)} placeholder="you@kitchen.com" /></Field></div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
        <Field label={c.city}><Select value={f.city} onChange={v => set("city", v)} options={CITIES[market].map(x => [x[0], ar ? x[2] : x[1]])} /></Field>
        <Field label={c.branches}><div><Stepper value={f.branches} min={1} max={50} onChange={v => set("branches", v)} /></div></Field>
        <Field label={c.surplus} hint={c.surplusHint}><Input value={f.surplus} onChange={e => set("surplus", e.target.value)} suffix={market === "KW" ? "KD" : "EGP"} placeholder={market === "KW" ? "25" : "600"} /></Field></div>
      <Field label={c.referral}><Input value={f.referral} onChange={e => set("referral", e.target.value)} /></Field>
      <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-tertiary)" }}>{c.alcohol}</span>
      <div style={{ display: "flex", gap: 8, justifyContent: "space-between" }}><Button variant="secondary" onClick={onBack}>{c.back}</Button>
        <Button size="lg" disabled={!ok} onClick={() => { if (isReq) setDone(true); else onSubmit(f); }}>{isReq ? c.sendReq : c.submit}</Button></div></Panel></Centre>;
}

/* ---------- P-010 status hub: one screen per onboarding_status ---------- */
function StatusHub({ c, ar, market, status, docs, contract, store, onGo, onSignOut }) {
  const idx = stageIndex(status);
  const terminal = status === "rejected" || status === "suspended";
  const cta = { applied: [c.uploadDocs, "docs"], documents_pending: [c.uploadDocs, "docs"], under_review: [c.viewDocs, "docs"], approved: [c.signContract, "contract"], contract_pending: [c.signContract, "contract"],
    contract_signed: [c.setupStore, "store"], store_setup: [c.setupStore, "store"], first_listing_pending: [c.listFirst, "list"], active: [c.goConsole, "console"] }[status];
  return <Centre width={720}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><Logo lang={ar ? "ar" : "en"} size={26} color="var(--color-brand-primary)" /><Button variant="ghost" size="sm" onClick={onSignOut}>{c.signOut}</Button></div>
    <Panel>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, flexWrap: "wrap" }}>
        <H1 sub={c.stageBody[status]}>{c.stages[status]}</H1>
        <Badge tone={status === "active" ? "fresh" : terminal ? "error" : "time"} uppercase>{terminal ? c.stages[status] : c.stageOf(idx + 1, STAGE_ORDER.length)}</Badge></div>
      {!terminal ? <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: `repeat(${STAGE_ORDER.length}, 1fr)`, gap: 4 }}>
        {STAGE_ORDER.map((st, i) => <li key={st} style={{ display: "grid", gap: 6 }}>
          <span style={{ height: 4, borderRadius: 2, background: i <= idx ? "var(--color-brand-primary)" : "var(--color-border-default)" }} />
          <span style={{ fontSize: "var(--text-micro-size)", color: i === idx ? "var(--color-text-primary)" : "var(--color-text-tertiary)", fontWeight: i === idx ? 600 : 400 }}>{c.stages[st]}</span></li>)}</ol> : null}
      {status === "rejected" ? <Banner tone="error" title={`${c.rejReason}: ${c.reasons.docs}`}>{c.rejBody}</Banner> : null}
      {status === "suspended" ? <Banner tone="error" title={`${c.reasons.licence_expired} · ${c.suspUntil(ar ? "30 سبتمبر" : "30 Sep")}`}>{c.suspHonour}</Banner> : null}
      {status === "active" ? <Banner tone="fresh" title={c.ready}>{c.readyBody}</Banner> : null}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
        <Card padded style={{ display: "grid", gap: 4 }}><span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{c.docs}</span>
          <strong><Num>{docs.filter(d => d.status === "approved").length}/{docs.length}</Num> {c.docStatus.approved.toLowerCase()}</strong></Card>
        <Card padded style={{ display: "grid", gap: 4 }}><span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{c.contract}</span>
          <strong>{contract.accepted ? c.acceptedAt(ar ? "12 سبتمبر" : "12 Sep") : c.stages.contract_pending}</strong></Card>
        <Card padded style={{ display: "grid", gap: 4 }}><span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{c.store}</span>
          <strong>{store.saved ? `${store.name} · ${c.hours.toLowerCase()} ✓` : c.stages.store_setup}</strong></Card></div>
      <div style={{ display: "flex", gap: 8, justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
        <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-tertiary)" }}>{c.helpLine}</span>
        {terminal ? <Button variant="secondary" iconStart="mail">{status === "rejected" ? c.applyAgain : c.suspContact}</Button> : <Button size="lg" onClick={() => onGo(cta[1])}>{cta[0]}</Button>}</div>
    </Panel></Centre>;
}

/* ---------- P-011 documents (app.my_documents / upload_document) ---------- */
function Documents({ c, ar, market, docs, setDocs, onBack, embedded }) {
  const tone = st => ({ approved: "fresh", under_review: "time", pending: "time", rejected: "error", expired: "error", missing: "neutral" }[st]);
  const upload = (i, file) => setDocs(docs.map((d, k) => k === i ? { ...d, status: "pending", file: file?.name || "photo.jpg", reason: null } : d));
  const body = <div style={{ display: "grid", gap: 10 }}>
    {docs.map((d, i) => <Card key={d.type} padded={false}><div style={{ padding: "12px 16px", display: "grid", gridTemplateColumns: "minmax(0,1.6fr) auto auto", gap: 12, alignItems: "center" }}>
      <div style={{ display: "grid", gap: 3, minWidth: 0 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}><strong style={{ fontWeight: 600 }}>{ar ? d.ar : d.en}</strong>{d.perStore ? <Badge tone="neutral">{c.perStore}</Badge> : null}</div>
        <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{d.file ? d.file + " · " : ""}{d.expiry ? c.expires(d.expiry) : d.requiresExpiry ? c.expiryLabel : c.noExpiry}</span>
        {d.reason ? <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-error)" }}>{c.rejectReasons[d.reason]}</span> : null}</div>
      <Badge tone={tone(d.status)}>{c.docStatus[d.status]}</Badge>
      <label style={{ display: "inline-flex" }}><input type="file" accept="image/*,.pdf" style={{ position: "absolute", width: 1, height: 1, opacity: 0 }} onChange={e => upload(i, e.target.files && e.target.files[0])} />
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, minHeight: 36, padding: "0 12px", borderRadius: "var(--radius-control)", border: "1px solid var(--color-border-strong)", cursor: "pointer", fontSize: "var(--text-caption-size)", fontWeight: 600, whiteSpace: "nowrap" }}>
          <Icon name="upload" size={15} />{d.status === "missing" ? c.upload : c.reupload}</span></label></div></Card>)}</div>;
  if (embedded) return body;
  return <Centre width={720}><Panel><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}><H1 sub={c.docsNote(market === "KW" ? c.kw : c.eg)}>{c.docs}</H1><Button variant="secondary" onClick={onBack}>{c.back}</Button></div>{body}</Panel></Centre>;
}

/* ---------- P-012 contract (public.partner_contract / app.accept_contract) ---------- */
function Contract({ c, ar, market, contract, onAccept, onBack, embedded }) {
  const [ack, setAck] = React.useState(false);
  const row = (l, v, sub) => <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 12, padding: "10px 0", borderBottom: "1px solid var(--color-border-subtle)" }}>
    <span style={{ display: "grid" }}><strong style={{ fontWeight: 600 }}>{l}</strong>{sub ? <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{sub}</span> : null}</span><span style={{ textAlign: "end" }}>{v}</span></div>;
  const body = <React.Fragment>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><Badge tone="neutral">{c.contractV(contract.version)}</Badge><Button variant="ghost" size="sm" iconStart="download">{c.download}</Button></div>
    {row(c.commission, <Num style={{ fontWeight: 700 }}>{contract.commissionBp / 100}%</Num>, c.commissionSub)}
    {row(c.payoutCadence, c.weekly, market === "KW" ? (ar ? "كل أحد، للحساب البنكي المسجّل" : "Every Sunday, to the bank on file") : (ar ? "كل أحد، للحساب أو المحفظة المسجّلة" : "Every Sunday, to the bank or wallet on file"))}
    {row(c.payoutMin, <Num>{market === "KW" ? "KD 10.000" : "EGP 250.00"}</Num>, c.carried)}
    {row(c.pspFee, c.bearer.platform)}{row(c.chargeback, c.bearer.partner)}{row(c.noShow, "", c.noShowPolicy)}
    {market === "EG" ? row(c.cashMode, "", c.cashModeBody) : null}
    {contract.accepted ? <Banner tone="fresh" title={c.acceptedAt(ar ? "12 سبتمبر 2026، 14:02" : "12 Sep 2026, 14:02")}>Yousef K. · 185.31.x.x</Banner> : <React.Fragment>
      <label style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "var(--text-label-size)", lineHeight: 1.6, color: "var(--color-text-secondary)" }}>
        <input type="checkbox" checked={ack} onChange={e => setAck(e.target.checked)} style={{ width: 20, height: 20, marginTop: 2, accentColor: "var(--color-surface-brand)" }} />{c.acceptAck}</label>
      <Button size="lg" disabled={!ack} onClick={onAccept}>{c.accept}</Button></React.Fragment>}</React.Fragment>;
  if (embedded) return <div style={{ display: "grid", gap: 12 }}>{body}</div>;
  return <Centre width={640}><Panel><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}><H1>{c.contract}</H1><Button variant="secondary" onClick={onBack}>{c.back}</Button></div>{body}</Panel></Centre>;
}

/* ---------- P-013 store setup + hours (app.upsert_store, app.set_hours) ---------- */
function StoreSetup({ c, ar, market, store, setStore, onSave, onBack, embedded }) {
  const s = store; const set = (k, v) => setStore({ ...s, [k]: v });
  const [ram, setRam] = React.useState(false);
  const hours = ram ? s.ramadanHours : s.hours;
  const setHour = (i, k, v) => { const h = hours.map((r, j) => j === i ? { ...r, [k]: v } : r); set(ram ? "ramadanHours" : "hours", h); };
  const ok = s.name.trim() && s.address.trim() && s.pickupEn.trim() && s.phone.trim();
  const body = <React.Fragment>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
      <Field label={c.storeName}><Input value={s.name} onChange={e => set("name", e.target.value)} placeholder="Salmiya · Block 10" /></Field>
      <Field label={c.city}><Select value={s.city} onChange={v => set("city", v)} options={CITIES[market].map(x => [x[0], ar ? x[2] : x[1]])} /></Field>
      <Field label={c.address}><Input value={s.address} onChange={e => set("address", e.target.value)} placeholder={c.addressPh} /></Field>
      <Field label={c.storePhone}><Input value={s.phone} onChange={e => set("phone", e.target.value)} placeholder={market === "KW" ? "+965 2xxx xxxx" : "+20 2 xxxx xxxx"} /></Field>
      <Field label={c.pickupEn}><Input value={s.pickupEn} onChange={e => set("pickupEn", e.target.value)} placeholder={c.pickupPh} /></Field>
      <Field label={c.pickupAr}><Input value={s.pickupAr} onChange={e => set("pickupAr", e.target.value)} placeholder="الكاونتر الرئيسي، جنب الكاشير" dir="rtl" /></Field></div>
    <Field label={c.pin} hint={s.address ? c.geocoded : c.pinBody}>
      <div style={{ position: "relative", height: 150, borderRadius: "var(--radius-card)", background: "var(--color-surface-sunken)", overflow: "hidden", border: "1px solid var(--color-border-subtle)" }}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true">
          {[20, 50, 80].map(y => <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="var(--color-border-subtle)" strokeWidth=".6" />)}{[25, 50, 75].map(x => <line key={x} x1={x} y1="0" x2={x} y2="100" stroke="var(--color-border-subtle)" strokeWidth=".6" />)}
          <path d="M0 62 L60 62 L60 100" stroke="var(--color-border-default)" strokeWidth="1.6" fill="none" /></svg>
        <span style={{ position: "absolute", left: "58%", top: "40%", transform: "translate(-50%,-100%)", color: "var(--color-brand-primary)" }}><Icon name="map-pin" size={30} /></span></div></Field>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
      <div style={{ display: "grid", gap: 2 }}><strong style={{ fontWeight: 600 }}>{c.hours}</strong><span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{c.hoursBody}</span></div>
      <SegmentedControl value={ram ? "ram" : "std"} onChange={v => setRam(v === "ram")} options={[{ value: "std", label: c.hours }, { value: "ram", label: c.ramadan }]} /></div>
    <div style={{ display: "grid", gap: 6 }}>
      {hours.map((h, i) => <div key={i} style={{ display: "grid", gridTemplateColumns: "88px auto 1fr 1fr", gap: 10, alignItems: "center" }}>
        <span style={{ fontWeight: 600, fontSize: "var(--text-label-size)" }}>{c.day[i]}</span>
        <Switch checked={!h.closed} onChange={v => setHour(i, "closed", !v)} label={c.day[i]} />
        {h.closed ? <span style={{ gridColumn: "3 / span 2", fontSize: "var(--text-caption-size)", color: "var(--color-text-tertiary)" }}>{c.closed}</span>
          : <React.Fragment><Input value={h.open} onChange={e => setHour(i, "open", e.target.value)} suffix={c.opens} style={{ fontFamily: mono }} /><Input value={h.close} onChange={e => setHour(i, "close", e.target.value)} suffix={c.closes} style={{ fontFamily: mono }} /></React.Fragment>}</div>)}</div>
    {ram ? <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-tertiary)" }}>{c.ramadanBody}</span> : null}
    <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>{!embedded ? <Button variant="secondary" onClick={onBack}>{c.back}</Button> : null}<Button size="lg" disabled={!ok} onClick={onSave}>{c.saveStore}</Button></div></React.Fragment>;
  if (embedded) return <div style={{ display: "grid", gap: 16 }}>{body}</div>;
  return <Centre width={720}><Panel><H1 sub={c.stageBody.store_setup}>{c.stages.store_setup}</H1>{body}</Panel></Centre>;
}

const defaultHours = () => [0, 1, 2, 3, 4, 5, 6].map(i => ({ open: "07:00", close: "23:00", closed: false }));
const defaultDocs = market => DOC_REQ[market].map(([type, en, ar, perStore, requiresExpiry]) => ({ type, en, ar, perStore, requiresExpiry, status: "missing", file: null, expiry: null, reason: null }));

Object.assign(window, { PartnerOnboarding: { COPY, DOC_REQ, CITIES, STAGE_ORDER, stageIndex, SignIn, Code, Join, EnterCode, ApplicationForm, StatusHub, Documents, Contract, StoreSetup, defaultHours, defaultDocs } });
})();
