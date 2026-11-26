
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
    const handleEnterInvitation = () => {
      if (onExplore) {
        onExplore();
      } else {
        scrollToSection("couples-section");
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
        alt: "Lord Shiva and Mata Parvati",
        className: "shiva-parvati-art-img",
        width: "440",
        height: "260"
      }
    ), /* @__PURE__ */ import_react.default.createElement("div", { className: "jharokha-gold-border" }))), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-invocation-group" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-ganesha-emblem" }, /* @__PURE__ */ import_react.default.createElement(
      "img",
      {
        src: "assets/champagne_ganesha_bright.png",
        alt: "Lord Ganesha",
        className: "hero-ganesha-img",
        width: "44",
        height: "44"
      }
    )), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-shloka-text" }, "|| SHREE GANESHAY NAMAH ||"), /* @__PURE__ */ import_react.default.createElement("p", { className: "hero-divine-subtitle" }, "With the Divine Blessings of Lord Ganesha & Our Respected Ancestors")), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-main-title-block" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-royal-flourish-line" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "flourish-leaf" }, "\u{1F33F}"), /* @__PURE__ */ import_react.default.createElement("span", { className: "flourish-dash" }), /* @__PURE__ */ import_react.default.createElement("span", { className: "flourish-star" }, "\u2726"), /* @__PURE__ */ import_react.default.createElement("span", { className: "flourish-dash" }), /* @__PURE__ */ import_react.default.createElement("span", { className: "flourish-leaf" }, "\u{1F33F}")), /* @__PURE__ */ import_react.default.createElement("h1", { className: "hero-grand-title" }, "THE WEDDING INVITATION"), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-shubh-vivah" }, "Auspicious Wedding Celebration")), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-couples-showcase-card" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-couple-unit" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "couple-sacred-label" }, "First Couple"), /* @__PURE__ */ import_react.default.createElement("h2", { className: "couple-names-headline" }, "AYUSHMAN AKASH"), /* @__PURE__ */ import_react.default.createElement("div", { className: "couple-ampersand-sign" }, "&"), /* @__PURE__ */ import_react.default.createElement("h2", { className: "couple-names-headline" }, "AYUSHMATI REENA"), /* @__PURE__ */ import_react.default.createElement("div", { className: "couple-date-tag" }, "Thursday, 10 December 2026")), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-central-divider-unit", "aria-hidden": "true" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "divider-gold-line" }), /* @__PURE__ */ import_react.default.createElement("div", { className: "divider-sacred-emblem" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "emblem-symbol" }, "\u{1F451}"), /* @__PURE__ */ import_react.default.createElement("span", { className: "emblem-flourish" }, "\u2756")), /* @__PURE__ */ import_react.default.createElement("div", { className: "divider-gold-line" })), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-couple-unit" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "couple-sacred-label" }, "Second Couple"), /* @__PURE__ */ import_react.default.createElement("h2", { className: "couple-names-headline" }, "AYUSHMATI SHIVANI (JEENU)"), /* @__PURE__ */ import_react.default.createElement("div", { className: "couple-ampersand-sign" }, "&"), /* @__PURE__ */ import_react.default.createElement("h2", { className: "couple-names-headline" }, "AYUSHMAN DHEERAJ JI"), /* @__PURE__ */ import_react.default.createElement("div", { className: "couple-date-tag" }, "Saturday, 12 December 2026"))), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-venue-announcement-banner" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "banner-date-highlight" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "cal-icon" }, "\u{1F5D3}\uFE0F"), /* @__PURE__ */ import_react.default.createElement("span", { className: "date-str" }, "WEDDING CELEBRATION: 12 DECEMBER 2026")), /* @__PURE__ */ import_react.default.createElement("div", { className: "banner-venue-location" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "pin-icon" }, "\u{1F4CD}"), /* @__PURE__ */ import_react.default.createElement("span", { className: "venue-str" }, "KUMAWAT VATIKA, PALI, RAJASTHAN"))), /* @__PURE__ */ import_react.default.createElement("blockquote", { className: "hero-heritage-quote" }, "\u201CTwo Sacred Unions, Four Blessed Families, One Grand Joyous Celebration\u201D"), /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-enter-action-wrap" }, /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        onClick: handleEnterInvitation,
        className: "btn-enter-invitation",
        "aria-label": "Enter complete wedding invitation"
      },
      /* @__PURE__ */ import_react.default.createElement("span", { className: "btn-sparkle" }, "\u2726"),
      /* @__PURE__ */ import_react.default.createElement("span", { className: "btn-text" }, "ENTER INVITATION"),
      /* @__PURE__ */ import_react.default.createElement("span", { className: "btn-sparkle" }, "\u2726"),
      /* @__PURE__ */ import_react.default.createElement("span", { className: "btn-shimmer-sweep", "aria-hidden": "true" })
    )), /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        className: "hero-scroll-indicator",
        onClick: handleEnterInvitation,
        role: "button",
        tabIndex: 0,
        "aria-label": "Scroll down to wedding couples details"
      },
      /* @__PURE__ */ import_react.default.createElement("span", { className: "scroll-label" }, "Scroll to Explore"),
      /* @__PURE__ */ import_react.default.createElement("div", { className: "scroll-chevron-bounce" }, /* @__PURE__ */ import_react.default.createElement("svg", { viewBox: "0 0 24 24", className: "chevron-svg", "aria-hidden": "true" }, /* @__PURE__ */ import_react.default.createElement("path", { d: "M7 10l5 5 5-5", fill: "none", stroke: "#8B3038", strokeWidth: "2.2", strokeLinecap: "round" })))
    )));
  }

  // src/components/CouplesSection.jsx
  var import_react2 = __toESM(__require("react"));
  function CouplesSection() {
    return /* @__PURE__ */ import_react2.default.createElement("section", { className: "wedding-section couples-family-section", id: "couples-section" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "section-royal-card" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-border-gold-outer", "aria-hidden": "true" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-border-gold-inner", "aria-hidden": "true" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "section-header-flourish" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "shloka-header-group" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "shloka-ornament" }, "\u2756"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "shloka-text" }, "|| MANGAL PARINAYOTSAV ||"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "shloka-ornament" }, "\u2756")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "family-origin-pill" }, "THE ESTEEMED GEHLOT PARIVAR OF PALI"), /* @__PURE__ */ import_react2.default.createElement("h2", { className: "section-title-gold" }, "THE WEDDING COUPLES"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "section-subtitle-script" }, "With the divine blessings of Lord Shiva, Mata Parvati, Lord Ganesha & Our Respected Ancestors"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "section-title-divider" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "divider-line" }), /* @__PURE__ */ import_react2.default.createElement("span", { className: "divider-star" }, "\u2726 \u{1F451} \u2726"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "divider-line" }))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "ancestral-heritage-banner" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "heritage-badge-tag" }, "Sacred Ancestral Heritage & Blessings"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "heritage-lineage-text" }, "Great Grandchildren of ", /* @__PURE__ */ import_react2.default.createElement("strong", null, "Late Mrs. Lehri Bai & Late Mr. Gyarsilalji"), /* @__PURE__ */ import_react2.default.createElement("br", null), "Beloved Grandchildren of ", /* @__PURE__ */ import_react2.default.createElement("strong", null, "Mrs. Durga Bai & Late Mr. Madanlalji Gehlot"))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "couples-editorial-grid" }, /* @__PURE__ */ import_react2.default.createElement("article", { className: "couple-editorial-card" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-ornament-corner tl" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-ornament-corner tr" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-ornament-corner bl" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-ornament-corner br" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-sacred-pill" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "pill-star" }, "\u2726"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "pill-label" }, "FIRST SACRED UNION"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "pill-star" }, "\u2726")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-individual-block" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "profile-ornament-icon" }, "\u{1F935}"), /* @__PURE__ */ import_react2.default.createElement("h3", { className: "individual-name" }, "AYUSHMAN AKASH"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "individual-parents" }, "Son of ", /* @__PURE__ */ import_react2.default.createElement("strong", null, "Mrs. Anuradha & Mr. Kailash Gehlot"))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "weds-flourish-separator" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "weds-line" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "weds-badge" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "weds-sub" }, "\u2726"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "weds-text" }, "WEDS"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "weds-sub" }, "\u2726")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "weds-line" })), /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-individual-block" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "profile-ornament-icon" }, "\u{1F470}"), /* @__PURE__ */ import_react2.default.createElement("h3", { className: "individual-name" }, "AYUSHMATI REENA"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "individual-parents" }, "Daughter of ", /* @__PURE__ */ import_react2.default.createElement("strong", null, "Mrs. Jashoda Devi & Mr. Gopalji Chauhan")), /* @__PURE__ */ import_react2.default.createElement("span", { className: "family-native-place" }, "Residence: Samdari")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-ceremony-date-badge" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "ceremony-date-icon" }, "\u{1F5D3}\uFE0F"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "ceremony-date-details" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "ceremony-label" }, "WEDDING CEREMONY DATE"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "ceremony-exact-date" }, "Thursday, 10 December 2026"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "ceremony-muhurat" }, "Margashirsha Shukla Paksh")))), /* @__PURE__ */ import_react2.default.createElement("article", { className: "couple-editorial-card" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-ornament-corner tl" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-ornament-corner tr" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-ornament-corner bl" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "card-ornament-corner br" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-sacred-pill" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "pill-star" }, "\u2726"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "pill-label" }, "SECOND SACRED UNION"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "pill-star" }, "\u2726")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-individual-block" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "profile-ornament-icon" }, "\u{1F470}"), /* @__PURE__ */ import_react2.default.createElement("h3", { className: "individual-name" }, "AYUSHMATI SHIVANI (JEENU)"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "individual-parents" }, "Daughter of ", /* @__PURE__ */ import_react2.default.createElement("strong", null, "Mrs. Anuradha & Mr. Kailash Gehlot"))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "weds-flourish-separator" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "weds-line" }), /* @__PURE__ */ import_react2.default.createElement("div", { className: "weds-badge" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "weds-sub" }, "\u2726"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "weds-text" }, "WEDS"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "weds-sub" }, "\u2726")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "weds-line" })), /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-individual-block" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "profile-ornament-icon" }, "\u{1F935}"), /* @__PURE__ */ import_react2.default.createElement("h3", { className: "individual-name" }, "AYUSHMAN DHEERAJ JI"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "individual-parents" }, "Son of ", /* @__PURE__ */ import_react2.default.createElement("strong", null, "Mrs. Renu Ji & Mr. Mukeshji Parihar")), /* @__PURE__ */ import_react2.default.createElement("span", { className: "family-native-place" }, "Residence: Balotra")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "couple-ceremony-date-badge" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "ceremony-date-icon" }, "\u{1F5D3}\uFE0F"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "ceremony-date-details" }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "ceremony-label" }, "WEDDING CEREMONY DATE"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "ceremony-exact-date" }, "Saturday, 12 December 2026"), /* @__PURE__ */ import_react2.default.createElement("span", { className: "ceremony-muhurat" }, "Margashirsha Shukla Paksh 3")))))));
  }

  // src/components/WeddingTimeline.jsx
  var import_react3 = __toESM(__require("react"));
  function WeddingTimeline() {
    const [activeDay, setActiveDay] = (0, import_react3.useState)("all");
    const eventsList = [
      {
        id: "e1",
        dayId: "day1",
        dayLabel: "Day 1 \u2014 Monday",
        dateStr: "07 DECEMBER 2026",
        timeStr: "3:15 PM",
        title: "Ghritpaan Ceremony",
        icon: "\u{1FA94}",
        desc: "Traditional sacred offering of purified ghee, invoking supreme divine benevolence and purity for the upcoming ceremonies.",
        calDate: "20261207T151500/20261207T170000",
        badge: "SACRED COMMENCEMENT"
      },
      {
        id: "e2",
        dayId: "day1",
        dayLabel: "Day 1 \u2014 Monday",
        dateStr: "07 DECEMBER 2026",
        timeStr: "5:15 PM",
        title: "Vinayak Sthapana Puja",
        icon: "\u{1F549}\uFE0F",
        desc: "Holy installation and Vedic worship of Lord Vinayaka, sanctifying the wedding festivities for peaceful and obstacle-free completion.",
        calDate: "20261207T171500/20261207T193000",
        badge: "VEDIC RITUAL"
      },
      {
        id: "e3",
        dayId: "day2",
        dayLabel: "Day 2 \u2014 Tuesday",
        dateStr: "08 DECEMBER 2026",
        timeStr: "1:15 PM",
        title: "Haldi & Mehendi Ceremony",
        icon: "\u{1F33F}",
        desc: "A joyous celebration adorned with radiant turmeric pastes and intricate bridal henna designs applied by loved ones with traditional songs.",
        calDate: "20261208T131500/20261208T170000",
        badge: "COLOR & FRAGRANCE"
      },
      {
        id: "e4",
        dayId: "day3",
        dayLabel: "Day 3 \u2014 Wednesday",
        dateStr: "09 DECEMBER 2026",
        timeStr: "12:15 PM",
        title: "Mayra Ceremony",
        icon: "\u{1F381}",
        desc: "Cherished maternal uncle (Nanihal) tradition presenting wedding gifts, fine fabrics, and auspicious blessings to the family.",
        calDate: "20261209T121500/20261209T150000",
        badge: "MATERNAL TRADITION"
      },
      {
        id: "e5",
        dayId: "day3",
        dayLabel: "Day 3 \u2014 Wednesday",
        dateStr: "09 DECEMBER 2026",
        timeStr: "8:15 PM",
        title: "Bandoli Ceremony",
        icon: "\u{1F941}",
        desc: "Joyful musical celebration and traditional village procession celebrating the sacred wedding couples with festive dhol and dhum-dham.",
        calDate: "20261209T201500/20261209T223000",
        badge: "ROYAL PROCESSION"
      },
      {
        id: "e6",
        dayId: "day4",
        dayLabel: "Day 4 \u2014 Thursday",
        dateStr: "10 DECEMBER 2026",
        timeStr: "12:15 PM",
        title: "Baraat Prasthan (Departure of Baraat to Samdari)",
        icon: "\u{1F68C}",
        desc: "Festive departure of Groom Ayushman Akash's wedding procession to Samdari to the residence of Shriman Byaiji Dhanraj Ji Chauhan's family.",
        calDate: "20261210T121500/20261210T150000",
        badge: "BARAAT DEPARTURE"
      },
      {
        id: "e7",
        dayId: "day4",
        dayLabel: "Day 4 \u2014 Thursday",
        dateStr: "10 DECEMBER 2026",
        timeStr: "7:15 PM",
        title: "Ladies Sangeet & Cultural Evening",
        icon: "\u{1FA95}",
        desc: "An enchanting evening of vibrant Rajasthani folk dances, melodious geet, and celebratory performances by dear family & friends.",
        calDate: "20261210T191500/20261210T230000",
        badge: "MUSIC & DANCE"
      },
      {
        id: "e8",
        dayId: "day5",
        dayLabel: "Day 5 \u2014 Saturday (Grand Wedding)",
        dateStr: "12 DECEMBER 2026",
        timeStr: "5:15 PM",
        title: "Baraat Swagat (Welcome of Baraat from Balotra)",
        icon: "\u{1F3BA}",
        desc: "Ceremonial welcome of Groom Ayushman Dheeraj Ji's Baraat arriving from Balotra from the residence of Shriman Byaiji Madanlalji Parihar's family to Kumawat Vatika, Pali.",
        calDate: "20261212T171500/20261212T181500",
        badge: "BARAAT WELCOME"
      },
      {
        id: "e9",
        dayId: "day5",
        dayLabel: "Day 5 \u2014 Saturday (Grand Wedding)",
        dateStr: "12 DECEMBER 2026",
        timeStr: "6:15 PM",
        title: "Grand Wedding Ceremony (Hastamelap & Reception)",
        icon: "\u{1F451}",
        desc: "The divine Vedic marriage rituals, sacred pheras, and auspicious blessings under the royal mandap, followed by the grand wedding dinner.",
        calDate: "20261212T181500/20261212T233000",
        badge: "ROYAL WEDDING"
      }
    ];
    const filteredEvents = activeDay === "all" ? eventsList : eventsList.filter((ev) => ev.dayId === activeDay);
    const makeGoogleCalendarUrl = (ev) => {
      const text = encodeURIComponent(ev.title + " \u2014 Akash & Reena | Shivani & Dheeraj Wedding");
      const dates = ev.calDate;
      const details = encodeURIComponent(ev.desc + " Venue: Kumawat Vatika, Punayata Road, Pali, Rajasthan.");
      const location = encodeURIComponent("Kumawat Vatika, Punayata Road, Pali, Rajasthan, India");
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}`;
    };
    return /* @__PURE__ */ import_react3.default.createElement("section", { className: "wedding-section timeline-section", id: "events-section" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "section-royal-card" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "card-border-gold-outer", "aria-hidden": "true" }), /* @__PURE__ */ import_react3.default.createElement("div", { className: "card-border-gold-inner", "aria-hidden": "true" }), /* @__PURE__ */ import_react3.default.createElement("div", { className: "section-header-flourish" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "shloka-header-group" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "shloka-ornament" }, "\u2756"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "shloka-text" }, "|| MANGALIK KARYAKRAM ||"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "shloka-ornament" }, "\u2756")), /* @__PURE__ */ import_react3.default.createElement("h2", { className: "section-title-gold" }, "THE WEDDING CELEBRATIONS"), /* @__PURE__ */ import_react3.default.createElement("p", { className: "section-subtitle-script" }, "Every Ritual, Every Blessing, Every Beautiful Moment."), /* @__PURE__ */ import_react3.default.createElement("div", { className: "section-title-divider" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "divider-line" }), /* @__PURE__ */ import_react3.default.createElement("span", { className: "divider-star" }, "\u2726 \u{1F338} \u2726"), /* @__PURE__ */ import_react3.default.createElement("span", { className: "divider-line" }))), /* @__PURE__ */ import_react3.default.createElement("nav", { className: "timeline-filter-pills-row", "aria-label": "Event days filter" }, /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        className: `timeline-filter-btn ${activeDay === "all" ? "active" : ""}`,
        onClick: () => setActiveDay("all")
      },
      "All Celebrations (9)"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        className: `timeline-filter-btn ${activeDay === "day1" ? "active" : ""}`,
        onClick: () => setActiveDay("day1")
      },
      "Mon, 7 Dec"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        className: `timeline-filter-btn ${activeDay === "day2" ? "active" : ""}`,
        onClick: () => setActiveDay("day2")
      },
      "Tue, 8 Dec"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        className: `timeline-filter-btn ${activeDay === "day3" ? "active" : ""}`,
        onClick: () => setActiveDay("day3")
      },
      "Wed, 9 Dec"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        className: `timeline-filter-btn ${activeDay === "day4" ? "active" : ""}`,
        onClick: () => setActiveDay("day4")
      },
      "Thu, 10 Dec"
    ), /* @__PURE__ */ import_react3.default.createElement(
      "button",
      {
        className: `timeline-filter-btn ${activeDay === "day5" ? "active" : ""}`,
        onClick: () => setActiveDay("day5")
      },
      "Sat, 12 Dec (Main)"
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
            title: `Add ${ev.title} to Google Calendar`
          },
          /* @__PURE__ */ import_react3.default.createElement("span", { className: "cal-icon" }, "\u{1F4C5}"),
          /* @__PURE__ */ import_react3.default.createElement("span", null, "Add to Calendar")
        ))))
      );
    }))));
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
    return /* @__PURE__ */ import_react4.default.createElement("section", { className: "wedding-section reception-venue-section", id: "venue-section" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "section-royal-card" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "card-border-gold-outer", "aria-hidden": "true" }), /* @__PURE__ */ import_react4.default.createElement("div", { className: "card-border-gold-inner", "aria-hidden": "true" }), /* @__PURE__ */ import_react4.default.createElement("div", { className: "section-header-flourish" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "shloka-header-group" }, /* @__PURE__ */ import_react4.default.createElement("span", { className: "shloka-ornament" }, "\u2756"), /* @__PURE__ */ import_react4.default.createElement("span", { className: "shloka-text" }, "|| VIVAH STHAL & PREETIBHOJ ||"), /* @__PURE__ */ import_react4.default.createElement("span", { className: "shloka-ornament" }, "\u2756")), /* @__PURE__ */ import_react4.default.createElement("h2", { className: "section-title-gold" }, "BLESSING CEREMONY & GRAND WEDDING RECEPTION"), /* @__PURE__ */ import_react4.default.createElement("p", { className: "section-subtitle-script" }, "The sacred royal destination where beloved families, relatives & cherished guests unite"), /* @__PURE__ */ import_react4.default.createElement("div", { className: "section-title-divider" }, /* @__PURE__ */ import_react4.default.createElement("span", { className: "divider-line" }), /* @__PURE__ */ import_react4.default.createElement("span", { className: "divider-star" }, "\u2726 \u{1F3DB}\uFE0F \u2726"), /* @__PURE__ */ import_react4.default.createElement("span", { className: "divider-line" }))), /* @__PURE__ */ import_react4.default.createElement("article", { className: "reception-grand-card" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "reception-mandap-illustration", "aria-hidden": "true" }, /* @__PURE__ */ import_react4.default.createElement("svg", { viewBox: "0 0 500 140", className: "mandap-arch-svg", preserveAspectRatio: "xMidYMid meet" }, /* @__PURE__ */ import_react4.default.createElement("defs", null, /* @__PURE__ */ import_react4.default.createElement("linearGradient", { id: "goldArchGrad", x1: "0%", y1: "0%", x2: "100%", y2: "100%" }, /* @__PURE__ */ import_react4.default.createElement("stop", { offset: "0%", stopColor: "#C9A45C" }), /* @__PURE__ */ import_react4.default.createElement("stop", { offset: "50%", stopColor: "#B88A3B" }), /* @__PURE__ */ import_react4.default.createElement("stop", { offset: "100%", stopColor: "#8C6A28" }))), /* @__PURE__ */ import_react4.default.createElement("rect", { x: "50", y: "30", width: "400", height: "95", rx: "10", fill: "rgba(139, 48, 56, 0.05)" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M 50,45 Q 250,5 450,45", fill: "none", stroke: "url(#goldArchGrad)", strokeWidth: "2.5" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M 90,45 Q 250,20 410,45", fill: "none", stroke: "#C9A45C", strokeWidth: "1", strokeDasharray: "3 3" }), /* @__PURE__ */ import_react4.default.createElement("line", { x1: "80", y1: "45", x2: "80", y2: "125", stroke: "#C9A45C", strokeWidth: "3" }), /* @__PURE__ */ import_react4.default.createElement("line", { x1: "420", y1: "45", x2: "420", y2: "125", stroke: "#C9A45C", strokeWidth: "3" }), /* @__PURE__ */ import_react4.default.createElement("circle", { cx: "250", cy: "18", r: "6", fill: "#B88A3B" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M 245,18 L 250,8 L 255,18 Z", fill: "#8B3038" }))), /* @__PURE__ */ import_react4.default.createElement("div", { className: "reception-timing-box" }, /* @__PURE__ */ import_react4.default.createElement("span", { className: "reception-date-tag" }, "Saturday, 12 December 2026"), /* @__PURE__ */ import_react4.default.createElement("span", { className: "reception-time-tag" }, "From 6:15 PM Onwards")), /* @__PURE__ */ import_react4.default.createElement("div", { className: "reception-location-details" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "venue-location-pin", "aria-hidden": "true" }, "\u{1F4CD}"), /* @__PURE__ */ import_react4.default.createElement("h3", { className: "venue-name-title" }, venueName), /* @__PURE__ */ import_react4.default.createElement("div", { className: "venue-address-badge" }, /* @__PURE__ */ import_react4.default.createElement("p", { className: "address-line" }, venueAddress)), /* @__PURE__ */ import_react4.default.createElement("p", { className: "venue-welcome-note" }, "We warmly invite you and your esteemed family to join us in blessing the auspicious marriages of Akash & Reena and Shivani & Dheeraj, followed by royal Rajasthani hospitality and dinner.")), /* @__PURE__ */ import_react4.default.createElement("div", { className: "venue-buttons-row" }, /* @__PURE__ */ import_react4.default.createElement(
      "a",
      {
        href: mapsUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "venue-btn btn-google-maps",
        title: "Open venue location in Google Maps"
      },
      /* @__PURE__ */ import_react4.default.createElement("span", { className: "btn-icon" }, "\u{1F5FA}\uFE0F"),
      /* @__PURE__ */ import_react4.default.createElement("span", null, "Open in Google Maps")
    ), /* @__PURE__ */ import_react4.default.createElement(
      "button",
      {
        onClick: handleCopyAddress,
        className: `venue-btn btn-copy-address ${copied ? "copied" : ""}`,
        title: "Copy complete venue address to clipboard"
      },
      /* @__PURE__ */ import_react4.default.createElement("span", { className: "btn-icon" }, copied ? "\u2713" : "\u{1F4CB}"),
      /* @__PURE__ */ import_react4.default.createElement("span", null, copied ? "Address Copied!" : "Copy Venue Address")
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
    return /* @__PURE__ */ import_react5.default.createElement("section", { className: "wedding-section countdown-section", id: "countdown-section" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "section-royal-card" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "card-border-gold-outer", "aria-hidden": "true" }), /* @__PURE__ */ import_react5.default.createElement("div", { className: "card-border-gold-inner", "aria-hidden": "true" }), /* @__PURE__ */ import_react5.default.createElement("div", { className: "section-header-flourish" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "shloka-header-group" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "shloka-ornament" }, "\u2756"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "shloka-text" }, "|| SHUBH MUHURAT ||"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "shloka-ornament" }, "\u2756")), /* @__PURE__ */ import_react5.default.createElement("h2", { className: "section-title-gold" }, "COUNTING DOWN TO THE AUSPICIOUS MOMENT"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "section-subtitle-script" }, "Anticipating the blessed day when two divine couples unite in holy matrimony"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "section-title-divider" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "divider-line" }), /* @__PURE__ */ import_react5.default.createElement("span", { className: "divider-star" }, "\u2726 \u23F3 \u2726"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "divider-line" }))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-event-meta-banner" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "meta-badge-date" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "meta-icon" }, "\u{1F5D3}\uFE0F"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "meta-text" }, "12 DECEMBER 2026")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "meta-separator" }, "\u2726"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "meta-badge-venue" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "meta-icon" }, "\u{1F4CD}"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "meta-text" }, "KUMAWAT VATIKA, PALI"))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-clock-container", "aria-live": "polite" }, !timeLeft.isCompleted ? /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-units-grid" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-unit-box" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-circle-badge" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-number" }, String(timeLeft.days).padStart(2, "0"))), /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-label" }, "DAYS")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-colon-divider", "aria-hidden": "true" }, ":"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-unit-box" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-circle-badge" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-number" }, String(timeLeft.hours).padStart(2, "0"))), /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-label" }, "HOURS")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-colon-divider", "aria-hidden": "true" }, ":"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-unit-box" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-circle-badge" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-number" }, String(timeLeft.minutes).padStart(2, "0"))), /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-label" }, "MINUTES")), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-colon-divider", "aria-hidden": "true" }, ":"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-unit-box" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-circle-badge seconds-pulse" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-number" }, String(timeLeft.seconds).padStart(2, "0"))), /* @__PURE__ */ import_react5.default.createElement("span", { className: "unit-label" }, "SECONDS"))) : /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-completed-banner" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "completed-sparkles" }, "\u{1F38A} \u{1F451} \u{1F38A}"), /* @__PURE__ */ import_react5.default.createElement("h3", { className: "completed-title" }, "The Royal Wedding Celebration Has Commenced!"), /* @__PURE__ */ import_react5.default.createElement("p", { className: "completed-subtitle" }, "May Lord Shiva and Mata Parvati forever bless Akash & Reena and Shivani & Dheeraj with eternal bliss!"))), /* @__PURE__ */ import_react5.default.createElement("div", { className: "countdown-muhurat-strip" }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "muhurat-icon" }, "\u{1F549}\uFE0F"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "muhurat-text" }, "Auspicious Margashirsha Shukla Paksh \u2022 Vedic Wedding Rituals"), /* @__PURE__ */ import_react5.default.createElement("span", { className: "muhurat-icon" }, "\u{1F549}\uFE0F"))));
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

Looking forward to celebrating this grand royal wedding at Kumawat Vatika, Pali!`;
      const cleanPhone = phoneTarget.replace(/[^0-9]/g, "");
      const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(formattedText)}`;
      window.open(url, "_blank");
      setSentSuccess(true);
      setTimeout(() => setSentSuccess(false), 4e3);
    };
    return /* @__PURE__ */ import_react6.default.createElement("section", { className: "wedding-section family-compliments-section", id: "family-section" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "section-royal-card" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "card-border-gold-outer" }), /* @__PURE__ */ import_react6.default.createElement("div", { className: "card-border-gold-inner" }), /* @__PURE__ */ import_react6.default.createElement("div", { className: "section-header-flourish" }, /* @__PURE__ */ import_react6.default.createElement("span", { className: "shloka-text" }, "|| SASNEH NIMANTRAN ||"), /* @__PURE__ */ import_react6.default.createElement("h2", { className: "section-title-gold" }, "WITH BEST COMPLIMENTS FROM"), /* @__PURE__ */ import_react6.default.createElement("p", { className: "section-subtitle-script" }, "Warmest hospitality from the Gehlot Parivar & beloved extended kinfolk"), /* @__PURE__ */ import_react6.default.createElement("div", { className: "section-title-divider" }, /* @__PURE__ */ import_react6.default.createElement("span", { className: "divider-line" }), /* @__PURE__ */ import_react6.default.createElement("span", { className: "divider-star" }, "\u2726"), /* @__PURE__ */ import_react6.default.createElement("span", { className: "divider-line" }))), /* @__PURE__ */ import_react6.default.createElement("div", { className: "family-invitation-quote-box", style: { maxWidth: "780px", margin: "0 auto 28px" } }, /* @__PURE__ */ import_react6.default.createElement("p", { className: "quote-text", style: { fontStyle: "italic", color: "var(--c-headings)", fontSize: "15px" } }, "\u201CWe have penned this invitation with boundless affection, please accept our humble respect;", /* @__PURE__ */ import_react6.default.createElement("br", null), "This sacred occasion is truly priceless, please bestow upon us your cherished moments.\u201D"), /* @__PURE__ */ import_react6.default.createElement("p", { className: "quote-text", style: { marginTop: "12px", fontSize: "14px" } }, "With the divine blessings of Lord Vinayaka and our revered ancestors, the ", /* @__PURE__ */ import_react6.default.createElement("strong", null, "Gehlot Family"), " cordially invites you and your family to grace the auspicious dual wedding celebrations of ", /* @__PURE__ */ import_react6.default.createElement("strong", null, "Akash & Reena"), " and ", /* @__PURE__ */ import_react6.default.createElement("strong", null, "Shivani & Dheeraj"), ".")), /* @__PURE__ */ import_react6.default.createElement("div", { className: "compliments-hosts-grid", style: { marginBottom: "32px" } }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "host-contact-card" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "host-ornament-header" }, /* @__PURE__ */ import_react6.default.createElement("span", { className: "host-namaste-icon" }, "\u{1F64F}"), /* @__PURE__ */ import_react6.default.createElement("span", { className: "host-honorific" }, "FAMILY ELDER & HOST")), /* @__PURE__ */ import_react6.default.createElement("h3", { className: "host-name" }, "Mr. Kailashchandra Gehlot"), /* @__PURE__ */ import_react6.default.createElement("p", { className: "host-relation" }, "Father of Akash & Shivani"), /* @__PURE__ */ import_react6.default.createElement("div", { className: "host-contact-action-row" }, /* @__PURE__ */ import_react6.default.createElement("a", { href: `tel:${phone1}`, className: "contact-action-btn btn-call", title: "Call Kailashchandra Gehlot" }, /* @__PURE__ */ import_react6.default.createElement("span", { className: "action-icon" }, "\u{1F4DE}"), /* @__PURE__ */ import_react6.default.createElement("span", { className: "action-text" }, "+91 9214537106")), /* @__PURE__ */ import_react6.default.createElement(
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
    )), /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-sacred-blessing" }, "|| OM SHREE GANESHAY NAMAH \u2022 SHUBHAM BHAVATU ||"), /* @__PURE__ */ import_react7.default.createElement("blockquote", { className: "footer-treasured-quote" }, "\u201CYour Presence Is Our Greatest Gift.", /* @__PURE__ */ import_react7.default.createElement("br", null), "Your Blessings Are Our Greatest Treasure.\u201D"), /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-couple-signature" }, /* @__PURE__ */ import_react7.default.createElement("h2", { className: "footer-couple-names", style: { fontSize: "clamp(20px, 4.2vw, 30px)" } }, "AKASH & REENA \u2022 SHIVANI & DHEERAJ"), /* @__PURE__ */ import_react7.default.createElement("p", { className: "footer-regards-line" }, "With Love and Warm Regards"), /* @__PURE__ */ import_react7.default.createElement("p", { className: "footer-family-signoff" }, "Gehlot Parivar \u2022 Ramdev Road, Pali, Rajasthan")), /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-bottom-divider" }), /* @__PURE__ */ import_react7.default.createElement("div", { className: "footer-sub-bar" }, /* @__PURE__ */ import_react7.default.createElement("p", { className: "sub-bar-text" }, "The Royal Wedding Celebration 2026 \u2022 Dual Wedding \u2022 Pali, Rajasthan"), /* @__PURE__ */ import_react7.default.createElement(
      "button",
      {
        onClick: scrollToTop,
        style: {
          background: "transparent",
          border: "1px solid var(--c-border-gold)",
          borderRadius: "20px",
          color: "var(--c-headings)",
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
