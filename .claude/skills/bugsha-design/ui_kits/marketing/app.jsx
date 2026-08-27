// Bugsha marketing site — route table.
(function(){
const ROUTES = {
  "/": () => window.SiteHome,
  "/how-it-works": () => window.SiteHowItWorks,
  "/partners": () => window.SitePartners,
  "/impact": () => window.SiteImpact,
};
function App(){
  const route = window.useSiteRoute();
  const first = React.useRef(true);
  // Back/forward and direct hash edits land at the previous scroll offset; reset like a real page load.
  React.useEffect(()=>{ if(first.current){ first.current=false; return; } window.scrollTo(0,0); },[route]);
  const Page = (ROUTES[route] || ROUTES["/"])();
  return <Page key={route} />;
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
})();
