/**
 * THE ROYAL WEDDING INVITATION WEBSITE - APPLICATION CONTROLLER
 * Full Interactive Features: Particles, Music, Countdown, Filterable Timeline,
 * Mobile Drawer, RSVP System, Calendar Downloads, and Social Sharing.
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. GOLDEN PARTICLE CANVAS ANIMATION (HERO SECTION)
  // =========================================================================
  function initParticleCanvas() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = Math.min(Math.floor(width * 0.04), 50);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.8,
        color: Math.random() > 0.4 ? 'rgba(212, 175, 55, ' : 'rgba(243, 229, 171, ',
        alpha: Math.random() * 0.7 + 0.2,
        speedY: Math.random() * 0.4 + 0.15,
        speedX: (Math.random() - 0.5) * 0.25,
        pulseSpeed: Math.random() * 0.02 + 0.01
      });
    }

    function renderParticles() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.01;
        p.alpha = Math.max(0.15, Math.min(0.85, p.alpha));

        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ')';
        ctx.fill();
      });

      requestAnimationFrame(renderParticles);
    }

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    renderParticles();
  }

  // =========================================================================
  // 2. AUDIO CONTROLLER (BACKGROUND ROYAL WEDDING MUSIC)
  // =========================================================================
  let isMusicPlaying = false;
  let bgAudio = null;
  let audioContext = null;

  function initAudioController() {
    bgAudio = document.getElementById('weddingBgAudio');
    const musicBtn = document.getElementById('navMusicBtn');
    const musicLabel = document.getElementById('musicLabel');

    if (!bgAudio) return;

    bgAudio.volume = 0.65;

    bgAudio.addEventListener('play', () => {
      isMusicPlaying = true;
      if (musicBtn) musicBtn.classList.add('playing');
      if (musicLabel) musicLabel.textContent = 'Pause';
    });

    bgAudio.addEventListener('pause', () => {
      isMusicPlaying = false;
      if (musicBtn) musicBtn.classList.remove('playing');
      if (musicLabel) musicLabel.textContent = 'Music';
    });

    bgAudio.addEventListener('error', () => {
      console.warn("Audio file fallback needed. Activating procedural sound.");
    });

    if (musicBtn) {
      musicBtn.addEventListener('click', toggleMusic);
    }
  }

  function startMusic() {
    if (!bgAudio) return;
    const playPromise = bgAudio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        isMusicPlaying = true;
      }).catch(err => {
        console.log("Audio autoplay restricted. Awaiting user interaction.", err);
        startProceduralTanpura();
      });
    }
  }

  function toggleMusic() {
    if (!bgAudio) return;
    if (isMusicPlaying) {
      bgAudio.pause();
      stopProceduralTanpura();
      isMusicPlaying = false;
      showToast("Music Paused");
    } else {
      startMusic();
      showToast("Playing Royal Wedding Music");
    }
  }

  // Web Audio API procedural harmonics fallback
  function startProceduralTanpura() {
    if (audioContext) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      audioContext = new AudioCtx();

      const freqs = [146.83, 220.0, 293.66];
      const master = audioContext.createGain();
      master.gain.setValueAtTime(0.08, audioContext.currentTime);
      master.connect(audioContext.destination);

      freqs.forEach(f => {
        const osc = audioContext.createOscillator();
        const g = audioContext.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, audioContext.currentTime);
        g.gain.setValueAtTime(0.25, audioContext.currentTime);
        osc.connect(g);
        g.connect(master);
        osc.start();
      });

      isMusicPlaying = true;
      const musicBtn = document.getElementById('navMusicBtn');
      const musicLabel = document.getElementById('musicLabel');
      if (musicBtn) musicBtn.classList.add('playing');
      if (musicLabel) musicLabel.textContent = 'Pause';
    } catch (e) {}
  }

  function stopProceduralTanpura() {
    if (audioContext) {
      try { audioContext.close(); } catch (e) {}
      audioContext = null;
    }
  }

  // =========================================================================
  // 3. HERO CTA: "OPEN WEDDING INVITATION"
  // =========================================================================
  function initHeroCTA() {
    const openBtn = document.getElementById('openInvitationBtn');
    if (openBtn) {
      openBtn.addEventListener('click', () => {
        // Start background music seamlessly on user gesture
        startMusic();

        // Smoothly scroll down to Couples section
        const targetSection = document.getElementById('couples');
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }

        showToast("Welcome to the Royal Wedding Celebration!");
      });
    }
  }

  // =========================================================================
  // 4. MOBILE HAMBURGER DRAWER & SCROLLSPY NAVIGATION
  // =========================================================================
  function initNavigation() {
    const hamburgerBtn = document.getElementById('mobileMenuToggle');
    const drawer = document.getElementById('mobileDrawer');
    const closeBtn = document.getElementById('closeDrawerBtn');
    const drawerLinks = document.querySelectorAll('.drawer-link');
    const desktopLinks = document.querySelectorAll('.nav-desktop-menu .nav-link');

    // Hamburger open/close
    if (hamburgerBtn && drawer) {
      hamburgerBtn.addEventListener('click', () => {
        drawer.classList.add('open');
        drawer.setAttribute('aria-hidden', 'false');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
      });
    }

    if (closeBtn && drawer) {
      closeBtn.addEventListener('click', () => {
        drawer.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
        if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    }

    // Dismiss drawer on link click
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (drawer) {
          drawer.classList.remove('open');
          drawer.setAttribute('aria-hidden', 'true');
          if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (drawer && drawer.classList.contains('open')) {
        if (!drawer.contains(e.target) && !hamburgerBtn.contains(e.target)) {
          drawer.classList.remove('open');
          drawer.setAttribute('aria-hidden', 'true');
          if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });

    // Scrollspy: Highlight active link on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
      let currentSectionId = '';
      const scrollPos = window.pageYOffset + 200;

      sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSectionId = sec.getAttribute('id');
        }
      });

      desktopLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    });
  }

  // =========================================================================
  // 5. REAL-TIME WEDDING COUNTDOWN TIMER
  // Target: Saturday, 12 December 2026, 18:15:00 IST (+05:30)
  // =========================================================================
  function initCountdownTimer() {
    const targetDate = new Date("2026-12-12T18:15:00+05:30").getTime();

    const daysEl = document.getElementById('timerDays');
    const hoursEl = document.getElementById('timerHours');
    const minutesEl = document.getElementById('timerMinutes');
    const secondsEl = document.getElementById('timerSeconds');

    function updateTimer() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        if (daysEl) daysEl.textContent = "00";
        if (hoursEl) hoursEl.textContent = "00";
        if (minutesEl) minutesEl.textContent = "00";
        if (secondsEl) secondsEl.textContent = "00";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
      if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
      if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
      if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  // =========================================================================
  // 6. TIMELINE FILTER TABS (ALL / PRE-WEDDING / MAIN WEDDING)
  // =========================================================================
  function initTimelineFilters() {
    const filterButtons = document.querySelectorAll('.events-filter-bar .filter-btn');
    const eventItems = document.querySelectorAll('.timeline-event-item');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        eventItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // =========================================================================
  // 7. ADD TO CALENDAR (.ICS GENERATION)
  // =========================================================================
  window.downloadCalendarEvent = function (title, dateStr, timeStr, location) {
    const cleanDate = dateStr.replace(/-/g, '');
    const cleanTime = timeStr.replace(/:/g, '') + '00';

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Gehlot Family//Royal Jain Wedding//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `SUMMARY:Royal Wedding: ${title}`,
      `DESCRIPTION:Join us to celebrate the royal wedding of Akash & Reena and Shivani & Dheeraj at Pali, Rajasthan.`,
      `LOCATION:${location}`,
      `DTSTART;TZID=Asia/Kolkata:${cleanDate}T${cleanTime}`,
      `STATUS:CONFIRMED`,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${title.replace(/[^a-zA-Z0-9]/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast(`Added ${title} to calendar!`);
  };

  // =========================================================================
  // 8. INTERACTIVE RSVP SYSTEM (REAL WHATSAPP DISPATCH & LOCAL STORAGE)
  // =========================================================================
  function initRsvpForm() {
    const rsvpForm = document.getElementById('weddingRsvpForm');
    const successCard = document.getElementById('rsvpSuccessCard');
    const successDetails = document.getElementById('rsvpSuccessDetails');

    if (!rsvpForm) return;

    // Check if previously submitted locally
    const savedRsvp = localStorage.getItem('royalWeddingRsvp');
    if (savedRsvp) {
      try {
        const data = JSON.parse(savedRsvp);
        if (successCard && successDetails) {
          successDetails.textContent = `Welcome back, ${data.name}! Your attendance for ${data.count} has been recorded.`;
          successCard.style.display = 'block';
        }
      } catch (e) {}
    }

    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('guestName').value.trim();
      const phone = document.getElementById('guestPhone').value.trim();
      const count = document.getElementById('guestCount').value;
      const message = document.getElementById('guestMessage').value.trim();

      const checkedEvents = [];
      document.querySelectorAll('input[name="eventsAttending"]:checked').forEach(cb => {
        checkedEvents.push(cb.value);
      });

      const eventsSummary = checkedEvents.length > 0 ? checkedEvents.join(', ') : 'All Celebrations';

      // Save locally
      const rsvpData = { name, phone, count, eventsSummary, message, timestamp: new Date().toISOString() };
      localStorage.setItem('royalWeddingRsvp', JSON.stringify(rsvpData));

      // Construct WhatsApp payload
      const waText = encodeURIComponent(
        `*Royal Wedding RSVP Confirmation*\n` +
        `• *Guest Name:* ${name}\n` +
        `• *Phone:* ${phone}\n` +
        `• *Attending Count:* ${count}\n` +
        `• *Ceremonies:* ${eventsSummary}\n` +
        (message ? `• *Message:* "${message}"\n` : '') +
        `\nThank you, Gehlot Family! We look forward to celebrating with you at Kumawat Vatika, Pali.`
      );

      // Open WhatsApp directly to the host's number (+91 9214537106)
      const waUrl = `https://wa.me/919214537106?text=${waText}`;
      window.open(waUrl, '_blank');

      // Update UI
      if (successCard && successDetails) {
        successDetails.textContent = `Thank you, ${name}! Your confirmation for ${count} has been forwarded to the Gehlot family via WhatsApp.`;
        successCard.style.display = 'block';
      }

      showToast("RSVP sent to the family via WhatsApp!");
    });
  }

  // =========================================================================
  // 9. SHARING SUITE (NATIVE SHARE, WHATSAPP, COPY LINK, PRINT)
  // =========================================================================
  function initSharingSuite() {
    const nativeShareBtn = document.getElementById('webShareBtn');
    const copyLinkBtn = document.getElementById('copyInviteLinkBtn');
    const printAuxBtn = document.getElementById('printCardAuxBtn');

    const shareData = {
      title: "Royal Jain Wedding Celebration — Akash & Reena | Shivani & Dheeraj",
      text: "You are cordially invited to celebrate the royal wedding of Akash & Reena and Shivani & Dheeraj on 12 December 2026 at Pali, Rajasthan.",
      url: window.location.href
    };

    if (nativeShareBtn) {
      nativeShareBtn.addEventListener('click', async () => {
        if (navigator.share) {
          try {
            await navigator.share(shareData);
          } catch (err) {
            if (err.name !== 'AbortError') {
              window.open(document.getElementById('whatsAppShareLink').href, '_blank');
            }
          }
        } else {
          window.open(document.getElementById('whatsAppShareLink').href, '_blank');
        }
      });
    }

    if (copyLinkBtn) {
      copyLinkBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
          showToast("Website link copied to clipboard!");
        }).catch(() => {
          showToast("Link: " + window.location.href);
        });
      });
    }

    if (printAuxBtn) {
      printAuxBtn.addEventListener('click', () => {
        showToast("Opening Official PDF Invitation...");
        window.open('dual-jain-wedding-invitation.pdf', '_blank');
      });
    }
  }

  // =========================================================================
  // 10. TOAST NOTIFICATION UTILITY
  // =========================================================================
  function showToast(message) {
    const toast = document.getElementById('websiteToast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // =========================================================================
  // 11. TRADITIONAL WEDDING INVITATION LIGHTBOX MODAL CONTROLLER
  // =========================================================================
  function initInvitationModal() {
    const openBtn = document.getElementById('btnOpenFullInvitation');
    const modal = document.getElementById('invitationModal');
    const closeBtn = document.getElementById('modalCloseBtn');
    const closeBottomBtn = document.getElementById('modalCloseBottomBtn');
    const printBtn = document.getElementById('modalPrintBtn');
    const iframe = document.getElementById('invitationIframe');

    if (!modal) return;

    function openModal() {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      startMusic();
      showToast("Opening Official Wedding Invitation...");
    }

    function closeModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    if (openBtn) {
      openBtn.addEventListener('click', openModal);
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    if (closeBottomBtn) {
      closeBottomBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });

    if (printBtn) {
      printBtn.addEventListener('click', () => {
        try {
          if (iframe && iframe.contentWindow) {
            iframe.contentWindow.focus();
            iframe.contentWindow.print();
          } else {
            window.open('dual-jain-wedding-invitation.pdf', '_blank');
          }
        } catch (err) {
          window.open('dual-jain-wedding-invitation.pdf', '_blank');
        }
      });
    }
  }

  // =========================================================================
  // DOM READY INITIALIZATION
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initParticleCanvas();
    initAudioController();
    initHeroCTA();
    initNavigation();
    initCountdownTimer();
    initTimelineFilters();
    initRsvpForm();
    initSharingSuite();
    initInvitationModal();
  });

})();
