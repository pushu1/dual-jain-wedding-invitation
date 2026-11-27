
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
  var import_react13 = __toESM(__require("react"));
  var import_client = __toESM(__require("react-dom/client"));

  // src/App.jsx
  var import_react12 = __toESM(__require("react"));

  // src/components/WeddingHero.jsx
  var import_react = __toESM(__require("react"));
  function WeddingHero({ onEnterInvitation }) {
    const [isMusicPlaying, setIsMusicPlaying] = (0, import_react.useState)(false);
    const jharokhaRef = (0, import_react.useRef)(null);
    const cardRef = (0, import_react.useRef)(null);
    (0, import_react.useEffect)(() => {
      const handleStatus = (e) => {
        if (e && e.detail) {
          setIsMusicPlaying(!!e.detail.isPlaying);
        }
      };
      window.addEventListener("weddingMusicStatus", handleStatus);
      return () => window.removeEventListener("weddingMusicStatus", handleStatus);
    }, []);
    const handleStartMusic = (e) => {
      e.stopPropagation();
      if (typeof window.playWeddingMusic === "function") {
        window.playWeddingMusic();
        setIsMusicPlaying(true);
      }
    };
    const handleButtonClick = () => {
      if (onEnterInvitation) {
        onEnterInvitation();
      } else {
        if (typeof window.playWeddingMusic === "function") {
          window.playWeddingMusic();
        }
        const el = document.getElementById("couples-section");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    };
    const handleCardMouseMove = (e) => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / centerY * -5;
      const rotateY = (x - centerX) / centerX * 5;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    };
    const handleCardMouseLeave = () => {
      if (cardRef.current) {
        cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
      }
    };
    return /* @__PURE__ */ import_react.default.createElement("section", { className: "wedding-hero-section 3d-hero-experience", id: "hero-section" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-temple-arch-frame 3d-arch-layer", "aria-hidden": "true" }, /* @__PURE__ */ import_react.default.createElement("svg", { viewBox: "0 0 500 130", className: "temple-arch-svg", preserveAspectRatio: "none" }, /* @__PURE__ */ import_react.default.createElement("defs", null, /* @__PURE__ */ import_react.default.createElement("linearGradient", { id: "heroGoldGradient3D", x1: "0%", y1: "0%", x2: "100%", y2: "100%" }, /* @__PURE__ */ import_react.default.createElement("stop", { offset: "0%", stopColor: "#C9A45C" }), /* @__PURE__ */ import_react.default.createElement("stop", { offset: "35%", stopColor: "#FFF2D6" }), /* @__PURE__ */ import_react.default.createElement("stop", { offset: "70%", stopColor: "#B88A3B" }), /* @__PURE__ */ import_react.default.createElement("stop", { offset: "100%", stopColor: "#8C6A28" })), /* @__PURE__ */ import_react.default.createElement("filter", { id: "archShadow", x: "-10%", y: "-10%", width: "120%", height: "130%" }, /* @__PURE__ */ import_react.default.createElement("feDropShadow", { dx: "0", dy: "6", stdDeviation: "6", floodColor: "rgba(118, 45, 50, 0.25)" }))), /* @__PURE__ */ import_react.default.createElement(
      "path",
      {
        d: "M 0,0 L 500,0 L 500,30 Q 380,30 320,68 Q 250,105 180,68 Q 120,30 0,30 Z",
        fill: "rgba(139, 48, 56, 0.08)",
        filter: "url(#archShadow)"
      }
    ), /* @__PURE__ */ import_react.default.createElement(
      "path",
      {
        d: "M 0,0 L 500,0 L 500,22 Q 380,22 320,55 Q 250,90 180,55 Q 120,22 0,22 Z",
        fill: "none",
        stroke: "url(#heroGoldGradient3D)",
        strokeWidth: "2.5"
      }
    ), /* @__PURE__ */ import_react.default.createElement("circle", { cx: "250", cy: "100", r: "5", fill: "#C9A45C" })), /* @__PURE__ */ import_react.default.createElement("div", { className: "hanging-toran-banner" }, /* @__PURE__ */ import_react.default.createElement(
      "img",
      {
        src: "assets/toran.png",
        alt: "\u092E\u0902\u0917\u0932 \u0924\u094B\u0930\u0923",
        className: "toran-garland-img"
      }
    ))), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-content-wrapper 3d-layered-content" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-divine-crown-frame 3d-jharokha-container" }, /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        className: "divine-artwork-jharokha 3d-scalloped-pavilion",
        ref: jharokhaRef
      },
      /* @__PURE__ */ import_react.default.createElement(
        "img",
        {
          src: "assets/shiva_parvati_top_artwork.png",
          alt: "\u092D\u0917\u0935\u093E\u0928 \u0936\u093F\u0935 \u090F\u0935\u0902 \u092E\u093E\u0924\u093E \u092A\u093E\u0930\u094D\u0935\u0924\u0940",
          className: "shiva-parvati-art-img",
          width: "440",
          height: "260"
        }
      ),
      /* @__PURE__ */ import_react.default.createElement("div", { className: "jharokha-gold-border 3d-bevel-gold" }),
      /* @__PURE__ */ import_react.default.createElement("div", { className: "jharokha-depth-shadow" })
    )), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-ganesha-radiant-wrapper" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "ganesha-radiant-halo" }, /* @__PURE__ */ import_react.default.createElement(
      "img",
      {
        src: "assets/champagne_ganesha_bright.png",
        alt: "\u092D\u0917\u0935\u093E\u0928 \u0936\u094D\u0930\u0940 \u0917\u0923\u0947\u0936",
        className: "hero-ganesha-emblem-img"
      }
    )), /* @__PURE__ */ import_react.default.createElement("div", { className: "ganesha-blessing-shloka" }, "\u0965 \u0936\u094D\u0930\u0940 \u0917\u0923\u0947\u0936\u093E\u092F \u0928\u092E\u0903 \u0965")), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-pantheon-invocations" }, /* @__PURE__ */ import_react.default.createElement("span", null, "\u0965 \u0936\u094D\u0930\u0940 \u092C\u093E\u0923 \u092E\u093E\u0924\u093E \u0928\u092E\u0903 \u0965"), /* @__PURE__ */ import_react.default.createElement("span", { className: "dot-sep" }, "\u2022"), /* @__PURE__ */ import_react.default.createElement("span", null, "\u0965 \u0936\u094D\u0930\u0940 \u092E\u093E\u091C\u0940\u0938\u093E \u0928\u092E\u0903 \u0965"), /* @__PURE__ */ import_react.default.createElement("span", { className: "dot-sep" }, "\u2022"), /* @__PURE__ */ import_react.default.createElement("span", null, "\u0965 \u0936\u094D\u0930\u0940 \u092D\u094B\u092E\u093F\u092F\u093E\u091C\u0940 \u0928\u092E\u0903 \u0965"), /* @__PURE__ */ import_react.default.createElement("span", { className: "dot-sep" }, "\u2022"), /* @__PURE__ */ import_react.default.createElement("span", null, "\u0965 \u0936\u094D\u0930\u0940 \u092A\u093F\u0924\u0930\u0926\u0947\u0935\u093E\u092F \u0928\u092E\u0903 \u0965")), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-traditional-marwari-verse" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "verse-flourish" }, "\u201C"), /* @__PURE__ */ import_react.default.createElement("span", null, "\u0932\u093F\u0916\u094D\u092F\u094B\u0902 \u0928\u093F\u092E\u0902\u0924\u094D\u0930\u0923 \u092A\u094D\u0930\u0947\u092E\u0938\u0942, \u0906\u0935\u093E\u0930\u0940 \u092B\u0930\u094D\u0938\u0940 \u0930\u093E\u0916\u091C\u094B \u0964 \u092E\u094C\u0915\u094B \u092C\u0921\u094B \u0905\u0928\u092E\u094B\u0932 \u0939\u0948, \u0925\u094B\u0921\u0940 \u0938\u0940 \u092B\u0941\u0930\u094D\u0938\u0924 \u0930\u093E\u0916\u091C\u094B \u0965"), /* @__PURE__ */ import_react.default.createElement("span", { className: "verse-flourish" }, "\u201D")), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-main-title-block" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-royal-flourish-line" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "flourish-leaf" }, "\u{1F33F}"), /* @__PURE__ */ import_react.default.createElement("span", { className: "flourish-dash" }), /* @__PURE__ */ import_react.default.createElement("span", { className: "flourish-star" }, "\u2726"), /* @__PURE__ */ import_react.default.createElement("span", { className: "flourish-dash" }), /* @__PURE__ */ import_react.default.createElement("span", { className: "flourish-leaf" }, "\u{1F33F}")), /* @__PURE__ */ import_react.default.createElement("h1", { className: "hero-grand-title 3d-embossed-title" }, "\u0965 \u0935\u093F\u0935\u093E\u0939 \u0906\u092E\u0902\u0924\u094D\u0930\u0923 \u0965"), /* @__PURE__ */ import_react.default.createElement("p", { className: "hero-divine-subtitle" }, "\u092D\u0917\u0935\u093E\u0928 \u0936\u093F\u0935, \u092E\u093E\u0924\u093E \u092A\u093E\u0930\u094D\u0935\u0924\u0940, \u0936\u094D\u0930\u0940 \u0935\u093F\u0928\u093E\u092F\u0915 \u091C\u0940 \u092E\u0939\u093E\u0930\u093E\u091C \u090F\u0935\u0902 \u092A\u0942\u091C\u094D\u092F \u092A\u093F\u0924\u0930\u094B\u0902 \u0915\u0947 \u092A\u093E\u0935\u0928 \u0906\u0936\u0940\u0930\u094D\u0935\u093E\u0926 \u0938\u0947")), /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        className: "hero-couples-showcase-card 3d-tilt-showcase",
        ref: cardRef,
        onMouseMove: handleCardMouseMove,
        onMouseLeave: handleCardMouseLeave
      },
      /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-couple-unit 3d-couple-unit" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "couple-sacred-label" }, "\u2014 \u092A\u094D\u0930\u0925\u092E \u092A\u093E\u0935\u0928 \u092A\u0930\u093F\u0923\u092F \u2014"), /* @__PURE__ */ import_react.default.createElement("h2", { className: "couple-names-headline 3d-name-headline" }, "\u0906\u092F\u0941\u0937\u094D\u092E\u093E\u0928 \u0906\u0915\u093E\u0936"), /* @__PURE__ */ import_react.default.createElement("div", { className: "couple-parents-line" }, "\u0938\u0941\u092A\u0941\u0924\u094D\u0930 : ", /* @__PURE__ */ import_react.default.createElement("strong", null, "\u0936\u094D\u0930\u0940\u092E\u0924\u0940 \u0905\u0928\u0941\u0930\u093E\u0927\u093E \u2013 \u0936\u094D\u0930\u0940 \u0915\u0948\u0932\u093E\u0936 \u0917\u0939\u0932\u094B\u0924")), /* @__PURE__ */ import_react.default.createElement("div", { className: "couple-subh-vivah-badge 3d-shubh-badge" }, "\u2726 \u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939 \u2726"), /* @__PURE__ */ import_react.default.createElement("h2", { className: "couple-names-headline 3d-name-headline" }, "\u0906\u092F\u0941\u0937\u094D\u092E\u0924\u0940 \u0930\u0940\u0928\u093E"), /* @__PURE__ */ import_react.default.createElement("div", { className: "couple-parents-line" }, "\u0938\u0941\u092A\u0941\u0924\u094D\u0930\u0940 : ", /* @__PURE__ */ import_react.default.createElement("strong", null, "\u0936\u094D\u0930\u0940\u092E\u0924\u0940 \u091C\u0936\u094B\u0926\u093E \u0926\u0947\u0935\u0940 \u2013 \u0936\u094D\u0930\u0940 \u0917\u094B\u092A\u093E\u0932\u091C\u0940 \u091A\u094C\u0939\u093E\u0928")), /* @__PURE__ */ import_react.default.createElement("div", { className: "couple-date-tag 3d-date-pill" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "pill-cal-icon" }, "\u{1F5D3}\uFE0F"), /* @__PURE__ */ import_react.default.createElement("span", null, "\u0917\u0941\u0930\u0941\u0935\u093E\u0930, 10 \u0926\u093F\u0938\u0902\u092C\u0930 2026"))),
      /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-central-divider-unit 3d-divider-unit", "aria-hidden": "true" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "divider-gold-line" }), /* @__PURE__ */ import_react.default.createElement("div", { className: "divider-sacred-emblem 3d-rotating-kalash" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "emblem-symbol" }, "\u{1F451}"), /* @__PURE__ */ import_react.default.createElement("span", { className: "emblem-flourish" }, "\u2756")), /* @__PURE__ */ import_react.default.createElement("div", { className: "divider-gold-line" })),
      /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-couple-unit 3d-couple-unit" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "couple-sacred-label" }, "\u2014 \u0926\u094D\u0935\u093F\u0924\u0940\u092F \u092A\u093E\u0935\u0928 \u092A\u0930\u093F\u0923\u092F \u2014"), /* @__PURE__ */ import_react.default.createElement("h2", { className: "couple-names-headline 3d-name-headline" }, "\u0906\u092F\u0941\u0937\u094D\u092E\u0924\u0940 \u0936\u093F\u0935\u093E\u0928\u0940 (\u091C\u0940\u0928\u0942)"), /* @__PURE__ */ import_react.default.createElement("div", { className: "couple-parents-line" }, "\u0938\u0941\u092A\u0941\u0924\u094D\u0930\u0940 : ", /* @__PURE__ */ import_react.default.createElement("strong", null, "\u0936\u094D\u0930\u0940\u092E\u0924\u0940 \u0905\u0928\u0941\u0930\u093E\u0927\u093E \u2013 \u0936\u094D\u0930\u0940 \u0915\u0948\u0932\u093E\u0936 \u0917\u0939\u0932\u094B\u0924")), /* @__PURE__ */ import_react.default.createElement("div", { className: "couple-subh-vivah-badge 3d-shubh-badge" }, "\u2726 \u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939 \u2726"), /* @__PURE__ */ import_react.default.createElement("h2", { className: "couple-names-headline 3d-name-headline" }, "\u0906\u092F\u0941\u0937\u094D\u092E\u093E\u0928 \u0927\u0940\u0930\u091C \u091C\u0940"), /* @__PURE__ */ import_react.default.createElement("div", { className: "couple-parents-line" }, "\u0938\u0941\u092A\u0941\u0924\u094D\u0930 : ", /* @__PURE__ */ import_react.default.createElement("strong", null, "\u0936\u094D\u0930\u0940\u092E\u0924\u0940 \u0930\u0947\u0923\u0941 \u091C\u0940 \u2013 \u0936\u094D\u0930\u0940 \u092E\u0941\u0915\u0947\u0936\u091C\u0940 \u092A\u0930\u093F\u0939\u093E\u0930")), /* @__PURE__ */ import_react.default.createElement("div", { className: "couple-date-tag 3d-date-pill" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "pill-cal-icon" }, "\u{1F5D3}\uFE0F"), /* @__PURE__ */ import_react.default.createElement("span", null, "\u0936\u0928\u093F\u0935\u093E\u0930, 12 \u0926\u093F\u0938\u0902\u092C\u0930 2026")))
    ), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-venue-announcement-banner 3d-venue-banner" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "venue-title-label" }, "\u0935\u093F\u0935\u093E\u0939 \u0938\u094D\u0925\u0932 \u090F\u0935\u0902 \u092A\u094D\u0930\u0940\u0924\u093F\u092D\u094B\u091C :"), /* @__PURE__ */ import_react.default.createElement("div", { className: "banner-venue-location" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "pin-icon" }, "\u{1F4CD}"), /* @__PURE__ */ import_react.default.createElement("span", { className: "venue-name-bold" }, "\u0915\u0941\u092E\u093E\u0935\u0924 \u0935\u093E\u091F\u093F\u0915\u093E")), /* @__PURE__ */ import_react.default.createElement("div", { className: "banner-venue-address" }, "\u092A\u0941\u0928\u093E\u092F\u0924\u093E \u0930\u094B\u0921\u093C, \u092A\u093E\u0932\u0940 (\u0930\u093E\u091C\u0938\u094D\u0925\u093E\u0928)"), /* @__PURE__ */ import_react.default.createElement("div", { className: "banner-date-highlight" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "cal-icon" }, "\u{1F5D3}\uFE0F"), /* @__PURE__ */ import_react.default.createElement("span", { className: "date-str" }, "\u092E\u0941\u0916\u094D\u092F \u0935\u093F\u0935\u093E\u0939 \u0938\u092E\u093E\u0930\u094B\u0939 : \u0936\u0928\u093F\u0935\u093E\u0930, 12 \u0926\u093F\u0938\u0902\u092C\u0930 2026 (\u0938\u093E\u092F\u0902 6:15 \u092C\u091C\u0947 \u0938\u0947)"))), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-music-prompt-banner" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-music-prompt-text" }, /* @__PURE__ */ import_react.default.createElement("span", null, "\u{1F3BA}"), /* @__PURE__ */ import_react.default.createElement("span", null, "\u092E\u0927\u0941\u0930 \u0936\u0939\u0928\u093E\u0908 \u0915\u0940 \u0927\u0941\u0928 \u0938\u0941\u0928\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u092F\u0939\u093E\u0901 \u0938\u094D\u092A\u0930\u094D\u0936 \u0915\u0930\u0947\u0902")), /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        type: "button",
        className: "btn-start-music-prompt",
        onClick: handleStartMusic,
        title: "\u0935\u093F\u0935\u093E\u0939 \u0938\u0902\u0917\u0940\u0924 \u091A\u093E\u0932\u0942 \u0915\u0930\u0947\u0902 (30 \u0938\u0947\u0915\u0902\u0921 \u0938\u0947)",
        "aria-label": "\u0938\u0902\u0917\u0940\u0924 \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902"
      },
      /* @__PURE__ */ import_react.default.createElement("span", null, isMusicPlaying ? "\u{1F3B5} \u0938\u0902\u0917\u0940\u0924 \u092C\u091C \u0930\u0939\u093E \u0939\u0948" : "\u25B6 \u0938\u0902\u0917\u0940\u0924 \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902")
    )), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-animated-button-stage 3d-button-stage" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "sparkle-stars-cluster", "aria-hidden": "true" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "sparkle-star star-1" }, "\u2726"), /* @__PURE__ */ import_react.default.createElement("span", { className: "sparkle-star star-2" }, "\u2728"), /* @__PURE__ */ import_react.default.createElement("span", { className: "sparkle-star star-3" }, "\u2726"), /* @__PURE__ */ import_react.default.createElement("span", { className: "sparkle-star star-4" }, "\u2728"), /* @__PURE__ */ import_react.default.createElement("span", { className: "sparkle-star star-5" }, "\u2726"), /* @__PURE__ */ import_react.default.createElement("span", { className: "sparkle-star star-6" }, "\u2728")), /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        onClick: handleButtonClick,
        className: "btn-animated-invitation 3d-cta-button",
        "aria-label": "\u0906\u092E\u0902\u0924\u094D\u0930\u0923 \u0926\u0947\u0916\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u092F\u0939\u093E\u0901 \u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u0947\u0902"
      },
      /* @__PURE__ */ import_react.default.createElement("span", { className: "btn-sparkle-lead" }, "\u2726"),
      /* @__PURE__ */ import_react.default.createElement("span", { className: "btn-main-label" }, "\u0906\u092E\u0902\u0924\u094D\u0930\u0923 \u0926\u0947\u0916\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u092F\u0939\u093E\u0901 \u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u0947\u0902"),
      /* @__PURE__ */ import_react.default.createElement("span", { className: "btn-sparkle-trail" }, "\u2726"),
      /* @__PURE__ */ import_react.default.createElement("span", { className: "btn-shimmer-light-sweep", "aria-hidden": "true" })
    )), /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        className: "hero-scroll-indicator",
        onClick: handleButtonClick,
        role: "button",
        tabIndex: 0,
        "aria-label": "\u0935\u0930-\u0935\u0927\u0942 \u0935\u093F\u0935\u0930\u0923 \u0926\u0947\u0916\u0928\u0947 \u0939\u0947\u0924\u0941 \u0928\u0940\u091A\u0947 \u0938\u094D\u0915\u094D\u0930\u0949\u0932 \u0915\u0930\u0947\u0902"
      },
      /* @__PURE__ */ import_react.default.createElement("span", { className: "scroll-label" }, "\u0928\u0940\u091A\u0947 \u0926\u0947\u0916\u0947\u0902"),
      /* @__PURE__ */ import_react.default.createElement("div", { className: "scroll-chevron-bounce" }, /* @__PURE__ */ import_react.default.createElement("svg", { viewBox: "0 0 24 24", className: "chevron-svg", "aria-hidden": "true" }, /* @__PURE__ */ import_react.default.createElement("path", { d: "M7 10l5 5 5-5", fill: "none", stroke: "#8B3038", strokeWidth: "2.2", strokeLinecap: "round" })))
    )));
  }

  // src/components/CouplesSection.jsx
  var import_react2 = __toESM(__require("react"));
  function CouplesSection() {
    const card1Ref = (0, import_react2.useRef)(null);
    const card2Ref = (0, import_react2.useRef)(null);
    const handleTilt = (ref) => (e) => {
      const card = ref.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / centerY * -6;
      const rotateY = (x - centerX) / centerX * 6;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale3d(1.02, 1.02, 1.02)`;
    };
    const handleResetTilt = (ref) => () => {
      if (ref.current) {
        ref.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)";
      }
    };
    return /* @__PURE__ */ import_react2.default.createElement("section", { className: "wedding-section couples-family-section 3d-couples-section", id: "couples-section" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "section-royal-card couples-royal-pavilion 3d-perspective-card" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-border-gold-outer 3d-bevel-gold", "aria-hidden": "true" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-border-gold-inner", "aria-hidden": "true" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "section-header-flourish" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "shloka-header-group" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "shloka-ornament" }, "\u2756"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "shloka-text" }, "\u0965 \u092E\u0902\u0917\u0932 \u092A\u0930\u093F\u0923\u092F\u094B\u0924\u094D\u0938\u0935 \u0965"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "shloka-ornament" }, "\u2756")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "family-origin-pill 3d-origin-pill" }, "\u092A\u093E\u0932\u0940 \u0915\u093E \u092A\u094D\u0930\u0924\u093F\u0937\u094D\u0920\u093F\u0924 \u0917\u0939\u0932\u094B\u0924 \u092A\u0930\u093F\u0935\u093E\u0930"), /* @__PURE__ */ import_react2.default.createElement("h2", { className: "section-title-gold 3d-gold-title" }, "\u0935\u0930-\u0935\u0927\u0942 \u092A\u093E\u0935\u0928 \u092A\u0930\u093F\u091A\u092F"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "section-subtitle-script" }, "\u0936\u094D\u0930\u0940 \u0935\u093F\u0928\u093E\u092F\u0915 \u091C\u0940 \u092E\u0939\u093E\u0930\u093E\u091C \u0915\u0940 \u0905\u0938\u0940\u092E \u0905\u0928\u0941\u0915\u092E\u094D\u092A\u093E \u090F\u0935\u0902 \u092A\u0942\u091C\u094D\u092F \u092A\u093F\u0924\u0930\u094B\u0902 \u0915\u0947 \u092A\u093E\u0935\u0928 \u0906\u0936\u0940\u0930\u094D\u0935\u093E\u0926 \u0938\u0947"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "section-title-divider" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "divider-line" }), /* @__PURE__ */ import_react2.default.createElement("span", { className: "divider-star" }, "\u2726 \u{1F451} \u2726"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "divider-line" }))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "ancestral-heritage-banner 3d-heritage-banner" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "heritage-badge-tag" }, "\u092A\u0942\u091C\u094D\u092F \u092A\u0942\u0930\u094D\u0935\u091C\u094B\u0902 \u0915\u093E \u092A\u093E\u0935\u0928 \u0906\u0936\u0940\u0930\u094D\u0935\u093E\u0926 \u090F\u0935\u0902 \u0915\u0941\u0932 \u092A\u0930\u092E\u094D\u092A\u0930\u093E"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "heritage-lineage-text" }, /* @__PURE__ */ import_react2.default.createElement("strong", null, "\u0938\u094D\u0935. \u0936\u094D\u0930\u0940\u092E\u0924\u0940 \u0932\u0947\u0939\u0930\u0940 \u092C\u093E\u0908 \u2013 \u0938\u094D\u0935. \u0936\u094D\u0930\u0940 \u0917\u094D\u092F\u093E\u0930\u0938\u0940\u0932\u093E\u0932\u091C\u0940"), " \u0915\u0947 \u092A\u0921\u093C\u092A\u094C\u0924\u094D\u0930 \u0935 \u092A\u0921\u093C\u092A\u094C\u0924\u094D\u0930\u0940", /* @__PURE__ */ import_react2.default.createElement("br", null), "\u090F\u0935\u0902 ", /* @__PURE__ */ import_react2.default.createElement("strong", null, "\u0936\u094D\u0930\u0940\u092E\u0924\u0940 \u0926\u0941\u0930\u094D\u0917\u093E \u092C\u093E\u0908 \u2013 \u0938\u094D\u0935. \u0936\u094D\u0930\u0940 \u092E\u0926\u0928\u0932\u093E\u0932\u091C\u0940 \u0917\u0939\u0932\u094B\u0924"), " \u0915\u0947 \u0932\u093E\u0921\u0932\u0947 \u092A\u094C\u0924\u094D\u0930 \u0935 \u092A\u094C\u0924\u094D\u0930\u0940")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "couples-editorial-grid 3d-couples-grid" }, /* @__PURE__ */ import_react2.default.createElement(
      "article",
      {
        className: "couple-editorial-card couple-palace-jharokha 3d-couple-card",
        ref: card1Ref,
        onMouseMove: handleTilt(card1Ref),
        onMouseLeave: handleResetTilt(card1Ref)
      },
      /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-ornament-corner tl" }),
      /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-ornament-corner tr" }),
      /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-ornament-corner bl" }),
      /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-ornament-corner br" }),
      /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-sacred-pill 3d-sacred-pill" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "pill-star" }, "\u2726"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "pill-label" }, "\u092A\u094D\u0930\u0925\u092E \u092A\u093E\u0935\u0928 \u092A\u0930\u093F\u0923\u092F"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "pill-star" }, "\u2726")),
      /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-individual-block groom-block" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "profile-ornament-icon 3d-icon-float" }, "\u{1F935}"), /* @__PURE__ */ import_react2.default.createElement("h3", { className: "individual-name 3d-profile-name" }, "\u0906\u092F\u0941\u0937\u094D\u092E\u093E\u0928 \u0906\u0915\u093E\u0936"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "individual-parents" }, "\u0938\u0941\u092A\u0941\u0924\u094D\u0930 : ", /* @__PURE__ */ import_react2.default.createElement("strong", null, "\u0936\u094D\u0930\u0940\u092E\u0924\u0940 \u0905\u0928\u0941\u0930\u093E\u0927\u093E \u2013 \u0936\u094D\u0930\u0940 \u0915\u0948\u0932\u093E\u0936 \u0917\u0939\u0932\u094B\u0924"))),
      /* @__PURE__ */ import_react2.default.createElement("div", { className: "weds-flourish-separator" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "weds-line" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "weds-badge 3d-weds-badge" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "weds-sub" }, "\u2726"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "weds-text" }, "\u0938\u0902\u0917"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "weds-sub" }, "\u2726")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "weds-line" })),
      /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-individual-block bride-block" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "profile-ornament-icon 3d-icon-float" }, "\u{1F470}"), /* @__PURE__ */ import_react2.default.createElement("h3", { className: "individual-name 3d-profile-name" }, "\u0906\u092F\u0941\u0937\u094D\u092E\u0924\u0940 \u0930\u0940\u0928\u093E"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "individual-parents" }, "\u0938\u0941\u092A\u0941\u0924\u094D\u0930\u0940 : ", /* @__PURE__ */ import_react2.default.createElement("strong", null, "\u0936\u094D\u0930\u0940\u092E\u0924\u0940 \u091C\u0936\u094B\u0926\u093E \u0926\u0947\u0935\u0940 \u2013 \u0936\u094D\u0930\u0940 \u0917\u094B\u092A\u093E\u0932\u091C\u0940 \u091A\u094C\u0939\u093E\u0928")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "family-native-place" }, /* @__PURE__ */ import_react2.default.createElement("span", null, "\u{1F4CD} \u0928\u093F\u0935\u093E\u0938 : \u0938\u092E\u0926\u0921\u093C\u0940"))),
      /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-ceremony-date-badge 3d-ceremony-box" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "ceremony-date-icon" }, "\u{1F5D3}\uFE0F"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "ceremony-date-details" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "ceremony-label" }, "\u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939 \u0924\u093F\u0925\u093F"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "ceremony-exact-date" }, "\u0917\u0941\u0930\u0941\u0935\u093E\u0930, 10 \u0926\u093F\u0938\u0902\u092C\u0930 2026"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "ceremony-muhurat" }, "\u0935\u093F.\u0938\u0902. 2083 \u092E\u093E\u0930\u094D\u0917\u0936\u0940\u0930\u094D\u0937 \u0936\u0941\u0915\u094D\u0932 \u092A\u0915\u094D\u0937")))
    ), /* @__PURE__ */ import_react2.default.createElement("div", { className: "couples-central-holy-connector 3d-connector", "aria-hidden": "true" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "connector-vertical-line" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "connector-holy-seal 3d-pulsing-seal" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "seal-kalash" }, "\u{1F3FA}"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "seal-flourish" }, "\u2756")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "connector-vertical-line" })), /* @__PURE__ */ import_react2.default.createElement(
      "article",
      {
        className: "couple-editorial-card couple-palace-jharokha 3d-couple-card",
        ref: card2Ref,
        onMouseMove: handleTilt(card2Ref),
        onMouseLeave: handleResetTilt(card2Ref)
      },
      /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-ornament-corner tl" }),
      /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-ornament-corner tr" }),
      /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-ornament-corner bl" }),
      /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-ornament-corner br" }),
      /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-sacred-pill 3d-sacred-pill" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "pill-star" }, "\u2726"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "pill-label" }, "\u0926\u094D\u0935\u093F\u0924\u0940\u092F \u092A\u093E\u0935\u0928 \u092A\u0930\u093F\u0923\u092F"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "pill-star" }, "\u2726")),
      /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-individual-block bride-block" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "profile-ornament-icon 3d-icon-float" }, "\u{1F470}"), /* @__PURE__ */ import_react2.default.createElement("h3", { className: "individual-name 3d-profile-name" }, "\u0906\u092F\u0941\u0937\u094D\u092E\u0924\u0940 \u0936\u093F\u0935\u093E\u0928\u0940 (\u091C\u0940\u0928\u0942)"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "individual-parents" }, "\u0938\u0941\u092A\u0941\u0924\u094D\u0930\u0940 : ", /* @__PURE__ */ import_react2.default.createElement("strong", null, "\u0936\u094D\u0930\u0940\u092E\u0924\u0940 \u0905\u0928\u0941\u0930\u093E\u0927\u093E \u2013 \u0936\u094D\u0930\u0940 \u0915\u0948\u0932\u093E\u0936 \u0917\u0939\u0932\u094B\u0924"))),
      /* @__PURE__ */ import_react2.default.createElement("div", { className: "weds-flourish-separator" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "weds-line" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "weds-badge 3d-weds-badge" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "weds-sub" }, "\u2726"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "weds-text" }, "\u0938\u0902\u0917"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "weds-sub" }, "\u2726")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "weds-line" })),
      /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-individual-block groom-block" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "profile-ornament-icon 3d-icon-float" }, "\u{1F935}"), /* @__PURE__ */ import_react2.default.createElement("h3", { className: "individual-name 3d-profile-name" }, "\u0906\u092F\u0941\u0937\u094D\u092E\u093E\u0928 \u0927\u0940\u0930\u091C \u091C\u0940"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "individual-parents" }, "\u0938\u0941\u092A\u0941\u0924\u094D\u0930 : ", /* @__PURE__ */ import_react2.default.createElement("strong", null, "\u0936\u094D\u0930\u0940\u092E\u0924\u0940 \u0930\u0947\u0923\u0941 \u091C\u0940 \u2013 \u0936\u094D\u0930\u0940 \u092E\u0941\u0915\u0947\u0936\u091C\u0940 \u092A\u0930\u093F\u0939\u093E\u0930")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "family-native-place" }, /* @__PURE__ */ import_react2.default.createElement("span", null, "\u{1F4CD} \u0928\u093F\u0935\u093E\u0938 : \u092C\u093E\u0932\u094B\u0924\u0930\u093E"))),
      /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-ceremony-date-badge 3d-ceremony-box" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "ceremony-date-icon" }, "\u{1F5D3}\uFE0F"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "ceremony-date-details" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "ceremony-label" }, "\u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939 \u0924\u093F\u0925\u093F"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "ceremony-exact-date" }, "\u0936\u0928\u093F\u0935\u093E\u0930, 12 \u0926\u093F\u0938\u0902\u092C\u0930 2026"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "ceremony-muhurat" }, "\u0935\u093F.\u0938\u0902. 2083 \u092E\u093E\u0930\u094D\u0917\u0936\u0940\u0930\u094D\u0937 \u0936\u0941\u0915\u094D\u0932 \u092A\u0915\u094D\u0937 3")))
    )), /* @__PURE__ */ import_react2.default.createElement("div", { className: "couples-sacred-blessing-footer 3d-blessing-footer" }, /* @__PURE__ */ import_react2.default.createElement("p", { className: "blessing-footer-text" }, "\u201C\u0915\u0947 \u092E\u0902\u0917\u0932 \u092A\u0930\u093F\u0923\u092F\u094B\u0924\u094D\u0938\u0935 \u0915\u0940 \u092E\u0927\u0941\u0930 \u0935\u0947\u0932\u093E \u092E\u0947\u0902 \u0906\u092A \u0938\u092D\u0940 \u092A\u0927\u093E\u0930\u0915\u0930 \u0935\u0930\u2013\u0935\u0927\u0941 \u0915\u094B \u0905\u092A\u0928\u093E \u0936\u0941\u092D \u0906\u0936\u0940\u0930\u094D\u0935\u093E\u0926 \u092A\u094D\u0930\u0926\u093E\u0928 \u0915\u0930 \u0939\u092E\u0947\u0902 \u0905\u0928\u0941\u0917\u094D\u0930\u0939\u093F\u0924 \u0915\u0930\u0947\u0902\u0964\u201D"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "blessing-footer-signoff" }, "\u2014 \u0917\u0939\u0932\u094B\u0924 \u092A\u0930\u093F\u0935\u093E\u0930, \u092A\u093E\u0932\u0940 (\u092E\u093E\u0930\u0935\u093E\u0921\u093C)"))));
  }

  // src/components/WeddingTimeline.jsx
  var import_react3 = __toESM(__require("react"));
  function WeddingTimeline() {
    const [activeDay, setActiveDay] = (0, import_react3.useState)("all");
    const eventsList = [
      {
        id: "e1",
        num: "\u0967",
        dayId: "day1",
        dayLabel: "\u0938\u094B\u092E\u0935\u093E\u0930, 7 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        dateStr: "07 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        timeStr: "\u0926\u094B\u092A\u0939\u0930 3:15 \u092C\u091C\u0947",
        title: "\u0918\u0943\u0924\u092A\u093E\u0928",
        icon: "\u{1FA94}",
        desc: "\u092E\u093E\u0902\u0917\u0932\u093F\u0915 \u0915\u093E\u0930\u094D\u092F\u094B\u0902 \u0915\u0947 \u0928\u093F\u0930\u094D\u0935\u093F\u0918\u094D\u0928 \u0936\u0941\u092D\u093E\u0930\u0902\u092D \u0939\u0947\u0924\u0941 \u092A\u0935\u093F\u0924\u094D\u0930 \u0935\u0948\u0926\u093F\u0915 \u0930\u0940\u0924\u093F-\u0930\u093F\u0935\u093E\u091C\u094B\u0902 \u0938\u0947 \u0936\u0941\u0926\u094D\u0927 \u0918\u0943\u0924\u092A\u093E\u0928 \u0938\u0902\u0938\u094D\u0915\u093E\u0930\u0964",
        calDate: "20261207T151500/20261207T170000",
        badge: "\u092E\u093E\u0902\u0917\u0932\u093F\u0915 \u0936\u0941\u092D\u093E\u0930\u0902\u092D",
        note: null
      },
      {
        id: "e2",
        num: "\u0968",
        dayId: "day1",
        dayLabel: "\u0938\u094B\u092E\u0935\u093E\u0930, 7 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        dateStr: "07 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        timeStr: "\u0938\u093E\u092F\u0902 5:15 \u092C\u091C\u0947",
        title: "\u0935\u093F\u0928\u093E\u092F\u0915 \u0938\u094D\u0925\u093E\u092A\u0928\u093E",
        icon: "\u{1F549}\uFE0F",
        desc: "\u092A\u094D\u0930\u0925\u092E \u092A\u0942\u091C\u094D\u092F \u0935\u093F\u0918\u094D\u0928\u0939\u0930\u094D\u0924\u093E \u092D\u0917\u0935\u093E\u0928 \u0936\u094D\u0930\u0940 \u0917\u0923\u0947\u0936 \u091C\u0940 \u0915\u0940 \u0938\u0935\u093F\u0927\u093F \u0938\u094D\u0925\u093E\u092A\u0928\u093E \u090F\u0935\u0902 \u0930\u093F\u0926\u094D\u0927\u093F-\u0938\u093F\u0926\u094D\u0927\u093F \u0938\u0939\u093F\u0924 \u092A\u0927\u093E\u0930\u0928\u0947 \u0915\u0940 \u092E\u0902\u0917\u0932 \u092A\u094D\u0930\u093E\u0930\u094D\u0925\u0928\u093E\u0964",
        calDate: "20261207T171500/20261207T193000",
        badge: "\u0935\u0948\u0926\u093F\u0915 \u0917\u0923\u0947\u0936 \u092A\u0942\u091C\u0928",
        note: null
      },
      {
        id: "e3",
        num: "\u0969",
        dayId: "day2",
        dayLabel: "\u092E\u0902\u0917\u0932\u0935\u093E\u0930, 8 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        dateStr: "08 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        timeStr: "\u0926\u094B\u092A\u0939\u0930 1:15 \u092C\u091C\u0947",
        title: "\u0939\u0932\u094D\u0926\u0940 / \u092E\u0947\u0939\u0902\u0926\u0940 \u0930\u0938\u094D\u092E",
        icon: "\u{1F33F}",
        desc: "\u092E\u093E\u0902\u0917\u0932\u093F\u0915 \u0917\u0940\u0924\u094B\u0902 \u0915\u0940 \u092E\u0927\u0941\u0930 \u0917\u0942\u0902\u091C \u0915\u0947 \u0938\u0902\u0917 \u0935\u0930-\u0935\u0927\u0942 \u0915\u094B \u0936\u0941\u092D \u0939\u0932\u094D\u0926\u0940 \u0932\u0947\u092A\u0928 \u090F\u0935\u0902 \u0938\u0916\u093F\u092F\u094B\u0902 \u0915\u0947 \u0939\u093E\u0925\u094B\u0902 \u092E\u0947\u0902 \u0938\u091C\u0940 \u092E\u0947\u0939\u0902\u0926\u0940\u0964",
        calDate: "20261208T131500/20261208T170000",
        badge: "\u0938\u0924\u0930\u0902\u0917\u0940 \u0936\u0917\u0941\u0928",
        note: null
      },
      {
        id: "e4",
        num: "\u096A",
        dayId: "day3",
        dayLabel: "\u092C\u0941\u0927\u0935\u093E\u0930, 9 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        dateStr: "09 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        timeStr: "\u0926\u094B\u092A\u0939\u0930 12:15 \u092C\u091C\u0947",
        title: "\u092E\u093E\u092F\u0930\u093E (\u092D\u093E\u0924)",
        icon: "\u{1F381}",
        desc: "\u0928\u0928\u093F\u0939\u093E\u0932 \u092A\u0915\u094D\u0937 \u0926\u094D\u0935\u093E\u0930\u093E \u092D\u093E\u0935\u092D\u0940\u0928\u093E \u092E\u093E\u092F\u0930\u093E, \u092E\u0902\u0917\u0932 \u091A\u0941\u0928\u0930\u0940 \u090F\u0935\u0902 \u092A\u0930\u093F\u091C\u0928\u094B\u0902 \u0915\u094B \u0938\u094D\u0928\u0947\u0939\u093F\u0932 \u0906\u0936\u0940\u0937 \u0935 \u092A\u093E\u0930\u0902\u092A\u0930\u093F\u0915 \u092D\u0947\u0902\u091F\u0964",
        calDate: "20261209T121500/20261209T150000",
        badge: "\u0928\u0928\u093F\u0939\u093E\u0932 \u092A\u0930\u092E\u094D\u092A\u0930\u093E",
        note: null
      },
      {
        id: "e5",
        num: "\u096B",
        dayId: "day3",
        dayLabel: "\u092C\u0941\u0927\u0935\u093E\u0930, 9 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        dateStr: "09 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        timeStr: "\u0938\u093E\u092F\u0902 5:15 \u092C\u091C\u0947",
        title: "\u092C\u0928\u094D\u0926\u094B\u0932\u0940 (\u0936\u094B\u092D\u093E \u092F\u093E\u0924\u094D\u0930\u093E)",
        icon: "\u{1F941}",
        desc: "\u0922\u094B\u0932-\u0928\u0917\u093E\u0921\u093C\u094B\u0902 \u0915\u0940 \u092E\u0902\u0917\u0932 \u0925\u093E\u092A \u090F\u0935\u0902 \u0909\u0932\u094D\u0932\u093E\u0938 \u0915\u0947 \u0938\u093E\u0925 \u092A\u0930\u093F\u091C\u0928\u094B\u0902 \u0935 \u0938\u0917\u0947-\u0938\u0902\u092C\u0902\u0927\u093F\u092F\u094B\u0902 \u0938\u0902\u0917 \u092D\u0935\u094D\u092F \u092A\u093E\u0930\u0902\u092A\u0930\u093F\u0915 \u092C\u0928\u094D\u0926\u094B\u0932\u0940\u0964",
        calDate: "20261209T171500/20261209T193000",
        badge: "\u0930\u093E\u091C\u0938\u094D\u0925\u093E\u0928\u0940 \u092C\u0928\u094D\u0926\u094B\u0932\u0940",
        note: null
      },
      {
        id: "e6",
        num: "\u096C",
        dayId: "day3",
        dayLabel: "\u092C\u0941\u0927\u0935\u093E\u0930, 9 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        dateStr: "09 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        timeStr: "\u0930\u093E\u0924\u094D\u0930\u093F 8:00 \u092C\u091C\u0947",
        title: "\u092E\u0939\u093F\u0932\u093E \u0938\u0902\u0917\u0940\u0924",
        icon: "\u{1FA95}",
        desc: "\u0930\u093E\u091C\u0938\u094D\u0925\u093E\u0928\u0940 \u0932\u094B\u0915\u0917\u0940\u0924\u094B\u0902, \u0918\u0942\u092E\u0930 \u0928\u0943\u0924\u094D\u092F \u090F\u0935\u0902 \u092A\u0930\u093F\u0935\u093E\u0930\u091C\u0928\u094B\u0902 \u0915\u0940 \u092E\u0928\u092E\u094B\u0939\u0915 \u0938\u093E\u0902\u0938\u094D\u0915\u0943\u0924\u093F\u0915 \u092A\u094D\u0930\u0938\u094D\u0924\u0941\u0924\u093F\u092F\u094B\u0902 \u0938\u0947 \u0938\u091C\u0940 \u0938\u0941\u0930\u092E\u092F\u0940 \u0938\u0902\u0927\u094D\u092F\u093E\u0964",
        calDate: "20261209T200000/20261209T230000",
        badge: "\u0938\u093E\u0902\u0938\u094D\u0915\u0943\u0924\u093F\u0915 \u0938\u0902\u0927\u094D\u092F\u093E",
        note: null
      },
      {
        id: "e7",
        num: "\u096D",
        dayId: "day4",
        dayLabel: "\u0917\u0941\u0930\u0941\u0935\u093E\u0930, 10 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        dateStr: "10 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        timeStr: "\u0926\u094B\u092A\u0939\u0930 12:15 \u092C\u091C\u0947",
        title: "\u092C\u093E\u0930\u093E\u0924 \u092A\u094D\u0930\u0938\u094D\u0925\u093E\u0928 (\u0938\u092E\u0926\u0921\u093C\u0940 \u0939\u0947\u0924\u0941)",
        icon: "\u{1F68C}",
        desc: "\u0935\u0930 \u0906\u092F\u0941\u0937\u094D\u092E\u093E\u0928 \u0906\u0915\u093E\u0936 \u0915\u0940 \u092C\u093E\u0930\u093E\u0924 \u0915\u093E \u0938\u092E\u0926\u0921\u093C\u0940 \u092E\u0947\u0902 \u0936\u094D\u0930\u0940\u092E\u093E\u0928 \u092C\u094D\u092F\u093E\u0908\u091C\u0940 \u0927\u0928\u0930\u093E\u091C \u091C\u0940 \u091A\u094C\u0939\u093E\u0928 \u0915\u0947 \u0928\u093F\u0935\u093E\u0938 \u0938\u094D\u0925\u093E\u0928 \u092A\u0930 \u092A\u094D\u0930\u0938\u094D\u0925\u093E\u0928\u0964",
        calDate: "20261210T121500/20261210T160000",
        badge: "\u092C\u093E\u0930\u093E\u0924 \u092A\u094D\u0930\u0938\u094D\u0925\u093E\u0928",
        note: "\u0928\u094B\u091F : \u092C\u093E\u0930\u093E\u0924 \u0938\u092E\u0926\u0921\u093C\u0940 \u0936\u094D\u0930\u0940\u092E\u093E\u0928 \u092C\u094D\u092F\u093E\u0908\u091C\u0940 \u0927\u0928\u0930\u093E\u091C \u091C\u0940 \u091A\u094C\u0939\u093E\u0928 \u0915\u0947 \u0928\u093F\u0935\u093E\u0938 \u0938\u094D\u0925\u093E\u0928 \u092A\u0930 \u092A\u094D\u0930\u0938\u094D\u0925\u093E\u0928 \u0915\u0930\u0947\u0917\u0940\u0964 \u092C\u0938 \u0926\u094B\u092A\u0939\u0930 12:15 \u092C\u091C\u0947 \u092A\u094D\u0930\u0938\u094D\u0925\u093E\u0928 \u0915\u0930\u0947\u0917\u0940\u0964"
      },
      {
        id: "e8",
        num: "\u096E",
        dayId: "day5",
        dayLabel: "\u0936\u0928\u093F\u0935\u093E\u0930, 12 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        dateStr: "12 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        timeStr: "\u0938\u093E\u092F\u0902 5:15 \u092C\u091C\u0947",
        title: "\u092C\u093E\u0930\u093E\u0924 \u0938\u094D\u0935\u093E\u0917\u0924 (\u092C\u093E\u0932\u094B\u0924\u0930\u093E \u0938\u0947 \u0906\u0917\u092E\u0928)",
        icon: "\u{1F3BA}",
        desc: "\u092C\u093E\u0932\u094B\u0924\u0930\u093E \u0938\u0947 \u092A\u0927\u093E\u0930\u0940 \u0935\u0930 \u0906\u092F\u0941\u0937\u094D\u092E\u093E\u0928 \u0927\u0940\u0930\u091C \u091C\u0940 \u0915\u0940 \u092C\u093E\u0930\u093E\u0924 \u0915\u093E \u0915\u0941\u092E\u093E\u0935\u0924 \u0935\u093E\u091F\u093F\u0915\u093E, \u092A\u093E\u0932\u0940 \u092E\u0947\u0902 \u092E\u0902\u0917\u0932 \u0935\u093E\u0926\u094D\u092F-\u092F\u0902\u0924\u094D\u0930\u094B\u0902 \u0915\u0947 \u0938\u093E\u0925 \u092D\u0935\u094D\u092F \u0938\u094D\u0935\u093E\u0917\u0924\u0964",
        calDate: "20261212T171500/20261212T181500",
        badge: "\u092C\u093E\u0930\u093E\u0924 \u0938\u094D\u0935\u093E\u0917\u0924",
        note: "\u0928\u094B\u091F : \u092C\u093E\u0930\u093E\u0924 \u0915\u0941\u092E\u093E\u0935\u0924 \u0935\u093E\u091F\u093F\u0915\u093E \u092A\u0941\u0928\u093E\u092F\u0924\u093E \u0930\u094B\u0921\u093C \u092A\u093E\u0932\u0940 \u092E\u0947\u0902 \u0906\u0917\u092E\u0928 \u0939\u094B\u0917\u0940\u0964"
      },
      {
        id: "e9",
        num: "\u096F",
        dayId: "day5",
        dayLabel: "\u0936\u0928\u093F\u0935\u093E\u0930, 12 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        dateStr: "12 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        timeStr: "\u0930\u093E\u0924\u094D\u0930\u093F 10:15 \u092C\u091C\u0947",
        title: "\u092A\u093E\u0923\u093F\u0917\u094D\u0930\u0939\u0923 \u0938\u0902\u0938\u094D\u0915\u093E\u0930",
        icon: "\u{1F451}",
        desc: "\u092A\u0935\u093F\u0924\u094D\u0930 \u0905\u0917\u094D\u0928\u093F \u0915\u094B \u0938\u093E\u0915\u094D\u0937\u0940 \u092E\u093E\u0928\u0915\u0930 \u0935\u0948\u0926\u093F\u0915 \u092E\u0902\u0924\u094D\u0930\u094B\u091A\u094D\u091A\u093E\u0930, \u0938\u092A\u094D\u0924\u092A\u0926\u0940, \u0915\u0928\u094D\u092F\u093E\u0926\u093E\u0928 \u090F\u0935\u0902 \u092E\u0902\u0917\u0932 \u092B\u0947\u0930\u0947\u0964",
        calDate: "20261212T221500/20261213T020000",
        badge: "\u0935\u0948\u0926\u093F\u0915 \u092B\u0947\u0930\u0947",
        note: null
      }
    ];
    const filteredEvents = activeDay === "all" ? eventsList : eventsList.filter((ev) => ev.dayId === activeDay);
    const makeGoogleCalendarUrl = (ev) => {
      const text = encodeURIComponent(ev.title + " \u2014 \u0906\u0915\u093E\u0936 \u090F\u0935\u0902 \u0930\u0940\u0928\u093E | \u0936\u093F\u0935\u093E\u0928\u0940 \u090F\u0935\u0902 \u0927\u0940\u0930\u091C \u0935\u093F\u0935\u093E\u0939");
      const dates = ev.calDate;
      const details = encodeURIComponent(ev.desc + (ev.note ? `
${ev.note}` : "") + " \n\u0938\u094D\u0925\u093E\u0928: \u0915\u0941\u092E\u093E\u0935\u0924 \u0935\u093E\u091F\u093F\u0915\u093E, \u092A\u0941\u0928\u093E\u092F\u0924\u093E \u0930\u094B\u0921\u093C, \u092A\u093E\u0932\u0940 (\u0930\u093E\u091C\u0938\u094D\u0925\u093E\u0928)\u0964");
      const location = encodeURIComponent("Kumawat Vatika, Punayata Road, Pali, Rajasthan, India");
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}`;
    };
    return /* @__PURE__ */ import_react3.default.createElement("section", { className: "wedding-section timeline-section 3d-timeline-section", id: "events-section" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "section-royal-card heritage-timeline-card 3d-heritage-timeline" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "card-border-gold-outer 3d-bevel-gold", "aria-hidden": "true" }), /* @__PURE__ */ import_react3.default.createElement("div", { className: "card-border-gold-inner", "aria-hidden": "true" }), /* @__PURE__ */ import_react3.default.createElement("div", { className: "section-header-flourish" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "card-invocations-trio", style: { display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap", marginBottom: "8px" } }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "shloka-text", style: { fontSize: "13px" } }, "\u0965 \u0936\u094D\u0930\u0940 \u092C\u093E\u0923 \u092E\u093E\u0924\u093E \u0928\u092E\u0903 \u0965"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "shloka-text", style: { fontSize: "13px" } }, "\u0965 \u0936\u094D\u0930\u0940 \u0917\u0923\u0947\u0936\u093E\u092F \u0928\u092E\u0903 \u0965"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "shloka-text", style: { fontSize: "13px" } }, "\u0965 \u0936\u094D\u0930\u0940 \u092E\u093E\u091C\u0940\u0938\u093E \u0928\u092E\u0903 \u0965")), /* @__PURE__ */ import_react3.default.createElement("p", { className: "timeline-intro-shloka", style: { fontStyle: "italic", color: "var(--c-headings)", fontSize: "15px", maxWidth: "640px", margin: "0 auto 12px" } }, "\u201C\u0935\u093F\u0918\u094D\u0928 \u0939\u0930\u0923 \u092E\u0902\u0917\u0932 \u0915\u0930\u0923 \u0917\u0923\u0928\u093E\u092F\u0915 \u0917\u0923\u0930\u093E\u091C \u0964", /* @__PURE__ */ import_react3.default.createElement("br", null), "\u0930\u093F\u0926\u094D\u0927\u0940 \u0938\u093F\u0926\u094D\u0927\u0940 \u0938\u0939\u093F\u0924 \u092A\u0927\u093E\u0930\u091C\u094B \u092A\u0941\u0930\u0923 \u0915\u0930\u091C\u094B \u0915\u093E\u091C \u0965\u201D"), /* @__PURE__ */ import_react3.default.createElement("h2", { className: "section-title-gold 3d-gold-title" }, "\u092E\u093E\u0902\u0917\u0932\u093F\u0915 \u0915\u093E\u0930\u094D\u092F\u0915\u094D\u0930\u092E \u0935\u093F\u0935\u0930\u0923"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "section-subtitle-script" }, "\u0938\u092E\u0938\u094D\u0924 \u0935\u0948\u0926\u093F\u0915 \u0930\u0938\u094D\u092E\u0947\u0902, \u092E\u093E\u0902\u0917\u0932\u093F\u0915 \u092E\u0941\u0939\u0942\u0930\u094D\u0924 \u090F\u0935\u0902 \u092A\u093E\u0935\u0928 \u0938\u0902\u0938\u094D\u0915\u093E\u0930\u094B\u0902 \u0915\u0940 \u0938\u092E\u092F-\u0938\u093E\u0930\u0923\u0940"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "section-title-divider" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "divider-line" }), /* @__PURE__ */ import_react3.default.createElement("span", { className: "divider-star" }, "\u2726 \u{1F338} \u2726"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "divider-line" }))), /* @__PURE__ */ import_react3.default.createElement("nav", { className: "timeline-filter-pills-row 3d-filter-pills", "aria-label": "\u092E\u093E\u0902\u0917\u0932\u093F\u0915 \u0926\u093F\u0935\u0938 \u091A\u092F\u0928" }, /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        type: "button",
        className: `timeline-filter-btn 3d-filter-btn ${activeDay === "all" ? "active" : ""}`,
        onClick: () => setActiveDay("all")
      },
      "\u0938\u092D\u0940 \u096F \u0915\u093E\u0930\u094D\u092F\u0915\u094D\u0930\u092E"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        type: "button",
        className: `timeline-filter-btn 3d-filter-btn ${activeDay === "day1" ? "active" : ""}`,
        onClick: () => setActiveDay("day1")
      },
      "\u0938\u094B\u092E, 7 \u0926\u093F\u0938"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        type: "button",
        className: `timeline-filter-btn 3d-filter-btn ${activeDay === "day2" ? "active" : ""}`,
        onClick: () => setActiveDay("day2")
      },
      "\u092E\u0902\u0917\u0932, 8 \u0926\u093F\u0938"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        type: "button",
        className: `timeline-filter-btn 3d-filter-btn ${activeDay === "day3" ? "active" : ""}`,
        onClick: () => setActiveDay("day3")
      },
      "\u092C\u0941\u0927, 9 \u0926\u093F\u0938"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        type: "button",
        className: `timeline-filter-btn 3d-filter-btn ${activeDay === "day4" ? "active" : ""}`,
        onClick: () => setActiveDay("day4")
      },
      "\u0917\u0941\u0930\u0941, 10 \u0926\u093F\u0938"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        type: "button",
        className: `timeline-filter-btn 3d-filter-btn ${activeDay === "day5" ? "active" : ""}`,
        onClick: () => setActiveDay("day5")
      },
      "\u0936\u0928\u093F, 12 \u0926\u093F\u0938 (\u092E\u0941\u0916\u094D\u092F)"
    )), /* @__PURE__ */ import_react3.default.createElement("div", { className: "vertical-alternating-timeline illuminated-pathway 3d-pathway" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "timeline-central-spine 3d-golden-spine", "aria-hidden": "true" }), filteredEvents.map((ev, idx) => {
      const isEven = idx % 2 === 0;
      return /* @__PURE__ */ import_react3.default.createElement(
        "div",
        {
          key: ev.id,
          className: `timeline-alternating-row ${isEven ? "row-left" : "row-right"} 3d-timeline-row`
        },
        /* @__PURE__ */ import_react3.default.createElement("div", { className: "timeline-center-node 3d-node-marker" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "node-icon-circle glowing-diya-node 3d-diya-globe", title: ev.title }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "node-emoji" }, ev.icon)), /* @__PURE__ */ import_react3.default.createElement("span", { className: "node-number-tag 3d-node-num" }, ev.num)),
        /* @__PURE__ */ import_react3.default.createElement("div", { className: "timeline-event-card-wrap" }, /* @__PURE__ */ import_react3.default.createElement("article", { className: "timeline-event-card architectural-event-card 3d-event-card" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "event-card-header" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "event-badge-tag 3d-event-badge" }, ev.badge), /* @__PURE__ */ import_react3.default.createElement("span", { className: "event-date-chip" }, ev.dateStr)), /* @__PURE__ */ import_react3.default.createElement("div", { className: "event-time-row" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "time-clock-icon" }, "\u23F0"), /* @__PURE__ */ import_react3.default.createElement("strong", { className: "time-text 3d-time-text" }, ev.timeStr), /* @__PURE__ */ import_react3.default.createElement("span", { className: "day-name" }, "(", ev.dayLabel.split(",")[0]?.trim(), ")")), /* @__PURE__ */ import_react3.default.createElement("h3", { className: "event-card-title 3d-event-title" }, ev.title), /* @__PURE__ */ import_react3.default.createElement("p", { className: "event-card-desc" }, ev.desc), ev.note && /* @__PURE__ */ import_react3.default.createElement("div", { className: "event-bus-note-box 3d-note-box" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "note-icon" }, "\u2139\uFE0F"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "note-text" }, ev.note)), /* @__PURE__ */ import_react3.default.createElement("div", { className: "event-card-footer" }, /* @__PURE__ */ import_react3.default.createElement(
          "a",
          {
            href: makeGoogleCalendarUrl(ev),
            target: "_blank",
            rel: "noopener noreferrer",
            className: "btn-add-calendar 3d-cal-btn",
            title: `${ev.title} \u0915\u094B \u0917\u0942\u0917\u0932 \u0915\u0948\u0932\u0947\u0902\u0921\u0930 \u092E\u0947\u0902 \u091C\u094B\u0921\u093C\u0947\u0902`
          },
          /* @__PURE__ */ import_react3.default.createElement("span", { className: "cal-icon" }, "\u{1F4C5}"),
          /* @__PURE__ */ import_react3.default.createElement("span", null, "\u0915\u0948\u0932\u0947\u0902\u0921\u0930 \u092E\u0947\u0902 \u091C\u094B\u0921\u093C\u0947\u0902")
        ))))
      );
    })), /* @__PURE__ */ import_react3.default.createElement("div", { className: "timeline-reception-highlight-banner 3d-reception-highlight" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "highlight-icon 3d-crown-icon" }, "\u{1F451}"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "highlight-content" }, /* @__PURE__ */ import_react3.default.createElement("h4", { className: "highlight-title" }, "\u0906\u0936\u0940\u0930\u094D\u0935\u093E\u0926 \u0938\u092E\u093E\u0930\u094B\u0939 \u0935 \u092A\u094D\u0930\u0940\u0924\u093F\u092D\u094B\u091C"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "highlight-time" }, "12 \u0926\u093F\u0938\u0902\u092C\u0930 2026, \u0936\u0928\u093F\u0935\u093E\u0930 \u2014 \u0938\u093E\u092F\u0902 6:15 \u092C\u091C\u0947 \u0938\u0947 \u0906\u0917\u092E\u0928 \u0924\u0915"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "highlight-venue" }, "\u0938\u094D\u0925\u0932: \u0915\u0941\u092E\u093E\u0935\u0924 \u0935\u093E\u091F\u093F\u0915\u093E, \u092A\u0941\u0928\u093E\u092F\u0924\u093E \u0930\u094B\u0921\u093C, \u092A\u093E\u0932\u0940 (\u0930\u093E\u091C\u0938\u094D\u0925\u093E\u0928)")))));
  }

  // src/components/VenueSection.jsx
  var import_react4 = __toESM(__require("react"));
  function VenueSection() {
    const [copied, setCopied] = (0, import_react4.useState)(false);
    const venueName = "\u0915\u0941\u092E\u093E\u0935\u0924 \u0935\u093E\u091F\u093F\u0915\u093E";
    const venueAddress = "\u092A\u0941\u0928\u093E\u092F\u0924\u093E \u0930\u094B\u0921\u093C, \u092A\u093E\u0932\u0940 (\u0930\u093E\u091C\u0938\u094D\u0925\u093E\u0928) 306401";
    const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Kumawat+Vatika+Punayata+Road+Pali+Rajasthan";
    const handleCopyAddress = () => {
      navigator.clipboard.writeText(`${venueName}, ${venueAddress}`).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2800);
      }).catch(() => {
      });
    };
    return /* @__PURE__ */ import_react4.default.createElement("section", { className: "wedding-section reception-venue-section 3d-mandap-section", id: "venue-section" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "section-royal-card mandap-architectural-card 3d-mandap-card" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "card-border-gold-outer 3d-bevel-gold", "aria-hidden": "true" }), /* @__PURE__ */ import_react4.default.createElement("div", { className: "card-border-gold-inner", "aria-hidden": "true" }), /* @__PURE__ */ import_react4.default.createElement("div", { className: "section-header-flourish" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "shloka-header-group" }, /* @__PURE__ */ import_react4.default.createElement("span", { className: "shloka-ornament" }, "\u2756"), /* @__PURE__ */ import_react4.default.createElement("span", { className: "shloka-text" }, "\u0965 \u0935\u093F\u0935\u093E\u0939 \u0938\u094D\u0925\u0932 \u090F\u0935\u0902 \u092D\u0935\u094D\u092F \u092E\u0902\u0921\u092A \u0965"), /* @__PURE__ */ import_react4.default.createElement("span", { className: "shloka-ornament" }, "\u2756")), /* @__PURE__ */ import_react4.default.createElement("h2", { className: "section-title-gold 3d-gold-title" }, "\u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939 \u0938\u094D\u0925\u0932 \u090F\u0935\u0902 \u0906\u0936\u0940\u0930\u094D\u0935\u093E\u0926 \u0938\u092E\u093E\u0930\u094B\u0939"), /* @__PURE__ */ import_react4.default.createElement("p", { className: "section-subtitle-script" }, "\u091C\u0939\u093E\u0901 \u091A\u093E\u0930 \u092A\u0930\u093F\u0935\u093E\u0930\u094B\u0902 \u0915\u093E \u092A\u093E\u0935\u0928 \u0938\u0902\u0917\u092E, \u0906\u0924\u094D\u092E\u0940\u092F \u092E\u093F\u0932\u0928 \u090F\u0935\u0902 \u0935\u0948\u0926\u093F\u0915 \u0935\u093F\u0935\u093E\u0939 \u0938\u0902\u0938\u094D\u0915\u093E\u0930 \u0938\u0902\u092A\u0928\u094D\u0928 \u0939\u094B\u0902\u0917\u0947"), /* @__PURE__ */ import_react4.default.createElement("div", { className: "section-title-divider" }, /* @__PURE__ */ import_react4.default.createElement("span", { className: "divider-line" }), /* @__PURE__ */ import_react4.default.createElement("span", { className: "divider-star" }, "\u2726 \u{1F3DB}\uFE0F \u2726"), /* @__PURE__ */ import_react4.default.createElement("span", { className: "divider-line" }))), /* @__PURE__ */ import_react4.default.createElement("article", { className: "reception-grand-card royal-mandap-pavilion 3d-mandap-pavilion" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "reception-mandap-illustration 3d-arch-illustration", "aria-hidden": "true" }, /* @__PURE__ */ import_react4.default.createElement("svg", { viewBox: "0 0 540 140", className: "mandap-arch-svg", preserveAspectRatio: "xMidYMid meet" }, /* @__PURE__ */ import_react4.default.createElement("defs", null, /* @__PURE__ */ import_react4.default.createElement("linearGradient", { id: "goldArchGrad3D", x1: "0%", y1: "0%", x2: "100%", y2: "100%" }, /* @__PURE__ */ import_react4.default.createElement("stop", { offset: "0%", stopColor: "#C9A45C" }), /* @__PURE__ */ import_react4.default.createElement("stop", { offset: "30%", stopColor: "#FFF2D6" }), /* @__PURE__ */ import_react4.default.createElement("stop", { offset: "70%", stopColor: "#B88A3B" }), /* @__PURE__ */ import_react4.default.createElement("stop", { offset: "100%", stopColor: "#8C6A28" })), /* @__PURE__ */ import_react4.default.createElement("filter", { id: "mandapGlow", x: "-10%", y: "-10%", width: "120%", height: "130%" }, /* @__PURE__ */ import_react4.default.createElement("feDropShadow", { dx: "0", dy: "4", stdDeviation: "5", floodColor: "rgba(212, 175, 55, 0.4)" }))), /* @__PURE__ */ import_react4.default.createElement("rect", { x: "35", y: "24", width: "470", height: "106", rx: "14", fill: "rgba(139, 48, 56, 0.04)", stroke: "rgba(184, 138, 59, 0.35)", strokeWidth: "1.5" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M 35,40 Q 270,-8 505,40", fill: "none", stroke: "url(#goldArchGrad3D)", strokeWidth: "3.5", filter: "url(#mandapGlow)" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M 75,46 Q 270,10 465,46", fill: "none", stroke: "#C9A45C", strokeWidth: "1.2", strokeDasharray: "5 3" }), /* @__PURE__ */ import_react4.default.createElement("line", { x1: "70", y1: "40", x2: "70", y2: "130", stroke: "#B88A3B", strokeWidth: "4" }), /* @__PURE__ */ import_react4.default.createElement("line", { x1: "470", y1: "40", x2: "470", y2: "130", stroke: "#B88A3B", strokeWidth: "4" }), /* @__PURE__ */ import_react4.default.createElement("circle", { cx: "70", cy: "40", r: "5", fill: "#E65100" }), /* @__PURE__ */ import_react4.default.createElement("circle", { cx: "470", cy: "40", r: "5", fill: "#E65100" }), /* @__PURE__ */ import_react4.default.createElement("circle", { cx: "270", cy: "14", r: "9", fill: "#B88A3B" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M 263,14 L 270,2 L 277,14 Z", fill: "#8B3038" }), /* @__PURE__ */ import_react4.default.createElement("circle", { cx: "270", cy: "2", r: "3.5", fill: "#FF9800" }))), /* @__PURE__ */ import_react4.default.createElement("div", { className: "reception-timing-box 3d-timing-box" }, /* @__PURE__ */ import_react4.default.createElement("span", { className: "reception-date-tag" }, "\u0936\u0928\u093F\u0935\u093E\u0930, 12 \u0926\u093F\u0938\u0902\u092C\u0930 2026"), /* @__PURE__ */ import_react4.default.createElement("span", { className: "reception-time-tag" }, "\u0938\u093E\u092F\u0902 6:15 \u092C\u091C\u0947 \u0938\u0947 \u0906\u0917\u092E\u0928 \u0924\u0915")), /* @__PURE__ */ import_react4.default.createElement("div", { className: "reception-location-details 3d-location-details" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "venue-location-pin 3d-pulsing-pin", "aria-hidden": "true" }, "\u{1F4CD}"), /* @__PURE__ */ import_react4.default.createElement("h3", { className: "venue-name-title 3d-venue-title" }, venueName), /* @__PURE__ */ import_react4.default.createElement("div", { className: "venue-address-badge 3d-address-badge" }, /* @__PURE__ */ import_react4.default.createElement("p", { className: "address-line" }, venueAddress)), /* @__PURE__ */ import_react4.default.createElement("p", { className: "venue-welcome-note" }, "\u0906\u092A \u0938\u092A\u0930\u093F\u0935\u093E\u0930 \u092A\u0927\u093E\u0930\u0915\u0930 \u0928\u0935\u0926\u0902\u092A\u0924\u093F\u092F\u094B\u0902 \u0915\u094B \u0905\u092A\u0928\u093E \u0938\u094D\u0928\u0947\u0939 \u0935 \u092E\u0902\u0917\u0932 \u0906\u0936\u0940\u0930\u094D\u0935\u093E\u0926 \u092A\u094D\u0930\u0926\u093E\u0928 \u0915\u0930\u0947\u0902 \u0924\u0925\u093E \u092A\u093E\u0930\u0902\u092A\u0930\u093F\u0915 \u0930\u093E\u091C\u0938\u094D\u0925\u093E\u0928\u0940 \u092A\u094D\u0930\u0940\u0924\u093F\u092D\u094B\u091C \u0915\u093E \u0906\u0928\u0902\u0926 \u0932\u0947\u0902\u0964")), /* @__PURE__ */ import_react4.default.createElement("div", { className: "reception-transport-grid 3d-transport-grid" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "transport-note-card 3d-transport-card" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "note-badge" }, "\u{1F68C} \u092C\u093E\u0930\u093E\u0924 \u092A\u094D\u0930\u0938\u094D\u0925\u093E\u0928 (\u0938\u092E\u0926\u0921\u093C\u0940)"), /* @__PURE__ */ import_react4.default.createElement("p", { className: "note-desc" }, /* @__PURE__ */ import_react4.default.createElement("strong", null, "\u0967\u0966 \u0926\u093F\u0938\u0902\u092C\u0930 \u0968\u0966\u0968\u096C (\u0926\u094B\u092A\u0939\u0930 \u0967\u0968:\u0967\u096B \u092C\u091C\u0947)"), ": \u0938\u092E\u0926\u0921\u093C\u0940 \u092E\u0947\u0902 \u0936\u094D\u0930\u0940\u092E\u093E\u0928 \u092C\u094D\u092F\u093E\u0908\u091C\u0940 \u0927\u0928\u0930\u093E\u091C \u091C\u0940 \u091A\u094C\u0939\u093E\u0928 \u0915\u0947 \u0928\u093F\u0935\u093E\u0938 \u0938\u094D\u0925\u093E\u0928 \u092A\u0930 \u092C\u093E\u0930\u093E\u0924 \u092A\u094D\u0930\u0938\u094D\u0925\u093E\u0928\u0964")), /* @__PURE__ */ import_react4.default.createElement("div", { className: "transport-note-card 3d-transport-card" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "note-badge" }, "\u{1F3BA} \u092C\u093E\u0930\u093E\u0924 \u0938\u094D\u0935\u093E\u0917\u0924 (\u092C\u093E\u0932\u094B\u0924\u0930\u093E)"), /* @__PURE__ */ import_react4.default.createElement("p", { className: "note-desc" }, /* @__PURE__ */ import_react4.default.createElement("strong", null, "\u0967\u0968 \u0926\u093F\u0938\u0902\u092C\u0930 \u0968\u0966\u0968\u096C (\u0938\u093E\u092F\u0902 \u096B:\u0967\u096B \u092C\u091C\u0947)"), ": \u092C\u093E\u0932\u094B\u0924\u0930\u093E \u0938\u0947 \u092C\u093E\u0930\u093E\u0924 \u0906\u0917\u092E\u0928 \u092A\u0930 \u0915\u0941\u092E\u093E\u0935\u0924 \u0935\u093E\u091F\u093F\u0915\u093E, \u092A\u0941\u0928\u093E\u092F\u0924\u093E \u0930\u094B\u0921\u093C, \u092A\u093E\u0932\u0940 \u092E\u0947\u0902 \u092D\u0935\u094D\u092F \u0938\u094D\u0935\u093E\u0917\u0924\u0964"))), /* @__PURE__ */ import_react4.default.createElement("div", { className: "venue-buttons-row 3d-venue-actions" }, /* @__PURE__ */ import_react4.default.createElement(
      "a",
      {
        href: mapsUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "venue-btn btn-google-maps 3d-btn-maps",
        title: "\u0917\u0942\u0917\u0932 \u092E\u0948\u092A\u094D\u0938 \u092A\u0930 \u0938\u094D\u0925\u0932 \u0915\u093E \u0938\u094D\u0925\u093E\u0928 \u0926\u0947\u0916\u0947\u0902"
      },
      /* @__PURE__ */ import_react4.default.createElement("span", { className: "btn-icon" }, "\u{1F5FA}\uFE0F"),
      /* @__PURE__ */ import_react4.default.createElement("span", null, "\u0917\u0942\u0917\u0932 \u092E\u0948\u092A\u094D\u0938 \u092A\u0930 \u0926\u0947\u0916\u0947\u0902")
    ), /* @__PURE__ */ import_react4.default.createElement(
      "button",
      {
        type: "button",
        onClick: handleCopyAddress,
        className: `venue-btn btn-copy-address 3d-btn-copy ${copied ? "copied" : ""}`,
        title: "\u092A\u0942\u0930\u093E \u092A\u0924\u093E \u0915\u0949\u092A\u0940 \u0915\u0930\u0947\u0902"
      },
      /* @__PURE__ */ import_react4.default.createElement("span", { className: "btn-icon" }, copied ? "\u2713" : "\u{1F4CB}"),
      /* @__PURE__ */ import_react4.default.createElement("span", null, copied ? "\u092A\u0924\u093E \u0915\u0949\u092A\u0940 \u0939\u094B \u0917\u092F\u093E!" : "\u092A\u0924\u093E \u0915\u0949\u092A\u0940 \u0915\u0930\u0947\u0902")
    )))));
  }

  // src/components/CountdownSection.jsx
  var import_react5 = __toESM(__require("react"));
  function CountdownSection() {
    const [selectedMilestone, setSelectedMilestone] = (0, import_react5.useState)("dec12");
    const targetDate10 = (/* @__PURE__ */ new Date("2026-12-10T12:15:00+05:30")).getTime();
    const targetDate12 = (/* @__PURE__ */ new Date("2026-12-12T18:15:00+05:30")).getTime();
    const activeTarget = selectedMilestone === "dec10" ? targetDate10 : targetDate12;
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
        const difference = activeTarget - now;
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
    }, [activeTarget]);
    const makeCalendarUrl = () => {
      if (selectedMilestone === "dec10") {
        const text = encodeURIComponent("\u0906\u0915\u093E\u0936 \u0938\u0902\u0917 \u0930\u0940\u0928\u093E \u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939 \u2014 \u0938\u092E\u0926\u0921\u093C\u0940");
        const dates = "20261210T121500/20261210T220000";
        const details = encodeURIComponent("\u0906\u092F\u0941\u0937\u094D\u092E\u093E\u0928 \u0906\u0915\u093E\u0936 \u0938\u0902\u0917 \u0906\u092F\u0941\u0937\u094D\u092E\u0924\u0940 \u0930\u0940\u0928\u093E \u092A\u093E\u0935\u0928 \u092A\u0930\u093F\u0923\u092F \u0938\u0902\u0938\u094D\u0915\u093E\u0930\u0964 \u092C\u093E\u0930\u093E\u0924 \u092A\u094D\u0930\u0938\u094D\u0925\u093E\u0928 \u0926\u094B\u092A\u0939\u0930 12:15 \u092C\u091C\u0947\u0964");
        const loc = encodeURIComponent("Samdari, Rajasthan");
        return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${loc}`;
      } else {
        const text = encodeURIComponent("\u0936\u093F\u0935\u093E\u0928\u0940 \u0938\u0902\u0917 \u0927\u0940\u0930\u091C \u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939 \u090F\u0935\u0902 \u092D\u0935\u094D\u092F \u092A\u094D\u0930\u0940\u0924\u093F\u092D\u094B\u091C \u2014 \u092A\u093E\u0932\u0940");
        const dates = "20261212T181500/20261212T235900";
        const details = encodeURIComponent("\u0906\u092F\u0941\u0937\u094D\u092E\u0924\u0940 \u0936\u093F\u0935\u093E\u0928\u0940 \u0938\u0902\u0917 \u0906\u092F\u0941\u0937\u094D\u092E\u093E\u0928 \u0927\u0940\u0930\u091C \u091C\u0940 \u092A\u093E\u0935\u0928 \u092A\u0930\u093F\u0923\u092F \u0938\u0902\u0938\u094D\u0915\u093E\u0930 \u090F\u0935\u0902 \u092D\u0935\u094D\u092F \u092A\u094D\u0930\u0940\u0924\u093F\u092D\u094B\u091C\u0964 \u0938\u094D\u0925\u0932: \u0915\u0941\u092E\u093E\u0935\u0924 \u0935\u093E\u091F\u093F\u0915\u093E, \u092A\u0941\u0928\u093E\u092F\u0924\u093E \u0930\u094B\u0921\u093C, \u092A\u093E\u0932\u0940\u0964");
        const loc = encodeURIComponent("Kumawat Vatika, Punayata Road, Pali, Rajasthan 306401");
        return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${loc}`;
      }
    };
    return /* @__PURE__ */ import_react5.default.createElement("section", { className: "wedding-section countdown-section 3d-countdown-section", id: "countdown-section" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "section-royal-card palace-sundial-pavilion 3d-sundial-card" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "card-border-gold-outer 3d-bevel-gold", "aria-hidden": "true" }), /* @__PURE__ */ import_react5.default.createElement("div", { className: "card-border-gold-inner", "aria-hidden": "true" }), /* @__PURE__ */ import_react5.default.createElement("div", { className: "section-header-flourish" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "shloka-header-group" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "shloka-ornament" }, "\u2756"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "shloka-text" }, "\u0965 \u0936\u0941\u092D \u092E\u0941\u0939\u0942\u0930\u094D\u0924 \u0909\u0932\u094D\u091F\u0940 \u0917\u093F\u0928\u0924\u0940 \u0965"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "shloka-ornament" }, "\u2756")), /* @__PURE__ */ import_react5.default.createElement("h2", { className: "section-title-gold 3d-gold-title" }, "\u092E\u0902\u0917\u0932 \u0918\u0921\u093C\u093F\u092F\u094B\u0902 \u0915\u0940 \u092A\u093E\u0935\u0928 \u092A\u094D\u0930\u0924\u0940\u0915\u094D\u0937\u093E"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "section-subtitle-script" }, "\u0909\u0938 \u0936\u0941\u092D \u0935\u0947\u0932\u093E \u0915\u0940 \u0913\u0930 \u0905\u0917\u094D\u0930\u0938\u0930 \u091C\u092C \u0926\u094B \u092A\u0935\u093F\u0924\u094D\u0930 \u092F\u0941\u0917\u0932\u094B\u0902 \u0915\u093E \u092A\u093E\u0935\u0928 \u092A\u0930\u093F\u0923\u092F \u0938\u092E\u094D\u092A\u0928\u094D\u0928 \u0939\u094B\u0917\u093E"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "section-title-divider" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "divider-line" }), /* @__PURE__ */ import_react5.default.createElement("span", { className: "divider-star" }, "\u2726 \u23F3 \u2726"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "divider-line" }))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-milestone-tabs 3d-milestone-tabs", role: "tablist" }, /* @__PURE__ */ import_react5.default.createElement(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": selectedMilestone === "dec12",
        className: `milestone-tab-btn 3d-tab-btn ${selectedMilestone === "dec12" ? "active" : ""}`,
        onClick: () => setSelectedMilestone("dec12")
      },
      /* @__PURE__ */ import_react5.default.createElement("span", { className: "tab-date" }, "\u0967\u0968 \u0926\u093F\u0938\u0902\u092C\u0930 \u0968\u0966\u0968\u096C"),
      /* @__PURE__ */ import_react5.default.createElement("span", { className: "tab-couple" }, "\u0936\u093F\u0935\u093E\u0928\u0940 \u0938\u0902\u0917 \u0927\u0940\u0930\u091C (\u092E\u0941\u0916\u094D\u092F \u0935\u093F\u0935\u093E\u0939 \u0935 \u092A\u094D\u0930\u0940\u0924\u093F\u092D\u094B\u091C)")
    ), /* @__PURE__ */ import_react5.default.createElement(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": selectedMilestone === "dec10",
        className: `milestone-tab-btn 3d-tab-btn ${selectedMilestone === "dec10" ? "active" : ""}`,
        onClick: () => setSelectedMilestone("dec10")
      },
      /* @__PURE__ */ import_react5.default.createElement("span", { className: "tab-date" }, "\u0967\u0966 \u0926\u093F\u0938\u0902\u092C\u0930 \u0968\u0966\u0968\u096C"),
      /* @__PURE__ */ import_react5.default.createElement("span", { className: "tab-couple" }, "\u0906\u0915\u093E\u0936 \u0938\u0902\u0917 \u0930\u0940\u0928\u093E (\u092A\u094D\u0930\u0925\u092E \u0935\u093F\u0935\u093E\u0939)")
    )), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-event-meta-banner 3d-meta-banner" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "meta-badge-date" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "meta-icon" }, "\u{1F5D3}\uFE0F"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "meta-text" }, selectedMilestone === "dec12" ? "\u0936\u0928\u093F\u0935\u093E\u0930, 12 \u0926\u093F\u0938\u092E\u094D\u092C\u0930 2026 (\u0938\u093E\u092F\u0902 6:15 \u092C\u091C\u0947 \u0938\u0947)" : "\u0917\u0941\u0930\u0942\u0935\u093E\u0930, 10 \u0926\u093F\u0938\u092E\u094D\u092C\u0930 2026 (\u0926\u094B\u092A\u0939\u0930 12:15 \u092C\u091C\u0947)")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "meta-separator" }, "\u2726"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "meta-badge-venue" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "meta-icon" }, "\u{1F4CD}"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "meta-text" }, selectedMilestone === "dec12" ? "\u0915\u0941\u092E\u093E\u0935\u0924 \u0935\u093E\u091F\u093F\u0915\u093E, \u092A\u0941\u0928\u093E\u092F\u0924\u093E \u0930\u094B\u0921\u093C, \u092A\u093E\u0932\u0940" : "\u0938\u092E\u0926\u0921\u093C\u0940 (\u0936\u094D\u0930\u0940\u092E\u093E\u0928 \u092C\u094D\u092F\u093E\u0908\u091C\u0940 \u0927\u0928\u0930\u093E\u091C \u091C\u0940 \u091A\u094C\u0939\u093E\u0928 \u0928\u093F\u0935\u093E\u0938)"))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-clock-container", "aria-live": "polite" }, !timeLeft.isCompleted ? /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-units-grid sundial-units-grid 3d-units-grid" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-unit-box 3d-unit-box" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-circle-badge 3d-gold-circle" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-number 3d-metallic-number" }, String(timeLeft.days).padStart(2, "0"))), /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-label 3d-unit-label" }, "\u0926\u093F\u0928")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-colon-divider 3d-colon-divider", "aria-hidden": "true" }, ":"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-unit-box 3d-unit-box" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-circle-badge 3d-gold-circle" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-number 3d-metallic-number" }, String(timeLeft.hours).padStart(2, "0"))), /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-label 3d-unit-label" }, "\u0918\u0902\u091F\u0947")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-colon-divider 3d-colon-divider", "aria-hidden": "true" }, ":"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-unit-box 3d-unit-box" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-circle-badge 3d-gold-circle" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-number 3d-metallic-number" }, String(timeLeft.minutes).padStart(2, "0"))), /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-label 3d-unit-label" }, "\u092E\u093F\u0928\u091F")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-colon-divider 3d-colon-divider", "aria-hidden": "true" }, ":"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-unit-box 3d-unit-box" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-circle-badge 3d-gold-circle seconds-pulse" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-number 3d-metallic-number" }, String(timeLeft.seconds).padStart(2, "0"))), /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-label 3d-unit-label" }, "\u0938\u0947\u0915\u0902\u0921"))) : /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-completed-banner 3d-completed-banner" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "completed-sparkles" }, "\u{1F38A} \u{1F451} \u{1F38A}"), /* @__PURE__ */ import_react5.default.createElement("h3", { className: "completed-title" }, "\u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939 \u092E\u0939\u094B\u0924\u094D\u0938\u0935 \u092A\u094D\u0930\u093E\u0930\u0902\u092D \u0939\u094B \u091A\u0941\u0915\u093E \u0939\u0948!"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "completed-subtitle" }, "\u092D\u0917\u0935\u093E\u0928 \u0936\u093F\u0935 \u090F\u0935\u0902 \u092E\u093E\u0924\u093E \u092A\u093E\u0930\u094D\u0935\u0924\u0940 \u0928\u0935\u0926\u0902\u092A\u0924\u093F\u092F\u094B\u0902 \u0906\u0915\u093E\u0936 \u0935 \u0930\u0940\u0928\u093E \u0924\u0925\u093E \u0936\u093F\u0935\u093E\u0928\u0940 \u0935 \u0927\u0940\u0930\u091C \u0915\u094B \u0905\u0916\u0902\u0921 \u0938\u094C\u092D\u093E\u0917\u094D\u092F \u090F\u0935\u0902 \u0905\u0928\u0902\u0924 \u0906\u0928\u0902\u0926 \u092A\u094D\u0930\u0926\u093E\u0928 \u0915\u0930\u0947\u0902!"))), /* @__PURE__ */ import_react5.default.createElement("div", { style: { textAlign: "center", marginTop: "24px" } }, /* @__PURE__ */ import_react5.default.createElement(
      "a",
      {
        href: makeCalendarUrl(),
        target: "_blank",
        rel: "noopener noreferrer",
        className: "btn-add-countdown-cal 3d-cal-button",
        title: "\u0907\u0938 \u092E\u093E\u0902\u0917\u0932\u093F\u0915 \u0909\u0924\u094D\u0938\u0935 \u0915\u094B \u0905\u092A\u0928\u0947 \u0917\u0942\u0917\u0932 \u0915\u0948\u0932\u0947\u0902\u0921\u0930 \u092E\u0947\u0902 \u0938\u0947\u0935 \u0915\u0930\u0947\u0902"
      },
      /* @__PURE__ */ import_react5.default.createElement("span", { className: "btn-cal-icon" }, "\u{1F4C5}"),
      /* @__PURE__ */ import_react5.default.createElement("span", null, selectedMilestone === "dec12" ? "\u0967\u0968 \u0926\u093F\u0938\u0902\u092C\u0930 \u092E\u0941\u0916\u094D\u092F \u0909\u0924\u094D\u0938\u0935 \u0915\u094B \u0915\u0948\u0932\u0947\u0902\u0921\u0930 \u092E\u0947\u0902 \u091C\u094B\u0921\u093C\u0947\u0902" : "\u0967\u0966 \u0926\u093F\u0938\u0902\u092C\u0930 \u0935\u093F\u0935\u093E\u0939 \u0915\u094B \u0915\u0948\u0932\u0947\u0902\u0921\u0930 \u092E\u0947\u0902 \u091C\u094B\u0921\u093C\u0947\u0902")
    )), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-muhurat-strip 3d-muhurat-strip" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "muhurat-icon" }, "\u{1F549}\uFE0F"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "muhurat-text" }, "\u0935\u093F.\u0938\u0902. 2083 \u092E\u093E\u0930\u094D\u0917\u0936\u0940\u0930\u094D\u0937 \u0936\u0941\u0915\u094D\u0932 \u092A\u0915\u094D\u0937 \u2022 \u0935\u0948\u0926\u093F\u0915 \u092A\u093E\u0923\u093F\u0917\u094D\u0930\u0939\u0923 \u0938\u0902\u0938\u094D\u0915\u093E\u0930"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "muhurat-icon" }, "\u{1F549}\uFE0F"))));
  }

  // src/components/FamilyBlessingsSection.jsx
  var import_react6 = __toESM(__require("react"));
  function FamilyBlessingsSection() {
    const [guestName, setGuestName] = (0, import_react6.useState)("");
    const [guestCity, setGuestCity] = (0, import_react6.useState)("");
    const [blessingMsg, setBlessingMsg] = (0, import_react6.useState)("\u0906\u0915\u093E\u0936 \u090F\u0935\u0902 \u0930\u0940\u0928\u093E \u0924\u0925\u093E \u0936\u093F\u0935\u093E\u0928\u0940 \u090F\u0935\u0902 \u0927\u0940\u0930\u091C \u0915\u094B \u092A\u093E\u0935\u0928 \u092A\u0930\u093F\u0923\u092F \u0938\u0942\u0924\u094D\u0930 \u092E\u0947\u0902 \u092C\u0902\u0927\u0928\u0947 \u092A\u0930 \u0939\u093E\u0930\u094D\u0926\u093F\u0915 \u092C\u0927\u093E\u0908 \u090F\u0935\u0902 \u0905\u0928\u0902\u0924 \u0936\u0941\u092D\u0915\u093E\u092E\u0928\u093E\u090F\u0901! \u0926\u094B\u0928\u094B\u0902 \u092F\u0941\u0917\u0932\u094B\u0902 \u0915\u093E \u0935\u0948\u0935\u093E\u0939\u093F\u0915 \u091C\u0940\u0935\u0928 \u0938\u0926\u0948\u0935 \u0938\u0941\u0916, \u0938\u092E\u0943\u0926\u094D\u0927\u093F \u0914\u0930 \u0906\u0928\u0902\u0926 \u0938\u0947 \u092A\u0930\u093F\u092A\u0942\u0930\u094D\u0923 \u0930\u0939\u0947\u0964");
    const [sentSuccess, setSentSuccess] = (0, import_react6.useState)(false);
    const phone1 = "+919214537106";
    const phone2 = "+918824338255";
    const handleSendWhatsApp = (phoneTarget) => {
      const formattedText = `\u0938\u093E\u0926\u0930 \u092A\u094D\u0930\u0923\u093E\u092E! \u{1F64F}

*\u0906\u0915\u093E\u0936 \u090F\u0935\u0902 \u0930\u0940\u0928\u093E \u0924\u0925\u093E \u0936\u093F\u0935\u093E\u0928\u0940 \u090F\u0935\u0902 \u0927\u0940\u0930\u091C \u0915\u0947 \u092A\u093E\u0935\u0928 \u0935\u093F\u0935\u093E\u0939 \u0939\u0947\u0924\u0941 \u092E\u0902\u0917\u0932 \u0936\u0941\u092D\u0915\u093E\u092E\u0928\u093E\u090F\u0901*
\u092A\u094D\u0930\u0947\u0937\u0915: ${guestName || "\u0936\u0941\u092D\u091A\u093F\u0902\u0924\u0915"}${guestCity ? ` (${guestCity})` : ""}

"${blessingMsg}"

\u0915\u0941\u092E\u093E\u0935\u0924 \u0935\u093E\u091F\u093F\u0915\u093E, \u092A\u093E\u0932\u0940 \u092E\u0947\u0902 \u0906\u092F\u094B\u091C\u093F\u0924 \u0907\u0938 \u092D\u0935\u094D\u092F \u0935\u093F\u0935\u093E\u0939 \u0938\u092E\u093E\u0930\u094B\u0939 \u092E\u0947\u0902 \u0938\u092E\u094D\u092E\u093F\u0932\u093F\u0924 \u0939\u094B\u0928\u0947 \u0915\u0940 \u092E\u0902\u0917\u0932 \u0905\u092D\u093F\u0932\u093E\u0937\u093E!`;
      const cleanPhone = phoneTarget.replace(/[^0-9]/g, "");
      const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(formattedText)}`;
      window.open(url, "_blank");
      setSentSuccess(true);
      setTimeout(() => setSentSuccess(false), 4e3);
    };
    return /* @__PURE__ */ import_react6.default.createElement("section", { className: "wedding-section family-compliments-section", id: "family-section" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "section-royal-card family-darbar-card" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "card-border-gold-outer", "aria-hidden": "true" }), /* @__PURE__ */ import_react6.default.createElement("div", { className: "card-border-gold-inner", "aria-hidden": "true" }), /* @__PURE__ */ import_react6.default.createElement("div", { className: "section-header-flourish" }, /* @__PURE__ */ import_react6.default.createElement("span", { className: "shloka-text" }, "\u0965 \u0938\u0938\u094D\u0928\u0947\u0939 \u0928\u093F\u092E\u0902\u0924\u094D\u0930\u0923 \u0965"), /* @__PURE__ */ import_react6.default.createElement("h2", { className: "section-title-gold" }, "\u0926\u0930\u094D\u0936\u0928\u093E\u092D\u093F\u0932\u093E\u0937\u0940 \u090F\u0935\u0902 \u0935\u093F\u0928\u0940\u0924"), /* @__PURE__ */ import_react6.default.createElement("p", { className: "section-subtitle-script" }, "\u0917\u0939\u0932\u094B\u0924 \u092A\u0930\u093F\u0935\u093E\u0930 \u090F\u0935\u0902 \u0938\u092E\u0938\u094D\u0924 \u0938\u094D\u0928\u0947\u0939\u0940 \u0938\u094D\u0935\u091C\u0928, \u092A\u093E\u0932\u0940\u2013\u092E\u093E\u0930\u0935\u093E\u0921\u093C (\u0930\u093E\u091C\u0938\u094D\u0925\u093E\u0928)"), /* @__PURE__ */ import_react6.default.createElement("div", { className: "section-title-divider" }, /* @__PURE__ */ import_react6.default.createElement("span", { className: "divider-line" }), /* @__PURE__ */ import_react6.default.createElement("span", { className: "divider-star" }, "\u2726"), /* @__PURE__ */ import_react6.default.createElement("span", { className: "divider-line" }))), /* @__PURE__ */ import_react6.default.createElement("div", { className: "family-invitation-quote-box", style: { maxWidth: "780px", margin: "0 auto 28px" } }, /* @__PURE__ */ import_react6.default.createElement("p", { className: "quote-text", style: { fontStyle: "italic", color: "var(--c-headings)", fontSize: "15.5px" } }, "\u201C\u0932\u093F\u0916\u094D\u092F\u094B\u0902 \u0928\u093F\u092E\u0902\u0924\u094D\u0930\u0923 \u092A\u094D\u0930\u0947\u092E\u0938\u0942, \u0906\u0935\u093E\u0930\u0940 \u092B\u0930\u094D\u0938\u0940 \u0930\u093E\u0916\u091C\u094B \u0964", /* @__PURE__ */ import_react6.default.createElement("br", null), "\u092E\u094C\u0915\u094B \u092C\u0921\u094B \u0905\u0928\u092E\u094B\u0932 \u0939\u0948, \u0925\u094B\u0921\u0940 \u0938\u0940 \u092B\u0941\u0930\u094D\u0938\u0924 \u0930\u093E\u0916\u091C\u094B \u0965\u201D"), /* @__PURE__ */ import_react6.default.createElement("p", { className: "quote-text", style: { marginTop: "12px", fontSize: "14.5px" } }, "\u092D\u0917\u0935\u093E\u0928 \u0936\u093F\u0935 \u090F\u0935\u0902 \u092E\u093E\u0924\u093E \u092A\u093E\u0930\u094D\u0935\u0924\u0940 \u0924\u0925\u093E \u092A\u0942\u091C\u094D\u092F \u092A\u093F\u0924\u0930\u094B\u0902 \u0915\u0947 \u092A\u093E\u0935\u0928 \u0906\u0936\u0940\u0930\u094D\u0935\u093E\u0926 \u0938\u0947, ", /* @__PURE__ */ import_react6.default.createElement("strong", null, "\u0917\u0939\u0932\u094B\u0924 \u092A\u0930\u093F\u0935\u093E\u0930"), " \u0906\u092A \u0938\u092D\u0940 \u0906\u0924\u094D\u092E\u0940\u092F \u0938\u094D\u0928\u0947\u0939\u0940\u091C\u0928\u094B\u0902 \u0915\u094B ", /* @__PURE__ */ import_react6.default.createElement("strong", null, "\u0906\u0915\u093E\u0936 \u090F\u0935\u0902 \u0930\u0940\u0928\u093E"), " \u0924\u0925\u093E ", /* @__PURE__ */ import_react6.default.createElement("strong", null, "\u0936\u093F\u0935\u093E\u0928\u0940 \u090F\u0935\u0902 \u0927\u0940\u0930\u091C"), " \u0915\u0947 \u092A\u093E\u0935\u0928 \u092A\u0930\u093F\u0923\u092F\u094B\u0924\u094D\u0938\u0935 \u092E\u0947\u0902 \u0938\u092A\u0930\u093F\u0935\u093E\u0930 \u0938\u093E\u0926\u0930 \u0906\u092E\u0902\u0924\u094D\u0930\u093F\u0924 \u0915\u0930\u0924\u093E \u0939\u0948\u0964")), /* @__PURE__ */ import_react6.default.createElement("div", { className: "bal-manuhar-card-wrapper", style: { maxWidth: "780px", margin: "0 auto 30px" } }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "bal-manuhar-box" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "manuhar-badge" }, "\u{1F476} \u092E\u093F\u0920\u0940 \u092E\u0928\u0941\u0939\u093E\u0930"), /* @__PURE__ */ import_react6.default.createElement("blockquote", { className: "manuhar-quote" }, "\u201C\u092E\u094D\u200D\u0939\u093E\u0930\u0947 \u092E\u093E\u092E\u093E \u0935 \u092E\u093E\u0938\u0940 \u0915\u0940 \u0936\u093E\u0926\u0940 \u092E\u0947\u0902 \u091C\u0932\u0942\u0932\u2013\u091C\u0932\u0942\u0932 \u092A\u0927\u093E\u0930\u091C\u094B\u0902 \u0938\u093E\u201D"), /* @__PURE__ */ import_react6.default.createElement("p", { className: "manuhar-child-name" }, "\u0915\u0941\u0902\u0935\u0930 \u0930\u093E\u091C \u0938\u094B\u0932\u0902\u0915\u0940 (\u0932\u093E\u0921\u0941)")), /* @__PURE__ */ import_react6.default.createElement("div", { className: "awaiting-children-strip" }, /* @__PURE__ */ import_react6.default.createElement("span", { className: "awaiting-label" }, "\u2728 \u0928\u093F\u0939\u093E\u0930\u0924\u0940 \u092A\u0932\u0915\u0947 :"), /* @__PURE__ */ import_react6.default.createElement("span", { className: "awaiting-names" }, "\u091C\u093E\u0928\u0935\u0940, \u092A\u093F\u0939\u0941, \u0905\u0927\u093F\u0936\u094D\u0930\u0940, \u0938\u094D\u0935\u0930\u0942\u092A\u093E, \u092F\u0915\u094D\u0937\u093F\u0924\u093E, \u092A\u0930\u0940, \u092F\u0936\u0935\u0940, \u0924\u0928\u0941\u0936\u094D\u0930\u0940, \u0915\u094B\u092E\u0932, \u0935\u0940\u0930\u093E"))), /* @__PURE__ */ import_react6.default.createElement("div", { className: "special-mentions-grid", style: { maxWidth: "780px", margin: "0 auto 30px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px" } }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "mention-item-card" }, /* @__PURE__ */ import_react6.default.createElement("h4", { className: "mention-title" }, "\u0935\u093F\u0936\u0947\u0937 \u0906\u0936\u0940\u0930\u094D\u0935\u093E\u0926"), /* @__PURE__ */ import_react6.default.createElement("p", { className: "mention-text" }, "\u0926\u0941\u0930\u094D\u0917\u093E \u0926\u0947\u0935\u0940, \u0915\u092E\u0932\u093E \u0926\u0947\u0935\u0940, \u0905\u0928\u094D\u0928\u0942 \u0926\u0947\u0935\u0940")), /* @__PURE__ */ import_react6.default.createElement("div", { className: "mention-item-card" }, /* @__PURE__ */ import_react6.default.createElement("h4", { className: "mention-title" }, "\u0935\u093F\u0936\u0947\u0937 \u0905\u0924\u093F\u0925\u093F"), /* @__PURE__ */ import_react6.default.createElement("p", { className: "mention-text" }, "\u0926\u093F\u0928\u0947\u0936\u091C\u0940 (\u092D\u094B\u092A\u093E\u091C\u0940), \u0938\u0902\u091C\u092F \u091C\u0940 \u0930\u093E\u0920\u094C\u0921\u093C")), /* @__PURE__ */ import_react6.default.createElement("div", { className: "mention-item-card" }, /* @__PURE__ */ import_react6.default.createElement("h4", { className: "mention-title" }, "\u0935\u093F\u0936\u0947\u0937 \u0905\u0928\u0941\u0930\u094B\u0927"), /* @__PURE__ */ import_react6.default.createElement("p", { className: "mention-text" }, "\u0930\u093E\u0915\u0947\u0936\u091C\u0940, \u0930\u093E\u091C\u0947\u0936\u091C\u0940, \u0935\u093F\u0928\u094B\u0926\u091C\u0940"))), /* @__PURE__ */ import_react6.default.createElement("div", { className: "compliments-hosts-grid", style: { marginBottom: "32px" } }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "host-contact-card" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "host-ornament-header" }, /* @__PURE__ */ import_react6.default.createElement("span", { className: "host-namaste-icon" }, "\u{1F64F}"), /* @__PURE__ */ import_react6.default.createElement("span", { className: "host-honorific" }, "\u092A\u0930\u093F\u0935\u093E\u0930 \u0915\u0947 \u0935\u0930\u093F\u0937\u094D\u0920 \u090F\u0935\u0902 \u0928\u093F\u092E\u0902\u0924\u094D\u0930\u0915")), /* @__PURE__ */ import_react6.default.createElement("h3", { className: "host-name" }, "\u0936\u094D\u0930\u0940 \u0915\u0948\u0932\u093E\u0936\u091A\u0902\u0926\u094D\u0930 \u0917\u0939\u0932\u094B\u0924"), /* @__PURE__ */ import_react6.default.createElement("p", { className: "host-relation" }, "\u0938\u0941\u092A\u0941\u0924\u094D\u0930 \u0938\u094D\u0935. \u0936\u094D\u0930\u0940 \u092E\u0926\u0928\u0932\u093E\u0932\u091C\u0940 \u0917\u0939\u0932\u094B\u0924"), /* @__PURE__ */ import_react6.default.createElement("div", { className: "host-contact-action-row" }, /* @__PURE__ */ import_react6.default.createElement("a", { href: `tel:${phone1}`, className: "contact-action-btn btn-call", title: "\u0915\u0949\u0932 \u0915\u0930\u0947\u0902" }, /* @__PURE__ */ import_react6.default.createElement("span", { className: "action-icon" }, "\u{1F4DE}"), /* @__PURE__ */ import_react6.default.createElement("span", { className: "action-text" }, "+91 9214537106")), /* @__PURE__ */ import_react6.default.createElement(
      "a",
      {
        href: `https://wa.me/919214537106`,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "contact-action-btn btn-whatsapp",
        title: "\u0935\u094D\u0939\u093E\u091F\u094D\u0938\u090F\u092A \u092A\u0930 \u0938\u0902\u0926\u0947\u0936 \u092D\u0947\u091C\u0947\u0902"
      },
      /* @__PURE__ */ import_react6.default.createElement("span", { className: "action-icon" }, "\u{1F4AC}"),
      /* @__PURE__ */ import_react6.default.createElement("span", { className: "action-text" }, "\u0935\u094D\u0939\u093E\u091F\u094D\u0938\u090F\u092A")
    ))), /* @__PURE__ */ import_react6.default.createElement("div", { className: "host-contact-card" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "host-ornament-header" }, /* @__PURE__ */ import_react6.default.createElement("span", { className: "host-namaste-icon" }, "\u{1F64F}"), /* @__PURE__ */ import_react6.default.createElement("span", { className: "host-honorific" }, "\u0935\u0930 \u090F\u0935\u0902 \u0938\u0902\u092F\u094B\u091C\u0915")), /* @__PURE__ */ import_react6.default.createElement("h3", { className: "host-name" }, "\u0906\u092F\u0941\u0937\u094D\u092E\u093E\u0928 \u0906\u0915\u093E\u0936 \u0917\u0939\u0932\u094B\u0924"), /* @__PURE__ */ import_react6.default.createElement("p", { className: "host-relation" }, "\u0935\u093F\u0935\u093E\u0939 \u0938\u0902\u092F\u094B\u091C\u0915"), /* @__PURE__ */ import_react6.default.createElement("div", { className: "host-contact-action-row" }, /* @__PURE__ */ import_react6.default.createElement("a", { href: `tel:${phone2}`, className: "contact-action-btn btn-call", title: "\u0915\u0949\u0932 \u0915\u0930\u0947\u0902" }, /* @__PURE__ */ import_react6.default.createElement("span", { className: "action-icon" }, "\u{1F4DE}"), /* @__PURE__ */ import_react6.default.createElement("span", { className: "action-text" }, "+91 8824338255")), /* @__PURE__ */ import_react6.default.createElement(
      "a",
      {
        href: `https://wa.me/918824338255`,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "contact-action-btn btn-whatsapp",
        title: "\u0935\u094D\u0939\u093E\u091F\u094D\u0938\u090F\u092A \u092A\u0930 \u0938\u0902\u0926\u0947\u0936 \u092D\u0947\u091C\u0947\u0902"
      },
      /* @__PURE__ */ import_react6.default.createElement("span", { className: "action-icon" }, "\u{1F4AC}"),
      /* @__PURE__ */ import_react6.default.createElement("span", { className: "action-text" }, "\u0935\u094D\u0939\u093E\u091F\u094D\u0938\u090F\u092A")
    )))), /* @__PURE__ */ import_react6.default.createElement("div", { className: "direct-blessings-card", style: { maxWidth: "680px", margin: "0 auto" } }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "blessings-card-header" }, /* @__PURE__ */ import_react6.default.createElement("h4", { className: "blessings-title" }, "\u{1F48C} \u0928\u0935\u0926\u0902\u092A\u0924\u093F\u092F\u094B\u0902 \u0915\u094B \u0905\u092A\u0928\u0940 \u0936\u0941\u092D\u0915\u093E\u092E\u0928\u093E\u090F\u0901 \u0935 \u092E\u0902\u0917\u0932 \u0906\u0936\u0940\u0930\u094D\u0935\u093E\u0926 \u092D\u0947\u091C\u0947\u0902"), /* @__PURE__ */ import_react6.default.createElement("p", { className: "blessings-subtitle" }, "\u0905\u092A\u0928\u0940 \u0935\u094D\u092F\u0915\u094D\u0924\u093F\u0917\u0924 \u0936\u0941\u092D\u0915\u093E\u092E\u0928\u093E\u090F\u0901 \u090F\u0935\u0902 \u0906\u0917\u092E\u0928 \u0915\u0940 \u0938\u0942\u091A\u0928\u093E \u0938\u0940\u0927\u0947 \u092A\u0930\u093F\u0935\u093E\u0930 \u0915\u094B \u0935\u094D\u0939\u093E\u091F\u094D\u0938\u090F\u092A \u092A\u0930 \u092A\u094D\u0930\u0947\u0937\u093F\u0924 \u0915\u0930\u0947\u0902\u0964")), /* @__PURE__ */ import_react6.default.createElement("div", { className: "blessings-inputs-form" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "form-row-dual" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "form-input-group" }, /* @__PURE__ */ import_react6.default.createElement("label", { className: "input-label" }, "\u0906\u092A\u0915\u093E \u0936\u0941\u092D \u0928\u093E\u092E / \u092A\u0930\u093F\u0935\u093E\u0930 \u0915\u093E \u0928\u093E\u092E"), /* @__PURE__ */ import_react6.default.createElement(
      "input",
      {
        type: "text",
        className: "royal-text-input",
        placeholder: "\u0909\u0926\u093E. \u092A\u0930\u093F\u0939\u093E\u0930 \u092A\u0930\u093F\u0935\u093E\u0930 / \u0930\u093E\u091C\u0947\u0936 \u0936\u0930\u094D\u092E\u093E",
        value: guestName,
        onChange: (e) => setGuestName(e.target.value)
      }
    )), /* @__PURE__ */ import_react6.default.createElement("div", { className: "form-input-group" }, /* @__PURE__ */ import_react6.default.createElement("label", { className: "input-label" }, "\u0906\u092A\u0915\u093E \u0936\u0939\u0930"), /* @__PURE__ */ import_react6.default.createElement(
      "input",
      {
        type: "text",
        className: "royal-text-input",
        placeholder: "\u0909\u0926\u093E. \u092A\u093E\u0932\u0940, \u091C\u094B\u0927\u092A\u0941\u0930, \u092C\u093E\u0932\u094B\u0924\u0930\u093E, \u0938\u092E\u0926\u0921\u093C\u0940",
        value: guestCity,
        onChange: (e) => setGuestCity(e.target.value)
      }
    ))), /* @__PURE__ */ import_react6.default.createElement("div", { className: "form-input-group" }, /* @__PURE__ */ import_react6.default.createElement("label", { className: "input-label" }, "\u0906\u092A\u0915\u093E \u092E\u0902\u0917\u0932 \u0938\u0902\u0926\u0947\u0936 \u0935 \u0906\u0936\u0940\u0930\u094D\u0935\u093E\u0926"), /* @__PURE__ */ import_react6.default.createElement(
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
      /* @__PURE__ */ import_react6.default.createElement("span", null, "\u0915\u0948\u0932\u093E\u0936\u091A\u0902\u0926\u094D\u0930 \u091C\u0940 \u0915\u094B \u092D\u0947\u091C\u0947\u0902")
    ), /* @__PURE__ */ import_react6.default.createElement(
      "button",
      {
        type: "button",
        className: "btn-submit-blessing-whatsapp",
        style: { background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" },
        onClick: () => handleSendWhatsApp(phone2)
      },
      /* @__PURE__ */ import_react6.default.createElement("span", null, "\u{1F4AC}"),
      /* @__PURE__ */ import_react6.default.createElement("span", null, "\u0906\u0915\u093E\u0936 \u091C\u0940 \u0915\u094B \u092D\u0947\u091C\u0947\u0902")
    )), sentSuccess && /* @__PURE__ */ import_react6.default.createElement("div", { className: "blessing-sent-confirmation" }, /* @__PURE__ */ import_react6.default.createElement("span", null, "\u2713"), /* @__PURE__ */ import_react6.default.createElement("span", null, "\u0935\u094D\u0939\u093E\u091F\u094D\u0938\u090F\u092A \u0916\u0941\u0932 \u0917\u092F\u093E \u0939\u0948! \u0906\u092A\u0915\u0947 \u092E\u0902\u0917\u0932 \u0906\u0936\u0940\u0930\u094D\u0935\u093E\u0926 \u0939\u0947\u0924\u0941 \u0938\u0939\u0943\u0926\u092F \u0927\u0928\u094D\u092F\u0935\u093E\u0926!"))))));
  }

  // src/components/FinalBlessingsFooter.jsx
  var import_react7 = __toESM(__require("react"));
  function FinalBlessingsFooter({ onOpenCardViewer, onDownloadPDF }) {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return /* @__PURE__ */ import_react7.default.createElement("footer", { className: "wedding-final-blessings-footer 3d-closing-scene", id: "footer-section" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-golden-flowers-band 3d-flower-band", "aria-hidden": "true" }, /* @__PURE__ */ import_react7.default.createElement("span", { className: "floating-flower fl-1" }, "\u{1F338}"), /* @__PURE__ */ import_react7.default.createElement("span", { className: "floating-flower fl-2" }, "\u2728"), /* @__PURE__ */ import_react7.default.createElement("span", { className: "floating-flower fl-3" }, "\u{1F33A}"), /* @__PURE__ */ import_react7.default.createElement("span", { className: "floating-flower fl-4" }, "\u2728"), /* @__PURE__ */ import_react7.default.createElement("span", { className: "floating-flower fl-5" }, "\u{1F338}"), /* @__PURE__ */ import_react7.default.createElement("span", { className: "floating-flower fl-6" }, "\u2728")), /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-content-container 3d-footer-container" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-ganesha-wrapper 3d-ganesha-wrapper" }, /* @__PURE__ */ import_react7.default.createElement(
      "img",
      {
        src: "assets/champagne_ganesha_bright.png",
        alt: "Lord Ganesha",
        className: "footer-ganesha-img 3d-ganesha-img"
      }
    )), /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-sacred-blessing 3d-sacred-blessing" }, "\u0965 \u0950 \u0936\u094D\u0930\u0940 \u0917\u0923\u0947\u0936\u093E\u092F \u0928\u092E\u0903 \u2022 \u0936\u0941\u092D\u0902 \u092D\u0935\u0924\u0941 \u0965"), /* @__PURE__ */ import_react7.default.createElement("blockquote", { className: "footer-treasured-quote 3d-treasured-quote" }, "\u201C\u0906\u092A\u0915\u0940 \u0917\u0930\u093F\u092E\u093E\u092E\u092F\u0940 \u0909\u092A\u0938\u094D\u0925\u093F\u0924\u093F \u0939\u092E\u093E\u0930\u093E \u0938\u092C\u0938\u0947 \u092C\u0921\u093C\u093E \u0909\u092A\u0939\u093E\u0930 \u0939\u0948,", /* @__PURE__ */ import_react7.default.createElement("br", null), "\u0906\u092A\u0915\u093E \u092A\u093E\u0935\u0928 \u0906\u0936\u0940\u0930\u094D\u0935\u093E\u0926 \u0939\u092E\u093E\u0930\u093E \u0905\u0928\u092E\u094B\u0932 \u0916\u091C\u093E\u0928\u093E \u0939\u0948\u0964\u201D"), /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-couple-signature 3d-couple-sign" }, /* @__PURE__ */ import_react7.default.createElement("h2", { className: "footer-couple-names 3d-footer-names" }, "\u0906\u0915\u093E\u0936 \u090F\u0935\u0902 \u0930\u0940\u0928\u093E \u2022 \u0936\u093F\u0935\u093E\u0928\u0940 \u090F\u0935\u0902 \u0927\u0940\u0930\u091C"), /* @__PURE__ */ import_react7.default.createElement("p", { className: "footer-regards-line" }, "\u0938\u0938\u094D\u0928\u0947\u0939 \u090F\u0935\u0902 \u0938\u093E\u0926\u0930 \u0906\u092D\u093E\u0930"), /* @__PURE__ */ import_react7.default.createElement("p", { className: "footer-family-signoff" }, "\u0917\u0939\u0932\u094B\u0924 \u092A\u0930\u093F\u0935\u093E\u0930 \u2022 \u0930\u093E\u092E\u0926\u0947\u0935 \u0930\u094B\u0921\u093C, \u092A\u093E\u0932\u0940\u2013\u092E\u093E\u0930\u0935\u093E\u0921\u093C (\u0930\u093E\u091C\u0938\u094D\u0925\u093E\u0928)")), /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-bottom-divider 3d-bottom-divider" }), /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-sub-bar" }, /* @__PURE__ */ import_react7.default.createElement("p", { className: "sub-bar-text" }, "\u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939 \u092E\u0939\u094B\u0924\u094D\u0938\u0935 2026 \u2022 \u0926\u094B\u0939\u0930\u093E \u0935\u093F\u0935\u093E\u0939 \u0909\u0924\u094D\u0938\u0935 \u2022 \u092A\u093E\u0932\u0940, \u0930\u093E\u091C\u0938\u094D\u0925\u093E\u0928"), /* @__PURE__ */ import_react7.default.createElement(
      "button",
      {
        onClick: scrollToTop,
        className: "btn-scroll-to-top 3d-btn-top",
        title: "\u0936\u0940\u0930\u094D\u0937 \u092A\u0930 \u091C\u093E\u090F\u0901",
        "aria-label": "\u0936\u0940\u0930\u094D\u0937 \u092A\u0930 \u091C\u093E\u090F\u0901"
      },
      "\u2191 \u090A\u092A\u0930 \u091C\u093E\u090F\u0901"
    ))));
  }

  // src/components/InvitationViewerModal.jsx
  var import_react8 = __toESM(__require("react"));
  function InvitationViewerModal({ isOpen, onClose }) {
    const [zoomLevel, setZoomLevel] = (0, import_react8.useState)(1);
    const [isFullscreen, setIsFullscreen] = (0, import_react8.useState)(false);
    const modalRef = (0, import_react8.useRef)(null);
    const coverPage = {
      src: "assets/shiva_parvati_wedding_card.png",
      title: "\u090F\u0915-\u092A\u0943\u0937\u094D\u0920\u0940\u092F \u0921\u093F\u091C\u093F\u091F\u0932 \u0935\u093F\u0935\u093E\u0939 \u0906\u092E\u0902\u0924\u094D\u0930\u0923 \u092A\u0924\u094D\u0930\u093F\u0915\u093E",
      sub: "\u0906\u0915\u093E\u0936 \u090F\u0935\u0902 \u0930\u0940\u0928\u093E \u2022 \u0936\u093F\u0935\u093E\u0928\u0940 \u090F\u0935\u0902 \u0927\u0940\u0930\u091C \u2022 \u0936\u0928\u093F\u0935\u093E\u0930, 12 \u0926\u093F\u0938\u0902\u092C\u0930 2026 \u2022 \u092A\u093E\u0932\u0940"
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
      /* @__PURE__ */ import_react8.default.createElement("header", { className: "viewer-top-toolbar" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "viewer-info-strip" }, /* @__PURE__ */ import_react8.default.createElement("span", { className: "viewer-brand-title" }, "\u{1F451} \u0921\u093F\u091C\u093F\u091F\u0932 \u0935\u093F\u0935\u093E\u0939 \u0906\u092E\u0902\u0924\u094D\u0930\u0923 \u092A\u0924\u094D\u0930\u093F\u0915\u093E"), /* @__PURE__ */ import_react8.default.createElement("span", { className: "viewer-page-counter" }, "\u090F\u0915-\u092A\u0943\u0937\u094D\u0920\u0940\u092F \u0906\u0927\u093F\u0915\u093E\u0930\u093F\u0915 \u092A\u0924\u094D\u0930\u093F\u0915\u093E")), /* @__PURE__ */ import_react8.default.createElement("div", { className: "viewer-action-controls" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "zoom-ctrl-group" }, /* @__PURE__ */ import_react8.default.createElement(
        "button",
        {
          className: "viewer-ctrl-btn",
          onClick: handleZoomOut,
          disabled: zoomLevel <= 0.75,
          title: "\u091B\u094B\u091F\u093E \u0915\u0930\u0947\u0902",
          "aria-label": "\u091C\u093C\u0942\u092E \u0906\u0909\u091F"
        },
        "\u{1F50D}-"
      ), /* @__PURE__ */ import_react8.default.createElement(
        "button",
        {
          className: "viewer-ctrl-btn zoom-level-display",
          onClick: handleResetZoom,
          title: "100% \u0906\u0915\u093E\u0930 \u092A\u0930 \u0932\u093E\u090F\u0902",
          "aria-label": "\u0930\u0940\u0938\u0947\u091F \u091C\u093C\u0942\u092E"
        },
        Math.round(zoomLevel * 100),
        "%"
      ), /* @__PURE__ */ import_react8.default.createElement(
        "button",
        {
          className: "viewer-ctrl-btn",
          onClick: handleZoomIn,
          disabled: zoomLevel >= 2,
          title: "\u092C\u0921\u093C\u093E \u0915\u0930\u0947\u0902",
          "aria-label": "\u091C\u093C\u0942\u092E \u0907\u0928"
        },
        "\u{1F50D}+"
      )), /* @__PURE__ */ import_react8.default.createElement(
        "button",
        {
          className: "viewer-ctrl-btn",
          onClick: toggleFullscreen,
          title: isFullscreen ? "\u0938\u093E\u092E\u093E\u0928\u094D\u092F \u0938\u094D\u0915\u094D\u0930\u0940\u0928" : "\u092A\u0942\u0930\u094D\u0923 \u0938\u094D\u0915\u094D\u0930\u0940\u0928",
          "aria-label": "\u092A\u0942\u0930\u094D\u0923 \u0938\u094D\u0915\u094D\u0930\u0940\u0928"
        },
        isFullscreen ? "\u2913 \u0938\u093E\u092E\u093E\u0928\u094D\u092F" : "\u2922 \u092A\u0942\u0930\u094D\u0923 \u0938\u094D\u0915\u094D\u0930\u0940\u0928"
      ), /* @__PURE__ */ import_react8.default.createElement(
        "a",
        {
          href: pdfUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "viewer-ctrl-btn btn-new-tab",
          title: "\u092A\u0940\u0921\u0940\u090F\u092B \u0915\u094B \u0928\u0908 \u091F\u0948\u092C \u092E\u0947\u0902 \u0916\u094B\u0932\u0947\u0902"
        },
        "\u2197 \u0928\u0908 \u091F\u0948\u092C"
      ), /* @__PURE__ */ import_react8.default.createElement(
        "a",
        {
          href: pdfUrl,
          download: "dual-jain-wedding-invitation.pdf",
          className: "viewer-ctrl-btn btn-download-gold",
          title: "\u0906\u0927\u093F\u0915\u093E\u0930\u093F\u0915 \u090F\u0915-\u092A\u0943\u0937\u094D\u0920\u0940\u092F \u092A\u0940\u0921\u0940\u090F\u092B \u0921\u093E\u0909\u0928\u0932\u094B\u0921 \u0915\u0930\u0947\u0902"
        },
        "\u{1F4E5} \u092A\u0940\u0921\u0940\u090F\u092B"
      ), /* @__PURE__ */ import_react8.default.createElement(
        "button",
        {
          className: "viewer-ctrl-btn btn-close-modal",
          onClick: onClose,
          title: "\u092C\u0902\u0926 \u0915\u0930\u0947\u0902 (Esc)",
          "aria-label": "\u0906\u092E\u0902\u0924\u094D\u0930\u0923 \u092A\u0924\u094D\u0930\u093F\u0915\u093E \u092C\u0902\u0926 \u0915\u0930\u0947\u0902"
        },
        "\u2715 \u092C\u0902\u0926 \u0915\u0930\u0947\u0902"
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
          "img",
          {
            src: "assets/shiva_parvati_wedding_card.png",
            alt: "\u0935\u093F\u0935\u093E\u0939 \u0906\u092E\u0902\u0924\u094D\u0930\u0923 \u092A\u0924\u094D\u0930\u093F\u0915\u093E",
            style: {
              width: "100%",
              maxWidth: "520px",
              height: "auto",
              borderRadius: "12px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.7)",
              display: "block"
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
    const [isMuted, setIsMuted] = (0, import_react9.useState)(false);
    const [isReady, setIsReady] = (0, import_react9.useState)(false);
    const [autoplayBlocked, setAutoplayBlocked] = (0, import_react9.useState)(false);
    const [errorMessage, setErrorMessage] = (0, import_react9.useState)(null);
    const playerRef = (0, import_react9.useRef)(null);
    const hasInitiallyStartedRef = (0, import_react9.useRef)(false);
    const pendingPlayRef = (0, import_react9.useRef)(false);
    (0, import_react9.useEffect)(() => {
      let checkInterval = null;
      let autoplayCheckTimeout = null;
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
              autoplay: 1,
              // Attempt automatic playback immediately
              start: START_TIME_SECONDS,
              // Start at 00:30
              controls: 0,
              disablekb: 1,
              fs: 0,
              rel: 0,
              modestbranding: 1,
              playsinline: 1,
              loop: 1,
              playlist: YOUTUBE_VIDEO_ID,
              enablejsapi: 1,
              origin: window.location.origin
            },
            events: {
              onReady: (event) => {
                setIsReady(true);
                setErrorMessage(null);
                attemptAutoplay();
              },
              onStateChange: (event) => {
                if (event.data === 1) {
                  setIsPlaying(true);
                  setAutoplayBlocked(false);
                  window.isWeddingMusicPlaying = true;
                  window.dispatchEvent(new CustomEvent("weddingMusicStatus", { detail: { isPlaying: true } }));
                } else if (event.data === 2) {
                  setIsPlaying(false);
                  window.isWeddingMusicPlaying = false;
                  window.dispatchEvent(new CustomEvent("weddingMusicStatus", { detail: { isPlaying: false } }));
                } else if (event.data === 0) {
                  if (playerRef.current && playerRef.current.seekTo) {
                    playerRef.current.seekTo(START_TIME_SECONDS, true);
                    playerRef.current.playVideo();
                  }
                }
              },
              onError: (err) => {
                const code = err && err.data || "Unknown";
                console.warn("YouTube BGM Player notice/error:", code);
                setErrorMessage(`\u0938\u0902\u0917\u0940\u0924 \u0938\u0947\u0935\u093E \u0938\u0942\u091A\u0928\u093E (\u0915\u094B\u0921 ${code})`);
              }
            }
          });
          return true;
        } catch (err) {
          console.warn("Error setting up YT Player:", err);
          setErrorMessage("\u0938\u0902\u0917\u0940\u0924 \u092A\u094D\u0932\u0947\u092F\u0930 \u092A\u094D\u0930\u093E\u0930\u0902\u092D \u0915\u0930\u0928\u0947 \u092E\u0947\u0902 \u0924\u094D\u0930\u0941\u091F\u093F");
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
        }, 250);
      }
      const attemptAutoplay = () => {
        if (!playerRef.current) return;
        try {
          if (playerRef.current.seekTo && !hasInitiallyStartedRef.current) {
            playerRef.current.seekTo(START_TIME_SECONDS, true);
            hasInitiallyStartedRef.current = true;
          }
          if (playerRef.current.unMute) {
            playerRef.current.unMute();
          }
          if (playerRef.current.setVolume) {
            playerRef.current.setVolume(100);
          }
          if (playerRef.current.playVideo) {
            playerRef.current.playVideo();
          }
        } catch (e) {
          console.warn("Autoplay call deferred:", e);
        }
        autoplayCheckTimeout = setTimeout(() => {
          if (playerRef.current && playerRef.current.getPlayerState) {
            const state = playerRef.current.getPlayerState();
            if (state !== 1 && state !== 3) {
              console.log("Browser blocked audible autoplay (State: " + state + "). Presenting Hindi prompt.");
              setAutoplayBlocked(true);
            } else {
              setAutoplayBlocked(false);
            }
          } else {
            if (!window.isWeddingMusicPlaying) {
              setAutoplayBlocked(true);
            }
          }
        }, 2200);
      };
      const startPlayAt30 = () => {
        if (!playerRef.current || !playerRef.current.playVideo) {
          pendingPlayRef.current = true;
          return;
        }
        try {
          if (!hasInitiallyStartedRef.current) {
            playerRef.current.seekTo(START_TIME_SECONDS, true);
            hasInitiallyStartedRef.current = true;
          }
          if (playerRef.current.unMute) {
            playerRef.current.unMute();
          }
          if (playerRef.current.setVolume) {
            playerRef.current.setVolume(100);
          }
          playerRef.current.playVideo();
          setIsPlaying(true);
          setIsMuted(false);
          setAutoplayBlocked(false);
          window.isWeddingMusicPlaying = true;
          window.dispatchEvent(new CustomEvent("weddingMusicStatus", { detail: { isPlaying: true } }));
        } catch (e) {
          console.warn("Playback gesture required:", e);
          pendingPlayRef.current = true;
          setAutoplayBlocked(true);
        }
      };
      window.playWeddingMusic = () => {
        startPlayAt30();
      };
      window.pauseWeddingMusic = () => {
        if (playerRef.current && playerRef.current.pauseVideo) {
          playerRef.current.pauseVideo();
          setIsPlaying(false);
          window.isWeddingMusicPlaying = false;
          window.dispatchEvent(new CustomEvent("weddingMusicStatus", { detail: { isPlaying: false } }));
        }
      };
      window.toggleWeddingMusic = () => {
        if (isPlaying) {
          window.pauseWeddingMusic();
        } else {
          window.playWeddingMusic();
        }
      };
      window.toggleMuteWeddingMusic = () => {
        if (!playerRef.current) return;
        if (isMuted) {
          if (playerRef.current.unMute) playerRef.current.unMute();
          setIsMuted(false);
        } else {
          if (playerRef.current.mute) playerRef.current.mute();
          setIsMuted(true);
        }
      };
      const handleFirstUserInteraction = () => {
        if (!window.isWeddingMusicPlaying && playerRef.current) {
          try {
            startPlayAt30();
          } catch (e) {
          }
        }
      };
      window.addEventListener("click", handleFirstUserInteraction, { once: true, passive: true });
      window.addEventListener("touchstart", handleFirstUserInteraction, { once: true, passive: true });
      return () => {
        if (checkInterval) clearInterval(checkInterval);
        if (autoplayCheckTimeout) clearTimeout(autoplayCheckTimeout);
        window.removeEventListener("click", handleFirstUserInteraction);
        window.removeEventListener("touchstart", handleFirstUserInteraction);
        window.playWeddingMusic = null;
        window.pauseWeddingMusic = null;
        window.toggleWeddingMusic = null;
        window.toggleMuteWeddingMusic = null;
      };
    }, [isPlaying, isMuted]);
    const handlePlayToggle = () => {
      if (typeof window.toggleWeddingMusic === "function") {
        window.toggleWeddingMusic();
      }
    };
    const handleMuteToggle = (e) => {
      e.stopPropagation();
      if (typeof window.toggleMuteWeddingMusic === "function") {
        window.toggleMuteWeddingMusic();
      }
    };
    const handleProminentPromptClick = (e) => {
      e.stopPropagation();
      setAutoplayBlocked(false);
      if (typeof window.playWeddingMusic === "function") {
        window.playWeddingMusic();
      }
    };
    return /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement(
      "div",
      {
        id: "youtube-bgm-container",
        "aria-hidden": "true",
        style: {
          position: "fixed",
          width: "1px",
          height: "1px",
          bottom: "0",
          right: "0",
          opacity: 1e-3,
          pointerEvents: "none",
          zIndex: -1
        }
      }
    ), autoplayBlocked && !isPlaying && /* @__PURE__ */ import_react9.default.createElement("aside", { className: "prominent-autoplay-blocked-banner", role: "alert", "aria-label": "\u0938\u0902\u0917\u0940\u0924 \u092A\u094D\u0932\u0947\u092C\u0948\u0915 \u0905\u0928\u0941\u092E\u0924\u093F" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "autoplay-prompt-content" }, /* @__PURE__ */ import_react9.default.createElement("span", { className: "prompt-shehnai-icon", "aria-hidden": "true" }, "\u{1F3BA}"), /* @__PURE__ */ import_react9.default.createElement("span", { className: "prompt-hindi-text" }, "\u092E\u0927\u0941\u0930 \u0936\u0939\u0928\u093E\u0908 \u0915\u0940 \u0927\u0941\u0928 \u0938\u0941\u0928\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u092F\u0939\u093E\u0901 \u0938\u094D\u092A\u0930\u094D\u0936 \u0915\u0930\u0947\u0902")), /* @__PURE__ */ import_react9.default.createElement(
      "button",
      {
        type: "button",
        className: "btn-autoplay-start-prompt",
        onClick: handleProminentPromptClick,
        "aria-label": "\u0938\u0902\u0917\u0940\u0924 \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902"
      },
      /* @__PURE__ */ import_react9.default.createElement("span", { className: "btn-sparkle-mini" }, "\u2726"),
      /* @__PURE__ */ import_react9.default.createElement("span", null, "\u0938\u0902\u0917\u0940\u0924 \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902"),
      /* @__PURE__ */ import_react9.default.createElement("span", { className: "btn-sparkle-mini" }, "\u2726")
    )), errorMessage && /* @__PURE__ */ import_react9.default.createElement("aside", { className: "music-error-notice", role: "alert", "aria-live": "assertive" }, /* @__PURE__ */ import_react9.default.createElement("span", null, "\u26A0\uFE0F ", errorMessage), /* @__PURE__ */ import_react9.default.createElement("button", { type: "button", onClick: () => setErrorMessage(null), className: "btn-dismiss-error" }, "\u2715")), /* @__PURE__ */ import_react9.default.createElement("aside", { className: "floating-music-widget", "aria-label": "\u0935\u093F\u0935\u093E\u0939 \u092A\u0943\u0937\u094D\u0920\u092D\u0942\u092E\u093F \u0938\u0902\u0917\u0940\u0924 \u0928\u093F\u092F\u0902\u0924\u094D\u0930\u0923" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: `royal-music-pill-btn ${isPlaying ? "is-playing" : "is-paused"}` }, /* @__PURE__ */ import_react9.default.createElement(
      "button",
      {
        type: "button",
        className: "music-action-trigger",
        onClick: handlePlayToggle,
        title: isPlaying ? "\u0938\u0902\u0917\u0940\u0924 \u0930\u094B\u0915\u0947\u0902" : "\u0938\u0902\u0917\u0940\u0924 \u091A\u093E\u0932\u0942 \u0915\u0930\u0947\u0902",
        "aria-label": isPlaying ? "\u0938\u0902\u0917\u0940\u0924 \u0930\u094B\u0915\u0947\u0902" : "\u0938\u0902\u0917\u0940\u0924 \u091A\u093E\u0932\u0942 \u0915\u0930\u0947\u0902"
      },
      /* @__PURE__ */ import_react9.default.createElement("span", { className: "music-pill-icon", "aria-hidden": "true" }, isPlaying ? "\u23F8" : "\u25B6"),
      /* @__PURE__ */ import_react9.default.createElement("span", { className: "music-pill-text" }, isPlaying ? "\u0938\u0902\u0917\u0940\u0924 \u0930\u094B\u0915\u0947\u0902" : "\u0938\u0902\u0917\u0940\u0924 \u091A\u093E\u0932\u0942 \u0915\u0930\u0947\u0902"),
      isPlaying && /* @__PURE__ */ import_react9.default.createElement("span", { className: "music-wave-bars", "aria-hidden": "true" }, /* @__PURE__ */ import_react9.default.createElement("span", { className: "bar bar-1" }), /* @__PURE__ */ import_react9.default.createElement("span", { className: "bar bar-2" }), /* @__PURE__ */ import_react9.default.createElement("span", { className: "bar bar-3" }), /* @__PURE__ */ import_react9.default.createElement("span", { className: "bar bar-4" }))
    ), isPlaying && /* @__PURE__ */ import_react9.default.createElement(
      "button",
      {
        type: "button",
        className: "music-mute-trigger",
        onClick: handleMuteToggle,
        title: isMuted ? "\u0906\u0935\u093E\u091C\u093C \u091A\u093E\u0932\u0942 \u0915\u0930\u0947\u0902" : "\u0906\u0935\u093E\u091C\u093C \u092C\u0902\u0926 \u0915\u0930\u0947\u0902",
        "aria-label": isMuted ? "\u0906\u0935\u093E\u091C\u093C \u091A\u093E\u0932\u0942 \u0915\u0930\u0947\u0902" : "\u0906\u0935\u093E\u091C\u093C \u092C\u0902\u0926 \u0915\u0930\u0947\u0902"
      },
      /* @__PURE__ */ import_react9.default.createElement("span", { className: "mute-icon", "aria-hidden": "true" }, isMuted ? "\u{1F507}" : "\u{1F50A}")
    ))));
  }

  // src/components/CinematicFireworksIntro.jsx
  var import_react10 = __toESM(__require("react"));
  function CinematicFireworksIntro({ onComplete }) {
    const canvasRef = (0, import_react10.useRef)(null);
    const [isFadingOut, setIsFadingOut] = (0, import_react10.useState)(false);
    const animFrameIdRef = (0, import_react10.useRef)(null);
    const colorPalette = [
      "#FFD700",
      // Pure Gold
      "#FFA500",
      // Saffron Gold
      "#D4AF37",
      // Bright Shimmer Gold
      "#B88A3B",
      // Antique Gold
      "#FF4500",
      // Vermilion
      "#E91E63",
      // Festive Rani Pink
      "#00E676",
      // Emerald Green
      "#FFF5E6"
      // Champagne White
    ];
    const handleFinish = () => {
      if (isFadingOut) return;
      setIsFadingOut(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 600);
    };
    (0, import_react10.useEffect)(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        const timer = setTimeout(handleFinish, 1500);
        return () => clearTimeout(timer);
      }
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      let width = canvas.width = window.innerWidth;
      let height = canvas.height = window.innerHeight;
      const handleResize = () => {
        if (!canvas) return;
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      };
      window.addEventListener("resize", handleResize);
      const particles = [];
      const rockets = [];
      class Rocket {
        constructor(targetX, targetY) {
          this.x = targetX || Math.random() * (width - 120) + 60;
          this.y = height;
          this.targetY = targetY || Math.random() * (height * 0.4) + height * 0.12;
          this.speed = Math.random() * 4 + 11;
          this.angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.18;
          this.vx = Math.cos(this.angle) * this.speed;
          this.vy = Math.sin(this.angle) * this.speed;
          this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
          this.dead = false;
        }
        update() {
          this.x += this.vx;
          this.y += this.vy;
          this.vy += 0.14;
          if (this.vy >= 0 || this.y <= this.targetY) {
            this.dead = true;
            createBurst(this.x, this.y, this.color);
          }
        }
        draw() {
          ctx.save();
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x - this.vx * 1.5, this.y - this.vy * 1.5);
          ctx.stroke();
          ctx.restore();
        }
      }
      class Particle {
        constructor(x, y, color) {
          this.x = x;
          this.y = y;
          this.color = color;
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 6 + 1.5;
          this.vx = Math.cos(angle) * speed;
          this.vy = Math.sin(angle) * speed;
          this.alpha = 1;
          this.decay = Math.random() * 0.02 + 0.015;
          this.size = Math.random() * 3 + 1.8;
        }
        update() {
          this.vx *= 0.96;
          this.vy *= 0.96;
          this.vy += 0.08;
          this.x += this.vx;
          this.y += this.vy;
          this.alpha -= this.decay;
        }
        draw() {
          ctx.save();
          ctx.globalAlpha = Math.max(0, this.alpha);
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
      function createBurst(x, y, color) {
        const isMobile = width < 768;
        const count = isMobile ? 32 : 55;
        for (let i = 0; i < count; i++) {
          particles.push(new Particle(x, y, color));
        }
      }
      rockets.push(new Rocket(width * 0.3, height * 0.25));
      rockets.push(new Rocket(width * 0.7, height * 0.22));
      let frameCount = 0;
      const launchInterval = setInterval(() => {
        if (rockets.length < 5) {
          rockets.push(new Rocket());
        }
      }, 450);
      function animate() {
        ctx.clearRect(0, 0, width, height);
        for (let i = rockets.length - 1; i >= 0; i--) {
          rockets[i].update();
          rockets[i].draw();
          if (rockets[i].dead) {
            rockets.splice(i, 1);
          }
        }
        for (let i = particles.length - 1; i >= 0; i--) {
          particles[i].update();
          particles[i].draw();
          if (particles[i].alpha <= 0) {
            particles.splice(i, 1);
          }
        }
        frameCount++;
        animFrameIdRef.current = requestAnimationFrame(animate);
      }
      animate();
      const autoFinishTimer = setTimeout(() => {
        handleFinish();
      }, 3600);
      return () => {
        window.removeEventListener("resize", handleResize);
        clearInterval(launchInterval);
        clearTimeout(autoFinishTimer);
        if (animFrameIdRef.current) {
          cancelAnimationFrame(animFrameIdRef.current);
        }
      };
    }, []);
    return /* @__PURE__ */ import_react10.default.createElement(
      "div",
      {
        className: `cinematic-fireworks-overlay ${isFadingOut ? "fade-out" : "fade-in"}`,
        role: "region",
        "aria-label": "Wedding Celebration Fireworks",
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 99999,
          background: "transparent",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "20px",
          transition: "opacity 0.6s ease"
        }
      },
      /* @__PURE__ */ import_react10.default.createElement(
        "canvas",
        {
          ref: canvasRef,
          className: "fireworks-canvas",
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none"
          }
        }
      ),
      /* @__PURE__ */ import_react10.default.createElement(
        "div",
        {
          className: "celebration-floating-badge",
          style: {
            position: "relative",
            zIndex: 10,
            pointerEvents: "auto",
            background: "linear-gradient(135deg, rgba(139, 48, 56, 0.95) 0%, rgba(118, 45, 50, 0.95) 100%)",
            color: "#FFF5E6",
            border: "1.5px solid #C9A45C",
            borderRadius: "30px",
            padding: "10px 24px",
            boxShadow: "0 10px 30px rgba(118, 45, 50, 0.35), 0 0 20px rgba(201, 164, 92, 0.4)",
            textAlign: "center",
            maxWidth: "90vw",
            animation: "badgeFloatIn 0.5s ease-out",
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }
        },
        /* @__PURE__ */ import_react10.default.createElement("span", { style: { fontSize: "18px" } }, "\u2728"),
        /* @__PURE__ */ import_react10.default.createElement("div", null, /* @__PURE__ */ import_react10.default.createElement("div", { style: {
          fontFamily: "Noto Sans Devanagari, sans-serif",
          fontWeight: 700,
          fontSize: "14px",
          color: "#FFF2D6",
          letterSpacing: "0.3px"
        } }, "\u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939 \u0938\u092E\u093E\u0930\u094B\u0939 \u092E\u0947\u0902 \u0906\u092A\u0915\u093E \u0939\u093E\u0930\u094D\u0926\u093F\u0915 \u0938\u094D\u0935\u093E\u0917\u0924 \u0939\u0948!"), /* @__PURE__ */ import_react10.default.createElement("div", { style: {
          fontFamily: "Noto Sans Devanagari, sans-serif",
          fontSize: "12px",
          color: "#E5C378",
          marginTop: "2px"
        } }, "\u0906\u0915\u093E\u0936 \u0938\u0902\u0917 \u0930\u0940\u0928\u093E \u2022 \u0936\u093F\u0935\u093E\u0928\u0940 \u0938\u0902\u0917 \u0927\u0940\u0930\u091C")),
        /* @__PURE__ */ import_react10.default.createElement(
          "button",
          {
            type: "button",
            onClick: handleFinish,
            style: {
              background: "transparent",
              border: "none",
              color: "#E5C378",
              cursor: "pointer",
              fontSize: "14px",
              padding: "2px 6px",
              marginLeft: "4px"
            },
            title: "\u092C\u0902\u0926 \u0915\u0930\u0947\u0902",
            "aria-label": "\u092C\u0902\u0926 \u0915\u0930\u0947\u0902"
          },
          "\u2715"
        )
      )
    );
  }

  // src/components/FloatingPetalsCanvas.jsx
  var import_react11 = __toESM(__require("react"));
  function FloatingPetalsCanvas() {
    const canvasRef = (0, import_react11.useRef)(null);
    (0, import_react11.useEffect)(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      let width = canvas.width = window.innerWidth;
      let height = canvas.height = window.innerHeight;
      const handleResize = () => {
        if (!canvas) return;
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      };
      window.addEventListener("resize", handleResize);
      const petalColors = [
        "rgba(212, 175, 55, 0.55)",
        // Shimmer Gold
        "rgba(255, 170, 0, 0.45)",
        // Warm Marigold
        "rgba(255, 215, 0, 0.50)",
        // Bright Haldi Gold
        "rgba(201, 164, 92, 0.45)",
        // Antique Gold
        "rgba(230, 81, 0, 0.40)",
        // Festive Saffron
        "rgba(214, 51, 108, 0.35)",
        // Rose Petal
        "rgba(139, 48, 56, 0.30)"
        // Traditional Maroon
      ];
      const particleCount = width < 768 ? 20 : 35;
      const particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 5 + 3,
          speedY: Math.random() * 0.6 + 0.3,
          speedX: (Math.random() - 0.5) * 0.5,
          angle: Math.random() * 360,
          spinSpeed: (Math.random() - 0.5) * 1.5,
          color: petalColors[Math.floor(Math.random() * petalColors.length)],
          opacity: Math.random() * 0.5 + 0.3,
          isSparkle: Math.random() > 0.65
        });
      }
      let animId;
      const animate = () => {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.y += p.speedY;
          p.x += Math.sin(p.y * 7e-3) * 0.4 + p.speedX;
          p.angle += p.spinSpeed;
          if (p.y > height + 20) {
            p.y = -20;
            p.x = Math.random() * width;
          }
          if (p.x > width + 20) p.x = -20;
          if (p.x < -20) p.x = width + 20;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.angle * Math.PI / 180);
          ctx.globalAlpha = p.opacity;
          if (p.isSparkle) {
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(0, 0, p.size * 0.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "rgba(255, 240, 190, 0.75)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(-p.size * 1.4, 0);
            ctx.lineTo(p.size * 1.4, 0);
            ctx.moveTo(0, -p.size * 1.4);
            ctx.lineTo(0, p.size * 1.4);
            ctx.stroke();
          } else {
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.ellipse(0, 0, p.size * 0.85, p.size * 1.5, Math.PI / 4, 0, 2 * Math.PI);
            ctx.fill();
          }
          ctx.restore();
        }
        animId = requestAnimationFrame(animate);
      };
      animate();
      return () => {
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animId);
      };
    }, []);
    return /* @__PURE__ */ import_react11.default.createElement(
      "canvas",
      {
        ref: canvasRef,
        className: "floating-petals-canvas",
        "aria-hidden": "true",
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 1
        }
      }
    );
  }

  // src/App.jsx
  function App() {
    const [isViewerOpen, setIsViewerOpen] = (0, import_react12.useState)(false);
    const [showFireworks, setShowFireworks] = (0, import_react12.useState)(() => {
      try {
        if (typeof window !== "undefined") {
          if (window.__START_CELEBRATE_IMMEDIATELY) return true;
          const search = window.location.search || "";
          const hash = window.location.hash || "";
          const params = new URLSearchParams(search);
          return params.get("celebrate") === "1" || params.has("celebrate") || hash.includes("celebrate");
        }
      } catch (e) {
        console.warn("URL param error:", e);
      }
      return false;
    });
    (0, import_react12.useEffect)(() => {
      try {
        const search = window.location.search || "";
        const hash = window.location.hash || "";
        const params = new URLSearchParams(search);
        if (params.get("celebrate") === "1" || params.has("celebrate") || hash.includes("celebrate")) {
          setShowFireworks(true);
        }
      } catch (e) {
      }
      const handleLocationChange = () => {
        try {
          const params = new URLSearchParams(window.location.search);
          if (params.get("celebrate") === "1" || params.has("celebrate") || window.location.hash.includes("celebrate")) {
            setShowFireworks(true);
          }
        } catch (e) {
        }
      };
      window.addEventListener("popstate", handleLocationChange);
      window.addEventListener("hashchange", handleLocationChange);
      window.triggerFireworksIntro = () => {
        setShowFireworks(true);
      };
      return () => {
        window.removeEventListener("popstate", handleLocationChange);
        window.removeEventListener("hashchange", handleLocationChange);
      };
    }, []);
    const scrollTo = (id) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };
    const handleEnterInvitation = () => {
      if (typeof window.playWeddingMusic === "function") {
        window.playWeddingMusic();
      }
      setShowFireworks(true);
      setTimeout(() => {
        scrollTo("couples-section");
      }, 350);
    };
    const handleFireworksComplete = () => {
      setShowFireworks(false);
    };
    return /* @__PURE__ */ import_react12.default.createElement("div", { className: "royal-wedding-app" }, /* @__PURE__ */ import_react12.default.createElement(FloatingPetalsCanvas, null), /* @__PURE__ */ import_react12.default.createElement(MusicPlayer, null), showFireworks && /* @__PURE__ */ import_react12.default.createElement(CinematicFireworksIntro, { onComplete: handleFireworksComplete }), /* @__PURE__ */ import_react12.default.createElement("header", { className: "sticky-royal-nav", role: "banner" }, /* @__PURE__ */ import_react12.default.createElement("div", { className: "nav-container" }, /* @__PURE__ */ import_react12.default.createElement("div", { className: "nav-brand", onClick: () => scrollTo("hero-section") }, /* @__PURE__ */ import_react12.default.createElement("span", { className: "brand-crest" }, "\u{1F451}"), /* @__PURE__ */ import_react12.default.createElement("span", { className: "brand-title" }, "\u0906\u0915\u093E\u0936 \u090F\u0935\u0902 \u0930\u0940\u0928\u093E \u2022 \u0936\u093F\u0935\u093E\u0928\u0940 \u090F\u0935\u0902 \u0927\u0940\u0930\u091C")), /* @__PURE__ */ import_react12.default.createElement("nav", { className: "nav-links-row", "aria-label": "\u0935\u093F\u0935\u093E\u0939 \u0905\u0928\u0941\u092D\u093E\u0917 \u0928\u0947\u0935\u093F\u0917\u0947\u0936\u0928" }, /* @__PURE__ */ import_react12.default.createElement("button", { className: "nav-link-btn", onClick: () => scrollTo("hero-section") }, "\u0938\u094D\u0935\u093E\u0917\u0924"), /* @__PURE__ */ import_react12.default.createElement("button", { className: "nav-link-btn", onClick: () => scrollTo("couples-section") }, "\u0935\u0930-\u0935\u0927\u0942"), /* @__PURE__ */ import_react12.default.createElement("button", { className: "nav-link-btn", onClick: () => scrollTo("events-section") }, "\u092E\u093E\u0902\u0917\u0932\u093F\u0915 \u0915\u093E\u0930\u094D\u092F\u0915\u094D\u0930\u092E"), /* @__PURE__ */ import_react12.default.createElement("button", { className: "nav-link-btn", onClick: () => scrollTo("venue-section") }, "\u0935\u093F\u0935\u093E\u0939 \u0938\u094D\u0925\u0932"), /* @__PURE__ */ import_react12.default.createElement("button", { className: "nav-link-btn", onClick: () => scrollTo("countdown-section") }, "\u0936\u0941\u092D \u092E\u0941\u0939\u0942\u0930\u094D\u0924"), /* @__PURE__ */ import_react12.default.createElement("button", { className: "nav-link-btn", onClick: () => scrollTo("family-section") }, "\u092A\u0930\u093F\u0935\u093E\u0930 \u090F\u0935\u0902 \u0906\u0936\u0940\u0930\u094D\u0935\u093E\u0926")), /* @__PURE__ */ import_react12.default.createElement("div", { className: "nav-actions-group" }, /* @__PURE__ */ import_react12.default.createElement(
      "button",
      {
        className: "nav-btn-view-card",
        onClick: () => setIsViewerOpen(true),
        title: "\u0921\u093F\u091C\u093F\u091F\u0932 \u0935\u093F\u0935\u093E\u0939 \u0906\u092E\u0902\u0924\u094D\u0930\u0923 \u092A\u0924\u094D\u0930\u093F\u0915\u093E \u0916\u094B\u0932\u0947\u0902"
      },
      /* @__PURE__ */ import_react12.default.createElement("span", { className: "btn-icon" }, "\u{1F4DC}"),
      /* @__PURE__ */ import_react12.default.createElement("span", { className: "btn-text" }, "\u092A\u0924\u094D\u0930\u093F\u0915\u093E \u0926\u0947\u0916\u0947\u0902")
    ), /* @__PURE__ */ import_react12.default.createElement(
      "a",
      {
        href: "dual-jain-wedding-invitation.pdf",
        download: "dual-jain-wedding-invitation.pdf",
        className: "nav-btn-download-pdf",
        title: "\u0906\u0927\u093F\u0915\u093E\u0930\u093F\u0915 \u090F\u0915-\u092A\u0943\u0937\u094D\u0920\u0940\u092F \u092A\u0940\u0921\u0940\u090F\u092B \u0906\u092E\u0902\u0924\u094D\u0930\u0923 \u0921\u093E\u0909\u0928\u0932\u094B\u0921 \u0915\u0930\u0947\u0902"
      },
      /* @__PURE__ */ import_react12.default.createElement("span", { className: "btn-icon" }, "\u{1F4E5}"),
      /* @__PURE__ */ import_react12.default.createElement("span", { className: "btn-text" }, "\u092A\u0940\u0921\u0940\u090F\u092B")
    )))), /* @__PURE__ */ import_react12.default.createElement("main", { className: "invitation-content-column" }, /* @__PURE__ */ import_react12.default.createElement(WeddingHero, { onEnterInvitation: handleEnterInvitation }), /* @__PURE__ */ import_react12.default.createElement(CouplesSection, null), /* @__PURE__ */ import_react12.default.createElement(WeddingTimeline, null), /* @__PURE__ */ import_react12.default.createElement(VenueSection, null), /* @__PURE__ */ import_react12.default.createElement(CountdownSection, null), /* @__PURE__ */ import_react12.default.createElement(FamilyBlessingsSection, null), /* @__PURE__ */ import_react12.default.createElement(
      FinalBlessingsFooter,
      {
        onOpenCardViewer: () => setIsViewerOpen(true)
      }
    )), /* @__PURE__ */ import_react12.default.createElement(
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
      root.render(import_react13.default.createElement(App));
    } else if (rd && rd.render) {
      rd.render(import_react13.default.createElement(App), rootElement);
    }
  }
})();
