/* ===== Casa de Don Simón — app logic ===== */
(function(){
"use strict";

/* ---------- language state ---------- */
function getSavedLang(){
  try{
    const s = localStorage.getItem("cds_lang");
    if(s && UI[s]) return s;
  }catch(e){}
  return null;
}
let currentLang = getSavedLang() || DEFAULT_LANG;

function setLang(code){
  if(!UI[code]) return;
  currentLang = code;
  try{ localStorage.setItem("cds_lang", code); }catch(e){}
  document.documentElement.setAttribute("lang", code);
  render();
}

function t(){ return UI[currentLang]; }

/* ---------- icons ---------- */
const ICONS = {
  cave:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20c1-7 4.5-14 10-14s9 7 10 14"/><path d="M9 20c.3-3 1.2-6 3-6s2.7 3 3 6"/></svg>',
  waterfall:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3h16"/><path d="M6 3v7a4 4 0 0 0 4 4"/><path d="M18 3v5a4 4 0 0 1-4 4h-1"/><path d="M9 14v3a3 3 0 0 0 3 3"/><path d="M15 14v2a3 3 0 0 1-3 3"/><path d="M6 20l0-3M12 20l0-2M18 20l0-4"/></svg>',
  mine:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l3-9h12l3 9"/><path d="M9 21v-5h6v5"/><path d="M7 12l2-7h6l2 7"/><circle cx="12" cy="6" r="2"/></svg>',
  star:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L12 16.9 6.4 20l1.4-6.2L3 9.5l6.4-.6z"/></svg>',
  pool:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 17c1.5 1.3 3 1.3 4.5 0s3-1.3 4.5 0 3 1.3 4.5 0 3-1.3 4.5 0"/><path d="M2 21c1.5 1.3 3 1.3 4.5 0s3-1.3 4.5 0 3 1.3 4.5 0 3-1.3 4.5 0"/><path d="M6 13V6a2 2 0 0 1 2-2h1l7 7"/></svg>',
  garden:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21V9"/><path d="M12 9C12 5 9 3 5 3c0 4 3 6 7 6z"/><path d="M12 9c0-4 3-6 7-6 0 4-3 6-7 6z"/><path d="M6 21h12"/></svg>',
  kitchen:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18"/><circle cx="7.5" cy="7" r=".6" fill="currentColor" stroke="none"/><circle cx="11" cy="7" r=".6" fill="currentColor" stroke="none"/></svg>',
  laundry:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="13" r="5"/><circle cx="7" cy="6.2" r=".4" fill="currentColor" stroke="none"/><circle cx="9.4" cy="6.2" r=".4" fill="currentColor" stroke="none"/></svg>',
  ac:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="7" rx="2"/><path d="M6 17v2M10 17v3M14 17v2M18 17v3"/></svg>',
  wifi:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9c5.5-5 14.5-5 20 0"/><path d="M5.5 13c3.8-3.4 9.2-3.4 13 0"/><path d="M9 17c1.8-1.6 4.2-1.6 6 0"/><circle cx="12" cy="20.2" r=".9" fill="currentColor" stroke="none"/></svg>',
  parking:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 16V7h3.5a2.75 2.75 0 1 1 0 5.5H9"/></svg>',
  balcony:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21V9l9-6 9 6v12"/><path d="M3 21h18"/><path d="M7 21v-7h10v7"/></svg>',
  shield:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6z"/><path d="M9.5 12l1.8 1.8L15 10"/></svg>',
  plane:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 8.5L3 12l3 1.5 1.5 3 1.5-4.5"/><path d="M10.5 8.5L17 4l3 3-4.5 6.5-4.5 1.5"/><path d="M9.5 14.5l4-1"/></svg>',
  bolt:'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M13 2 3 14h7l-1 8 11-14h-7z"/></svg>',
  flag:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V4"/><path d="M5 4h14l-3 4 3 4H5"/></svg>',
  food:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 2v8a2 2 0 0 0 4 0V2"/><path d="M9 2v20"/><path d="M9 10V2"/><path d="M16 2c-1.5 0-3 1.8-3 5s1 6 3 6v9"/></svg>',
  pin:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.3-7-12a7 7 0 0 1 14 0c0 5.7-7 12-7 12z"/><circle cx="12" cy="9" r="2.4"/></svg>',
  clock:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  arrowR:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13"/><path d="M13 6l6 6-6 6"/></svg>',
  arrowL:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6"/><path d="M11 18l-6-6 6-6"/></svg>',
  menu:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  close:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  chevron:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
  castle:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V9l2-2V5h2v2l2-2v3l2-2v3l2-2v3l2-2v2l2 2v12"/><path d="M4 21h18"/><path d="M9 21v-5h3v5"/></svg>',
  ferris:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="11" r="8"/><circle cx="12" cy="11" r="1.4" fill="currentColor" stroke="none"/><path d="M12 3v16M4.5 6.5l15 9M19.5 6.5l-15 9"/><path d="M9 21h6M12 19v2"/></svg>',
  flamingo:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3c3 0 4 2.5 3 5l-2 4"/><path d="M9 8c2 1 2.5 3 1.5 5l-1 3"/><circle cx="7.8" cy="4.2" r=".5" fill="currentColor" stroke="none"/><path d="M9.5 16c-1 1.5-1 3 0 5"/><path d="M9.5 16l-2.5 1"/><path d="M4 21c0-3 2-5 2-5"/></svg>',
  ship:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15h16l-2 6H6z"/><path d="M6 15V6h2m8 9V4h-2M8 6h8M12 4v2"/><path d="M2 19c1.5 1.3 3 1.3 4.5 0s3-1.3 4.5 0 3 1.3 4.5 0 3-1.3 4.5 0"/></svg>',
  cactus:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21V7a2 2 0 1 1 4 0v3a2 2 0 0 0 2 2h1"/><path d="M12 11a2 2 0 1 0-4 0v2a2 2 0 0 1-2 2H5"/><path d="M12 21h-2m2 0h2"/><path d="M12 4v0"/></svg>',
  mountain:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20l6.5-11L14 15l2.5-4L21 20z"/><path d="M9.5 9l2 3.4"/></svg>',
  dome:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20h18"/><path d="M4 20V11a8 8 0 0 1 16 0v9"/><path d="M8 20v-6M12 20v-8M16 20v-6"/></svg>',
  paw:'<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="7" cy="9" r="2"/><circle cx="12" cy="6.5" r="2"/><circle cx="17" cy="9" r="2"/><path d="M12 12.5c3 0 5.5 2 5.5 4.5 0 1.8-1.4 3-3.2 3-1 0-1.6-.5-2.3-.5s-1.3.5-2.3.5c-1.8 0-3.2-1.2-3.2-3 0-2.5 2.5-4.5 5.5-4.5z"/></svg>',
  boat:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15h18l-2.5 5h-13z"/><path d="M12 15V5l5 4"/><path d="M2 19c1.5 1.3 3 1.3 4.5 0s3-1.3 4.5 0 3 1.3 4.5 0 3-1.3 4.5 0"/></svg>',
  globe:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 4 5.8 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.8-4-9s1.5-6.5 4-9z"/></svg>',
  wave:'<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9c2.8-2.5 5.6-2.5 8.4 0s5.6 2.5 8.4 0"/><path d="M2 15c2.8-2.5 5.6-2.5 8.4 0s5.6 2.5 8.4 0"/><path d="M2 21c2.8-2.5 5.6-2.5 8.4 0s5.6 2.5 8.4 0"/></svg>',
  grape:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3"/><path d="M9.5 4.5h5"/><circle cx="9" cy="9" r="2.2"/><circle cx="15" cy="9" r="2.2"/><circle cx="12" cy="12.5" r="2.2"/><circle cx="7.2" cy="13.5" r="2.2"/><circle cx="16.8" cy="13.5" r="2.2"/><circle cx="9.5" cy="17.5" r="2.2"/><circle cx="14.5" cy="17.5" r="2.2"/></svg>',
  musicOn:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/></svg>',
  musicOff:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/><path d="M3 3l18 18" stroke-width="2"/></svg>',
  chat:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.4H12a8.5 8.5 0 0 1-4.2-1.1L3 20l1.2-4.8A8.4 8.4 0 0 1 12 3.1h.4a8.38 8.38 0 0 1 8.4 8.4z"/><path d="M8 11h.01M12 11h.01M16 11h.01" stroke-width="2.2"/></svg>'
};
const REGION_ICON = { alicante:ICONS.wave, murcia:ICONS.mountain, andalusia:ICONS.cactus, valencia:ICONS.boat };
const REGION_CLASS = { alicante:"reg-alicante", murcia:"reg-murcia", andalusia:"reg-andalusia", valencia:"reg-valencia" };
const CAT_ICON = { caves:ICONS.cave, waterfalls:ICONS.waterfall, mines:ICONS.mine, other:ICONS.star };
const CAT_CLASS = { caves:"cat-caves", waterfalls:"cat-waterfalls", mines:"cat-mines", other:"cat-other" };
function attrIcon(a){ return (a.icon && ICONS[a.icon]) ? ICONS[a.icon] : CAT_ICON[a.category]; }
const AMENITY_ICON = [ICONS.pool, ICONS.garden, ICONS.kitchen, ICONS.laundry, ICONS.ac, ICONS.wifi, ICONS.parking, ICONS.balcony, ICONS.shield];

function esc(s){
  return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}

/* ---------- routing ---------- */
function parseHash(){
  const h = (location.hash || "#/").replace(/^#\/?/, "");
  const parts = h.split("/").filter(Boolean);
  if(parts.length === 0) return {page:"home"};
  if(parts[0] === "region" && parts[1]) return {page:"region", id:parts[1]};
  return {page:parts[0]};
}

function go(hash){ location.hash = hash; }

/* ---------- small view helpers ---------- */
function regionById(id){ return REGIONS.find(r => r.id === id); }
function attractionsByRegion(id){ return ATTRACTIONS.filter(a => a.region === id); }
function catCount(regionId, cat){ return ATTRACTIONS.filter(a => a.region===regionId && a.category===cat).length; }

function regionCardHTML(r){
  const ri = r.i18n[currentLang];
  const cats = ["caves","waterfalls","mines","other"].filter(c => catCount(r.id,c) > 0);
  const count = attractionsByRegion(r.id).length;
  const driveTxt = r.isHome ? t().homeBase : `<span class="icon">${ICONS.clock}</span> ${esc(regionDriveLabel(r))} ${esc(t().driveFrom)}`;
  return `<button class="region-card ${REGION_CLASS[r.id]||""}" onclick="CDS.go('region/${r.id}')">
    <div class="region-panel">
      <span class="region-panel-icon">${REGION_ICON[r.id]||ICONS.star}</span>
      <span class="region-panel-count">${count} ${esc(t().attractionsCount)}</span>
    </div>
    <div class="region-card-body">
      <span class="tag">${esc(ri.tagline)}</span>
      <h3>${esc(ri.name)}</h3>
      <p>${esc(ri.intro)}</p>
      <div class="cats">${cats.map(c => `<span class="chip">${CAT_ICON[c]} ${esc(t().regionPage.categories[c])}</span>`).join("")}</div>
      <div class="drive">${driveTxt}</div>
    </div>
  </button>`;
}
function regionDriveLabel(r){
  // shortest drive time among its attractions, as a representative figure
  const list = attractionsByRegion(r.id).map(a => a.drive);
  return list.length ? list[0] : "";
}

function miniRouteSVG(destLabel, badgeText){
  const w = Math.max(90, badgeText.length * 5.2 + 24);
  return `<svg viewBox="0 0 300 110" role="img" aria-label="Schematic route from the apartment to ${esc(destLabel)}">
    <path class="route-line" d="M30,80 C80,40 130,95 180,55 C210,35 230,50 260,30" fill="none" stroke="var(--sea-bright)" stroke-width="2.4" stroke-linecap="round"/>
    <g transform="translate(30,80)">
      <circle r="9" fill="var(--sea-deep)"/>
      <path d="M-3.5,1 L-3.5,-2.5 L0,-5.5 L3.5,-2.5 L3.5,1 Z" fill="#fff"/>
      <text class="pin-label" x="0" y="21" text-anchor="middle">Casa de Don Simón</text>
    </g>
    <g transform="translate(260,30)">
      <circle r="9" fill="var(--coral)"/>
      <path d="M-4,2 C-2,-1 2,-1 4,2" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/>
      <text class="pin-label" x="0" y="-15" text-anchor="middle">${esc(destLabel)}</text>
    </g>
    <g transform="translate(150,95)">
      <rect x="${-w/2}" y="-11" width="${w}" height="22" rx="11" fill="var(--paper)" stroke="var(--line)"/>
      <text class="route-badge-text" x="0" y="4" text-anchor="middle">${esc(badgeText)}</text>
    </g>
  </svg>`;
}

function attrCardHTML(a){
  const ai = a.i18n[currentLang];
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ai.name + ", " + a.town);
  const catClass = CAT_CLASS[a.category] || "cat-other";
  const hasPhoto = a.photo && LOCAL_IMAGES[a.photo];
  const routeId = "route-" + a.id;
  return `<div class="attr-card ${catClass}">
    <div class="attr-panel${hasPhoto ? " attr-panel-photo" : ""}">
      ${hasPhoto ? `<img src="${LOCAL_IMAGES[a.photo]}" alt="${esc(ai.name)}" loading="lazy"/>` : `<span class="attr-panel-icon">${attrIcon(a)}</span>`}
    </div>
    <div class="attr-body">
      <h4>${esc(ai.name)}</h4>
      <p>${esc(ai.desc)}</p>
      <div class="attr-meta">${ICONS.clock} ${esc(a.drive)} ${esc(t().driveFrom)} · ${esc(a.town)}</div>
      <div class="attr-links">
        ${a.url ? `<a class="btn btn-ghost btn-sm" href="${esc(a.url)}" target="_blank" rel="noopener">${ICONS.globe} ${esc(t().common.website)}</a>` : ""}
        <a class="btn btn-ghost btn-sm" href="${mapUrl}" target="_blank" rel="noopener">${esc(t().common.directions)}</a>
        <button class="btn btn-ghost btn-sm attr-route-toggle" onclick="CDS.toggleRoute('${routeId}')" aria-expanded="false" aria-controls="${routeId}">${ICONS.pin} ${esc(t().common.routeMap)}</button>
      </div>
      <div class="attr-route" id="${routeId}" hidden>${miniRouteSVG(ai.name, a.drive + " " + t().driveFrom)}</div>
    </div>
  </div>`;
}

function routeMapSVG(badgeText, youAreHere){
  const w = Math.max(140, badgeText.length * 6.6 + 32);
  const homeMap = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Cabo Roig, Orihuela Costa, Alicante");
  const beachMap = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Cabo Roig Beach, Orihuela Costa");
  return `<svg viewBox="0 0 600 190" role="img" aria-label="Schematic route from the apartment to Cabo Roig beach">
    <path class="route-line" d="M60,130 C160,60 260,170 340,110 C410,58 470,95 530,60" fill="none" stroke="var(--sea-bright)" stroke-width="3" stroke-linecap="round" stroke-dasharray="1 14"/>
    <a href="${homeMap}" target="_blank" rel="noopener" class="route-pin">
    <g transform="translate(60,130)">
      <circle r="15" fill="var(--sea-deep)"/>
      <path d="M-6,2 L-6,-4 L0,-9 L6,-4 L6,2 Z M-3,2 L-3,-1 L3,-1 L3,2" fill="none" stroke="#fff" stroke-width="1.3" stroke-linejoin="round"/>
      <text class="pin-label" x="0" y="34" text-anchor="middle">Casa de Don Simón</text>
      <text class="pin-sub" x="0" y="47" text-anchor="middle">${esc(youAreHere)}</text>
    </g>
    </a>
    <a href="${beachMap}" target="_blank" rel="noopener" class="route-pin">
    <g transform="translate(530,60)">
      <circle r="15" fill="var(--coral)"/>
      <path d="M-7,3 C-4,-2 4,-2 7,3" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M-6,-3 L6,-3" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>
      <circle cx="0" cy="-6" r="1.6" fill="#fff"/>
      <text class="pin-label" x="0" y="-26" text-anchor="middle">Cabo Roig beach</text>
    </g>
    </a>
    <g transform="translate(300,150)">
      <rect x="${-w/2}" y="-16" width="${w}" height="30" rx="15" fill="var(--paper)" stroke="var(--line)"/>
      <text class="route-badge-text" x="0" y="4" text-anchor="middle">${esc(badgeText)}</text>
    </g>
  </svg>`;
}

/* ---------- multi-pin area map (restaurants / beaches) ---------- */
function areaMapSVG(items, homeLabel){
  const W = 680, H = 460, cx = W/2, cy = H/2 - 6;
  const n = items.length;
  const rx = Math.min(cx - 118, 205), ry = Math.min(cy - 60, 150);
  const pins = items.map((it,i) => {
    const angle = (-90 + (360/n)*i) * Math.PI/180;
    const x = cx + rx*Math.cos(angle);
    const y = cy + ry*Math.sin(angle);
    return Object.assign({x,y,angle}, it);
  });
  const lines = pins.map(p => `<path class="route-line" d="M${cx.toFixed(1)},${cy.toFixed(1)} L${p.x.toFixed(1)},${p.y.toFixed(1)}" fill="none" stroke="var(--sea-bright)" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="1 11" opacity=".5"/>`).join("");
  const pinEls = pins.map(p => {
    const cosA = Math.cos(p.angle), sinA = Math.sin(p.angle);
    let anchor = "middle", dx = 0, dy = sinA < -0.35 ? -22 : (sinA > 0.35 ? 30 : 6);
    if(cosA > 0.35){ anchor = "start"; dx = 16; dy = 5; }
    else if(cosA < -0.35){ anchor = "end"; dx = -16; dy = 5; }
    const fill = p.paid ? "var(--sun)" : "var(--coral)";
    return `<a href="${p.mapUrl}" target="_blank" rel="noopener" class="route-pin area-pin" aria-label="${esc(p.label)}">
      <g transform="translate(${p.x.toFixed(1)},${p.y.toFixed(1)})">
        <circle r="13" fill="${fill}"/>
        <text class="area-pin-num" x="0" y="4.5" text-anchor="middle">${p.num}</text>
        <text class="pin-label" x="${dx}" y="${dy}" text-anchor="${anchor}">${esc(p.label)}</text>
      </g>
    </a>`;
  }).join("");
  return `<svg viewBox="0 0 ${W} ${H}" class="area-map-svg" role="img" aria-label="${esc(homeLabel)} area map">
    ${lines}
    <g transform="translate(${cx},${cy})">
      <circle r="16" fill="var(--sea-deep)"/>
      <path d="M-6.5,2.5 L-6.5,-4 L0,-9.5 L6.5,-4 L6.5,2.5 Z M-3,2.5 L-3,-1 L3,-1 L3,2.5" fill="none" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/>
      <text class="pin-label" x="0" y="34" text-anchor="middle" font-weight="700">${esc(homeLabel)}</text>
    </g>
    ${pinEls}
  </svg>`;
}

/* ---------- pages ---------- */
function pageHome(){
  const u = t();
  return `
  <section class="hero">
    <div class="hero-bg">
      <img src="${LOCAL_IMAGES.pool}" alt="Community pool at Casa de Don Simón, Cabo Roig" loading="eager"/>
    </div>
    <div class="hero-scrim"></div>
    <div class="hero-inner wrap">
      <div class="hero-eyebrow">${ICONS.pin} ${esc(u.hero.eyebrow)}</div>
      <h1>${esc(u.hero.title)}</h1>
      <p class="lead">${esc(u.hero.lead)}</p>
      <div class="hero-cta">
        <a class="btn btn-primary" href="${BOOKING_URL}" target="_blank" rel="noopener">${esc(u.hero.ctaBook)}</a>
        <button class="btn btn-outline-light" onclick="CDS.go('attractions')">${esc(u.hero.ctaExplore)}</button>
      </div>
      <div class="hero-stats">
        ${u.hero.stats.map(s => {
          const m = String(s.n).match(/^(\d+)(.*)$/);
          if(m){
            const num = m[1], suffix = esc(m[2]);
            return `<div class="hero-stat"><b data-count="${num}" data-suffix="${suffix}">0${suffix}</b><span>${esc(s.l)}</span></div>`;
          }
          return `<div class="hero-stat"><b>${esc(s.n)}</b><span>${esc(s.l)}</span></div>`;
        }).join("")}
      </div>
    </div>
  </section>

  <section class="wrap hero-amenity-strip">
    <div class="amenity-chip-row">
      ${u.apartmentPage.amenities.slice(0,6).map((a,i) => `<div class="amenity-chip"><span class="icon">${AMENITY_ICON[i]}</span>${esc(a.l)}</div>`).join("")}
    </div>
  </section>

  <section class="wrap">
    <div class="section-head">
      <div class="eyebrow">${esc(u.highlights.eyebrow)}</div>
      <h2>${esc(u.highlights.title)}</h2>
    </div>
    <div class="highlight-grid reveal-stagger">
      ${[ICONS.pool, ICONS.pin, ICONS.kitchen, ICONS.star].map((icon,i) => `
        <div class="highlight-card">
          <span class="icon">${icon}</span>
          <h3>${esc(u.highlights.items[i].t)}</h3>
          <p>${esc(u.highlights.items[i].d)}</p>
        </div>`).join("")}
    </div>
  </section>

  <section class="wrap">
    <div class="between">
      <div class="section-head" style="margin-bottom:0">
        <div class="eyebrow">${esc(u.regionsTeaser.eyebrow)}</div>
        <h2>${esc(u.regionsTeaser.title)}</h2>
        <p>${esc(u.regionsTeaser.sub)}</p>
      </div>
      <button class="btn btn-ghost btn-sm" onclick="CDS.go('attractions')">${esc(u.regionsTeaser.cta)} ${ICONS.arrowR}</button>
    </div>
    <div class="region-grid reveal-stagger" style="margin-top:28px">
      ${REGIONS.map(regionCardHTML).join("")}
    </div>
  </section>

  <section class="wrap">
    <div class="cta-band">
      <h2>${esc(u.ctaBand.title)}</h2>
      <p>${esc(u.ctaBand.sub)}</p>
      <a class="btn btn-primary" href="${BOOKING_URL}" target="_blank" rel="noopener">${esc(u.ctaBand.cta)}</a>
    </div>
  </section>`;
}

function pageApartment(){
  const u = t(); const p = u.apartmentPage;
  return `
  <section class="page-hero">
    <div class="page-hero-bg"><img src="${APT_IMAGES.living1}" alt="Living room at Casa de Don Simón" loading="eager"/></div>
    <div class="wrap">
      <div class="hero-eyebrow">${esc(p.eyebrow)}</div>
      <h1>${esc(p.title)}</h1>
      <p>${esc(APARTMENT_DESC[currentLang])}</p>
      <div class="hero-cta" style="margin-top:24px">
        <a class="btn btn-primary" href="${BOOKING_URL}" target="_blank" rel="noopener">${esc(p.bookCta)}</a>
        <button class="btn btn-outline-light" onclick="CDS.go('gallery')">${esc(p.galleryCta)}</button>
      </div>
    </div>
  </section>
  <section class="wrap">
    <div class="section-head"><h2>${esc(p.amenitiesTitle)}</h2></div>
    <div class="amenity-grid reveal-stagger">
      ${p.amenities.map((a,i) => `<div class="amenity"><span class="icon">${AMENITY_ICON[i]}</span><span>${esc(a.l)}</span></div>`).join("")}
    </div>
  </section>
  <section class="wrap">
    <div class="section-head">
      <h2>${esc(p.locationTitle)}</h2>
      <p>${esc(p.locationSub)}</p>
    </div>
    <div class="distance-list">
      ${p.distances.map(d => `<div class="distance-row"><span>${esc(d.l)}</span><b>${esc(d.v)}</b></div>`).join("")}
    </div>
    <p style="margin-top:16px;color:var(--ink-soft);font-size:.9rem;max-width:68ch">${esc(p.parkingNote)}</p>
    <div class="route-map">
      <div class="route-map-head">
        <h3>${esc(p.mapTitle)}</h3>
        <a class="btn btn-ghost btn-sm" href="https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent('Casa de Don Simón, Cabo Roig, Orihuela Costa')}&destination=${encodeURIComponent('Cabo Roig Beach, Orihuela Costa')}" target="_blank" rel="noopener">${esc(p.mapCta)}</a>
      </div>
      ${routeMapSVG(p.mapDistance, p.mapHere)}
    </div>
  </section>
  <section class="wrap">
    <div class="section-head"><h2>${esc(p.airportsTitle)}</h2></div>
    <div class="distance-list">
      ${p.airports.map(d => `<div class="distance-row"><span>${ICONS.plane} ${esc(d.l)}</span><b>${esc(d.v)}</b></div>`).join("")}
    </div>
    <p style="margin-top:16px;color:var(--ink-soft);font-size:.9rem;max-width:68ch">${esc(p.airportNote)}</p>
    <div class="transport-cta">
      <span class="icon-badge">${ICONS.bolt}</span>
      <div class="transport-cta-text">
        <strong>${esc(p.boltTitle)}</strong>
        <span>${esc(p.boltNote)}</span>
      </div>
      <a class="btn btn-ghost btn-sm" href="${BOLT_URL}" target="_blank" rel="noopener">${esc(p.boltCta)}</a>
    </div>
  </section>
  <section class="wrap">
    <div class="section-head">
      <h2>${esc(p.restaurantsTitle)}</h2>
      <p>${esc(p.restaurantsSub)}</p>
    </div>
    <div class="area-map">
      ${areaMapSVG(p.restaurants.map((r,i) => {
        let label = r.place.includes(",") ? r.place.split(",").pop().trim() : r.place.split("·")[0].trim();
        if(label.length > 19) label = label.slice(0,17).trim() + "…";
        return {
          num: i+1,
          label,
          mapUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(r.name + ", " + r.place)
        };
      }), t().homeBase)}
    </div>
    <div class="restaurant-grid reveal-stagger">
      ${p.restaurants.map((r,i) => `
        <div class="restaurant-card">
          ${r.photo && LOCAL_IMAGES[r.photo] ? `<span class="restaurant-photo"><span class="pin-number">${i+1}</span><img src="${LOCAL_IMAGES[r.photo]}" alt="${esc(r.name)}" loading="lazy"/></span>` : `<span class="icon-badge"><span class="pin-number">${i+1}</span>${ICONS.food}</span>`}
          <div class="restaurant-body">
            <h4>${esc(r.name)}</h4>
            <span class="place">${esc(r.place)}</span>
            <p>${esc(r.desc)}</p>
            <div class="attr-links">
              <a class="btn btn-ghost btn-sm" href="${esc(r.url)}" target="_blank" rel="noopener">${esc(p.restaurantsCta)}</a>
              <a class="btn btn-ghost btn-sm" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.name + ', ' + r.place)}" target="_blank" rel="noopener">${esc(t().common.directions)}</a>
            </div>
          </div>
        </div>`).join("")}
    </div>
  </section>
  <section class="wrap">
    <div class="section-head">
      <h2>${esc(p.beachesTitle)}</h2>
      <p>${esc(p.beachesSub)}</p>
    </div>
    <div class="notice-box">
      <span class="icon-badge">${ICONS.parking}</span>
      <p>${esc(p.beachesImportant)}</p>
    </div>
    <div class="area-map">
      ${areaMapSVG(BEACHES.map((b,i) => {
        let label = b.i18n[currentLang].name.split(",")[0];
        if(label.length > 19) label = label.slice(0,17).trim() + "…";
        return {
          num: i+1,
          label,
          paid: b.paid,
          mapUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(b.i18n[currentLang].name + ", Alicante")
        };
      }), t().homeBase)}
    </div>
    <div class="legend-row">
      <span class="legend-item"><span class="legend-dot dot-free"></span>${esc(t().common.parkingFree)}</span>
      <span class="legend-item"><span class="legend-dot dot-paid"></span>${esc(t().common.parkingPaid)}</span>
    </div>
    <div class="restaurant-grid reveal-stagger">
      ${BEACHES.map((b,i) => `
        <div class="restaurant-card beach-card">
          <span class="icon-badge${b.paid ? " badge-paid" : " badge-free"}"><span class="pin-number">${i+1}</span>${ICONS.wave}</span>
          <div class="restaurant-body">
            <h4>${esc(b.i18n[currentLang].name)}</h4>
            <span class="place">${ICONS.clock} ${esc(b.drive)} ${esc(t().driveFrom)}</span>
            <p>${esc(b.i18n[currentLang].desc)}</p>
            <span class="parking-badge${b.paid ? " parking-paid" : " parking-free"}">${ICONS.parking} ${esc(b.paid ? t().common.parkingPaid : t().common.parkingFree)}</span>
            <div class="attr-links">
              <a class="btn btn-ghost btn-sm" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.i18n[currentLang].name + ', Alicante')}" target="_blank" rel="noopener">${esc(t().common.directions)}</a>
            </div>
          </div>
        </div>`).join("")}
    </div>
  </section>`;
}

function pageGallery(){
  const u = t(); const p = u.galleryPage;
  const items = (typeof GALLERY !== "undefined" ? GALLERY : []).filter(g => APT_IMAGES[g.key]);
  const grid = items.length
    ? `<div class="gallery-grid reveal-stagger">${items.map(g => `
        <button class="gallery-item" onclick="CDS.lightbox('${g.key}')" aria-label="${esc(p.cats[g.cat] || "")}">
          <img src="${APT_IMAGES[g.key]}" alt="${esc(p.cats[g.cat] || "")}" loading="lazy"/>
          <span class="gallery-item-label">${esc(p.cats[g.cat] || "")}</span>
        </button>`).join("")}</div>`
    : `<div class="gallery-placeholder">
        <span class="icon-badge">${ICONS.pool}</span>
        <p>${esc(p.comingSoon)}</p>
      </div>`;
  return `
  <section class="page-hero">
    <div class="wrap">
      <div class="hero-eyebrow">${esc(p.eyebrow)}</div>
      <h1>${esc(p.title)}</h1>
      <p>${esc(p.sub)}</p>
    </div>
  </section>
  <section class="wrap">
    ${grid}
  </section>`;
}

let attrFilter = "all";
function pageAttractions(){
  const u = t(); const p = u.attractionsPage; const catLabels = u.regionPage.categories;
  const cats = ["caves","waterfalls","mines","other"];
  const counts = {}; cats.forEach(c => counts[c] = ATTRACTIONS.filter(a => a.category===c).length);
  const chips = `<div class="filter-row">
    <button class="filter-chip${attrFilter==="all"?" active":""}" onclick="CDS.filterAttractions('all')">${esc(p.allFilter||"All")} <span class="count">${ATTRACTIONS.length}</span></button>
    ${cats.map(c => `<button class="filter-chip${attrFilter===c?" active":""}" onclick="CDS.filterAttractions('${c}')">${CAT_ICON[c]} ${esc(catLabels[c])} <span class="count">${counts[c]}</span></button>`).join("")}
  </div>`;
  const body = attrFilter === "all"
    ? `<div class="region-grid reveal-stagger">${REGIONS.map(regionCardHTML).join("")}</div>`
    : `<div class="attr-grid reveal-stagger">${ATTRACTIONS.filter(a => a.category===attrFilter).map(attrCardHTML).join("")}</div>`;
  return `
  <section class="page-hero">
    <div class="page-hero-bg"><img src="${LOCAL_IMAGES.cuevaagua}" alt="Cueva del Agua, one of the region's show caves" loading="eager"/></div>
    <div class="wrap">
      <div class="hero-eyebrow">${esc(p.eyebrow)}</div>
      <h1>${esc(p.title)}</h1>
      <p>${esc(p.sub)}</p>
    </div>
  </section>
  <section class="wrap">
    ${chips}
    ${body}
  </section>`;
}

function pageRegion(id){
  const r = regionById(id);
  if(!r){ location.hash = "#/attractions"; return ""; }
  const u = t(); const ri = r.i18n[currentLang]; const rp = u.regionPage;
  const cats = ["caves","waterfalls","mines","other"];
  const blocks = cats.map(c => {
    const items = ATTRACTIONS.filter(a => a.region===id && a.category===c);
    if(!items.length) return "";
    return `<div class="category-block">
      <div class="category-head ${CAT_CLASS[c]}">
        <div class="icon-badge">${CAT_ICON[c]}</div>
        <div><h3>${esc(rp.categories[c])}</h3><span>${items.length} ${esc(u.attractionsCount)}</span></div>
      </div>
      <div class="attr-grid reveal-stagger">${items.map(attrCardHTML).join("")}</div>
    </div>`;
  }).join("");
  const REGION_HERO_IMG = { alicante: LOCAL_IMAGES.pool, murcia: LOCAL_IMAGES.cuevaserreta, andalusia: LOCAL_IMAGES.pulpi };
  const heroImg = REGION_HERO_IMG[id];
  return `
  <section class="page-hero">
    ${heroImg ? `<div class="page-hero-bg"><img src="${heroImg}" alt="${esc(ri.name)}" loading="eager"/></div>` : ""}
    <div class="wrap">
      <button class="back-link" style="color:#fff;opacity:.85" onclick="CDS.go('attractions')">${ICONS.arrowL} ${esc(rp.back)}</button>
      <div class="hero-eyebrow">${esc(ri.tagline)}</div>
      <h1>${esc(ri.name)}</h1>
      <p>${esc(ri.intro)}</p>
    </div>
  </section>
  <section class="wrap">${blocks}</section>`;
}

function pageContact(){
  const u = t(); const p = u.contactPage;
  return `
  <section class="page-hero">
    <div class="page-hero-bg"><img src="${APT_IMAGES.gterrace}" alt="Terrace at Casa de Don Simón" loading="eager"/></div>
    <div class="wrap">
      <div class="hero-eyebrow">${esc(p.eyebrow)}</div>
      <h1>${esc(p.title)}</h1>
      <p>${esc(p.sub)}</p>
      <div class="pill-row"><span class="pill">${ICONS.pin} ${esc(p.address)}</span></div>
      <div class="hero-cta" style="margin-top:26px">
        <a class="btn btn-primary" href="${BOOKING_URL}" target="_blank" rel="noopener">${esc(p.bookButton)}</a>
      </div>
      <p style="margin-top:10px;font-size:.82rem;color:rgba(255,255,255,.65)">${esc(p.mapNote)}</p>
    </div>
  </section>
  <section class="wrap" style="max-width:760px">
    <div class="whatsapp-cta">
      <span class="icon-badge">${ICONS.chat}</span>
      <div class="transport-cta-text">
        <strong>${esc(p.whatsappTitle)}</strong>
        <span>${esc(p.whatsappBody)}</span>
      </div>
      <a class="btn btn-primary btn-sm" href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(p.whatsappMsg)}" target="_blank" rel="noopener">${ICONS.chat} ${esc(p.whatsappCta)}</a>
    </div>
    <div class="transport-cta" style="margin-top:16px">
      <span class="icon-badge">${ICONS.clock}</span>
      <div class="transport-cta-text">
        <strong>${esc(p.syncTitle)}</strong>
        <span>${esc(p.syncBody)}</span>
      </div>
    </div>
    <div class="section-head" style="margin-top:40px;margin-bottom:18px">
      <h2>${esc(p.guestTitle)}</h2>
    </div>
    <div class="distance-list">
      ${p.guestItems.map(g => `<div class="distance-row" style="align-items:flex-start"><span style="font-weight:700;flex:none;width:40%">${esc(g.l)}</span><span style="text-align:right;color:var(--ink-soft)">${esc(g.v)}</span></div>`).join("")}
    </div>
  </section>`;
}

function pageLocal(){
  const u = t(); const p = u.localPage;
  return `
  <section class="page-hero">
    <div class="page-hero-bg"><img src="${LOCAL_IMAGES.dolphins1}" alt="Dolphins off the Costa Blanca coast" loading="eager"/></div>
    <div class="wrap">
      <div class="hero-eyebrow">${esc(p.eyebrow)}</div>
      <h1>${esc(p.title)}</h1>
      <p>${esc(p.sub)}</p>
    </div>
  </section>
  <section class="wrap">
    <div class="section-head">
      <h2>${esc(p.marketsTitle)}</h2>
      <p>${esc(p.marketsSub)}</p>
    </div>
    <div class="market-strip reveal-stagger">
      ${p.markets.map(m => `
        <div class="market-row">
          <span class="market-day">${esc(m.day)}</span>
          <div class="market-row-body"><strong>${esc(m.name)}</strong></div>
          <a class="btn btn-ghost btn-sm" href="${esc(m.url)}" target="_blank" rel="noopener">${esc(p.marketsCta)}</a>
        </div>`).join("")}
    </div>
  </section>
  <section class="wrap">
    <div class="feature-grid reveal-stagger">
      <div class="feature-card">
        <div class="feature-photos two">
          <img src="${LOCAL_IMAGES.dolphins1}" alt="Dolphins off the Costa Blanca coast" loading="lazy"/>
          <img src="${LOCAL_IMAGES.dolphins2}" alt="Dolphin watching boat trip" loading="lazy"/>
        </div>
        <div class="feature-body">
          <h3><span class="icon">${ICONS.star}</span>${esc(p.boatTitle)}</h3>
          <p>${esc(p.boatDesc)}</p>
          <div class="feature-note">${esc(p.boatNote)}</div>
          <a class="btn btn-ghost btn-sm" href="${esc(p.boatUrl)}" target="_blank" rel="noopener">${esc(p.boatCta)}</a>
        </div>
      </div>
      <div class="feature-card">
        <div class="feature-photos two">
          <img src="${LOCAL_IMAGES.pinkLake}" alt="Salinas de Torrevieja pink salt lake" loading="lazy"/>
          <img src="${LOCAL_IMAGES.pinkLakeAerial}" alt="Aerial view of the pink salt lake near Torrevieja" loading="lazy"/>
        </div>
        <div class="feature-body">
          <h3><span class="icon">${ICONS.star}</span>${esc(p.saltTitle)}</h3>
          <p>${esc(p.saltDesc)}</p>
          <div class="feature-note">${esc(p.saltTip)}</div>
          <a class="btn btn-ghost btn-sm" href="${esc(p.saltUrl)}" target="_blank" rel="noopener">${esc(p.saltCta)}</a>
        </div>
      </div>
      <div class="feature-card">
        <div class="feature-photos two">
          <img src="${LOCAL_IMAGES.train}" alt="Orihuela Costa tourist train" loading="lazy"/>
          <img src="${LOCAL_IMAGES.trainMap}" alt="Tourist train route map, Orihuela Costa" loading="lazy"/>
        </div>
        <div class="feature-body">
          <h3><span class="icon">${ICONS.plane}</span>${esc(p.trainTitle)}</h3>
          <p>${esc(p.trainDesc)}</p>
          <div class="feature-note">${esc(p.trainNote)}</div>
          <a class="btn btn-ghost btn-sm" href="${esc(p.trainUrl)}" target="_blank" rel="noopener">${esc(p.trainCta)}</a>
        </div>
      </div>
      <div class="feature-card">
        <div class="feature-photos">
          <img src="${LOCAL_IMAGES.kart}" alt="Go-Karts Orihuela Costa track, aerial view" loading="lazy"/>
        </div>
        <div class="feature-body">
          <h3><span class="icon">${ICONS.flag}</span>${esc(p.kartTitle)}</h3>
          <p>${esc(p.kartDesc)}</p>
          <div class="feature-note">${esc(p.kartNote)}</div>
          <a class="btn btn-ghost btn-sm" href="${esc(p.kartUrl)}" target="_blank" rel="noopener">${esc(p.kartCta)}</a>
        </div>
      </div>
      <div class="feature-card">
        <div class="feature-photos">
          <img src="${LOCAL_IMAGES.faelo}" alt="Barrel cellar at Bodegas Faelo winery" loading="lazy"/>
        </div>
        <div class="feature-body">
          <h3><span class="icon">${ICONS.grape}</span>${esc(p.wineTitle)}</h3>
          <p>${esc(p.wineDesc)}</p>
          <div class="feature-note">${esc(p.wineNote)}</div>
          <a class="btn btn-ghost btn-sm" href="${esc(p.wineUrl)}" target="_blank" rel="noopener">${esc(p.wineCta)}</a>
        </div>
      </div>
      <div class="feature-card">
        <div class="feature-photos two">
          <img src="${LOCAL_IMAGES.market1}" alt="Fresh produce at a local street market" loading="lazy"/>
          <img src="${LOCAL_IMAGES.paella}" alt="Paella cooked outdoors" loading="lazy"/>
        </div>
        <div class="feature-body">
          <h3><span class="icon">${ICONS.kitchen}</span>${esc(p.foodTitle)}</h3>
          <p>${esc(p.foodDesc)}</p>
        </div>
      </div>
    </div>
  </section>`;
}

/* ---------- shell render ---------- */
function headerHTML(){
  const u = t();
  const route = parseHash();
  const navItems = [
    {k:"home",h:"/"},{k:"apartment",h:"apartment"},{k:"attractions",h:"attractions"},{k:"local",h:"local"},{k:"gallery",h:"gallery"},{k:"contact",h:"contact"}
  ];
  const isActive = key => (route.page === "home" && key === "home") || route.page === key || (route.page==="region" && key==="attractions");
  return `
  <a class="skip-link" href="#view">Skip to content</a>
  <header class="site-header">
    <div class="header-inner">
      <button class="brand" onclick="CDS.go('/')" aria-label="Casa de Don Simón — home">
        <span class="brand-mark">CS</span>
        <span class="brand-text"><strong>Casa de Don Simón</strong><span>Cabo Roig · Costa Blanca</span></span>
      </button>
      <nav class="main-nav">
        ${navItems.map(n => `<button class="${isActive(n.k)?'active':''}" onclick="CDS.go('${n.h}')">${esc(u.nav[n.k])}</button>`).join("")}
      </nav>
      <div class="header-right">
        <div class="lang-select">
          <button class="lang-btn" id="langToggle" aria-haspopup="true" aria-expanded="false">
            <span>${LANGS.find(l=>l.code===currentLang).code.toUpperCase()}</span>${ICONS.chevron}
          </button>
          <div class="lang-menu" id="langMenu" hidden role="menu">
            ${LANGS.map(l => `<button role="menuitem" class="${l.code===currentLang?'active':''}" onclick="CDS.setLang('${l.code}')"><span>${esc(l.label)}</span><span class="lang-code">${l.code.toUpperCase()}</span></button>`).join("")}
          </div>
        </div>
        <button class="menu-toggle" id="mobileToggle" aria-label="Menu" aria-expanded="false">${ICONS.menu}</button>
      </div>
    </div>
    <nav class="mobile-nav" id="mobileNav" hidden>
      ${navItems.map(n => `<button class="${isActive(n.k)?'active':''}" onclick="CDS.go('${n.h}');CDS.closeMobile()">${esc(u.nav[n.k])}</button>`).join("")}
    </nav>
  </header>`;
}

function footerHTML(){
  const u = t();
  return `
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <h4>Casa de Don Simón</h4>
          <p>${esc(u.footer.about)}</p>
        </div>
        <div>
          <h4>${esc(u.footer.explore)}</h4>
          <div class="footer-links">
            <a href="#/apartment" onclick="event.preventDefault();CDS.go('apartment')">${esc(u.nav.apartment)}</a>
            <a href="#/attractions" onclick="event.preventDefault();CDS.go('attractions')">${esc(u.nav.attractions)}</a>
            <a href="#/local" onclick="event.preventDefault();CDS.go('local')">${esc(u.nav.local)}</a>
            <a href="#/gallery" onclick="event.preventDefault();CDS.go('gallery')">${esc(u.nav.gallery)}</a>
          </div>
        </div>
        <div>
          <h4>${esc(u.footer.book)}</h4>
          <div class="footer-links">
            <a href="#/contact" onclick="event.preventDefault();CDS.go('contact')">${esc(u.nav.contact)}</a>
            <a href="${BOOKING_URL}" target="_blank" rel="noopener">${esc(u.footer.bookLink)}</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>${esc(u.footer.rights)}</span>
        <span>${esc(u.footer.madeNote)}</span>
      </div>
    </div>
  </footer>`;
}

function render(keepScroll){
  const route = parseHash();
  document.getElementById("headerSlot").innerHTML = headerHTML();
  let html = "";
  if(route.page === "home") html = pageHome();
  else if(route.page === "apartment") html = pageApartment();
  else if(route.page === "attractions") html = pageAttractions();
  else if(route.page === "gallery") html = pageGallery();
  else if(route.page === "local") html = pageLocal();
  else if(route.page === "contact") html = pageContact();
  else if(route.page === "region") html = pageRegion(route.id);
  else html = pageHome();
  const view = document.getElementById("view");
  view.innerHTML = html;
  view.style.animation = "none";
  void view.offsetWidth;
  view.style.animation = "";
  document.getElementById("footerSlot").innerHTML = footerHTML();
  wireHeader();
  if(!keepScroll) window.scrollTo({top:0, behavior:"instant" in window ? "instant" : "auto"});
  initScrollFX();
  if(route.page === "home") animateHeroStats();
}

/* ---------- scroll-triggered motion ---------- */
function initScrollFX(){
  const targets = document.querySelectorAll(".reveal, .reveal-stagger, .route-map, .area-map");
  targets.forEach(el => {
    if(el.classList.contains("reveal-stagger")){
      Array.from(el.children).forEach((c,i) => c.style.setProperty("--i", i));
    }
  });
  if(typeof IntersectionObserver === "undefined"){
    targets.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if(en.isIntersecting){
        en.target.classList.add("is-visible");
        obs.unobserve(en.target);
      }
    });
  }, {threshold:0.12, rootMargin:"0px 0px -8% 0px"});
  targets.forEach(el => obs.observe(el));
  // safety net: never leave content permanently invisible if an observer
  // misfires or a target sits in a zero-height container momentarily.
  setTimeout(() => {
    targets.forEach(el => el.classList.add("is-visible"));
    obs.disconnect();
  }, 3500);
}

function animateHeroStats(){
  const wrap = document.querySelector(".hero-stats");
  if(!wrap || typeof IntersectionObserver === "undefined") return;
  const els = wrap.querySelectorAll("b[data-count]");
  if(!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if(!en.isIntersecting) return;
      els.forEach(el => {
        const target = parseInt(el.getAttribute("data-count"),10);
        const suffix = el.getAttribute("data-suffix") || "";
        const dur = 1100;
        const start = performance.now();
        function tick(now){
          const p = Math.min(1,(now-start)/dur);
          const eased = 1-Math.pow(1-p,3);
          el.textContent = Math.round(eased*target) + suffix;
          if(p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
      obs.unobserve(wrap);
    });
  }, {threshold:0.4});
  obs.observe(wrap);
}

function wireHeader(){
  const langToggle = document.getElementById("langToggle");
  const langMenu = document.getElementById("langMenu");
  if(langToggle){
    langToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = !langMenu.hidden;
      langMenu.hidden = open;
      langToggle.setAttribute("aria-expanded", String(!open));
    });
  }
  document.addEventListener("click", () => { if(langMenu) langMenu.hidden = true; }, {once:true});
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileNav = document.getElementById("mobileNav");
  if(mobileToggle){
    mobileToggle.addEventListener("click", () => {
      const open = !mobileNav.hidden;
      mobileNav.hidden = open;
      mobileToggle.innerHTML = open ? ICONS.menu : ICONS.close;
      mobileToggle.setAttribute("aria-expanded", String(!open));
    });
  }
}

/* ---------- lightbox ---------- */
function openLightbox(key){
  closeLightbox();
  const overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.id = "lightboxOverlay";
  overlay.innerHTML = `<button class="lightbox-close" aria-label="${esc(t().common.close)}">${ICONS.close}</button><img src="${APT_IMAGES[key]}" alt="${esc(t().common.photo)}"/>`;
  overlay.addEventListener("click", (e) => { if(e.target === overlay || e.target.closest(".lightbox-close")) closeLightbox(); });
  document.addEventListener("keydown", escClose);
  document.body.appendChild(overlay);
}
function escClose(e){ if(e.key === "Escape") closeLightbox(); }
function closeLightbox(){
  const el = document.getElementById("lightboxOverlay");
  if(el){ el.remove(); document.removeEventListener("keydown", escClose); }
}

/* ---------- background music ---------- */
let musicPlaying = false;
function musicButtonHTML(){
  return `<button id="musicToggle" class="music-toggle" aria-pressed="${musicPlaying}" aria-label="${esc(musicPlaying ? t().common.musicOff : t().common.musicOn)}">${musicPlaying ? ICONS.musicOn : ICONS.musicOff}</button>`;
}
function refreshMusicButton(){
  const btn = document.getElementById("musicToggle");
  if(!btn) return;
  btn.innerHTML = musicPlaying ? ICONS.musicOn : ICONS.musicOff;
  btn.setAttribute("aria-pressed", String(musicPlaying));
  btn.setAttribute("aria-label", musicPlaying ? t().common.musicOff : t().common.musicOn);
}
function toggleMusic(){
  const el = document.getElementById("bgMusic");
  if(!el) return;
  if(musicPlaying){
    el.pause();
    musicPlaying = false;
  } else {
    el.play().catch(() => {});
    musicPlaying = true;
  }
  refreshMusicButton();
}
function mountMusicPlayer(){
  if(document.getElementById("bgMusic")) return;
  const audio = document.createElement("audio");
  audio.id = "bgMusic";
  audio.loop = true;
  audio.preload = "none";
  audio.src = typeof BG_MUSIC !== "undefined" ? BG_MUSIC : "";
  document.body.appendChild(audio);
  const wrap = document.createElement("div");
  wrap.id = "musicToggleWrap";
  wrap.innerHTML = musicButtonHTML();
  document.body.appendChild(wrap);
  wrap.addEventListener("click", toggleMusic);
}

/* ---------- public API ---------- */
window.CDS = {
  go: (h) => { location.hash = h.startsWith("/") ? "#"+h : "#/"+h; },
  setLang: (code) => { setLang(code); refreshMusicButton(); },
  lightbox: (key) => { openLightbox(key); },
  closeMobile: () => { const m = document.getElementById("mobileNav"); if(m) m.hidden = true; },
  filterAttractions: (cat) => { attrFilter = cat; render(true); },
  toggleRoute: (id) => {
    const el = document.getElementById(id);
    if(!el) return;
    const btn = document.querySelector(`[aria-controls="${id}"]`);
    const opening = el.hidden;
    el.hidden = !opening;
    if(btn) btn.setAttribute("aria-expanded", String(opening));
    if(opening) requestAnimationFrame(() => el.classList.add("is-visible"));
  }
};

window.addEventListener("hashchange", () => render());
window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if(header) header.classList.toggle("is-scrolled", window.scrollY > 8);
}, {passive:true});
document.documentElement.setAttribute("lang", currentLang);
render();
mountMusicPlayer();
})();
