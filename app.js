
window.require = function(mod) {
  if (mod === 'react') {
    var r = window.React || {};
    if (!r.default) r.default = r;
    return r;
  }
  if (mod === 'react-dom' || mod === 'react-dom/client') {
    var rd = window.ReactDOM || {};
    if (!rd.default) rd.default = rd;
    return rd;
  }
  return {};
};

var RoyalWeddingApp = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // src/main.jsx
  var import_react11 = __toESM(__require("react"));
  var import_client = __toESM(__require("react-dom/client"));

  // src/App.jsx
  var import_react10 = __toESM(__require("react"));

  // src/components/WeddingHero.jsx
  var import_react = __toESM(__require("react"));
  function WeddingHero({ onExplore }) {
    const scrollToSection = (id) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };
    const handleScrollExplore = () => {
      if (onExplore) {
        onExplore();
      } else {
        scrollToSection("couples-section");
      }
    };
    return /* @__PURE__ */ import_react.default.createElement("section", { className: "wedding-hero-section", id: "hero-section" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-palace-backdrop", "aria-hidden": "true" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-radial-vignette" }), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-palace-silhouette" })), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-royal-arch-frame", "aria-hidden": "true" }, /* @__PURE__ */ import_react.default.createElement("svg", { viewBox: "0 0 400 120", className: "hero-arch-svg", preserveAspectRatio: "none" }, /* @__PURE__ */ import_react.default.createElement(
      "path",
      {
        d: "M 0,0 L 400,0 L 400,30 Q 300,30 250,70 Q 200,110 150,70 Q 100,30 0,30 Z",
        fill: "rgba(100, 27, 46, 0.45)"
      }
    ), /* @__PURE__ */ import_react.default.createElement(
      "path",
      {
        d: "M 0,0 L 400,0 L 400,20 Q 300,20 250,55 Q 200,95 150,55 Q 100,20 0,20 Z",
        fill: "none",
        stroke: "#D4AF65",
        strokeWidth: "1.5"
      }
    ))), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-content-wrapper", style: { padding: "24px 16px 28px" } }, /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-invocation-group" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-ganesha-emblem" }, /* @__PURE__ */ import_react.default.createElement(
      "img",
      {
        src: "assets/champagne_ganesha_bright.png",
        alt: "Lord Ganesha",
        className: "hero-ganesha-img",
        width: "48",
        height: "48"
      }
    )), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-shloka-text" }, "|| SHREE GANESHAY NAMAH ||"), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-shubh-vivah" }, "Auspicious Jain Wedding Celebration")), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-royal-badge", style: { margin: "14px 0 16px" } }, /* @__PURE__ */ import_react.default.createElement("span", { className: "badge-flourish" }, "\u2726"), /* @__PURE__ */ import_react.default.createElement("span", { className: "badge-text" }, "THE ROYAL WEDDING CELEBRATION"), /* @__PURE__ */ import_react.default.createElement("span", { className: "badge-flourish" }, "\u2726")), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-names-display", style: { width: "100%", maxWidth: "780px" } }, /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-couple-unit", style: { textAlign: "center", marginBottom: "10px" } }, /* @__PURE__ */ import_react.default.createElement("span", { style: {
      display: "inline-block",
      fontSize: "11px",
      letterSpacing: "2.5px",
      color: "var(--c-gold-light)",
      textTransform: "uppercase",
      marginBottom: "3px",
      fontWeight: 700
    } }, "First Couple"), /* @__PURE__ */ import_react.default.createElement("h1", { className: "hero-name-primary", style: { fontSize: "clamp(20px, 4.8vw, 34px)", lineHeight: 1.2 } }, "AYUSHMAN AKASH ", /* @__PURE__ */ import_react.default.createElement("span", { style: { color: "var(--c-gold)", fontSize: "0.8em" } }, "&"), " AYUSHMATI REENA"), /* @__PURE__ */ import_react.default.createElement("p", { style: {
      fontSize: "12.5px",
      color: "var(--c-gold-light)",
      margin: "3px 0 0",
      letterSpacing: "1px"
    } }, "Thursday, 10 December 2026")), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-ampersand-wrapper", style: { width: "180px", margin: "6px auto 12px" } }, /* @__PURE__ */ import_react.default.createElement("span", { className: "ampersand-line" }), /* @__PURE__ */ import_react.default.createElement("span", { className: "ampersand-symbol", style: { fontSize: "18px" } }, "\u2726 \u{1F451} \u2726"), /* @__PURE__ */ import_react.default.createElement("span", { className: "ampersand-line" })), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-couple-unit", style: { textAlign: "center" } }, /* @__PURE__ */ import_react.default.createElement("span", { style: {
      display: "inline-block",
      fontSize: "11px",
      letterSpacing: "2.5px",
      color: "var(--c-gold-light)",
      textTransform: "uppercase",
      marginBottom: "3px",
      fontWeight: 700
    } }, "Second Couple"), /* @__PURE__ */ import_react.default.createElement("h1", { className: "hero-name-primary", style: { fontSize: "clamp(20px, 4.8vw, 34px)", lineHeight: 1.2 } }, "AYUSHMATI SHIVANI (JEENU) ", /* @__PURE__ */ import_react.default.createElement("span", { style: { color: "var(--c-gold)", fontSize: "0.8em" } }, "&"), " AYUSHMAN DHEERAJ JI"), /* @__PURE__ */ import_react.default.createElement("p", { style: {
      fontSize: "12.5px",
      color: "var(--c-gold-light)",
      margin: "3px 0 0",
      letterSpacing: "1px"
    } }, "Saturday, 12 December 2026"))), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-date-badge", style: { marginTop: "18px", padding: "9px 22px", borderRadius: "30px" } }, /* @__PURE__ */ import_react.default.createElement("div", { className: "date-icon" }, "\u2726"), /* @__PURE__ */ import_react.default.createElement("div", { className: "date-main", style: { fontSize: "clamp(11px, 2.6vw, 13.5px)" } }, "SATURDAY, 12 DECEMBER 2026 \u2022 KUMAWAT VATIKA, PALI, RAJASTHAN"), /* @__PURE__ */ import_react.default.createElement("div", { className: "date-icon" }, "\u2726")), /* @__PURE__ */ import_react.default.createElement("p", { className: "hero-journey-quote", style: { marginTop: "16px", marginBottom: "14px" } }, "\u201CTwo Sacred Unions, One Joyous Family Celebration\u201D"), /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        className: "hero-scroll-indicator",
        onClick: handleScrollExplore,
        role: "button",
        tabIndex: 0,
        "aria-label": "Scroll down to wedding couples details",
        style: { marginTop: "16px", cursor: "pointer" }
      },
      /* @__PURE__ */ import_react.default.createElement("span", { className: "scroll-label" }, "Scroll to Explore"),
      /* @__PURE__ */ import_react.default.createElement("div", { className: "scroll-chevron-bounce" }, /* @__PURE__ */ import_react.default.createElement("svg", { viewBox: "0 0 24 24", className: "chevron-svg" }, /* @__PURE__ */ import_react.default.createElement("path", { d: "M7 10l5 5 5-5", fill: "none", stroke: "#D4AF65", strokeWidth: "2", strokeLinecap: "round" })))
    )));
  }

  // src/components/CouplesSection.jsx
  var import_react2 = __toESM(__require("react"));
  function CouplesSection() {
    return /* @__PURE__ */ import_react2.default.createElement("section", { className: "wedding-section couples-family-section", id: "couples-section" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "section-royal-card" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-border-gold-outer" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-border-gold-inner" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "section-header-flourish" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "shloka-text" }, "|| MANGAL PARINAYOTSAV ||"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "family-origin-pill" }, "THE ESTEEMED GEHLOT PARIVAR OF PALI"), /* @__PURE__ */ import_react2.default.createElement("h2", { className: "section-title-gold" }, "THE WEDDING COUPLES & FAMILY LINEAGE"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "section-subtitle-script" }, "With the divine blessings of Lord Ganesha, revered ancestral elders & parents"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "section-title-divider" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "divider-line" }), /* @__PURE__ */ import_react2.default.createElement("span", { className: "divider-star" }, "\u2726"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "divider-line" }))), /* @__PURE__ */ import_react2.default.createElement("div", { style: {
      background: "rgba(100, 27, 46, 0.25)",
      border: "1px solid rgba(212, 175, 101, 0.4)",
      borderRadius: "10px",
      padding: "14px 20px",
      maxWidth: "680px",
      margin: "0 auto 28px",
      textAlign: "center"
    } }, /* @__PURE__ */ import_react2.default.createElement("span", { style: { fontSize: "11px", letterSpacing: "2px", color: "var(--c-gold-light)", textTransform: "uppercase" } }, "Sacred Ancestral Blessings"), /* @__PURE__ */ import_react2.default.createElement("p", { style: {
      fontSize: "14px",
      color: "var(--c-ivory)",
      margin: "6px 0 0",
      lineHeight: 1.6,
      fontFamily: "Roboto Slab, serif"
    } }, "Great Grandchildren of ", /* @__PURE__ */ import_react2.default.createElement("strong", null, "Late Mrs. Lehri Bai & Late Mr. Gyarsilalji"), /* @__PURE__ */ import_react2.default.createElement("br", null), "Beloved Grandchildren of ", /* @__PURE__ */ import_react2.default.createElement("strong", null, "Mrs. Durga Bai & Late Mr. Madanlalji Gehlot"))), /* @__PURE__ */ import_react2.default.createElement("div", { style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
      gap: "20px",
      width: "100%",
      maxWidth: "1050px",
      margin: "0 auto",
      boxSizing: "border-box"
    } }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-profile-card prominent-family-card", style: { padding: "24px 18px" } }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "profile-frame-jharokha" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "avatar-art-container" }, /* @__PURE__ */ import_react2.default.createElement("svg", { viewBox: "0 0 140 140", className: "avatar-silhouette-svg" }, /* @__PURE__ */ import_react2.default.createElement("circle", { cx: "70", cy: "70", r: "65", fill: "#3B101C", stroke: "#D4AF65", strokeWidth: "2" }), /* @__PURE__ */ import_react2.default.createElement("circle", { cx: "70", cy: "70", r: "60", fill: "none", stroke: "rgba(212, 175, 101, 0.4)", strokeWidth: "1", strokeDasharray: "3 3" }), /* @__PURE__ */ import_react2.default.createElement("path", { d: "M70 38 C60 38 52 46 52 56 C52 66 60 72 70 72 C80 72 88 66 88 56 C88 46 80 38 70 38 Z", fill: "#E8D5A3" }), /* @__PURE__ */ import_react2.default.createElement("path", { d: "M46 44 C46 30 60 22 70 22 C80 22 94 30 94 44 C92 48 85 52 70 52 C55 52 48 48 46 44 Z", fill: "#D4AF65", stroke: "#8C6A28", strokeWidth: "1" }), /* @__PURE__ */ import_react2.default.createElement("path", { d: "M70 12 Q75 18 70 24 Q65 18 70 12 Z", fill: "#FFF9ED", stroke: "#D4AF65", strokeWidth: "1" }), /* @__PURE__ */ import_react2.default.createElement("circle", { cx: "70", cy: "24", r: "3", fill: "#8C1D40" }), /* @__PURE__ */ import_react2.default.createElement("path", { d: "M42 80 L70 90 L98 80 L102 118 L38 118 Z", fill: "#641B2E", stroke: "#D4AF65", strokeWidth: "1.2" }), /* @__PURE__ */ import_react2.default.createElement("line", { x1: "70", y1: "90", x2: "70", y2: "118", stroke: "#D4AF65", strokeWidth: "1.5" }), /* @__PURE__ */ import_react2.default.createElement("circle", { cx: "70", cy: "95", r: "1.5", fill: "#FFF9ED" }), /* @__PURE__ */ import_react2.default.createElement("circle", { cx: "70", cy: "103", r: "1.5", fill: "#FFF9ED" }), /* @__PURE__ */ import_react2.default.createElement("circle", { cx: "70", cy: "111", r: "1.5", fill: "#FFF9ED" }))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "profile-role-badge" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "role-tag" }, "FIRST WEDDING COUPLE"))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "profile-details-content" }, /* @__PURE__ */ import_react2.default.createElement("h3", { className: "profile-name", style: { fontSize: "clamp(20px, 4.2vw, 25px)" } }, "AYUSHMAN AKASH"), /* @__PURE__ */ import_react2.default.createElement("p", { style: {
      fontSize: "11px",
      letterSpacing: "2px",
      color: "var(--c-gold-light)",
      textTransform: "uppercase",
      margin: "2px 0 8px"
    } }, "Son of Mrs. Anuradha & Mr. Kailash Gehlot"), /* @__PURE__ */ import_react2.default.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      margin: "8px 0"
    } }, /* @__PURE__ */ import_react2.default.createElement("span", { style: { height: "1px", width: "30px", background: "var(--c-gold)" } }), /* @__PURE__ */ import_react2.default.createElement("span", { style: { fontSize: "15px", color: "var(--c-gold)", fontStyle: "italic", fontWeight: 700 } }, "Sang (Weds)"), /* @__PURE__ */ import_react2.default.createElement("span", { style: { height: "1px", width: "30px", background: "var(--c-gold)" } })), /* @__PURE__ */ import_react2.default.createElement("h3", { className: "profile-name", style: { fontSize: "clamp(20px, 4.2vw, 25px)" } }, "AYUSHMATI REENA"), /* @__PURE__ */ import_react2.default.createElement("p", { style: {
      fontSize: "11px",
      letterSpacing: "2px",
      color: "var(--c-gold-light)",
      textTransform: "uppercase",
      margin: "2px 0 12px"
    } }, "Daughter of Mrs. Jashoda Devi & Mr. Gopalji Chauhan (Samdari)"), /* @__PURE__ */ import_react2.default.createElement("div", { style: {
      background: "rgba(21, 19, 19, 0.6)",
      border: "1px solid rgba(212, 175, 101, 0.3)",
      borderRadius: "8px",
      padding: "12px 14px",
      marginTop: "14px",
      textAlign: "center"
    } }, /* @__PURE__ */ import_react2.default.createElement("div", { style: { fontSize: "11px", color: "var(--c-gold-light)", fontWeight: 700, letterSpacing: "1px" } }, "\u{1F5D3}\uFE0F WEDDING CEREMONY DATE:"), /* @__PURE__ */ import_react2.default.createElement("div", { style: { fontSize: "13.5px", color: "var(--c-ivory)", fontWeight: 600, marginTop: "4px" } }, "Thursday, 10 December 2026 (Margashirsha Shukla Paksh)")))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-profile-card prominent-family-card", style: { padding: "24px 18px" } }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "profile-frame-jharokha" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "avatar-art-container" }, /* @__PURE__ */ import_react2.default.createElement("svg", { viewBox: "0 0 140 140", className: "avatar-silhouette-svg" }, /* @__PURE__ */ import_react2.default.createElement("circle", { cx: "70", cy: "70", r: "65", fill: "#641B2E", stroke: "#D4AF65", strokeWidth: "2" }), /* @__PURE__ */ import_react2.default.createElement("circle", { cx: "70", cy: "70", r: "60", fill: "none", stroke: "rgba(212, 175, 101, 0.4)", strokeWidth: "1", strokeDasharray: "3 3" }), /* @__PURE__ */ import_react2.default.createElement("path", { d: "M70 30 C58 30 50 38 50 50 C50 62 58 68 70 68 C82 68 90 62 90 50 C90 38 82 30 70 30 Z", fill: "#E8D5A3" }), /* @__PURE__ */ import_react2.default.createElement("circle", { cx: "70", cy: "38", r: "3", fill: "#D4AF65" }), /* @__PURE__ */ import_react2.default.createElement("path", { d: "M70 30 L70 38", stroke: "#D4AF65", strokeWidth: "1.5" }), /* @__PURE__ */ import_react2.default.createElement("path", { d: "M44 48 C40 65 32 90 28 115 C52 118 88 118 112 115 C108 90 100 65 96 48 C92 42 85 36 70 36 C55 36 48 42 44 48 Z", fill: "#3B101C", stroke: "#D4AF65", strokeWidth: "1.2", opacity: "0.9" }), /* @__PURE__ */ import_react2.default.createElement("circle", { cx: "63", cy: "54", r: "3", fill: "none", stroke: "#D4AF65", strokeWidth: "1" }), /* @__PURE__ */ import_react2.default.createElement("path", { d: "M63 54 Q56 50 52 46", fill: "none", stroke: "#D4AF65", strokeWidth: "0.8" }), /* @__PURE__ */ import_react2.default.createElement("path", { d: "M48 85 L70 95 L92 85 L96 115 L44 115 Z", fill: "#8C1D40" }))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "profile-role-badge" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "role-tag" }, "SECOND WEDDING COUPLE"))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "profile-details-content" }, /* @__PURE__ */ import_react2.default.createElement("h3", { className: "profile-name", style: { fontSize: "clamp(20px, 4.2vw, 25px)" } }, "AYUSHMATI SHIVANI (JEENU)"), /* @__PURE__ */ import_react2.default.createElement("p", { style: {
      fontSize: "11px",
      letterSpacing: "2px",
      color: "var(--c-gold-light)",
      textTransform: "uppercase",
      margin: "2px 0 8px"
    } }, "Daughter of Mrs. Anuradha & Mr. Kailash Gehlot"), /* @__PURE__ */ import_react2.default.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      margin: "8px 0"
    } }, /* @__PURE__ */ import_react2.default.createElement("span", { style: { height: "1px", width: "30px", background: "var(--c-gold)" } }), /* @__PURE__ */ import_react2.default.createElement("span", { style: { fontSize: "15px", color: "var(--c-gold)", fontStyle: "italic", fontWeight: 700 } }, "Sang (Weds)"), /* @__PURE__ */ import_react2.default.createElement("span", { style: { height: "1px", width: "30px", background: "var(--c-gold)" } })), /* @__PURE__ */ import_react2.default.createElement("h3", { className: "profile-name", style: { fontSize: "clamp(20px, 4.2vw, 25px)" } }, "AYUSHMAN DHEERAJ JI"), /* @__PURE__ */ import_react2.default.createElement("p", { style: {
      fontSize: "11px",
      letterSpacing: "2px",
      color: "var(--c-gold-light)",
      textTransform: "uppercase",
      margin: "2px 0 12px"
    } }, "Son of Mrs. Renu Ji & Mr. Mukeshji Parihar (Balotra)"), /* @__PURE__ */ import_react2.default.createElement("div", { style: {
      background: "rgba(21, 19, 19, 0.6)",
      border: "1px solid rgba(212, 175, 101, 0.3)",
      borderRadius: "8px",
      padding: "12px 14px",
      marginTop: "14px",
      textAlign: "center"
    } }, /* @__PURE__ */ import_react2.default.createElement("div", { style: { fontSize: "11px", color: "var(--c-gold-light)", fontWeight: 700, letterSpacing: "1px" } }, "\u{1F5D3}\uFE0F WEDDING CEREMONY DATE:"), /* @__PURE__ */ import_react2.default.createElement("div", { style: { fontSize: "13.5px", color: "var(--c-ivory)", fontWeight: 600, marginTop: "4px" } }, "Saturday, 12 December 2026 (Margashirsha Shukla Paksh 3)")))))));
  }

  // src/components/WeddingTimeline.jsx
  var import_react3 = __toESM(__require("react"));
  function WeddingTimeline() {
    const [activeDay, setActiveDay] = (0, import_react3.useState)("all");
    const scheduleData = [
      {
        dayId: "day1",
        dayLabel: "Day 1 \u2014 Monday",
        dateStr: "07 DECEMBER 2026",
        badge: "AUSPICIOUS COMMENCEMENT",
        calDate: "20261207T151500/20261207T190000",
        events: [
          {
            num: "01",
            title: "Ghritpaan Ceremony",
            time: "3:15 PM",
            icon: "\u{1FA94}",
            desc: "Traditional sacred offering of purified ghee, invoking supreme divine benevolence and purity for the upcoming ceremonies."
          },
          {
            num: "02",
            title: "Vinayak Sthapana Puja",
            time: "5:15 PM",
            icon: "\u{1F549}\uFE0F",
            desc: "Holy installation and Vedic worship of Lord Vinayaka, sanctifying the wedding festivities for peaceful and obstacle-free completion."
          }
        ]
      },
      {
        dayId: "day2",
        dayLabel: "Day 2 \u2014 Tuesday",
        dateStr: "08 DECEMBER 2026",
        badge: "COLOR & FRAGRANCE",
        calDate: "20261208T131500/20261208T170000",
        events: [
          {
            num: "03",
            title: "Haldi & Mehndi Ceremony",
            time: "1:15 PM",
            icon: "\u{1F33F}",
            desc: "A joyous celebration adorned with radiant turmeric pastes and intricate bridal henna designs applied by loved ones."
          }
        ]
      },
      {
        dayId: "day3",
        dayLabel: "Day 3 \u2014 Wednesday",
        dateStr: "09 DECEMBER 2026",
        badge: "TRADITION & MUSIC",
        calDate: "20261209T121500/20261209T230000",
        events: [
          {
            num: "04",
            title: "Mayra / Mameru Ceremony",
            time: "12:15 PM",
            icon: "\u{1F381}",
            desc: "Heartwarming welcoming of maternal uncles (Nanihal Paksh) presenting royal gifts and loving blessings to the families."
          },
          {
            num: "05",
            title: "Bandoli (Royal Procession)",
            time: "5:15 PM",
            icon: "\u{1F434}",
            desc: "Grand festive procession through celebratory beats of dhol and traditional Rajasthani music."
          },
          {
            num: "06",
            title: "Mahila Sangeet (Musical Evening)",
            time: "8:00 PM",
            icon: "\u{1F483}",
            desc: "An exuberant evening filled with cultural folk dance, melodic wedding songs, and memorable performances by family members."
          }
        ]
      },
      {
        dayId: "day4",
        dayLabel: "Day 4 \u2014 Thursday",
        dateStr: "10 DECEMBER 2026",
        badge: "FIRST WEDDING (AKASH & REENA)",
        calDate: "20261210T121500/20261210T220000",
        events: [
          {
            num: "07",
            title: "Baraat Prasthan (Departure of Baraat to Samdari)",
            time: "12:15 PM",
            icon: "\u{1F68C}",
            desc: "Festive departure of Groom Ayushman Akash\u2019s wedding procession to Samdari by bus to the residence of Shriman Byaiji Dhanraj Ji Chauhan\u2019s family."
          }
        ]
      },
      {
        dayId: "day5",
        dayLabel: "Day 5 \u2014 Saturday (Grand Wedding)",
        dateStr: "12 DECEMBER 2026",
        badge: "GRAND WEDDING & ROYAL RECEPTION",
        calDate: "20261212T171500/20261213T020000",
        events: [
          {
            num: "08",
            title: "Baraat Swagat (Welcome of Baraat from Balotra)",
            time: "5:15 PM",
            icon: "\u{1F3BA}",
            desc: "Ceremonial welcome of Groom Ayushman Dheeraj Ji\u2019s Baraat arriving from Balotra by bus to Kumawat Vatika, Pali."
          },
          {
            num: "09",
            title: "Ashirwad Samaroh & Pritibhoj (Blessing & Feast)",
            time: "6:15 PM onwards until guest arrival",
            icon: "\u{1F37D}\uFE0F",
            desc: "Grand royal wedding reception and traditional multi-cuisine feast honoring all esteemed relatives, elders, and cherished guests at Kumawat Vatika."
          },
          {
            num: "10",
            title: "Panigrahan Sanskar (Sacred Wedding Ceremony)",
            time: "10:15 PM (Auspicious Muhurat)",
            icon: "\u{1F525}",
            desc: "Sacred Vedic wedding rites, Kanyadaan, and the holy seven circumambulations (Saptapadi) around the sacred fire uniting the couple for eternity."
          }
        ]
      }
    ];
    const handleAddToCalendar = (dayObj) => {
      const title = `Wedding Celebrations - Gehlot Parivar (${dayObj.dayLabel})`;
      const details = dayObj.events.map((e) => `${e.title} (${e.time})`).join(", ");
      const location = "Kumawat Vatika, Punayata Road, Pali, Rajasthan, India";
      const dates = dayObj.calDate;
      const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${dates}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
      window.open(url, "_blank");
    };
    const filteredDays = activeDay === "all" ? scheduleData : scheduleData.filter((d) => d.dayId === activeDay);
    return /* @__PURE__ */ import_react3.default.createElement("section", { className: "wedding-section timeline-events-section", id: "events-section" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "section-royal-card" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "card-border-gold-outer" }), /* @__PURE__ */ import_react3.default.createElement("div", { className: "card-border-gold-inner" }), /* @__PURE__ */ import_react3.default.createElement("div", { className: "section-header-flourish" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "shloka-text" }, "|| MANGALIK KARYAKRAM ||"), /* @__PURE__ */ import_react3.default.createElement("h2", { className: "section-title-gold" }, "WEDDING EVENTS & ITINERARY"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "section-subtitle-script" }, "Complete schedule of sacred rituals, joy-filled ceremonies, and royal receptions"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "section-title-divider" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "divider-line" }), /* @__PURE__ */ import_react3.default.createElement("span", { className: "divider-star" }, "\u2726"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "divider-line" }))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "timeline-day-filter", style: { flexWrap: "wrap", justifyContent: "center" } }, /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        className: `filter-pill ${activeDay === "all" ? "active" : ""}`,
        onClick: () => setActiveDay("all")
      },
      "All Ceremonies"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        className: `filter-pill ${activeDay === "day1" ? "active" : ""}`,
        onClick: () => setActiveDay("day1")
      },
      "Mon, 07 Dec"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        className: `filter-pill ${activeDay === "day2" ? "active" : ""}`,
        onClick: () => setActiveDay("day2")
      },
      "Tue, 08 Dec"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        className: `filter-pill ${activeDay === "day3" ? "active" : ""}`,
        onClick: () => setActiveDay("day3")
      },
      "Wed, 09 Dec"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        className: `filter-pill ${activeDay === "day4" ? "active" : ""}`,
        onClick: () => setActiveDay("day4")
      },
      "Thu, 10 Dec"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        className: `filter-pill ${activeDay === "day5" ? "active" : ""}`,
        onClick: () => setActiveDay("day5")
      },
      "Sat, 12 Dec (Grand Wedding)"
    )), /* @__PURE__ */ import_react3.default.createElement("div", { className: "itinerary-cards-container", style: { display: "flex", flexDirection: "column", gap: "22px" } }, filteredDays.map((day) => /* @__PURE__ */ import_react3.default.createElement("div", { className: `day-itinerary-card card-${day.dayId}`, key: day.dayId }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "day-card-header" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "day-badge-chip" }, day.badge), /* @__PURE__ */ import_react3.default.createElement("h3", { className: "day-main-heading" }, day.dayLabel), /* @__PURE__ */ import_react3.default.createElement("div", { className: "day-calendar-date" }, day.dateStr), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        className: "btn-add-cal",
        onClick: () => handleAddToCalendar(day),
        title: "Add ceremonies to Google Calendar"
      },
      /* @__PURE__ */ import_react3.default.createElement("span", { className: "cal-icon" }, "\u{1F4C5}"),
      /* @__PURE__ */ import_react3.default.createElement("span", null, "Add to Calendar")
    )), /* @__PURE__ */ import_react3.default.createElement("div", { className: "day-events-vertical-list" }, day.events.map((evt, idx) => /* @__PURE__ */ import_react3.default.createElement("div", { className: "timeline-event-item", key: idx }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "event-marker-node" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "marker-icon" }, evt.icon), idx < day.events.length - 1 && /* @__PURE__ */ import_react3.default.createElement("span", { className: "vertical-timeline-spine" })), /* @__PURE__ */ import_react3.default.createElement("div", { className: "event-content-box" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "event-top-row" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "event-index-badge" }, evt.num), /* @__PURE__ */ import_react3.default.createElement("h4", { className: "event-title" }, evt.title)), /* @__PURE__ */ import_react3.default.createElement("div", { className: "event-time-badge" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "clock-icon" }, "\u23F0"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "time-text" }, evt.time)), /* @__PURE__ */ import_react3.default.createElement("p", { className: "event-desc-text" }, evt.desc))))))))));
  }

  // src/components/VenueSection.jsx
  var import_react4 = __toESM(__require("react"));
  function VenueSection() {
    const [copied, setCopied] = (0, import_react4.useState)(false);
    const venueName = "KUMAWAT VATIKA";
    const venueAddress = "Punayata Road, Pali, Rajasthan 306401, India.";
    const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Kumawat+Vatika+Punayata+Road+Pali+Rajasthan";
    const handleCopyAddress = () => {
      navigator.clipboard.writeText(`${venueName}, ${venueAddress}`).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2800);
      }).catch(() => {
      });
    };
    return /* @__PURE__ */ import_react4.default.createElement("section", { className: "wedding-section venue-section", id: "venue-section" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "section-royal-card" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "card-border-gold-outer" }), /* @__PURE__ */ import_react4.default.createElement("div", { className: "card-border-gold-inner" }), /* @__PURE__ */ import_react4.default.createElement("div", { className: "section-header-flourish" }, /* @__PURE__ */ import_react4.default.createElement("span", { className: "shloka-text" }, "|| VIVAH STHAL ||"), /* @__PURE__ */ import_react4.default.createElement("h2", { className: "section-title-gold" }, "WEDDING VENUE"), /* @__PURE__ */ import_react4.default.createElement("p", { className: "section-subtitle-script" }, "The royal auspicious destination where beloved families & cherished guests unite"), /* @__PURE__ */ import_react4.default.createElement("div", { className: "section-title-divider" }, /* @__PURE__ */ import_react4.default.createElement("span", { className: "divider-line" }), /* @__PURE__ */ import_react4.default.createElement("span", { className: "divider-star" }, "\u2726"), /* @__PURE__ */ import_react4.default.createElement("span", { className: "divider-line" }))), /* @__PURE__ */ import_react4.default.createElement("div", { className: "venue-grand-card" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "venue-arch-illustration" }, /* @__PURE__ */ import_react4.default.createElement("svg", { viewBox: "0 0 500 160", className: "palace-arch-svg", preserveAspectRatio: "xMidYMid meet" }, /* @__PURE__ */ import_react4.default.createElement("defs", null, /* @__PURE__ */ import_react4.default.createElement("linearGradient", { id: "goldArchGrad2", x1: "0%", y1: "0%", x2: "100%", y2: "100%" }, /* @__PURE__ */ import_react4.default.createElement("stop", { offset: "0%", stopColor: "#E8D5A3" }), /* @__PURE__ */ import_react4.default.createElement("stop", { offset: "50%", stopColor: "#D4AF65" }), /* @__PURE__ */ import_react4.default.createElement("stop", { offset: "100%", stopColor: "#8C6A28" }))), /* @__PURE__ */ import_react4.default.createElement("rect", { x: "50", y: "40", width: "400", height: "110", rx: "8", fill: "rgba(100, 27, 46, 0.3)" }), /* @__PURE__ */ import_react4.default.createElement(
      "path",
      {
        d: "M 250,15 C 240,35 210,40 190,60 C 180,70 180,85 180,120 L 320,120 C 320,85 320,70 310,60 C 290,40 260,35 250,15 Z",
        fill: "rgba(212, 175, 101, 0.22)",
        stroke: "url(#goldArchGrad2)",
        strokeWidth: "2"
      }
    ), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M 250,5 L 250,15", stroke: "url(#goldArchGrad2)", strokeWidth: "3" }), /* @__PURE__ */ import_react4.default.createElement("circle", { cx: "250", cy: "5", r: "4", fill: "#D4AF65" }), /* @__PURE__ */ import_react4.default.createElement(
      "path",
      {
        d: "M 120,40 C 115,55 95,60 85,75 C 80,82 80,95 80,120 L 160,120 C 160,95 160,82 155,75 C 145,60 125,55 120,40 Z",
        fill: "rgba(212, 175, 101, 0.15)",
        stroke: "url(#goldArchGrad2)",
        strokeWidth: "1.5"
      }
    ), /* @__PURE__ */ import_react4.default.createElement(
      "path",
      {
        d: "M 380,40 C 375,55 355,60 345,75 C 340,82 340,95 340,120 L 420,120 C 420,95 420,82 415,75 C 405,60 385,55 380,40 Z",
        fill: "rgba(212, 175, 101, 0.15)",
        stroke: "url(#goldArchGrad2)",
        strokeWidth: "1.5"
      }
    ), /* @__PURE__ */ import_react4.default.createElement("line", { x1: "60", y1: "120", x2: "440", y2: "120", stroke: "url(#goldArchGrad2)", strokeWidth: "2.5" }), /* @__PURE__ */ import_react4.default.createElement("line", { x1: "50", y1: "140", x2: "450", y2: "140", stroke: "url(#goldArchGrad2)", strokeWidth: "3" }), /* @__PURE__ */ import_react4.default.createElement("line", { x1: "120", y1: "120", x2: "120", y2: "135", stroke: "#D4AF65", strokeWidth: "1" }), /* @__PURE__ */ import_react4.default.createElement("circle", { cx: "120", cy: "136", r: "3", fill: "#D4AF65" }), /* @__PURE__ */ import_react4.default.createElement("line", { x1: "380", y1: "120", x2: "380", y2: "135", stroke: "#D4AF65", strokeWidth: "1" }), /* @__PURE__ */ import_react4.default.createElement("circle", { cx: "380", cy: "136", r: "3", fill: "#D4AF65" }))), /* @__PURE__ */ import_react4.default.createElement("div", { className: "venue-info-body" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "venue-location-pin" }, /* @__PURE__ */ import_react4.default.createElement("span", { className: "pin-pulse" }), /* @__PURE__ */ import_react4.default.createElement("span", { className: "pin-icon" }, "\u{1F4CD}")), /* @__PURE__ */ import_react4.default.createElement("h3", { className: "venue-name-title" }, venueName), /* @__PURE__ */ import_react4.default.createElement("div", { className: "venue-address-badge" }, /* @__PURE__ */ import_react4.default.createElement("p", { className: "address-line" }, venueAddress)), /* @__PURE__ */ import_react4.default.createElement("p", { className: "venue-welcome-note" }, "Located on Punayata Road in Pali, featuring spacious royal celebration lawns, magnificent banquet halls, guest accommodations, and ample secure vehicle parking."), /* @__PURE__ */ import_react4.default.createElement("div", { className: "venue-buttons-row" }, /* @__PURE__ */ import_react4.default.createElement(
      "a",
      {
        href: mapsUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "venue-btn btn-google-maps",
        "aria-label": "Open verified venue in Google Maps"
      },
      /* @__PURE__ */ import_react4.default.createElement("span", { className: "btn-icon" }, "\u{1F5FA}\uFE0F"),
      /* @__PURE__ */ import_react4.default.createElement("span", { className: "btn-text" }, "OPEN IN GOOGLE MAPS"),
      /* @__PURE__ */ import_react4.default.createElement("span", { className: "btn-arrow" }, "\u2197")
    ), /* @__PURE__ */ import_react4.default.createElement(
      "button",
      {
        className: `venue-btn btn-copy-address ${copied ? "copied" : ""}`,
        onClick: handleCopyAddress,
        "aria-label": "Copy venue address to clipboard"
      },
      /* @__PURE__ */ import_react4.default.createElement("span", { className: "btn-icon" }, copied ? "\u2713" : "\u{1F4CB}"),
      /* @__PURE__ */ import_react4.default.createElement("span", { className: "btn-text" }, copied ? "COPIED TO CLIPBOARD!" : "COPY ADDRESS FOR CAB")
    ))))));
  }

  // src/components/CountdownSection.jsx
  var import_react5 = __toESM(__require("react"));
  function CountdownSection() {
    const targetDate = (/* @__PURE__ */ new Date("2026-12-12T18:15:00+05:30")).getTime();
    const [timeLeft, setTimeLeft] = (0, import_react5.useState)({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isCompleted: false
    });
    (0, import_react5.useEffect)(() => {
      const calculateTime = () => {
        const now = (/* @__PURE__ */ new Date()).getTime();
        const difference = targetDate - now;
        if (difference <= 0) {
          setTimeLeft({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            isCompleted: true
          });
          return;
        }
        const days = Math.floor(difference / (1e3 * 60 * 60 * 24));
        const hours = Math.floor(difference % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
        const minutes = Math.floor(difference % (1e3 * 60 * 60) / (1e3 * 60));
        const seconds = Math.floor(difference % (1e3 * 60) / 1e3);
        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isCompleted: false
        });
      };
      calculateTime();
      const interval = setInterval(calculateTime, 1e3);
      return () => clearInterval(interval);
    }, [targetDate]);
    return /* @__PURE__ */ import_react5.default.createElement("section", { className: "wedding-section countdown-timer-section", id: "countdown-section" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "section-royal-card" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "card-border-gold-outer" }), /* @__PURE__ */ import_react5.default.createElement("div", { className: "card-border-gold-inner" }), /* @__PURE__ */ import_react5.default.createElement("div", { className: "section-header-flourish" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "shloka-text" }, "|| MANGAL GHADI KI PRATIKSHA ||"), /* @__PURE__ */ import_react5.default.createElement("h2", { className: "section-title-gold" }, "WEDDING COUNTDOWN"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "section-subtitle-script" }, "Counting every sacred moment until the auspicious wedding celebration"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "section-title-divider" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "divider-line" }), /* @__PURE__ */ import_react5.default.createElement("span", { className: "divider-star" }, "\u2726"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "divider-line" }))), timeLeft.isCompleted ? /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-completed-banner" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "completed-sparkles" }, "\u{1F389} \u{1F38A} \u2728"), /* @__PURE__ */ import_react5.default.createElement("h3", { className: "completed-title" }, "The Auspicious Wedding Day Is Here!"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "completed-subtitle" }, "Celebrating the royal weddings of Akash & Reena and Shivani & Dheeraj with eternal blessings.")) : /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-grid-container" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-unit-box" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-circle-badge" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-number" }, String(timeLeft.days).padStart(2, "0"))), /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-label" }, "DAYS")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-colon" }, ":"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-unit-box" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-circle-badge" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-number" }, String(timeLeft.hours).padStart(2, "0"))), /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-label" }, "HOURS")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-colon" }, ":"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-unit-box" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-circle-badge" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-number" }, String(timeLeft.minutes).padStart(2, "0"))), /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-label" }, "MINUTES")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-colon" }, ":"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-unit-box" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-circle-badge seconds-pulse" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-number" }, String(timeLeft.seconds).padStart(2, "0"))), /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-label" }, "SECONDS"))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-muhurat-strip" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "muhurat-star" }, "\u2726"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "muhurat-text" }, "Auspicious Wedding Muhurat \u2022 Saturday, 12 December 2026 \u2022 Kumawat Vatika, Pali, Rajasthan"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "muhurat-star" }, "\u2726"))));
  }

  // src/components/FamilyBlessingsSection.jsx
  var import_react6 = __toESM(__require("react"));
  function FamilyBlessingsSection() {
    const [guestName, setGuestName] = (0, import_react6.useState)("");
    const [guestCity, setGuestCity] = (0, import_react6.useState)("");
    const [blessingMsg, setBlessingMsg] = (0, import_react6.useState)("Heartiest congratulations to Akash & Reena and Shivani & Dheeraj on your royal weddings! Wishing both couples a lifetime of divine happiness, love, and prosperity.");
    const [sentSuccess, setSentSuccess] = (0, import_react6.useState)(false);
    const phone1 = "+919214537106";
    const phone2 = "+918824338255";
    const phone3 = "+917014922660";
    const handleSendWhatsApp = (phoneTarget) => {
      const formattedText = `Namaste! \u{1F64F}

*Wedding Blessings for Akash & Reena and Shivani & Dheeraj*
From: ${guestName || "Well-Wisher"}${guestCity ? ` (${guestCity})` : ""}

"${blessingMsg}"

Looking forward to celebrating this grand royal Jain wedding at Kumawat Vatika, Pali!`;
      const cleanPhone = phoneTarget.replace(/[^0-9]/g, "");
      const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(formattedText)}`;
      window.open(url, "_blank");
      setSentSuccess(true);
      setTimeout(() => setSentSuccess(false), 4e3);
    };
    return /* @__PURE__ */ import_react6.default.createElement("section", { className: "wedding-section family-compliments-section", id: "family-section" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "section-royal-card" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "card-border-gold-outer" }), /* @__PURE__ */ import_react6.default.createElement("div", { className: "card-border-gold-inner" }), /* @__PURE__ */ import_react6.default.createElement("div", { className: "section-header-flourish" }, /* @__PURE__ */ import_react6.default.createElement("span", { className: "shloka-text" }, "|| SASNEH NIMANTRAN ||"), /* @__PURE__ */ import_react6.default.createElement("h2", { className: "section-title-gold" }, "WITH BEST COMPLIMENTS FROM"), /* @__PURE__ */ import_react6.default.createElement("p", { className: "section-subtitle-script" }, "Warmest hospitality from the Gehlot Parivar & beloved extended kinfolk"), /* @__PURE__ */ import_react6.default.createElement("div", { className: "section-title-divider" }, /* @__PURE__ */ import_react6.default.createElement("span", { className: "divider-line" }), /* @__PURE__ */ import_react6.default.createElement("span", { className: "divider-star" }, "\u2726"), /* @__PURE__ */ import_react6.default.createElement("span", { className: "divider-line" }))), /* @__PURE__ */ import_react6.default.createElement("div", { className: "family-invitation-quote-box", style: { maxWidth: "780px", margin: "0 auto 28px" } }, /* @__PURE__ */ import_react6.default.createElement("p", { className: "quote-text", style: { fontStyle: "italic", color: "#E8D5A3", fontSize: "15px" } }, "\u201CWe have penned this invitation with boundless affection, please accept our humble respect;", /* @__PURE__ */ import_react6.default.createElement("br", null), "This sacred occasion is truly priceless, please bestow upon us your cherished moments.\u201D"), /* @__PURE__ */ import_react6.default.createElement("p", { className: "quote-text", style: { marginTop: "12px", fontSize: "14px" } }, "With the divine blessings of Lord Vinayaka and our revered ancestors, the ", /* @__PURE__ */ import_react6.default.createElement("strong", null, "Gehlot Family"), " cordially invites you and your family to grace the auspicious dual wedding celebrations of ", /* @__PURE__ */ import_react6.default.createElement("strong", null, "Akash & Reena"), " and ", /* @__PURE__ */ import_react6.default.createElement("strong", null, "Shivani & Dheeraj"), ".")), /* @__PURE__ */ import_react6.default.createElement("div", { className: "compliments-hosts-grid", style: { marginBottom: "32px" } }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "host-contact-card" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "host-ornament-header" }, /* @__PURE__ */ import_react6.default.createElement("span", { className: "host-namaste-icon" }, "\u{1F64F}"), /* @__PURE__ */ import_react6.default.createElement("span", { className: "host-honorific" }, "FAMILY ELDER & HOST")), /* @__PURE__ */ import_react6.default.createElement("h3", { className: "host-name" }, "Mr. Kailashchandra Gehlot"), /* @__PURE__ */ import_react6.default.createElement("p", { className: "host-relation" }, "Father of Akash & Shivani"), /* @__PURE__ */ import_react6.default.createElement("div", { className: "host-contact-action-row" }, /* @__PURE__ */ import_react6.default.createElement("a", { href: `tel:${phone1}`, className: "contact-action-btn btn-call", title: "Call Kailashchandra Gehlot" }, /* @__PURE__ */ import_react6.default.createElement("span", { className: "action-icon" }, "\u{1F4DE}"), /* @__PURE__ */ import_react6.default.createElement("span", { className: "action-text" }, "+91 9214537106")), /* @__PURE__ */ import_react6.default.createElement(
      "a",
      {
        href: `https://wa.me/919214537106`,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "contact-action-btn btn-whatsapp",
        title: "Message on WhatsApp"
      },
      /* @__PURE__ */ import_react6.default.createElement("span", { className: "action-icon" }, "\u{1F4AC}"),
      /* @__PURE__ */ import_react6.default.createElement("span", { className: "action-text" }, "WhatsApp")
    ))), /* @__PURE__ */ import_react6.default.createElement("div", { className: "host-contact-card" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "host-ornament-header" }, /* @__PURE__ */ import_react6.default.createElement("span", { className: "host-namaste-icon" }, "\u{1F64F}"), /* @__PURE__ */ import_react6.default.createElement("span", { className: "host-honorific" }, "GROOM & HOST")), /* @__PURE__ */ import_react6.default.createElement("h3", { className: "host-name" }, "Ayushman Akash Gehlot"), /* @__PURE__ */ import_react6.default.createElement("p", { className: "host-relation" }, "Wedding Host & Coordinator"), /* @__PURE__ */ import_react6.default.createElement("div", { className: "host-contact-action-row" }, /* @__PURE__ */ import_react6.default.createElement("a", { href: `tel:${phone2}`, className: "contact-action-btn btn-call", title: "Call Akash Gehlot" }, /* @__PURE__ */ import_react6.default.createElement("span", { className: "action-icon" }, "\u{1F4DE}"), /* @__PURE__ */ import_react6.default.createElement("span", { className: "action-text" }, "+91 8824338255")), /* @__PURE__ */ import_react6.default.createElement(
      "a",
      {
        href: `https://wa.me/918824338255`,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "contact-action-btn btn-whatsapp",
        title: "Message on WhatsApp"
      },
      /* @__PURE__ */ import_react6.default.createElement("span", { className: "action-icon" }, "\u{1F4AC}"),
      /* @__PURE__ */ import_react6.default.createElement("span", { className: "action-text" }, "WhatsApp")
    )))), /* @__PURE__ */ import_react6.default.createElement("div", { className: "direct-blessings-card", style: { maxWidth: "680px", margin: "0 auto" } }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "blessings-card-header" }, /* @__PURE__ */ import_react6.default.createElement("h4", { className: "blessings-title" }, "\u{1F48C} Send Your RSVP & Blessings to the Family"), /* @__PURE__ */ import_react6.default.createElement("p", { className: "blessings-subtitle" }, "Send your personal congratulations and arrival confirmation directly to the hosts on WhatsApp.")), /* @__PURE__ */ import_react6.default.createElement("div", { className: "blessings-inputs-form" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "form-row-dual" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "form-input-group" }, /* @__PURE__ */ import_react6.default.createElement("label", { className: "input-label" }, "Your Name / Family Name"), /* @__PURE__ */ import_react6.default.createElement(
      "input",
      {
        type: "text",
        className: "royal-text-input",
        placeholder: "e.g. Parihar Family / Rajesh Sharma",
        value: guestName,
        onChange: (e) => setGuestName(e.target.value)
      }
    )), /* @__PURE__ */ import_react6.default.createElement("div", { className: "form-input-group" }, /* @__PURE__ */ import_react6.default.createElement("label", { className: "input-label" }, "Your City"), /* @__PURE__ */ import_react6.default.createElement(
      "input",
      {
        type: "text",
        className: "royal-text-input",
        placeholder: "e.g. Pali, Jodhpur, Balotra, Jaipur",
        value: guestCity,
        onChange: (e) => setGuestCity(e.target.value)
      }
    ))), /* @__PURE__ */ import_react6.default.createElement("div", { className: "form-input-group" }, /* @__PURE__ */ import_react6.default.createElement("label", { className: "input-label" }, "Your Heartfelt Blessings"), /* @__PURE__ */ import_react6.default.createElement(
      "textarea",
      {
        className: "royal-text-area",
        rows: 3,
        value: blessingMsg,
        onChange: (e) => setBlessingMsg(e.target.value)
      }
    )), /* @__PURE__ */ import_react6.default.createElement("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginTop: "14px" } }, /* @__PURE__ */ import_react6.default.createElement(
      "button",
      {
        type: "button",
        className: "btn-submit-blessing-whatsapp",
        onClick: () => handleSendWhatsApp(phone1)
      },
      /* @__PURE__ */ import_react6.default.createElement("span", null, "\u{1F4AC}"),
      /* @__PURE__ */ import_react6.default.createElement("span", null, "Send to Host (Kailashchandra Ji)")
    ), /* @__PURE__ */ import_react6.default.createElement(
      "button",
      {
        type: "button",
        className: "btn-submit-blessing-whatsapp",
        style: { background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" },
        onClick: () => handleSendWhatsApp(phone2)
      },
      /* @__PURE__ */ import_react6.default.createElement("span", null, "\u{1F4AC}"),
      /* @__PURE__ */ import_react6.default.createElement("span", null, "Send to Host (Akash Ji)")
    )), sentSuccess && /* @__PURE__ */ import_react6.default.createElement("div", { className: "blessing-sent-confirmation" }, /* @__PURE__ */ import_react6.default.createElement("span", null, "\u2713"), /* @__PURE__ */ import_react6.default.createElement("span", null, "WhatsApp opened! Thank you for sharing your auspicious blessings!"))))));
  }

  // src/components/FinalBlessingsFooter.jsx
  var import_react7 = __toESM(__require("react"));
  function FinalBlessingsFooter({ onOpenCardViewer, onDownloadPDF }) {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return /* @__PURE__ */ import_react7.default.createElement("footer", { className: "wedding-final-blessings-footer", id: "footer-section" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-golden-flowers-band", "aria-hidden": "true" }, /* @__PURE__ */ import_react7.default.createElement("span", { className: "floating-flower fl-1" }, "\u{1F338}"), /* @__PURE__ */ import_react7.default.createElement("span", { className: "floating-flower fl-2" }, "\u2728"), /* @__PURE__ */ import_react7.default.createElement("span", { className: "floating-flower fl-3" }, "\u{1F33A}"), /* @__PURE__ */ import_react7.default.createElement("span", { className: "floating-flower fl-4" }, "\u2728"), /* @__PURE__ */ import_react7.default.createElement("span", { className: "floating-flower fl-5" }, "\u{1F338}")), /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-content-container" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-ganesha-wrapper" }, /* @__PURE__ */ import_react7.default.createElement(
      "img",
      {
        src: "assets/champagne_ganesha_bright.png",
        alt: "Lord Ganesha",
        className: "footer-ganesha-img"
      }
    )), /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-sacred-blessing" }, "|| OM SHREE GANESHAY NAMAH \u2022 SHUBHAM BHAVATU ||"), /* @__PURE__ */ import_react7.default.createElement("blockquote", { className: "footer-treasured-quote" }, "\u201CYour Presence Is Our Greatest Gift.", /* @__PURE__ */ import_react7.default.createElement("br", null), "Your Blessings Are Our Greatest Treasure.\u201D"), /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-couple-signature" }, /* @__PURE__ */ import_react7.default.createElement("h2", { className: "footer-couple-names", style: { fontSize: "clamp(20px, 4.2vw, 30px)" } }, "AKASH & REENA \u2022 SHIVANI & DHEERAJ"), /* @__PURE__ */ import_react7.default.createElement("p", { className: "footer-regards-line" }, "With Love and Warm Regards"), /* @__PURE__ */ import_react7.default.createElement("p", { className: "footer-family-signoff" }, "Gehlot Parivar \u2022 Ramdev Road, Pali, Rajasthan")), /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-bottom-divider" }), /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-sub-bar" }, /* @__PURE__ */ import_react7.default.createElement("p", { className: "sub-bar-text" }, "The Royal Wedding Celebration 2026 \u2022 Dual Jain Wedding \u2022 Pali, Rajasthan"), /* @__PURE__ */ import_react7.default.createElement(
      "button",
      {
        onClick: scrollToTop,
        style: {
          background: "transparent",
          border: "1px solid var(--c-gold)",
          borderRadius: "20px",
          color: "var(--c-gold-light)",
          fontFamily: "Roboto Slab, serif",
          fontSize: "11px",
          padding: "4px 16px",
          marginTop: "10px",
          cursor: "pointer"
        }
      },
      "\u2191 Back to Top"
    ))));
  }

  // src/components/InvitationViewerModal.jsx
  var import_react8 = __toESM(__require("react"));
  function InvitationViewerModal({ isOpen, onClose }) {
    const [zoomLevel, setZoomLevel] = (0, import_react8.useState)(1);
    const [isFullscreen, setIsFullscreen] = (0, import_react8.useState)(false);
    const modalRef = (0, import_react8.useRef)(null);
    const coverPage = {
      src: "assets/dual-jain-wedding-invitation-cover.png",
      title: "Single-Page Digital Wedding Invitation Cover",
      sub: "Akash & Reena \u2022 Shivani & Dheeraj \u2022 Saturday, 12 December 2026 \u2022 Pali"
    };
    const pdfUrl = "dual-jain-wedding-invitation.pdf";
    (0, import_react8.useEffect)(() => {
      if (!isOpen) return;
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);
    if (!isOpen) return null;
    const handleZoomIn = () => {
      setZoomLevel((prev) => Math.min(prev + 0.25, 2));
    };
    const handleZoomOut = () => {
      setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
    };
    const handleResetZoom = () => {
      setZoomLevel(1);
    };
    const toggleFullscreen = () => {
      const elem = modalRef.current || document.documentElement;
      if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
          elem.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {
          });
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {
          });
        }
      }
    };
    return /* @__PURE__ */ import_react8.default.createElement("div", { className: "royal-invitation-modal-backdrop", onClick: onClose, ref: modalRef }, /* @__PURE__ */ import_react8.default.createElement(
      "div",
      {
        className: "royal-invitation-modal-dialog",
        onClick: (e) => e.stopPropagation(),
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Royal Wedding Invitation Card Viewer"
      },
      /* @__PURE__ */ import_react8.default.createElement("header", { className: "viewer-top-toolbar" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "viewer-info-strip" }, /* @__PURE__ */ import_react8.default.createElement("span", { className: "viewer-brand-title" }, "\u{1F451} DIGITAL WEDDING CARD VIEWER"), /* @__PURE__ */ import_react8.default.createElement("span", { className: "viewer-page-counter" }, "Single Page Official Cover")), /* @__PURE__ */ import_react8.default.createElement("div", { className: "viewer-action-controls" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "zoom-ctrl-group" }, /* @__PURE__ */ import_react8.default.createElement(
        "button",
        {
          className: "viewer-ctrl-btn",
          onClick: handleZoomOut,
          disabled: zoomLevel <= 0.75,
          title: "Zoom Out",
          "aria-label": "Zoom out"
        },
        "\u{1F50D}-"
      ), /* @__PURE__ */ import_react8.default.createElement(
        "button",
        {
          className: "viewer-ctrl-btn zoom-level-display",
          onClick: handleResetZoom,
          title: "Reset Zoom to 100%",
          "aria-label": "Reset zoom"
        },
        Math.round(zoomLevel * 100),
        "%"
      ), /* @__PURE__ */ import_react8.default.createElement(
        "button",
        {
          className: "viewer-ctrl-btn",
          onClick: handleZoomIn,
          disabled: zoomLevel >= 2,
          title: "Zoom In",
          "aria-label": "Zoom in"
        },
        "\u{1F50D}+"
      )), /* @__PURE__ */ import_react8.default.createElement(
        "button",
        {
          className: "viewer-ctrl-btn",
          onClick: toggleFullscreen,
          title: isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen",
          "aria-label": "Toggle fullscreen"
        },
        isFullscreen ? "\u2913 Normal" : "\u2922 Fullscreen"
      ), /* @__PURE__ */ import_react8.default.createElement(
        "a",
        {
          href: pdfUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "viewer-ctrl-btn btn-new-tab",
          title: "Open PDF directly in a new browser tab"
        },
        "\u2197 Open in Tab"
      ), /* @__PURE__ */ import_react8.default.createElement(
        "a",
        {
          href: pdfUrl,
          download: "dual-jain-wedding-invitation.pdf",
          className: "viewer-ctrl-btn btn-download-gold",
          title: "Download high-resolution official 1-page vector PDF"
        },
        "\u{1F4E5} Download PDF"
      ), /* @__PURE__ */ import_react8.default.createElement(
        "button",
        {
          className: "viewer-ctrl-btn btn-close-modal",
          onClick: onClose,
          title: "Close Viewer (Esc)",
          "aria-label": "Close invitation viewer"
        },
        "\u2715"
      ))),
      /* @__PURE__ */ import_react8.default.createElement("div", { className: "viewer-card-display-stage" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "viewer-card-viewport" }, /* @__PURE__ */ import_react8.default.createElement(
        "div",
        {
          className: "viewer-card-wrapper",
          style: {
            transform: `scale(${zoomLevel})`,
            transformOrigin: "top center",
            transition: "transform 0.2s ease",
            display: "flex",
            justifyContent: "center",
            padding: "16px 0"
          }
        },
        /* @__PURE__ */ import_react8.default.createElement(
          "iframe",
          {
            src: "print_new_luxury_cover.html",
            title: "Invitation Card Cover",
            style: {
              width: "148mm",
              height: "210mm",
              maxWidth: "92vw",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.7)",
              background: "#FFF"
            }
          }
        )
      )))
    ));
  }

  // src/components/MusicPlayer.jsx
  var import_react9 = __toESM(__require("react"));
  var YOUTUBE_VIDEO_ID = "qJFPtcK8qBg";
  var START_TIME_SECONDS = 30;
  function MusicPlayer() {
    const [isPlaying, setIsPlaying] = (0, import_react9.useState)(false);
    const [isReady, setIsReady] = (0, import_react9.useState)(false);
    const playerRef = (0, import_react9.useRef)(null);
    const pendingPlayRef = (0, import_react9.useRef)(false);
    (0, import_react9.useEffect)(() => {
      let checkInterval = null;
      const setupPlayer = () => {
        if (!window.YT || !window.YT.Player) return false;
        const container = document.getElementById("youtube-bgm-container");
        if (!container) return false;
        if (playerRef.current) return true;
        try {
          playerRef.current = new window.YT.Player("youtube-bgm-container", {
            height: "1",
            width: "1",
            videoId: YOUTUBE_VIDEO_ID,
            playerVars: {
              autoplay: 0,
              start: START_TIME_SECONDS,
              controls: 0,
              disablekb: 1,
              fs: 0,
              rel: 0,
              modestbranding: 1,
              playsinline: 1,
              loop: 1,
              playlist: YOUTUBE_VIDEO_ID,
              origin: window.location.origin
            },
            events: {
              onReady: () => {
                setIsReady(true);
                if (pendingPlayRef.current) {
                  pendingPlayRef.current = false;
                  startPlayAt30();
                }
              },
              onStateChange: (event) => {
                if (event.data === 1) {
                  setIsPlaying(true);
                } else if (event.data === 2) {
                  setIsPlaying(false);
                } else if (event.data === 0) {
                  if (playerRef.current && playerRef.current.seekTo) {
                    playerRef.current.seekTo(START_TIME_SECONDS, true);
                    playerRef.current.playVideo();
                  }
                }
              },
              onError: (err) => {
                console.warn("YouTube BGM Player notice:", err);
              }
            }
          });
          return true;
        } catch (err) {
          console.warn("Error setting up YT Player:", err);
          return false;
        }
      };
      if (!setupPlayer()) {
        const prevCallback = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
          if (typeof prevCallback === "function") prevCallback();
          setupPlayer();
        };
        checkInterval = setInterval(() => {
          if (window.YT && window.YT.Player) {
            if (setupPlayer()) {
              clearInterval(checkInterval);
            }
          }
        }, 400);
      }
      const startPlayAt30 = () => {
        if (playerRef.current && playerRef.current.playVideo) {
          try {
            playerRef.current.seekTo(START_TIME_SECONDS, true);
            playerRef.current.playVideo();
            setIsPlaying(true);
          } catch (e) {
            console.warn(e);
          }
        } else {
          pendingPlayRef.current = true;
        }
      };
      window.playWeddingMusic = () => {
        startPlayAt30();
      };
      window.pauseWeddingMusic = () => {
        if (playerRef.current && playerRef.current.pauseVideo) {
          playerRef.current.pauseVideo();
          setIsPlaying(false);
        }
      };
      window.toggleWeddingMusic = () => {
        if (isPlaying) {
          window.pauseWeddingMusic();
        } else {
          window.playWeddingMusic();
        }
      };
      return () => {
        if (checkInterval) clearInterval(checkInterval);
        try {
          if (playerRef.current && playerRef.current.destroy) {
            playerRef.current.destroy();
          }
        } catch (e) {
        }
      };
    }, [isPlaying]);
    return /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement(
      "div",
      {
        id: "youtube-bgm-container",
        style: {
          position: "fixed",
          bottom: "-100px",
          left: "-100px",
          width: "1px",
          height: "1px",
          opacity: 0.01,
          pointerEvents: "none",
          zIndex: -1
        },
        "aria-hidden": "true"
      }
    ), /* @__PURE__ */ import_react9.default.createElement("div", { className: "floating-music-toggle-wrapper" }, /* @__PURE__ */ import_react9.default.createElement(
      "button",
      {
        className: `royal-music-pill-btn ${isPlaying ? "playing" : "paused"}`,
        onClick: () => {
          if (typeof window.toggleWeddingMusic === "function") {
            window.toggleWeddingMusic();
          }
        },
        title: isPlaying ? "Pause Royal Wedding Music" : "Play Royal Wedding Music",
        "aria-label": "Toggle wedding instrumental music"
      },
      /* @__PURE__ */ import_react9.default.createElement("span", { className: "music-pill-icon" }, isPlaying ? "\u{1F3B5}" : "\u{1F507}"),
      /* @__PURE__ */ import_react9.default.createElement("span", { className: "music-pill-text" }, isPlaying ? "Royal Shehnai" : "Play Music"),
      isPlaying && /* @__PURE__ */ import_react9.default.createElement("span", { className: "music-wave-bars" }, /* @__PURE__ */ import_react9.default.createElement("span", { className: "bar bar-1" }), /* @__PURE__ */ import_react9.default.createElement("span", { className: "bar bar-2" }), /* @__PURE__ */ import_react9.default.createElement("span", { className: "bar bar-3" }))
    )));
  }

  // src/App.jsx
  function App() {
    const [isViewerOpen, setIsViewerOpen] = (0, import_react10.useState)(false);
    const scrollTo = (id) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };
    return /* @__PURE__ */ import_react10.default.createElement("div", { className: "royal-wedding-app" }, /* @__PURE__ */ import_react10.default.createElement(MusicPlayer, null), /* @__PURE__ */ import_react10.default.createElement("header", { className: "sticky-royal-nav", role: "banner" }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "nav-container" }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "nav-brand", onClick: () => scrollTo("hero-section") }, /* @__PURE__ */ import_react10.default.createElement("span", { className: "brand-crest" }, "\u{1F451}"), /* @__PURE__ */ import_react10.default.createElement("span", { className: "brand-title" }, "AKASH & REENA \u2022 SHIVANI & DHEERAJ")), /* @__PURE__ */ import_react10.default.createElement("nav", { className: "nav-links-row", "aria-label": "Wedding sections navigation" }, /* @__PURE__ */ import_react10.default.createElement("button", { className: "nav-link-btn", onClick: () => scrollTo("hero-section") }, "Welcome"), /* @__PURE__ */ import_react10.default.createElement("button", { className: "nav-link-btn", onClick: () => scrollTo("couples-section") }, "Couples"), /* @__PURE__ */ import_react10.default.createElement("button", { className: "nav-link-btn", onClick: () => scrollTo("events-section") }, "Celebrations"), /* @__PURE__ */ import_react10.default.createElement("button", { className: "nav-link-btn", onClick: () => scrollTo("venue-section") }, "Venue"), /* @__PURE__ */ import_react10.default.createElement("button", { className: "nav-link-btn", onClick: () => scrollTo("countdown-section") }, "Countdown"), /* @__PURE__ */ import_react10.default.createElement("button", { className: "nav-link-btn", onClick: () => scrollTo("family-section") }, "Family & Blessings")), /* @__PURE__ */ import_react10.default.createElement("div", { className: "nav-actions-group" }, /* @__PURE__ */ import_react10.default.createElement(
      "button",
      {
        className: "nav-btn-view-card",
        onClick: () => setIsViewerOpen(true),
        title: "Open Royal Wedding Invitation Card"
      },
      /* @__PURE__ */ import_react10.default.createElement("span", { className: "btn-icon" }, "\u{1F4DC}"),
      /* @__PURE__ */ import_react10.default.createElement("span", { className: "btn-text" }, "VIEW CARD")
    ), /* @__PURE__ */ import_react10.default.createElement(
      "a",
      {
        href: "dual-jain-wedding-invitation.pdf",
        download: "dual-jain-wedding-invitation.pdf",
        className: "nav-btn-download-pdf",
        title: "Download High-Resolution PDF Invitation"
      },
      /* @__PURE__ */ import_react10.default.createElement("span", { className: "btn-icon" }, "\u{1F4E5}"),
      /* @__PURE__ */ import_react10.default.createElement("span", { className: "btn-text" }, "PDF")
    )))), /* @__PURE__ */ import_react10.default.createElement("main", { className: "invitation-content-column" }, /* @__PURE__ */ import_react10.default.createElement(
      WeddingHero,
      {
        onExplore: () => scrollTo("couples-section")
      }
    ), /* @__PURE__ */ import_react10.default.createElement(CouplesSection, null), /* @__PURE__ */ import_react10.default.createElement(WeddingTimeline, null), /* @__PURE__ */ import_react10.default.createElement(VenueSection, null), /* @__PURE__ */ import_react10.default.createElement(CountdownSection, null), /* @__PURE__ */ import_react10.default.createElement(FamilyBlessingsSection, null), /* @__PURE__ */ import_react10.default.createElement(
      FinalBlessingsFooter,
      {
        onOpenCardViewer: () => setIsViewerOpen(true)
      }
    )), /* @__PURE__ */ import_react10.default.createElement(
      InvitationViewerModal,
      {
        isOpen: isViewerOpen,
        onClose: () => setIsViewerOpen(false)
      }
    ));
  }

  // src/main.jsx
  var rootElement = document.getElementById("root");
  if (rootElement) {
    const rd = typeof window !== "undefined" && window.ReactDOM ? window.ReactDOM : import_client.default;
    const createRootFn = rd && rd.createRoot || rd && rd.default && rd.default.createRoot;
    if (createRootFn) {
      const root = createRootFn(rootElement);
      root.render(import_react11.default.createElement(App));
    } else if (rd && rd.render) {
      rd.render(import_react11.default.createElement(App), rootElement);
    }
  }
})();
