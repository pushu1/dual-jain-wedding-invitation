
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
  var import_react12 = __toESM(__require("react"));
  var import_client = __toESM(__require("react-dom/client"));

  // src/App.jsx
  var import_react11 = __toESM(__require("react"));

  // src/components/WeddingHero.jsx
  var import_react = __toESM(__require("react"));
  function WeddingHero({ onEnterInvitation }) {
    const [isMusicPlaying, setIsMusicPlaying] = (0, import_react.useState)(false);
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
    return /* @__PURE__ */ import_react.default.createElement("section", { className: "wedding-hero-section", id: "hero-section" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-temple-arch-frame", "aria-hidden": "true" }, /* @__PURE__ */ import_react.default.createElement("svg", { viewBox: "0 0 500 120", className: "temple-arch-svg", preserveAspectRatio: "none" }, /* @__PURE__ */ import_react.default.createElement(
      "path",
      {
        d: "M 0,0 L 500,0 L 500,25 Q 380,25 320,60 Q 250,95 180,60 Q 120,25 0,25 Z",
        fill: "rgba(139, 48, 56, 0.08)"
      }
    ), /* @__PURE__ */ import_react.default.createElement(
      "path",
      {
        d: "M 0,0 L 500,0 L 500,18 Q 380,18 320,48 Q 250,80 180,48 Q 120,18 0,18 Z",
        fill: "none",
        stroke: "#C9A45C",
        strokeWidth: "1.5"
      }
    ))), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-content-wrapper" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-divine-crown-frame" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "divine-artwork-jharokha" }, /* @__PURE__ */ import_react.default.createElement(
      "img",
      {
        src: "assets/shiva_parvati_top_artwork.png",
        alt: "\u092D\u0917\u0935\u093E\u0928 \u0936\u093F\u0935 \u090F\u0935\u0902 \u092E\u093E\u0924\u093E \u092A\u093E\u0930\u094D\u0935\u0924\u0940",
        className: "shiva-parvati-art-img",
        width: "440",
        height: "260"
      }
    ), /* @__PURE__ */ import_react.default.createElement("div", { className: "jharokha-gold-border" }))), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-invocation-group" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-ganesha-emblem" }, /* @__PURE__ */ import_react.default.createElement(
      "img",
      {
        src: "assets/champagne_ganesha_bright.png",
        alt: "\u092D\u0917\u0935\u093E\u0928 \u0936\u094D\u0930\u0940 \u0917\u0923\u0947\u0936",
        className: "hero-ganesha-img",
        width: "48",
        height: "48"
      }
    )), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-shloka-text" }, "\u0965 \u0936\u094D\u0930\u0940 \u0917\u0923\u0947\u0936\u093E\u092F \u0928\u092E\u0903 \u0965")), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-main-title-block" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-royal-flourish-line" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "flourish-leaf" }, "\u{1F33F}"), /* @__PURE__ */ import_react.default.createElement("span", { className: "flourish-dash" }), /* @__PURE__ */ import_react.default.createElement("span", { className: "flourish-star" }, "\u2726"), /* @__PURE__ */ import_react.default.createElement("span", { className: "flourish-dash" }), /* @__PURE__ */ import_react.default.createElement("span", { className: "flourish-leaf" }, "\u{1F33F}")), /* @__PURE__ */ import_react.default.createElement("h1", { className: "hero-grand-title" }, "\u0965 \u0935\u093F\u0935\u093E\u0939 \u0906\u092E\u0902\u0924\u094D\u0930\u0923 \u0965"), /* @__PURE__ */ import_react.default.createElement("p", { className: "hero-divine-subtitle" }, "\u092D\u0917\u0935\u093E\u0928 \u0936\u093F\u0935, \u092E\u093E\u0924\u093E \u092A\u093E\u0930\u094D\u0935\u0924\u0940 \u090F\u0935\u0902 \u0939\u092E\u093E\u0930\u0947 \u092A\u0942\u091C\u094D\u092F \u092A\u0942\u0930\u094D\u0935\u091C\u094B\u0902 \u0915\u0947 \u0926\u093F\u0935\u094D\u092F \u0906\u0936\u0940\u0930\u094D\u0935\u093E\u0926 \u0938\u0947")), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-couples-showcase-card" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-couple-unit" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "couple-sacred-label" }, "\u2014 \u092A\u094D\u0930\u0925\u092E \u092A\u093E\u0935\u0928 \u092A\u0930\u093F\u0923\u092F \u2014"), /* @__PURE__ */ import_react.default.createElement("h2", { className: "couple-names-headline" }, "\u0906\u092F\u0941\u0937\u094D\u092E\u093E\u0928 \u0906\u0915\u093E\u0936"), /* @__PURE__ */ import_react.default.createElement("div", { className: "couple-parents-line" }, "\u0938\u0941\u092A\u0941\u0924\u094D\u0930 \u0936\u094D\u0930\u0940\u092E\u0924\u0940 \u0905\u0928\u0941\u0930\u093E\u0927\u093E \u090F\u0935\u0902 \u0936\u094D\u0930\u0940 \u0915\u0948\u0932\u093E\u0936 \u0917\u0947\u0939\u0932\u094B\u0924"), /* @__PURE__ */ import_react.default.createElement("div", { className: "couple-subh-vivah-badge" }, "\u2726 \u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939 \u2726"), /* @__PURE__ */ import_react.default.createElement("h2", { className: "couple-names-headline" }, "\u0906\u092F\u0941\u0937\u094D\u092E\u0924\u0940 \u0930\u0940\u0928\u093E"), /* @__PURE__ */ import_react.default.createElement("div", { className: "couple-parents-line" }, "\u0938\u0941\u092A\u0941\u0924\u094D\u0930\u0940 \u0936\u094D\u0930\u0940\u092E\u0924\u0940 \u091C\u0938\u094B\u0927\u093E \u0926\u0947\u0935\u0940 \u090F\u0935\u0902 \u0936\u094D\u0930\u0940 \u0917\u094B\u092A\u093E\u0932\u091C\u0940 \u091A\u094C\u0939\u093E\u0928"), /* @__PURE__ */ import_react.default.createElement("div", { className: "couple-date-tag" }, "\u0935\u093F\u0935\u093E\u0939 \u0926\u093F\u0928\u093E\u0902\u0915: \u0917\u0941\u0930\u0941\u0935\u093E\u0930, 10 \u0926\u093F\u0938\u0902\u092C\u0930 2026")), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-central-divider-unit", "aria-hidden": "true" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "divider-gold-line" }), /* @__PURE__ */ import_react.default.createElement("div", { className: "divider-sacred-emblem" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "emblem-symbol" }, "\u{1F451}"), /* @__PURE__ */ import_react.default.createElement("span", { className: "emblem-flourish" }, "\u2756")), /* @__PURE__ */ import_react.default.createElement("div", { className: "divider-gold-line" })), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-couple-unit" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "couple-sacred-label" }, "\u2014 \u0926\u094D\u0935\u093F\u0924\u0940\u092F \u092A\u093E\u0935\u0928 \u092A\u0930\u093F\u0923\u092F \u2014"), /* @__PURE__ */ import_react.default.createElement("h2", { className: "couple-names-headline" }, "\u0906\u092F\u0941\u0937\u094D\u092E\u0924\u0940 \u0936\u093F\u0935\u093E\u0928\u0940 (\u091C\u0940\u0928\u0942)"), /* @__PURE__ */ import_react.default.createElement("div", { className: "couple-parents-line" }, "\u0938\u0941\u092A\u0941\u0924\u094D\u0930\u0940 \u0936\u094D\u0930\u0940\u092E\u0924\u0940 \u0905\u0928\u0941\u0930\u093E\u0927\u093E \u090F\u0935\u0902 \u0936\u094D\u0930\u0940 \u0915\u0948\u0932\u093E\u0936 \u0917\u0947\u0939\u0932\u094B\u0924"), /* @__PURE__ */ import_react.default.createElement("div", { className: "couple-subh-vivah-badge" }, "\u2726 \u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939 \u2726"), /* @__PURE__ */ import_react.default.createElement("h2", { className: "couple-names-headline" }, "\u0906\u092F\u0941\u0937\u094D\u092E\u093E\u0928 \u0927\u0940\u0930\u091C \u091C\u0940"), /* @__PURE__ */ import_react.default.createElement("div", { className: "couple-parents-line" }, "\u0938\u0941\u092A\u0941\u0924\u094D\u0930 \u0936\u094D\u0930\u0940\u092E\u0924\u0940 \u0930\u0947\u0928\u0942 \u091C\u0940 \u090F\u0935\u0902 \u0936\u094D\u0930\u0940 \u092E\u0941\u0915\u0947\u0936\u091C\u0940 \u092A\u0930\u093F\u0939\u093E\u0930"), /* @__PURE__ */ import_react.default.createElement("div", { className: "couple-date-tag" }, "\u0935\u093F\u0935\u093E\u0939 \u0926\u093F\u0928\u093E\u0902\u0915: \u0936\u0928\u093F\u0935\u093E\u0930, 12 \u0926\u093F\u0938\u0902\u092C\u0930 2026"))), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-venue-announcement-banner" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "venue-title-label" }, "\u0935\u093F\u0935\u093E\u0939 \u0938\u094D\u0925\u0932:"), /* @__PURE__ */ import_react.default.createElement("div", { className: "banner-venue-location" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "pin-icon" }, "\u{1F4CD}"), /* @__PURE__ */ import_react.default.createElement("span", { className: "venue-name-bold" }, "\u0915\u0941\u092E\u093E\u0935\u0924 \u0935\u093E\u091F\u093F\u0915\u093E")), /* @__PURE__ */ import_react.default.createElement("div", { className: "banner-venue-address" }, "\u092A\u0941\u0928\u093E\u092F\u0924\u093E \u0930\u094B\u0921, \u092A\u093E\u0932\u0940, \u0930\u093E\u091C\u0938\u094D\u0925\u093E\u0928"), /* @__PURE__ */ import_react.default.createElement("div", { className: "banner-date-highlight" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "cal-icon" }, "\u{1F5D3}\uFE0F"), /* @__PURE__ */ import_react.default.createElement("span", { className: "date-str" }, "\u092D\u0935\u094D\u092F \u0935\u093F\u0935\u093E\u0939 \u0938\u092E\u093E\u0930\u094B\u0939: \u0936\u0928\u093F\u0935\u093E\u0930, 12 \u0926\u093F\u0938\u0902\u092C\u0930 2026"))), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-music-prompt-banner" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-music-prompt-text" }, /* @__PURE__ */ import_react.default.createElement("span", null, "\u{1F3BA}"), /* @__PURE__ */ import_react.default.createElement("span", null, "\u092E\u0927\u0941\u0930 \u0936\u0939\u0928\u093E\u0908 \u0915\u0940 \u0927\u0941\u0928 \u0938\u0941\u0928\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u092F\u0939\u093E\u0901 \u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u0947\u0902")), /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        type: "button",
        className: "btn-start-music-prompt",
        onClick: handleStartMusic,
        title: "\u0935\u093F\u0935\u093E\u0939 \u0938\u0902\u0917\u0940\u0924 \u091A\u093E\u0932\u0942 \u0915\u0930\u0947\u0902 (30 \u0938\u0947\u0915\u0902\u0921 \u0938\u0947)",
        "aria-label": "\u0938\u0902\u0917\u0940\u0924 \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902"
      },
      /* @__PURE__ */ import_react.default.createElement("span", null, isMusicPlaying ? "\u{1F3B5} \u0938\u0902\u0917\u0940\u0924 \u092C\u091C \u0930\u0939\u093E \u0939\u0948" : "\u25B6 \u0938\u0902\u0917\u0940\u0924 \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902")
    )), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-animated-button-stage" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "sparkle-stars-cluster", "aria-hidden": "true" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "sparkle-star star-1" }, "\u2726"), /* @__PURE__ */ import_react.default.createElement("span", { className: "sparkle-star star-2" }, "\u2728"), /* @__PURE__ */ import_react.default.createElement("span", { className: "sparkle-star star-3" }, "\u2726"), /* @__PURE__ */ import_react.default.createElement("span", { className: "sparkle-star star-4" }, "\u2728"), /* @__PURE__ */ import_react.default.createElement("span", { className: "sparkle-star star-5" }, "\u2726"), /* @__PURE__ */ import_react.default.createElement("span", { className: "sparkle-star star-6" }, "\u2728")), /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        onClick: handleButtonClick,
        className: "btn-animated-invitation",
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
    return /* @__PURE__ */ import_react2.default.createElement("section", { className: "wedding-section couples-family-section", id: "couples-section" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "section-royal-card" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-border-gold-outer", "aria-hidden": "true" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-border-gold-inner", "aria-hidden": "true" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "section-header-flourish" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "shloka-header-group" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "shloka-ornament" }, "\u2756"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "shloka-text" }, "\u0965 \u092E\u0902\u0917\u0932 \u092A\u0930\u093F\u0923\u092F\u094B\u0924\u094D\u0938\u0935 \u0965"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "shloka-ornament" }, "\u2756")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "family-origin-pill" }, "\u092A\u093E\u0932\u0940 \u0915\u093E \u092A\u094D\u0930\u0924\u093F\u0937\u094D\u0920\u093F\u0924 \u0917\u0947\u0939\u0932\u094B\u0924 \u092A\u0930\u093F\u0935\u093E\u0930"), /* @__PURE__ */ import_react2.default.createElement("h2", { className: "section-title-gold" }, "\u0935\u0930-\u0935\u0927\u0942 \u092A\u0930\u093F\u091A\u092F"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "section-subtitle-script" }, "\u092D\u0917\u0935\u093E\u0928 \u0936\u093F\u0935, \u092E\u093E\u0924\u093E \u092A\u093E\u0930\u094D\u0935\u0924\u0940, \u092D\u0917\u0935\u093E\u0928 \u0936\u094D\u0930\u0940 \u0917\u0923\u0947\u0936 \u090F\u0935\u0902 \u092A\u0942\u091C\u094D\u092F \u092A\u0942\u0930\u094D\u0935\u091C\u094B\u0902 \u0915\u0947 \u092A\u093E\u0935\u0928 \u0906\u0936\u0940\u0930\u094D\u0935\u093E\u0926 \u0938\u0947"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "section-title-divider" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "divider-line" }), /* @__PURE__ */ import_react2.default.createElement("span", { className: "divider-star" }, "\u2726 \u{1F451} \u2726"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "divider-line" }))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "ancestral-heritage-banner" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "heritage-badge-tag" }, "\u092A\u0942\u091C\u094D\u092F \u092A\u0942\u0930\u094D\u0935\u091C\u094B\u0902 \u0915\u093E \u092A\u093E\u0935\u0928 \u0906\u0936\u0940\u0930\u094D\u0935\u093E\u0926 \u090F\u0935\u0902 \u0915\u0941\u0932 \u092A\u0930\u092E\u094D\u092A\u0930\u093E"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "heritage-lineage-text" }, "\u0938\u094D\u0935\u0930\u094D\u0917\u0940\u092F \u0936\u094D\u0930\u0940\u092E\u0924\u0940 \u0932\u0939\u0930\u0940 \u092C\u093E\u0908 \u090F\u0935\u0902 \u0938\u094D\u0935\u0930\u094D\u0917\u0940\u092F \u0936\u094D\u0930\u0940 \u0917\u094D\u092F\u093E\u0930\u0938\u0940\u0932\u093E\u0932 \u091C\u0940 \u0915\u0947 \u092A\u094D\u0930\u092A\u094C\u0924\u094D\u0930 / \u092A\u094D\u0930\u092A\u094C\u0924\u094D\u0930\u0940", /* @__PURE__ */ import_react2.default.createElement("br", null), "\u0936\u094D\u0930\u0940\u092E\u0924\u0940 \u0926\u0941\u0930\u094D\u0917\u093E \u092C\u093E\u0908 \u090F\u0935\u0902 \u0938\u094D\u0935\u0930\u094D\u0917\u0940\u092F \u0936\u094D\u0930\u0940 \u092E\u0926\u0928\u0932\u093E\u0932 \u091C\u0940 \u0917\u0947\u0939\u0932\u094B\u0924 \u0915\u0947 \u0932\u093E\u0921\u0932\u0947 \u092A\u094C\u0924\u094D\u0930 / \u092A\u094C\u0924\u094D\u0930\u0940")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "couples-editorial-grid" }, /* @__PURE__ */ import_react2.default.createElement("article", { className: "couple-editorial-card" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-ornament-corner tl" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-ornament-corner tr" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-ornament-corner bl" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-ornament-corner br" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-sacred-pill" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "pill-star" }, "\u2726"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "pill-label" }, "\u092A\u094D\u0930\u0925\u092E \u092A\u093E\u0935\u0928 \u092A\u0930\u093F\u0923\u092F"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "pill-star" }, "\u2726")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-individual-block" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "profile-ornament-icon" }, "\u{1F935}"), /* @__PURE__ */ import_react2.default.createElement("h3", { className: "individual-name" }, "\u0906\u092F\u0941\u0937\u094D\u092E\u093E\u0928 \u0906\u0915\u093E\u0936"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "individual-parents" }, "\u0938\u0941\u092A\u0941\u0924\u094D\u0930: ", /* @__PURE__ */ import_react2.default.createElement("strong", null, "\u0936\u094D\u0930\u0940\u092E\u0924\u0940 \u0905\u0928\u0941\u0930\u093E\u0927\u093E \u090F\u0935\u0902 \u0936\u094D\u0930\u0940 \u0915\u0948\u0932\u093E\u0936 \u0917\u0947\u0939\u0932\u094B\u0924"))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "weds-flourish-separator" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "weds-line" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "weds-badge" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "weds-sub" }, "\u2726"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "weds-text" }, "\u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "weds-sub" }, "\u2726")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "weds-line" })), /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-individual-block" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "profile-ornament-icon" }, "\u{1F470}"), /* @__PURE__ */ import_react2.default.createElement("h3", { className: "individual-name" }, "\u0906\u092F\u0941\u0937\u094D\u092E\u0924\u0940 \u0930\u0940\u0928\u093E"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "individual-parents" }, "\u0938\u0941\u092A\u0941\u0924\u094D\u0930\u0940: ", /* @__PURE__ */ import_react2.default.createElement("strong", null, "\u0936\u094D\u0930\u0940\u092E\u0924\u0940 \u091C\u0938\u094B\u0927\u093E \u0926\u0947\u0935\u0940 \u090F\u0935\u0902 \u0936\u094D\u0930\u0940 \u0917\u094B\u092A\u093E\u0932\u091C\u0940 \u091A\u094C\u0939\u093E\u0928")), /* @__PURE__ */ import_react2.default.createElement("span", { className: "family-native-place" }, "\u0928\u093F\u0935\u093E\u0938: \u0938\u092E\u0926\u0921\u093C\u0940")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-ceremony-date-badge" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "ceremony-date-icon" }, "\u{1F5D3}\uFE0F"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "ceremony-date-details" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "ceremony-label" }, "\u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939 \u0924\u093F\u0925\u093F"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "ceremony-exact-date" }, "\u0917\u0941\u0930\u0941\u0935\u093E\u0930, 10 \u0926\u093F\u0938\u0902\u092C\u0930 2026"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "ceremony-muhurat" }, "\u092E\u093E\u0930\u094D\u0917\u0936\u0940\u0930\u094D\u0937 \u0936\u0941\u0915\u094D\u0932 \u092A\u0915\u094D\u0937")))), /* @__PURE__ */ import_react2.default.createElement("article", { className: "couple-editorial-card" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-ornament-corner tl" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-ornament-corner tr" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-ornament-corner bl" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-ornament-corner br" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-sacred-pill" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "pill-star" }, "\u2726"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "pill-label" }, "\u0926\u094D\u0935\u093F\u0924\u0940\u092F \u092A\u093E\u0935\u0928 \u092A\u0930\u093F\u0923\u092F"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "pill-star" }, "\u2726")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-individual-block" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "profile-ornament-icon" }, "\u{1F470}"), /* @__PURE__ */ import_react2.default.createElement("h3", { className: "individual-name" }, "\u0906\u092F\u0941\u0937\u094D\u092E\u0924\u0940 \u0936\u093F\u0935\u093E\u0928\u0940 (\u091C\u0940\u0928\u0942)"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "individual-parents" }, "\u0938\u0941\u092A\u0941\u0924\u094D\u0930\u0940: ", /* @__PURE__ */ import_react2.default.createElement("strong", null, "\u0936\u094D\u0930\u0940\u092E\u0924\u0940 \u0905\u0928\u0941\u0930\u093E\u0927\u093E \u090F\u0935\u0902 \u0936\u094D\u0930\u0940 \u0915\u0948\u0932\u093E\u0936 \u0917\u0947\u0939\u0932\u094B\u0924"))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "weds-flourish-separator" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "weds-line" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "weds-badge" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "weds-sub" }, "\u2726"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "weds-text" }, "\u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "weds-sub" }, "\u2726")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "weds-line" })), /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-individual-block" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "profile-ornament-icon" }, "\u{1F935}"), /* @__PURE__ */ import_react2.default.createElement("h3", { className: "individual-name" }, "\u0906\u092F\u0941\u0937\u094D\u092E\u093E\u0928 \u0927\u0940\u0930\u091C \u091C\u0940"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "individual-parents" }, "\u0938\u0941\u092A\u0941\u0924\u094D\u0930: ", /* @__PURE__ */ import_react2.default.createElement("strong", null, "\u0936\u094D\u0930\u0940\u092E\u0924\u0940 \u0930\u0947\u0928\u0942 \u091C\u0940 \u090F\u0935\u0902 \u0936\u094D\u0930\u0940 \u092E\u0941\u0915\u0947\u0936\u091C\u0940 \u092A\u0930\u093F\u0939\u093E\u0930")), /* @__PURE__ */ import_react2.default.createElement("span", { className: "family-native-place" }, "\u0928\u093F\u0935\u093E\u0938: \u092C\u093E\u0932\u094B\u0924\u0930\u093E")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-ceremony-date-badge" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "ceremony-date-icon" }, "\u{1F5D3}\uFE0F"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "ceremony-date-details" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "ceremony-label" }, "\u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939 \u0924\u093F\u0925\u093F"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "ceremony-exact-date" }, "\u0936\u0928\u093F\u0935\u093E\u0930, 12 \u0926\u093F\u0938\u0902\u092C\u0930 2026"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "ceremony-muhurat" }, "\u092E\u093E\u0930\u094D\u0917\u0936\u0940\u0930\u094D\u0937 \u0936\u0941\u0915\u094D\u0932 \u092A\u0915\u094D\u0937 \u0924\u0943\u0924\u0940\u092F\u093E")))))));
  }

  // src/components/WeddingTimeline.jsx
  var import_react3 = __toESM(__require("react"));
  function WeddingTimeline() {
    const [activeDay, setActiveDay] = (0, import_react3.useState)("all");
    const eventsList = [
      {
        id: "e1",
        dayId: "day1",
        dayLabel: "\u0926\u093F\u0935\u0938 1 \u2014 \u0938\u094B\u092E\u0935\u093E\u0930",
        dateStr: "07 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        timeStr: "\u0926\u094B\u092A\u0939\u0930 3:15 \u092C\u091C\u0947",
        title: "\u0918\u0943\u0924\u092A\u093E\u0928 \u0938\u0902\u0938\u094D\u0915\u093E\u0930",
        icon: "\u{1FA94}",
        desc: "\u092E\u093E\u0902\u0917\u0932\u093F\u0915 \u0915\u093E\u0930\u094D\u092F\u0915\u094D\u0930\u092E\u094B\u0902 \u0915\u0947 \u0936\u0941\u092D\u093E\u0930\u0902\u092D \u092A\u0930 \u0936\u0941\u0926\u094D\u0927 \u0918\u0940 \u0915\u0940 \u092A\u093E\u0935\u0928 \u0906\u0939\u0941\u0924\u093F \u090F\u0935\u0902 \u092A\u094D\u0930\u092D\u0941 \u0915\u0943\u092A\u093E \u0935 \u092A\u0935\u093F\u0924\u094D\u0930\u0924\u093E \u0915\u0940 \u092A\u094D\u0930\u093E\u0930\u094D\u0925\u0928\u093E\u0964",
        calDate: "20261207T151500/20261207T170000",
        badge: "\u092E\u093E\u0902\u0917\u0932\u093F\u0915 \u0936\u0941\u092D\u093E\u0930\u0902\u092D"
      },
      {
        id: "e2",
        dayId: "day1",
        dayLabel: "\u0926\u093F\u0935\u0938 1 \u2014 \u0938\u094B\u092E\u0935\u093E\u0930",
        dateStr: "07 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        timeStr: "\u0938\u093E\u092F\u0902 5:15 \u092C\u091C\u0947",
        title: "\u0935\u093F\u0928\u093E\u092F\u0915 \u0938\u094D\u0925\u093E\u092A\u0928\u093E \u092A\u0942\u091C\u093E",
        icon: "\u{1F549}\uFE0F",
        desc: "\u0935\u093F\u0918\u094D\u0928\u0939\u0930\u094D\u0924\u093E \u092D\u0917\u0935\u093E\u0928 \u0936\u094D\u0930\u0940 \u0917\u0923\u0947\u0936 \u091C\u0940 \u0915\u0940 \u0935\u0948\u0926\u093F\u0915 \u0935\u093F\u0927\u093F-\u0935\u093F\u0927\u093E\u0928 \u0938\u0947 \u0938\u094D\u0925\u093E\u092A\u0928\u093E \u090F\u0935\u0902 \u0928\u093F\u0930\u094D\u0935\u093F\u0918\u094D\u0928 \u0915\u093E\u0930\u094D\u092F \u0938\u093F\u0926\u094D\u0927\u093F \u0915\u0940 \u092A\u094D\u0930\u093E\u0930\u094D\u0925\u0928\u093E\u0964",
        calDate: "20261207T171500/20261207T193000",
        badge: "\u0935\u0948\u0926\u093F\u0915 \u092A\u0942\u091C\u0928"
      },
      {
        id: "e3",
        dayId: "day2",
        dayLabel: "\u0926\u093F\u0935\u0938 2 \u2014 \u092E\u0902\u0917\u0932\u0935\u093E\u0930",
        dateStr: "08 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        timeStr: "\u0926\u094B\u092A\u0939\u0930 1:15 \u092C\u091C\u0947",
        title: "\u0939\u0932\u094D\u0926\u0940 \u090F\u0935\u0902 \u092E\u0947\u0939\u0902\u0926\u0940 \u0930\u0938\u094D\u092E",
        icon: "\u{1F33F}",
        desc: "\u092A\u093E\u0930\u0902\u092A\u0930\u093F\u0915 \u092E\u093E\u0902\u0917\u0932\u093F\u0915 \u0917\u0940\u0924\u094B\u0902 \u0915\u0947 \u0938\u093E\u0925 \u0935\u0930-\u0935\u0927\u0942 \u0915\u094B \u0939\u0932\u094D\u0926\u0940 \u0932\u0947\u092A\u0928 \u090F\u0935\u0902 \u0938\u0916\u093F\u092F\u094B\u0902 \u0926\u094D\u0935\u093E\u0930\u093E \u0939\u093E\u0925\u094B\u0902 \u092E\u0947\u0902 \u0938\u091C\u0940 \u0938\u0941\u0902\u0926\u0930 \u092E\u0947\u0939\u0902\u0926\u0940\u0964",
        calDate: "20261208T131500/20261208T170000",
        badge: "\u0930\u0902\u0917 \u090F\u0935\u0902 \u0938\u0941\u0917\u0902\u0927"
      },
      {
        id: "e4",
        dayId: "day3",
        dayLabel: "\u0926\u093F\u0935\u0938 3 \u2014 \u092C\u0941\u0927\u0935\u093E\u0930",
        dateStr: "09 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        timeStr: "\u0926\u094B\u092A\u0939\u0930 12:15 \u092C\u091C\u0947",
        title: "\u092E\u093E\u092F\u0930\u093E (\u092D\u093E\u0924) \u0938\u0902\u0938\u094D\u0915\u093E\u0930",
        icon: "\u{1F381}",
        desc: "\u0928\u0928\u093F\u0939\u093E\u0932 \u092A\u0915\u094D\u0937 \u0926\u094D\u0935\u093E\u0930\u093E \u0938\u094D\u0928\u0947\u0939\u093F\u0932 \u092E\u093E\u092F\u0930\u093E, \u092E\u0902\u0917\u0932 \u091A\u0941\u0928\u0930\u0940 \u090F\u0935\u0902 \u092A\u0930\u093F\u091C\u0928\u094B\u0902 \u0915\u094B \u092A\u094D\u0930\u0947\u092E \u0935 \u0906\u0936\u0940\u0930\u094D\u0935\u093E\u0926 \u0915\u0940 \u092D\u0947\u0902\u091F\u0964",
        calDate: "20261209T121500/20261209T150000",
        badge: "\u0928\u0928\u093F\u0939\u093E\u0932 \u092A\u0930\u092E\u094D\u092A\u0930\u093E"
      },
      {
        id: "e5",
        dayId: "day3",
        dayLabel: "\u0926\u093F\u0935\u0938 3 \u2014 \u092C\u0941\u0927\u0935\u093E\u0930",
        dateStr: "09 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        timeStr: "\u0930\u093E\u0924\u094D\u0930\u093F 8:15 \u092C\u091C\u0947",
        title: "\u092C\u0928\u094D\u0928\u094B\u0932\u0940 (\u0936\u094B\u092D\u093E \u092F\u093E\u0924\u094D\u0930\u093E)",
        icon: "\u{1F941}",
        desc: "\u0922\u094B\u0932-\u0928\u0917\u093E\u0921\u093C\u094B\u0902 \u0915\u0940 \u0925\u093E\u092A \u092A\u0930 \u092A\u0930\u093F\u091C\u0928\u094B\u0902 \u090F\u0935\u0902 \u092E\u093F\u0924\u094D\u0930\u094B\u0902 \u0915\u0947 \u0938\u0902\u0917 \u092A\u093E\u0930\u0902\u092A\u0930\u093F\u0915 \u0936\u094B\u092D\u093E\u092F\u093E\u0924\u094D\u0930\u093E \u0935 \u0909\u0932\u094D\u0932\u093E\u0938\u092E\u092F \u0928\u0943\u0924\u094D\u092F\u0964",
        calDate: "20261209T201500/20261209T223000",
        badge: "\u092A\u093E\u0930\u0902\u092A\u0930\u093F\u0915 \u0936\u094B\u092D\u093E\u092F\u093E\u0924\u094D\u0930\u093E"
      },
      {
        id: "e6",
        dayId: "day4",
        dayLabel: "\u0926\u093F\u0935\u0938 4 \u2014 \u0917\u0941\u0930\u0941\u0935\u093E\u0930",
        dateStr: "10 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        timeStr: "\u0926\u094B\u092A\u0939\u0930 12:15 \u092C\u091C\u0947",
        title: "\u092C\u093E\u0930\u093E\u0924 \u092A\u094D\u0930\u0938\u094D\u0925\u093E\u0928 (\u0938\u092E\u0926\u0921\u093C\u0940 \u0939\u0947\u0924\u0941)",
        icon: "\u{1F68C}",
        desc: "\u0935\u0930 \u0906\u092F\u0941\u0937\u094D\u092E\u093E\u0928 \u0906\u0915\u093E\u0936 \u0915\u0940 \u092C\u093E\u0930\u093E\u0924 \u0915\u093E \u092C\u0938 \u0926\u094D\u0935\u093E\u0930\u093E \u0938\u092E\u0926\u0921\u093C\u0940 \u092E\u0947\u0902 \u0936\u094D\u0930\u0940\u092E\u093E\u0928 \u092C\u094D\u092F\u093E\u0908\u091C\u0940 \u0927\u0928\u0930\u093E\u091C \u091C\u0940 \u091A\u094C\u0939\u093E\u0928 \u0915\u0947 \u092A\u0930\u093F\u0935\u093E\u0930 \u0915\u0947 \u0928\u093F\u0935\u093E\u0938 \u0939\u0947\u0924\u0941 \u092A\u094D\u0930\u0938\u094D\u0925\u093E\u0928\u0964",
        calDate: "20261210T121500/20261210T150000",
        badge: "\u092C\u093E\u0930\u093E\u0924 \u092A\u094D\u0930\u0938\u094D\u0925\u093E\u0928"
      },
      {
        id: "e7",
        dayId: "day4",
        dayLabel: "\u0926\u093F\u0935\u0938 4 \u2014 \u0917\u0941\u0930\u0941\u0935\u093E\u0930",
        dateStr: "10 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        timeStr: "\u0938\u093E\u092F\u0902 7:15 \u092C\u091C\u0947",
        title: "\u092E\u0939\u093F\u0932\u093E \u0938\u0902\u0917\u0940\u0924 \u090F\u0935\u0902 \u0938\u093E\u0902\u0938\u094D\u0915\u0943\u0924\u093F\u0915 \u0938\u0902\u0927\u094D\u092F\u093E",
        icon: "\u{1FA95}",
        desc: "\u0930\u093E\u091C\u0938\u094D\u0925\u093E\u0928\u0940 \u0932\u094B\u0915\u0917\u0940\u0924\u094B\u0902, \u092A\u093E\u0930\u0902\u092A\u0930\u093F\u0915 \u0918\u0942\u092E\u0930 \u090F\u0935\u0902 \u092A\u0930\u093F\u0935\u093E\u0930\u091C\u0928\u094B\u0902 \u0915\u0940 \u092E\u0928\u092E\u094B\u0939\u0915 \u092A\u094D\u0930\u0938\u094D\u0924\u0941\u0924\u093F\u092F\u094B\u0902 \u0938\u0947 \u0938\u091C\u0940 \u0930\u0902\u0917\u093E\u0930\u0902\u0917 \u0938\u0902\u0927\u094D\u092F\u093E\u0964",
        calDate: "20261210T191500/20261210T230000",
        badge: "\u0938\u0902\u0917\u0940\u0924 \u090F\u0935\u0902 \u0928\u0943\u0924\u094D\u092F"
      },
      {
        id: "e8",
        dayId: "day5",
        dayLabel: "\u0926\u093F\u0935\u0938 5 \u2014 \u0936\u0928\u093F\u0935\u093E\u0930 (\u092E\u0941\u0916\u094D\u092F \u0935\u093F\u0935\u093E\u0939)",
        dateStr: "12 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        timeStr: "\u0938\u093E\u092F\u0902 5:15 \u092C\u091C\u0947",
        title: "\u092C\u093E\u0930\u093E\u0924 \u0938\u094D\u0935\u093E\u0917\u0924 (\u092C\u093E\u0932\u094B\u0924\u0930\u093E \u0938\u0947 \u0906\u0917\u092E\u0928)",
        icon: "\u{1F3BA}",
        desc: "\u092C\u093E\u0932\u094B\u0924\u0930\u093E \u0938\u0947 \u092A\u0927\u093E\u0930\u0940 \u0935\u0930 \u0906\u092F\u0941\u0937\u094D\u092E\u093E\u0928 \u0927\u0940\u0930\u091C \u091C\u0940 \u0915\u0940 \u092C\u093E\u0930\u093E\u0924 \u0915\u093E \u0915\u0941\u092E\u093E\u0935\u0924 \u0935\u093E\u091F\u093F\u0915\u093E, \u092A\u093E\u0932\u0940 \u092E\u0947\u0902 \u092D\u0935\u094D\u092F \u0906\u0924\u094D\u092E\u0940\u092F \u0938\u094D\u0935\u093E\u0917\u0924\u0964",
        calDate: "20261212T171500/20261212T181500",
        badge: "\u092C\u093E\u0930\u093E\u0924 \u0938\u094D\u0935\u093E\u0917\u0924"
      },
      {
        id: "e9",
        dayId: "day5",
        dayLabel: "\u0926\u093F\u0935\u0938 5 \u2014 \u0936\u0928\u093F\u0935\u093E\u0930 (\u092E\u0941\u0916\u094D\u092F \u0935\u093F\u0935\u093E\u0939)",
        dateStr: "12 \u0926\u093F\u0938\u0902\u092C\u0930 2026",
        timeStr: "\u0938\u093E\u092F\u0902 6:15 \u092C\u091C\u0947 \u0938\u0947",
        title: "\u092A\u093E\u0923\u093F\u0917\u094D\u0930\u0939\u0923 \u0938\u0902\u0938\u094D\u0915\u093E\u0930 \u090F\u0935\u0902 \u092A\u094D\u0930\u0940\u0924\u093F\u092D\u094B\u091C",
        icon: "\u{1F451}",
        desc: "\u092A\u0935\u093F\u0924\u094D\u0930 \u0935\u0948\u0926\u093F\u0915 \u0935\u093F\u0935\u093E\u0939 \u0938\u0902\u0938\u094D\u0915\u093E\u0930, \u0938\u092A\u094D\u0924\u092A\u0926\u0940 \u092B\u0947\u0930\u0947, \u0939\u0938\u094D\u0924\u092E\u093F\u0932\u093E\u092A \u090F\u0935\u0902 \u0936\u093E\u0939\u0940 \u0930\u093E\u091C\u0938\u094D\u0925\u093E\u0928\u0940 \u092A\u094D\u0930\u0940\u0924\u093F\u092D\u094B\u091C\u0964",
        calDate: "20261212T181500/20261212T233000",
        badge: "\u092E\u0941\u0916\u094D\u092F \u0935\u093F\u0935\u093E\u0939 \u0938\u092E\u093E\u0930\u094B\u0939"
      }
    ];
    const filteredEvents = activeDay === "all" ? eventsList : eventsList.filter((ev) => ev.dayId === activeDay);
    const makeGoogleCalendarUrl = (ev) => {
      const text = encodeURIComponent(ev.title + " \u2014 \u0906\u0915\u093E\u0936 \u090F\u0935\u0902 \u0930\u0940\u0928\u093E | \u0936\u093F\u0935\u093E\u0928\u0940 \u090F\u0935\u0902 \u0927\u0940\u0930\u091C \u0935\u093F\u0935\u093E\u0939");
      const dates = ev.calDate;
      const details = encodeURIComponent(ev.desc + " \u0938\u094D\u0925\u093E\u0928: \u0915\u0941\u092E\u093E\u0935\u0924 \u0935\u093E\u091F\u093F\u0915\u093E, \u092A\u0941\u0928\u093E\u092F\u0924\u093E \u0930\u094B\u0921, \u092A\u093E\u0932\u0940 (\u0930\u093E\u091C\u0938\u094D\u0925\u093E\u0928)\u0964");
      const location = encodeURIComponent("Kumawat Vatika, Punayata Road, Pali, Rajasthan, India");
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}`;
    };
    return /* @__PURE__ */ import_react3.default.createElement("section", { className: "wedding-section timeline-section", id: "events-section" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "section-royal-card" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "card-border-gold-outer", "aria-hidden": "true" }), /* @__PURE__ */ import_react3.default.createElement("div", { className: "card-border-gold-inner", "aria-hidden": "true" }), /* @__PURE__ */ import_react3.default.createElement("div", { className: "section-header-flourish" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "shloka-header-group" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "shloka-ornament" }, "\u2756"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "shloka-text" }, "\u0965 \u092E\u093E\u0902\u0917\u0932\u093F\u0915 \u0915\u093E\u0930\u094D\u092F\u0915\u094D\u0930\u092E \u0965"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "shloka-ornament" }, "\u2756")), /* @__PURE__ */ import_react3.default.createElement("h2", { className: "section-title-gold" }, "\u092E\u093E\u0902\u0917\u0932\u093F\u0915 \u0915\u093E\u0930\u094D\u092F\u0915\u094D\u0930\u092E \u0935\u093F\u0935\u0930\u0923"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "section-subtitle-script" }, "\u0939\u0930 \u0930\u0938\u094D\u092E, \u0939\u0930 \u092E\u0902\u0917\u0932 \u0906\u0936\u0940\u0937, \u0939\u0930 \u092A\u093E\u0935\u0928 \u092A\u0932"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "section-title-divider" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "divider-line" }), /* @__PURE__ */ import_react3.default.createElement("span", { className: "divider-star" }, "\u2726 \u{1F338} \u2726"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "divider-line" }))), /* @__PURE__ */ import_react3.default.createElement("nav", { className: "timeline-filter-pills-row", "aria-label": "\u092E\u093E\u0902\u0917\u0932\u093F\u0915 \u0926\u093F\u0935\u0938 \u091A\u092F\u0928" }, /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        className: `timeline-filter-btn ${activeDay === "all" ? "active" : ""}`,
        onClick: () => setActiveDay("all")
      },
      "\u0938\u092D\u0940 \u092E\u093E\u0902\u0917\u0932\u093F\u0915 \u0915\u093E\u0930\u094D\u092F\u0915\u094D\u0930\u092E (9)"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        className: `timeline-filter-btn ${activeDay === "day1" ? "active" : ""}`,
        onClick: () => setActiveDay("day1")
      },
      "\u0938\u094B\u092E, 7 \u0926\u093F\u0938"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        className: `timeline-filter-btn ${activeDay === "day2" ? "active" : ""}`,
        onClick: () => setActiveDay("day2")
      },
      "\u092E\u0902\u0917\u0932, 8 \u0926\u093F\u0938"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        className: `timeline-filter-btn ${activeDay === "day3" ? "active" : ""}`,
        onClick: () => setActiveDay("day3")
      },
      "\u092C\u0941\u0927, 9 \u0926\u093F\u0938"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        className: `timeline-filter-btn ${activeDay === "day4" ? "active" : ""}`,
        onClick: () => setActiveDay("day4")
      },
      "\u0917\u0941\u0930\u0941, 10 \u0926\u093F\u0938"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        className: `timeline-filter-btn ${activeDay === "day5" ? "active" : ""}`,
        onClick: () => setActiveDay("day5")
      },
      "\u0936\u0928\u093F, 12 \u0926\u093F\u0938 (\u092E\u0941\u0916\u094D\u092F)"
    )), /* @__PURE__ */ import_react3.default.createElement("div", { className: "vertical-alternating-timeline" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "timeline-central-spine", "aria-hidden": "true" }), filteredEvents.map((ev, idx) => {
      const isEven = idx % 2 === 0;
      return /* @__PURE__ */ import_react3.default.createElement(
        "div",
        {
          key: ev.id,
          className: `timeline-alternating-row ${isEven ? "row-left" : "row-right"}`
        },
        /* @__PURE__ */ import_react3.default.createElement("div", { className: "timeline-center-node" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "node-icon-circle", title: ev.title }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "node-emoji" }, ev.icon))),
        /* @__PURE__ */ import_react3.default.createElement("div", { className: "timeline-event-card-wrap" }, /* @__PURE__ */ import_react3.default.createElement("article", { className: "timeline-event-card" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "event-card-header" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "event-badge-tag" }, ev.badge), /* @__PURE__ */ import_react3.default.createElement("span", { className: "event-date-chip" }, ev.dateStr)), /* @__PURE__ */ import_react3.default.createElement("div", { className: "event-time-row" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "time-clock-icon" }, "\u23F0"), /* @__PURE__ */ import_react3.default.createElement("strong", { className: "time-text" }, ev.timeStr), /* @__PURE__ */ import_react3.default.createElement("span", { className: "day-name" }, "(", ev.dayLabel.split("\u2014")[1]?.trim() || ev.dayLabel, ")")), /* @__PURE__ */ import_react3.default.createElement("h3", { className: "event-card-title" }, ev.title), /* @__PURE__ */ import_react3.default.createElement("p", { className: "event-card-desc" }, ev.desc), /* @__PURE__ */ import_react3.default.createElement("div", { className: "event-card-footer" }, /* @__PURE__ */ import_react3.default.createElement(
          "a",
          {
            href: makeGoogleCalendarUrl(ev),
            target: "_blank",
            rel: "noopener noreferrer",
            className: "btn-add-calendar",
            title: `${ev.title} \u0915\u094B \u0917\u0942\u0917\u0932 \u0915\u0948\u0932\u0947\u0902\u0921\u0930 \u092E\u0947\u0902 \u091C\u094B\u0921\u093C\u0947\u0902`
          },
          /* @__PURE__ */ import_react3.default.createElement("span", { className: "cal-icon" }, "\u{1F4C5}"),
          /* @__PURE__ */ import_react3.default.createElement("span", null, "\u0915\u0948\u0932\u0947\u0902\u0921\u0930 \u092E\u0947\u0902 \u091C\u094B\u0921\u093C\u0947\u0902")
        ))))
      );
    }))));
  }

  // src/components/VenueSection.jsx
  var import_react4 = __toESM(__require("react"));
  function VenueSection() {
    const [copied, setCopied] = (0, import_react4.useState)(false);
    const venueName = "\u0915\u0941\u092E\u093E\u0935\u0924 \u0935\u093E\u091F\u093F\u0915\u093E";
    const venueAddress = "\u092A\u0941\u0928\u093E\u092F\u0924\u093E \u0930\u094B\u0921, \u092A\u093E\u0932\u0940, \u0930\u093E\u091C\u0938\u094D\u0925\u093E\u0928 306401";
    const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Kumawat+Vatika+Punayata+Road+Pali+Rajasthan";
    const handleCopyAddress = () => {
      navigator.clipboard.writeText(`${venueName}, ${venueAddress}`).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2800);
      }).catch(() => {
      });
    };
    return /* @__PURE__ */ import_react4.default.createElement("section", { className: "wedding-section reception-venue-section", id: "venue-section" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "section-royal-card" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "card-border-gold-outer", "aria-hidden": "true" }), /* @__PURE__ */ import_react4.default.createElement("div", { className: "card-border-gold-inner", "aria-hidden": "true" }), /* @__PURE__ */ import_react4.default.createElement("div", { className: "section-header-flourish" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "shloka-header-group" }, /* @__PURE__ */ import_react4.default.createElement("span", { className: "shloka-ornament" }, "\u2756"), /* @__PURE__ */ import_react4.default.createElement("span", { className: "shloka-text" }, "\u0965 \u0935\u093F\u0935\u093E\u0939 \u0938\u094D\u0925\u0932 \u090F\u0935\u0902 \u092A\u094D\u0930\u0940\u0924\u093F\u092D\u094B\u091C \u0965"), /* @__PURE__ */ import_react4.default.createElement("span", { className: "shloka-ornament" }, "\u2756")), /* @__PURE__ */ import_react4.default.createElement("h2", { className: "section-title-gold" }, "\u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939 \u0938\u094D\u0925\u0932 \u090F\u0935\u0902 \u092D\u0935\u094D\u092F \u092A\u094D\u0930\u0940\u0924\u093F\u092D\u094B\u091C"), /* @__PURE__ */ import_react4.default.createElement("p", { className: "section-subtitle-script" }, "\u091C\u0939\u093E\u0901 \u091A\u093E\u0930 \u092A\u0930\u093F\u0935\u093E\u0930\u094B\u0902 \u0915\u093E \u092A\u093E\u0935\u0928 \u0938\u0902\u0917\u092E \u090F\u0935\u0902 \u0938\u094D\u0928\u0947\u0939\u093F\u0932 \u092E\u093F\u0932\u0928 \u0939\u094B\u0917\u093E"), /* @__PURE__ */ import_react4.default.createElement("div", { className: "section-title-divider" }, /* @__PURE__ */ import_react4.default.createElement("span", { className: "divider-line" }), /* @__PURE__ */ import_react4.default.createElement("span", { className: "divider-star" }, "\u2726 \u{1F3DB}\uFE0F \u2726"), /* @__PURE__ */ import_react4.default.createElement("span", { className: "divider-line" }))), /* @__PURE__ */ import_react4.default.createElement("article", { className: "reception-grand-card" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "reception-mandap-illustration", "aria-hidden": "true" }, /* @__PURE__ */ import_react4.default.createElement("svg", { viewBox: "0 0 500 140", className: "mandap-arch-svg", preserveAspectRatio: "xMidYMid meet" }, /* @__PURE__ */ import_react4.default.createElement("defs", null, /* @__PURE__ */ import_react4.default.createElement("linearGradient", { id: "goldArchGrad", x1: "0%", y1: "0%", x2: "100%", y2: "100%" }, /* @__PURE__ */ import_react4.default.createElement("stop", { offset: "0%", stopColor: "#C9A45C" }), /* @__PURE__ */ import_react4.default.createElement("stop", { offset: "50%", stopColor: "#B88A3B" }), /* @__PURE__ */ import_react4.default.createElement("stop", { offset: "100%", stopColor: "#8C6A28" }))), /* @__PURE__ */ import_react4.default.createElement("rect", { x: "50", y: "30", width: "400", height: "95", rx: "10", fill: "rgba(139, 48, 56, 0.05)" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M 50,45 Q 250,5 450,45", fill: "none", stroke: "url(#goldArchGrad)", strokeWidth: "2.5" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M 90,45 Q 250,20 410,45", fill: "none", stroke: "#C9A45C", strokeWidth: "1", strokeDasharray: "3 3" }), /* @__PURE__ */ import_react4.default.createElement("line", { x1: "80", y1: "45", x2: "80", y2: "125", stroke: "#C9A45C", strokeWidth: "3" }), /* @__PURE__ */ import_react4.default.createElement("line", { x1: "420", y1: "45", x2: "420", y2: "125", stroke: "#C9A45C", strokeWidth: "3" }), /* @__PURE__ */ import_react4.default.createElement("circle", { cx: "250", cy: "18", r: "6", fill: "#B88A3B" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M 245,18 L 250,8 L 255,18 Z", fill: "#8B3038" }))), /* @__PURE__ */ import_react4.default.createElement("div", { className: "reception-timing-box" }, /* @__PURE__ */ import_react4.default.createElement("span", { className: "reception-date-tag" }, "\u0936\u0928\u093F\u0935\u093E\u0930, 12 \u0926\u093F\u0938\u0902\u092C\u0930 2026"), /* @__PURE__ */ import_react4.default.createElement("span", { className: "reception-time-tag" }, "\u0938\u093E\u092F\u0902 6:15 \u092C\u091C\u0947 \u0938\u0947 \u092A\u094D\u0930\u092D\u0941 \u0907\u091A\u094D\u091B\u093E \u0924\u0915")), /* @__PURE__ */ import_react4.default.createElement("div", { className: "reception-location-details" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "venue-location-pin", "aria-hidden": "true" }, "\u{1F4CD}"), /* @__PURE__ */ import_react4.default.createElement("h3", { className: "venue-name-title" }, venueName), /* @__PURE__ */ import_react4.default.createElement("div", { className: "venue-address-badge" }, /* @__PURE__ */ import_react4.default.createElement("p", { className: "address-line" }, venueAddress)), /* @__PURE__ */ import_react4.default.createElement("p", { className: "venue-welcome-note" }, "\u0906\u092A \u0938\u092A\u0930\u093F\u0935\u093E\u0930 \u092A\u0927\u093E\u0930\u0915\u0930 \u0928\u0935\u0926\u0902\u092A\u0924\u093F\u092F\u094B\u0902 \u0915\u094B \u0905\u092A\u0928\u093E \u0938\u094D\u0928\u0947\u0939 \u0935 \u092E\u0902\u0917\u0932 \u0906\u0936\u0940\u0930\u094D\u0935\u093E\u0926 \u092A\u094D\u0930\u0926\u093E\u0928 \u0915\u0930\u0947\u0902 \u0924\u0925\u093E \u0930\u093E\u091C\u0938\u094D\u0925\u093E\u0928\u0940 \u092A\u094D\u0930\u0940\u0924\u093F\u092D\u094B\u091C \u0915\u093E \u0906\u0928\u0902\u0926 \u0932\u0947\u0902\u0964")), /* @__PURE__ */ import_react4.default.createElement("div", { className: "venue-buttons-row" }, /* @__PURE__ */ import_react4.default.createElement(
      "a",
      {
        href: mapsUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "venue-btn btn-google-maps",
        title: "\u0917\u0942\u0917\u0932 \u092E\u0948\u092A\u094D\u0938 \u092A\u0930 \u0938\u094D\u0925\u0932 \u0915\u093E \u0938\u094D\u0925\u093E\u0928 \u0926\u0947\u0916\u0947\u0902"
      },
      /* @__PURE__ */ import_react4.default.createElement("span", { className: "btn-icon" }, "\u{1F5FA}\uFE0F"),
      /* @__PURE__ */ import_react4.default.createElement("span", null, "\u0917\u0942\u0917\u0932 \u092E\u0948\u092A\u094D\u0938 \u092A\u0930 \u0926\u0947\u0916\u0947\u0902")
    ), /* @__PURE__ */ import_react4.default.createElement(
      "button",
      {
        onClick: handleCopyAddress,
        className: `venue-btn btn-copy-address ${copied ? "copied" : ""}`,
        title: "\u092A\u0942\u0930\u093E \u092A\u0924\u093E \u0915\u0949\u092A\u0940 \u0915\u0930\u0947\u0902"
      },
      /* @__PURE__ */ import_react4.default.createElement("span", { className: "btn-icon" }, copied ? "\u2713" : "\u{1F4CB}"),
      /* @__PURE__ */ import_react4.default.createElement("span", null, copied ? "\u092A\u0924\u093E \u0915\u0949\u092A\u0940 \u0939\u094B \u0917\u092F\u093E!" : "\u092A\u0924\u093E \u0915\u0949\u092A\u0940 \u0915\u0930\u0947\u0902")
    )))));
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
    return /* @__PURE__ */ import_react5.default.createElement("section", { className: "wedding-section countdown-section", id: "countdown-section" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "section-royal-card" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "card-border-gold-outer", "aria-hidden": "true" }), /* @__PURE__ */ import_react5.default.createElement("div", { className: "card-border-gold-inner", "aria-hidden": "true" }), /* @__PURE__ */ import_react5.default.createElement("div", { className: "section-header-flourish" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "shloka-header-group" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "shloka-ornament" }, "\u2756"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "shloka-text" }, "\u0965 \u0936\u0941\u092D \u092E\u0941\u0939\u0942\u0930\u094D\u0924 \u0965"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "shloka-ornament" }, "\u2756")), /* @__PURE__ */ import_react5.default.createElement("h2", { className: "section-title-gold" }, "\u092E\u0902\u0917\u0932 \u0918\u0921\u093C\u093F\u092F\u094B\u0902 \u0915\u0940 \u0909\u0932\u094D\u091F\u0940 \u0917\u093F\u0928\u0924\u0940"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "section-subtitle-script" }, "\u0909\u0938 \u092A\u093E\u0935\u0928 \u0926\u093F\u0928 \u0915\u0940 \u092A\u094D\u0930\u0924\u0940\u0915\u094D\u0937\u093E \u091C\u092C \u0926\u094B \u091C\u094B\u0921\u093C\u0947 \u092A\u0935\u093F\u0924\u094D\u0930 \u092A\u0930\u093F\u0923\u092F \u0938\u0942\u0924\u094D\u0930 \u092E\u0947\u0902 \u092C\u0902\u0927\u0947\u0902\u0917\u0947"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "section-title-divider" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "divider-line" }), /* @__PURE__ */ import_react5.default.createElement("span", { className: "divider-star" }, "\u2726 \u23F3 \u2726"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "divider-line" }))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-event-meta-banner" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "meta-badge-date" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "meta-icon" }, "\u{1F5D3}\uFE0F"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "meta-text" }, "12 \u0926\u093F\u0938\u0902\u092C\u0930 2026")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "meta-separator" }, "\u2726"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "meta-badge-venue" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "meta-icon" }, "\u{1F4CD}"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "meta-text" }, "\u0915\u0941\u092E\u093E\u0935\u0924 \u0935\u093E\u091F\u093F\u0915\u093E, \u092A\u093E\u0932\u0940"))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-clock-container", "aria-live": "polite" }, !timeLeft.isCompleted ? /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-units-grid" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-unit-box" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-circle-badge" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-number" }, String(timeLeft.days).padStart(2, "0"))), /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-label" }, "\u0926\u093F\u0928")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-colon-divider", "aria-hidden": "true" }, ":"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-unit-box" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-circle-badge" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-number" }, String(timeLeft.hours).padStart(2, "0"))), /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-label" }, "\u0918\u0902\u091F\u0947")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-colon-divider", "aria-hidden": "true" }, ":"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-unit-box" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-circle-badge" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-number" }, String(timeLeft.minutes).padStart(2, "0"))), /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-label" }, "\u092E\u093F\u0928\u091F")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-colon-divider", "aria-hidden": "true" }, ":"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-unit-box" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-circle-badge seconds-pulse" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-number" }, String(timeLeft.seconds).padStart(2, "0"))), /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-label" }, "\u0938\u0947\u0915\u0902\u0921"))) : /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-completed-banner" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "completed-sparkles" }, "\u{1F38A} \u{1F451} \u{1F38A}"), /* @__PURE__ */ import_react5.default.createElement("h3", { className: "completed-title" }, "\u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939 \u092E\u0939\u094B\u0924\u094D\u0938\u0935 \u092A\u094D\u0930\u093E\u0930\u0902\u092D \u0939\u094B \u091A\u0941\u0915\u093E \u0939\u0948!"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "completed-subtitle" }, "\u092D\u0917\u0935\u093E\u0928 \u0936\u093F\u0935 \u090F\u0935\u0902 \u092E\u093E\u0924\u093E \u092A\u093E\u0930\u094D\u0935\u0924\u0940 \u0928\u0935\u0926\u0902\u092A\u0924\u093F\u092F\u094B\u0902 \u0906\u0915\u093E\u0936 \u0935 \u0930\u0940\u0928\u093E \u0924\u0925\u093E \u0936\u093F\u0935\u093E\u0928\u0940 \u0935 \u0927\u0940\u0930\u091C \u0915\u094B \u0905\u0916\u0902\u0921 \u0938\u094C\u092D\u093E\u0917\u094D\u092F \u090F\u0935\u0902 \u0906\u0928\u0902\u0926 \u092A\u094D\u0930\u0926\u093E\u0928 \u0915\u0930\u0947\u0902!"))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-muhurat-strip" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "muhurat-icon" }, "\u{1F549}\uFE0F"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "muhurat-text" }, "\u092A\u093E\u0935\u0928 \u092E\u093E\u0930\u094D\u0917\u0936\u0940\u0930\u094D\u0937 \u0936\u0941\u0915\u094D\u0932 \u092A\u0915\u094D\u0937 \u2022 \u0935\u0948\u0926\u093F\u0915 \u0935\u093F\u0935\u093E\u0939 \u0938\u0902\u0938\u094D\u0915\u093E\u0930"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "muhurat-icon" }, "\u{1F549}\uFE0F"))));
  }

  // src/components/FamilyBlessingsSection.jsx
  var import_react6 = __toESM(__require("react"));
  function FamilyBlessingsSection() {
    const [guestName, setGuestName] = (0, import_react6.useState)("");
    const [guestCity, setGuestCity] = (0, import_react6.useState)("");
    const [blessingMsg, setBlessingMsg] = (0, import_react6.useState)("\u0906\u0915\u093E\u0936 \u090F\u0935\u0902 \u0930\u0940\u0928\u093E \u0924\u0925\u093E \u0936\u093F\u0935\u093E\u0928\u0940 \u090F\u0935\u0902 \u0927\u0940\u0930\u091C \u0915\u094B \u092A\u093E\u0935\u0928 \u092A\u0930\u093F\u0923\u092F \u0938\u0942\u0924\u094D\u0930 \u092E\u0947\u0902 \u092C\u0902\u0927\u0928\u0947 \u092A\u0930 \u0939\u093E\u0930\u094D\u0926\u093F\u0915 \u092C\u0927\u093E\u0908 \u090F\u0935\u0902 \u0905\u0928\u0902\u0924 \u0936\u0941\u092D\u0915\u093E\u092E\u0928\u093E\u090F\u0901! \u0926\u094B\u0928\u094B\u0902 \u091C\u094B\u0921\u093C\u094B\u0902 \u0915\u093E \u0935\u0948\u0935\u093E\u0939\u093F\u0915 \u091C\u0940\u0935\u0928 \u0938\u0926\u0948\u0935 \u0938\u0941\u0916, \u0938\u092E\u0943\u0926\u094D\u0927\u093F \u0914\u0930 \u0906\u0928\u0902\u0926 \u0938\u0947 \u092A\u0930\u093F\u092A\u0942\u0930\u094D\u0923 \u0930\u0939\u0947\u0964");
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
    return /* @__PURE__ */ import_react6.default.createElement("section", { className: "wedding-section family-compliments-section", id: "family-section" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "section-royal-card" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "card-border-gold-outer" }), /* @__PURE__ */ import_react6.default.createElement("div", { className: "card-border-gold-inner" }), /* @__PURE__ */ import_react6.default.createElement("div", { className: "section-header-flourish" }, /* @__PURE__ */ import_react6.default.createElement("span", { className: "shloka-text" }, "\u0965 \u0938\u0938\u094D\u0928\u0947\u0939 \u0928\u093F\u092E\u0902\u0924\u094D\u0930\u0923 \u0965"), /* @__PURE__ */ import_react6.default.createElement("h2", { className: "section-title-gold" }, "\u0926\u0930\u094D\u0936\u0928\u093E\u092D\u093F\u0932\u093E\u0937\u0940 \u090F\u0935\u0902 \u0935\u093F\u0928\u0940\u0924"), /* @__PURE__ */ import_react6.default.createElement("p", { className: "section-subtitle-script" }, "\u0917\u0939\u0932\u094B\u0924 \u092A\u0930\u093F\u0935\u093E\u0930 \u090F\u0935\u0902 \u0938\u092E\u0938\u094D\u0924 \u0938\u094D\u0928\u0947\u0939\u0940 \u0938\u094D\u0935\u091C\u0928, \u092A\u093E\u0932\u0940 (\u092E\u093E\u0930\u0935\u093E\u0921\u093C)"), /* @__PURE__ */ import_react6.default.createElement("div", { className: "section-title-divider" }, /* @__PURE__ */ import_react6.default.createElement("span", { className: "divider-line" }), /* @__PURE__ */ import_react6.default.createElement("span", { className: "divider-star" }, "\u2726"), /* @__PURE__ */ import_react6.default.createElement("span", { className: "divider-line" }))), /* @__PURE__ */ import_react6.default.createElement("div", { className: "family-invitation-quote-box", style: { maxWidth: "780px", margin: "0 auto 28px" } }, /* @__PURE__ */ import_react6.default.createElement("p", { className: "quote-text", style: { fontStyle: "italic", color: "var(--c-headings)", fontSize: "15.5px" } }, "\u201C\u0938\u094D\u0928\u0947\u0939 \u092D\u0930\u093E \u0928\u093F\u092E\u0902\u0924\u094D\u0930\u0923 \u092D\u0947\u091C\u093E \u0939\u0948, \u0906\u0926\u0930 \u0938\u0939\u093F\u0924 \u0938\u094D\u0935\u0940\u0915\u093E\u0930 \u0915\u0930\u0947\u0902;", /* @__PURE__ */ import_react6.default.createElement("br", null), "\u092A\u093E\u0935\u0928 \u092F\u0939 \u0905\u0935\u0938\u0930 \u0905\u0928\u0941\u092A\u092E \u0939\u0948, \u092A\u0927\u093E\u0930\u0915\u0930 \u0939\u092E\u0947\u0902 \u0915\u0943\u0924\u093E\u0930\u094D\u0925 \u0915\u0930\u0947\u0902\u0964\u201D"), /* @__PURE__ */ import_react6.default.createElement("p", { className: "quote-text", style: { marginTop: "12px", fontSize: "14.5px" } }, "\u092D\u0917\u0935\u093E\u0928 \u0936\u094D\u0930\u0940 \u0935\u093F\u0928\u093E\u092F\u0915 \u090F\u0935\u0902 \u092A\u0942\u091C\u094D\u092F \u092A\u093F\u0924\u0930\u094B\u0902 \u0915\u0947 \u092A\u093E\u0935\u0928 \u0906\u0936\u0940\u0930\u094D\u0935\u093E\u0926 \u0938\u0947, ", /* @__PURE__ */ import_react6.default.createElement("strong", null, "\u0917\u0939\u0932\u094B\u0924 \u092A\u0930\u093F\u0935\u093E\u0930"), " \u0906\u092A \u0938\u092D\u0940 \u0906\u0924\u094D\u092E\u0940\u092F \u0938\u094D\u0928\u0947\u0939\u0940\u091C\u0928\u094B\u0902 \u0915\u094B ", /* @__PURE__ */ import_react6.default.createElement("strong", null, "\u0906\u0915\u093E\u0936 \u090F\u0935\u0902 \u0930\u0940\u0928\u093E"), " \u0924\u0925\u093E ", /* @__PURE__ */ import_react6.default.createElement("strong", null, "\u0936\u093F\u0935\u093E\u0928\u0940 \u090F\u0935\u0902 \u0927\u0940\u0930\u091C"), " \u0915\u0947 \u092A\u093E\u0935\u0928 \u0935\u093F\u0935\u093E\u0939 \u0938\u092E\u093E\u0930\u094B\u0939 \u092E\u0947\u0902 \u0938\u092A\u0930\u093F\u0935\u093E\u0930 \u0938\u093E\u0926\u0930 \u0906\u092E\u0902\u0924\u094D\u0930\u093F\u0924 \u0915\u0930\u0924\u093E \u0939\u0948\u0964")), /* @__PURE__ */ import_react6.default.createElement("div", { className: "compliments-hosts-grid", style: { marginBottom: "32px" } }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "host-contact-card" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "host-ornament-header" }, /* @__PURE__ */ import_react6.default.createElement("span", { className: "host-namaste-icon" }, "\u{1F64F}"), /* @__PURE__ */ import_react6.default.createElement("span", { className: "host-honorific" }, "\u092A\u0930\u093F\u0935\u093E\u0930 \u0915\u0947 \u0935\u0930\u093F\u0937\u094D\u0920 \u090F\u0935\u0902 \u0928\u093F\u092E\u0902\u0924\u094D\u0930\u0915")), /* @__PURE__ */ import_react6.default.createElement("h3", { className: "host-name" }, "\u0936\u094D\u0930\u0940 \u0915\u0948\u0932\u093E\u0936\u091A\u0902\u0926\u094D\u0930 \u0917\u0939\u0932\u094B\u0924"), /* @__PURE__ */ import_react6.default.createElement("p", { className: "host-relation" }, "\u092A\u093F\u0924\u093E: \u0906\u0915\u093E\u0936 \u090F\u0935\u0902 \u0936\u093F\u0935\u093E\u0928\u0940"), /* @__PURE__ */ import_react6.default.createElement("div", { className: "host-contact-action-row" }, /* @__PURE__ */ import_react6.default.createElement("a", { href: `tel:${phone1}`, className: "contact-action-btn btn-call", title: "\u0915\u0949\u0932 \u0915\u0930\u0947\u0902" }, /* @__PURE__ */ import_react6.default.createElement("span", { className: "action-icon" }, "\u{1F4DE}"), /* @__PURE__ */ import_react6.default.createElement("span", { className: "action-text" }, "+91 9214537106")), /* @__PURE__ */ import_react6.default.createElement(
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
        placeholder: "\u0909\u0926\u093E. \u092A\u093E\u0932\u0940, \u091C\u094B\u0927\u092A\u0941\u0930, \u092C\u093E\u0932\u094B\u0924\u0930\u093E, \u091C\u092F\u092A\u0941\u0930",
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
    return /* @__PURE__ */ import_react7.default.createElement("footer", { className: "wedding-final-blessings-footer", id: "footer-section" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-golden-flowers-band", "aria-hidden": "true" }, /* @__PURE__ */ import_react7.default.createElement("span", { className: "floating-flower fl-1" }, "\u{1F338}"), /* @__PURE__ */ import_react7.default.createElement("span", { className: "floating-flower fl-2" }, "\u2728"), /* @__PURE__ */ import_react7.default.createElement("span", { className: "floating-flower fl-3" }, "\u{1F33A}"), /* @__PURE__ */ import_react7.default.createElement("span", { className: "floating-flower fl-4" }, "\u2728"), /* @__PURE__ */ import_react7.default.createElement("span", { className: "floating-flower fl-5" }, "\u{1F338}")), /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-content-container" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-ganesha-wrapper" }, /* @__PURE__ */ import_react7.default.createElement(
      "img",
      {
        src: "assets/champagne_ganesha_bright.png",
        alt: "Lord Ganesha",
        className: "footer-ganesha-img"
      }
    )), /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-sacred-blessing" }, "\u0965 \u0950 \u0936\u094D\u0930\u0940 \u0917\u0923\u0947\u0936\u093E\u092F \u0928\u092E\u0903 \u2022 \u0936\u0941\u092D\u0902 \u092D\u0935\u0924\u0941 \u0965"), /* @__PURE__ */ import_react7.default.createElement("blockquote", { className: "footer-treasured-quote" }, "\u201C\u0906\u092A\u0915\u0940 \u0917\u0930\u093F\u092E\u093E\u092E\u092F\u0940 \u0909\u092A\u0938\u094D\u0925\u093F\u0924\u093F \u0939\u092E\u093E\u0930\u093E \u0938\u092C\u0938\u0947 \u092C\u0921\u093C\u093E \u0909\u092A\u0939\u093E\u0930 \u0939\u0948,", /* @__PURE__ */ import_react7.default.createElement("br", null), "\u0906\u092A\u0915\u093E \u092A\u093E\u0935\u0928 \u0906\u0936\u0940\u0930\u094D\u0935\u093E\u0926 \u0939\u092E\u093E\u0930\u093E \u0905\u0928\u092E\u094B\u0932 \u0916\u091C\u093E\u0928\u093E \u0939\u0948\u0964\u201D"), /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-couple-signature" }, /* @__PURE__ */ import_react7.default.createElement("h2", { className: "footer-couple-names", style: { fontSize: "clamp(20px, 4.2vw, 30px)" } }, "\u0906\u0915\u093E\u0936 \u090F\u0935\u0902 \u0930\u0940\u0928\u093E \u2022 \u0936\u093F\u0935\u093E\u0928\u0940 \u090F\u0935\u0902 \u0927\u0940\u0930\u091C"), /* @__PURE__ */ import_react7.default.createElement("p", { className: "footer-regards-line" }, "\u0938\u0938\u094D\u0928\u0947\u0939 \u090F\u0935\u0902 \u0938\u093E\u0926\u0930 \u0906\u092D\u093E\u0930"), /* @__PURE__ */ import_react7.default.createElement("p", { className: "footer-family-signoff" }, "\u0917\u0939\u0932\u094B\u0924 \u092A\u0930\u093F\u0935\u093E\u0930 \u2022 \u0930\u093E\u092E\u0926\u0947\u0935 \u0930\u094B\u0921, \u092A\u093E\u0932\u0940 (\u0930\u093E\u091C\u0938\u094D\u0925\u093E\u0928)")), /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-bottom-divider" }), /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-sub-bar" }, /* @__PURE__ */ import_react7.default.createElement("p", { className: "sub-bar-text" }, "\u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939 \u092E\u0939\u094B\u0924\u094D\u0938\u0935 2026 \u2022 \u0926\u094B\u0939\u0930\u093E \u0935\u093F\u0935\u093E\u0939 \u0909\u0924\u094D\u0938\u0935 \u2022 \u092A\u093E\u0932\u0940, \u0930\u093E\u091C\u0938\u094D\u0925\u093E\u0928"), /* @__PURE__ */ import_react7.default.createElement(
      "button",
      {
        onClick: scrollToTop,
        style: {
          background: "transparent",
          border: "1px solid var(--c-border-gold)",
          borderRadius: "20px",
          color: "var(--c-headings)",
          fontFamily: "Noto Sans Devanagari, sans-serif",
          fontSize: "11px",
          padding: "4px 16px",
          marginTop: "10px",
          cursor: "pointer"
        }
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
    const playerRef = (0, import_react9.useRef)(null);
    const hasInitiallyStartedRef = (0, import_react9.useRef)(false);
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
              enablejsapi: 1,
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
        }, 350);
      }
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
          playerRef.current.playVideo();
          setIsPlaying(true);
          setIsMuted(false);
          window.isWeddingMusicPlaying = true;
          window.dispatchEvent(new CustomEvent("weddingMusicStatus", { detail: { isPlaying: true } }));
        } catch (e) {
          console.warn("Autoplay deferred for user gesture:", e);
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
      return () => {
        if (checkInterval) clearInterval(checkInterval);
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
    ), /* @__PURE__ */ import_react9.default.createElement("aside", { className: "floating-music-widget", "aria-label": "\u0935\u093F\u0935\u093E\u0939 \u092A\u0943\u0937\u094D\u0920\u092D\u0942\u092E\u093F \u0938\u0902\u0917\u0940\u0924 \u0928\u093F\u092F\u0902\u0924\u094D\u0930\u0923" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: `royal-music-pill-btn ${isPlaying ? "is-playing" : "is-paused"}` }, /* @__PURE__ */ import_react9.default.createElement(
      "button",
      {
        type: "button",
        className: "music-action-trigger",
        onClick: handlePlayToggle,
        title: isPlaying ? "\u0935\u093F\u0935\u093E\u0939 \u0938\u0902\u0917\u0940\u0924 \u0930\u094B\u0915\u0947\u0902" : "\u0935\u093F\u0935\u093E\u0939 \u0938\u0902\u0917\u0940\u0924 \u091A\u093E\u0932\u0942 \u0915\u0930\u0947\u0902 (30 \u0938\u0947\u0915\u0902\u0921 \u0938\u0947)",
        "aria-label": isPlaying ? "\u0938\u0902\u0917\u0940\u0924 \u0930\u094B\u0915\u0947\u0902" : "\u0938\u0902\u0917\u0940\u0924 \u091A\u093E\u0932\u0942 \u0915\u0930\u0947\u0902"
      },
      /* @__PURE__ */ import_react9.default.createElement("span", { className: "music-pill-icon", "aria-hidden": "true" }, isPlaying ? "\u{1F3B5}" : "\u25B6"),
      /* @__PURE__ */ import_react9.default.createElement("span", { className: "music-pill-text" }, isPlaying ? "\u092E\u093E\u0902\u0917\u0932\u093F\u0915 \u0936\u0939\u0928\u093E\u0908" : "\u0938\u0902\u0917\u0940\u0924 \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902"),
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
    const [isMusicPlaying, setIsMusicPlaying] = (0, import_react10.useState)(false);
    const animFrameIdRef = (0, import_react10.useRef)(null);
    const colorPalette = [
      "#B88A3B",
      // Antique Gold
      "#D4AF37",
      // Bright Shimmer Gold
      "#FFD700",
      // Pure Gold
      "#FFF5E6",
      // Warm Ivory White
      "#8B3038",
      // Traditional Burgundy
      "#762D32",
      // Deep Maroon
      "#FF6B4A",
      // Festive Coral
      "#647744",
      // Leaf Green
      "#FFA500",
      // Saffron Amber
      "#E83E8C"
      // Royal Rose
    ];
    const handleFinish = () => {
      if (isFadingOut) return;
      setIsFadingOut(true);
      if (typeof window.playWeddingMusic === "function" && !window.isWeddingMusicPlaying) {
        window.playWeddingMusic();
      }
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 850);
    };
    const handleStartMusic = (e) => {
      e.stopPropagation();
      if (typeof window.playWeddingMusic === "function") {
        window.playWeddingMusic();
        setIsMusicPlaying(true);
      }
    };
    (0, import_react10.useEffect)(() => {
      const handleMusicStatus = (e) => {
        if (e && e.detail) {
          setIsMusicPlaying(!!e.detail.isPlaying);
        }
      };
      window.addEventListener("weddingMusicStatus", handleMusicStatus);
      return () => window.removeEventListener("weddingMusicStatus", handleMusicStatus);
    }, []);
    (0, import_react10.useEffect)(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        const timer = setTimeout(handleFinish, 2e3);
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
          this.x = targetX || Math.random() * (width - 100) + 50;
          this.y = height;
          this.targetY = targetY || Math.random() * (height * 0.45) + height * 0.15;
          this.speed = Math.random() * 4 + 10;
          this.angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.2;
          this.vx = Math.cos(this.angle) * this.speed;
          this.vy = Math.sin(this.angle) * this.speed;
          this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
          this.dead = false;
        }
        update() {
          this.x += this.vx;
          this.y += this.vy;
          this.vy += 0.12;
          if (this.vy >= 0 || this.y <= this.targetY) {
            this.dead = true;
            createBurst(this.x, this.y, this.color);
          }
        }
        draw() {
          ctx.save();
          ctx.beginPath();
          ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.shadowBlur = 10;
          ctx.shadowColor = this.color;
          ctx.fill();
          ctx.restore();
        }
      }
      class Particle {
        constructor(x, y, color) {
          this.x = x;
          this.y = y;
          this.color = color;
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 5.5 + 1.5;
          this.vx = Math.cos(angle) * speed;
          this.vy = Math.sin(angle) * speed;
          this.alpha = 1;
          this.decay = Math.random() * 0.016 + 0.012;
          this.gravity = 0.07;
          this.friction = 0.96;
          this.size = Math.random() * 2.8 + 1.2;
          this.sparkle = Math.random() > 0.4;
        }
        update() {
          this.vx *= this.friction;
          this.vy *= this.friction;
          this.vy += this.gravity;
          this.x += this.vx;
          this.y += this.vy;
          this.alpha -= this.decay;
        }
        draw() {
          if (this.alpha <= 0) return;
          ctx.save();
          ctx.globalAlpha = Math.max(0, this.alpha);
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          if (this.sparkle && Math.random() > 0.2) {
            ctx.shadowBlur = 8;
            ctx.shadowColor = "#FFF5E6";
          }
          ctx.fill();
          ctx.restore();
        }
      }
      function createBurst(x, y, baseColor) {
        const isMobile = width < 768;
        const count = isMobile ? 38 : 55;
        for (let i = 0; i < count; i++) {
          const color = Math.random() > 0.3 ? baseColor : colorPalette[Math.floor(Math.random() * colorPalette.length)];
          particles.push(new Particle(x, y, color));
        }
      }
      let lastLaunch = 0;
      const startTime = Date.now();
      const duration = 3800;
      createBurst(width * 0.25, height * 0.3, "#D4AF37");
      createBurst(width * 0.75, height * 0.28, "#8B3038");
      createBurst(width * 0.5, height * 0.2, "#B88A3B");
      function animate() {
        ctx.clearRect(0, 0, width, height);
        const elapsed = Date.now() - startTime;
        if (elapsed < duration - 800) {
          if (Date.now() - lastLaunch > 280) {
            rockets.push(new Rocket());
            lastLaunch = Date.now();
          }
        }
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
        animFrameIdRef.current = requestAnimationFrame(animate);
      }
      animate();
      const autoFinishTimer = setTimeout(() => {
        handleFinish();
      }, 3600);
      return () => {
        window.removeEventListener("resize", handleResize);
        clearTimeout(autoFinishTimer);
        if (animFrameIdRef.current) {
          cancelAnimationFrame(animFrameIdRef.current);
        }
      };
    }, []);
    const handleCanvasClick = (e) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        for (let i = 0; i < 45; i++) {
        }
      }
    };
    return /* @__PURE__ */ import_react10.default.createElement(
      "div",
      {
        className: `cinematic-fireworks-overlay ${isFadingOut ? "fade-out" : "fade-in"}`,
        onClick: handleFinish,
        role: "region",
        "aria-label": "Wedding Celebration Fireworks Introduction"
      },
      /* @__PURE__ */ import_react10.default.createElement(
        "canvas",
        {
          ref: canvasRef,
          className: "fireworks-canvas",
          onClick: handleCanvasClick
        }
      ),
      /* @__PURE__ */ import_react10.default.createElement("div", { className: "fireworks-content-center" }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "fireworks-royal-card", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "fireworks-crown-badge" }, /* @__PURE__ */ import_react10.default.createElement("span", { className: "badge-star" }, "\u2726"), /* @__PURE__ */ import_react10.default.createElement("span", { className: "badge-crown" }, "\u{1F451}"), /* @__PURE__ */ import_react10.default.createElement("span", { className: "badge-star" }, "\u2726")), /* @__PURE__ */ import_react10.default.createElement("div", { className: "fireworks-shubh-vivah" }, "\u0965 \u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939 \u0965"), /* @__PURE__ */ import_react10.default.createElement("h1", { className: "fireworks-grand-title" }, "\u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939 \u0938\u092E\u093E\u0930\u094B\u0939 \u092E\u0947\u0902 \u0906\u092A\u0915\u093E \u0939\u093E\u0930\u094D\u0926\u093F\u0915 \u0938\u094D\u0935\u093E\u0917\u0924 \u0939\u0948"), /* @__PURE__ */ import_react10.default.createElement("div", { className: "fireworks-ornament-line" }, /* @__PURE__ */ import_react10.default.createElement("span", { className: "line-arm" }), /* @__PURE__ */ import_react10.default.createElement("span", { className: "line-gem" }, "\u2756"), /* @__PURE__ */ import_react10.default.createElement("span", { className: "line-arm" })), /* @__PURE__ */ import_react10.default.createElement("h2", { className: "fireworks-subtitle" }, "\u0916\u0941\u0936\u093F\u092F\u094B\u0902 \u0915\u093E \u0926\u094B\u0939\u0930\u093E \u0909\u0924\u094D\u0938\u0935, \u0906\u0928\u0902\u0926 \u0915\u0940 \u0926\u094B\u0939\u0930\u0940 \u0938\u094C\u0917\u093E\u0924"), /* @__PURE__ */ import_react10.default.createElement("p", { className: "fireworks-couples" }, "\u0906\u0915\u093E\u0936 \u090F\u0935\u0902 \u0930\u0940\u0928\u093E ", /* @__PURE__ */ import_react10.default.createElement("span", { className: "ampersand" }, "\u2022"), " \u0936\u093F\u0935\u093E\u0928\u0940 \u090F\u0935\u0902 \u0927\u0940\u0930\u091C"), /* @__PURE__ */ import_react10.default.createElement("div", { className: "fireworks-date-pill" }, /* @__PURE__ */ import_react10.default.createElement("span", null, "\u0926\u093F\u0938\u0902\u092C\u0930 2026 \u2022 \u092A\u093E\u0932\u0940, \u0930\u093E\u091C\u0938\u094D\u0925\u093E\u0928")), /* @__PURE__ */ import_react10.default.createElement("div", { className: "fireworks-music-prompt-box" }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "fireworks-music-prompt-text" }, /* @__PURE__ */ import_react10.default.createElement("span", null, "\u{1F3BA}"), /* @__PURE__ */ import_react10.default.createElement("span", null, "\u0936\u0939\u0928\u093E\u0908 \u0915\u0940 \u092E\u0927\u0941\u0930 \u0927\u0941\u0928 \u0938\u0941\u0928\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u092F\u0939\u093E\u0901 \u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u0947\u0902")), /* @__PURE__ */ import_react10.default.createElement(
        "button",
        {
          type: "button",
          className: "btn-start-music-prompt",
          onClick: handleStartMusic,
          title: "\u0938\u0902\u0917\u0940\u0924 \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902 (14 \u0938\u0947\u0915\u0902\u0921 \u0938\u0947)",
          "aria-label": "\u0938\u0902\u0917\u0940\u0924 \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902"
        },
        /* @__PURE__ */ import_react10.default.createElement("span", null, isMusicPlaying ? "\u{1F3B5} \u0938\u0902\u0917\u0940\u0924 \u092C\u091C \u0930\u0939\u093E \u0939\u0948" : "\u25B6 \u0938\u0902\u0917\u0940\u0924 \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902")
      )), /* @__PURE__ */ import_react10.default.createElement("div", { className: "fireworks-action-row" }, /* @__PURE__ */ import_react10.default.createElement(
        "button",
        {
          type: "button",
          className: "btn-enter-celebration",
          onClick: handleFinish,
          "aria-label": "\u0906\u092E\u0902\u0924\u094D\u0930\u0923 \u092A\u0924\u094D\u0930 \u0926\u0947\u0916\u0947\u0902"
        },
        /* @__PURE__ */ import_react10.default.createElement("span", null, "\u0906\u092E\u0902\u0924\u094D\u0930\u0923 \u092A\u0924\u094D\u0930 \u0926\u0947\u0916\u0947\u0902"),
        /* @__PURE__ */ import_react10.default.createElement("span", { className: "arrow-icon" }, "\u2794")
      )))),
      /* @__PURE__ */ import_react10.default.createElement(
        "button",
        {
          type: "button",
          className: "btn-skip-fireworks",
          onClick: handleFinish,
          title: "\u091B\u094B\u0921\u093C\u0947\u0902 \u090F\u0935\u0902 \u0906\u092E\u0902\u0924\u094D\u0930\u0923 \u0926\u0947\u0916\u0947\u0902",
          "aria-label": "\u091B\u094B\u0921\u093C\u0947\u0902"
        },
        /* @__PURE__ */ import_react10.default.createElement("span", null, "\u091B\u094B\u0921\u093C\u0947\u0902 \u2715")
      )
    );
  }

  // src/App.jsx
  function App() {
    const [isViewerOpen, setIsViewerOpen] = (0, import_react11.useState)(false);
    const [showFireworks, setShowFireworks] = (0, import_react11.useState)(false);
    (0, import_react11.useEffect)(() => {
      window.triggerFireworksIntro = () => {
        setShowFireworks(true);
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
    };
    const handleFireworksComplete = () => {
      setShowFireworks(false);
      setTimeout(() => {
        scrollTo("couples-section");
      }, 150);
    };
    return /* @__PURE__ */ import_react11.default.createElement("div", { className: "royal-wedding-app" }, /* @__PURE__ */ import_react11.default.createElement(MusicPlayer, null), showFireworks && /* @__PURE__ */ import_react11.default.createElement(CinematicFireworksIntro, { onComplete: handleFireworksComplete }), /* @__PURE__ */ import_react11.default.createElement("header", { className: "sticky-royal-nav", role: "banner" }, /* @__PURE__ */ import_react11.default.createElement("div", { className: "nav-container" }, /* @__PURE__ */ import_react11.default.createElement("div", { className: "nav-brand", onClick: () => scrollTo("hero-section") }, /* @__PURE__ */ import_react11.default.createElement("span", { className: "brand-crest" }, "\u{1F451}"), /* @__PURE__ */ import_react11.default.createElement("span", { className: "brand-title" }, "\u0906\u0915\u093E\u0936 \u090F\u0935\u0902 \u0930\u0940\u0928\u093E \u2022 \u0936\u093F\u0935\u093E\u0928\u0940 \u090F\u0935\u0902 \u0927\u0940\u0930\u091C")), /* @__PURE__ */ import_react11.default.createElement("nav", { className: "nav-links-row", "aria-label": "\u0935\u093F\u0935\u093E\u0939 \u0905\u0928\u0941\u092D\u093E\u0917 \u0928\u0947\u0935\u093F\u0917\u0947\u0936\u0928" }, /* @__PURE__ */ import_react11.default.createElement("button", { className: "nav-link-btn", onClick: () => scrollTo("hero-section") }, "\u0938\u094D\u0935\u093E\u0917\u0924"), /* @__PURE__ */ import_react11.default.createElement("button", { className: "nav-link-btn", onClick: () => scrollTo("couples-section") }, "\u0935\u0930-\u0935\u0927\u0942"), /* @__PURE__ */ import_react11.default.createElement("button", { className: "nav-link-btn", onClick: () => scrollTo("events-section") }, "\u092E\u093E\u0902\u0917\u0932\u093F\u0915 \u0915\u093E\u0930\u094D\u092F\u0915\u094D\u0930\u092E"), /* @__PURE__ */ import_react11.default.createElement("button", { className: "nav-link-btn", onClick: () => scrollTo("venue-section") }, "\u0935\u093F\u0935\u093E\u0939 \u0938\u094D\u0925\u0932"), /* @__PURE__ */ import_react11.default.createElement("button", { className: "nav-link-btn", onClick: () => scrollTo("countdown-section") }, "\u0936\u0941\u092D \u092E\u0941\u0939\u0942\u0930\u094D\u0924"), /* @__PURE__ */ import_react11.default.createElement("button", { className: "nav-link-btn", onClick: () => scrollTo("family-section") }, "\u092A\u0930\u093F\u0935\u093E\u0930 \u090F\u0935\u0902 \u0906\u0936\u0940\u0930\u094D\u0935\u093E\u0926")), /* @__PURE__ */ import_react11.default.createElement("div", { className: "nav-actions-group" }, /* @__PURE__ */ import_react11.default.createElement(
      "button",
      {
        className: "nav-btn-view-card",
        onClick: () => setIsViewerOpen(true),
        title: "\u0921\u093F\u091C\u093F\u091F\u0932 \u0935\u093F\u0935\u093E\u0939 \u0906\u092E\u0902\u0924\u094D\u0930\u0923 \u092A\u0924\u094D\u0930\u093F\u0915\u093E \u0916\u094B\u0932\u0947\u0902"
      },
      /* @__PURE__ */ import_react11.default.createElement("span", { className: "btn-icon" }, "\u{1F4DC}"),
      /* @__PURE__ */ import_react11.default.createElement("span", { className: "btn-text" }, "\u092A\u0924\u094D\u0930\u093F\u0915\u093E \u0926\u0947\u0916\u0947\u0902")
    ), /* @__PURE__ */ import_react11.default.createElement(
      "a",
      {
        href: "dual-jain-wedding-invitation.pdf",
        download: "dual-jain-wedding-invitation.pdf",
        className: "nav-btn-download-pdf",
        title: "\u0906\u0927\u093F\u0915\u093E\u0930\u093F\u0915 \u090F\u0915-\u092A\u0943\u0937\u094D\u0920\u0940\u092F \u092A\u0940\u0921\u0940\u090F\u092B \u0906\u092E\u0902\u0924\u094D\u0930\u0923 \u0921\u093E\u0909\u0928\u0932\u094B\u0921 \u0915\u0930\u0947\u0902"
      },
      /* @__PURE__ */ import_react11.default.createElement("span", { className: "btn-icon" }, "\u{1F4E5}"),
      /* @__PURE__ */ import_react11.default.createElement("span", { className: "btn-text" }, "\u092A\u0940\u0921\u0940\u090F\u092B")
    )))), /* @__PURE__ */ import_react11.default.createElement("main", { className: "invitation-content-column" }, /* @__PURE__ */ import_react11.default.createElement(WeddingHero, { onEnterInvitation: handleEnterInvitation }), /* @__PURE__ */ import_react11.default.createElement(CouplesSection, null), /* @__PURE__ */ import_react11.default.createElement(WeddingTimeline, null), /* @__PURE__ */ import_react11.default.createElement(VenueSection, null), /* @__PURE__ */ import_react11.default.createElement(CountdownSection, null), /* @__PURE__ */ import_react11.default.createElement(FamilyBlessingsSection, null), /* @__PURE__ */ import_react11.default.createElement(
      FinalBlessingsFooter,
      {
        onOpenCardViewer: () => setIsViewerOpen(true)
      }
    )), /* @__PURE__ */ import_react11.default.createElement(
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
      root.render(import_react12.default.createElement(App));
    } else if (rd && rd.render) {
      rd.render(import_react12.default.createElement(App), rootElement);
    }
  }
})();
