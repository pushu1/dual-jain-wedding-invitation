/**
 * DUAL JAIN ROYAL WEDDING INVITATION - APPLICATION CONTROLLER
 * Comprehensive Interactive Features & Event Handlers
 */

(function () {
  'use strict';

  // 1. Audio Controller with HTML5 Audio & Web Audio API Synthesis Fallback
  let isPlaying = false;
  let audioElem = null;
  let audioContext = null;
  let synthInterval = null;

  function initAudio() {
    audioElem = new Audio('assets/audio/wedding_bgm.mp3');
    audioElem.loop = true;
    audioElem.volume = 0.65;

    audioElem.addEventListener('play', () => {
      isPlaying = true;
      updateMusicButtons(true);
    });

    audioElem.addEventListener('pause', () => {
      isPlaying = false;
      updateMusicButtons(false);
    });

    audioElem.addEventListener('error', () => {
      console.warn("Audio file playback issue. Enabling Web Audio procedural tanpura & shehnai harmonics fallback.");
    });
  }

  function playWeddingMusic() {
    if (!audioElem) initAudio();

    const playPromise = audioElem.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        isPlaying = true;
        updateMusicButtons(true);
      }).catch(err => {
        console.log("Audio autoplay prevented or file loading fallback needed:", err);
        startProceduralWeddingHarmonics();
      });
    }
  }

  function toggleWeddingMusic() {
    if (!audioElem) initAudio();

    if (isPlaying) {
      audioElem.pause();
      stopProceduralWeddingHarmonics();
      isPlaying = false;
      updateMusicButtons(false);
      showToast("Music Paused");
    } else {
      playWeddingMusic();
      showToast("Playing Royal Wedding Music");
    }
  }

  function updateMusicButtons(playing) {
    const musicBtn = document.getElementById('musicToggleBtn');
    const musicWave = document.querySelector('.music-wave');
    const musicText = document.getElementById('musicStatusText');

    if (musicBtn) {
      if (playing) {
        musicBtn.classList.add('playing');
        if (musicWave) musicWave.style.opacity = '1';
        if (musicText) musicText.textContent = 'Pause Music';
      } else {
        musicBtn.classList.remove('playing');
        if (musicWave) musicWave.style.opacity = '0.3';
        if (musicText) musicText.textContent = 'Play Music';
      }
    }
  }

  // Web Audio Procedural Fallback in case external audio isn't available
  function startProceduralWeddingHarmonics() {
    if (audioContext) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      audioContext = new AudioCtx();

      // Gentle Shehnai / Tanpura drone in D (293.66 Hz, 146.83 Hz, 220.0 Hz)
      const baseFreqs = [146.83, 220.0, 293.66, 440.0];
      const masterGain = audioContext.createGain();
      masterGain.gain.setValueAtTime(0.08, audioContext.currentTime);
      masterGain.connect(audioContext.destination);

      baseFreqs.forEach(freq => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, audioContext.currentTime);
        gain.gain.setValueAtTime(0.2, audioContext.currentTime);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start();
      });

      isPlaying = true;
      updateMusicButtons(true);
    } catch (e) {
      console.warn("Web Audio API not supported", e);
    }
  }

  function stopProceduralWeddingHarmonics() {
    if (audioContext) {
      try {
        audioContext.close();
      } catch (e) {}
      audioContext = null;
    }
  }

  // 2. Opening Screen Curtain Reveal
  function setupOpeningScreen() {
    const enterBtn = document.getElementById('enterInvitationBtn');
    const openingScreen = document.getElementById('openingScreen');

    if (enterBtn && openingScreen) {
      enterBtn.addEventListener('click', () => {
        openingScreen.classList.add('hidden-curtain');
        playWeddingMusic();

        // Smooth scroll to top of invitation
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 300);
      });
    }
  }

  // 3. Live Countdown Timer (Target: 12 December 2026, 18:15:00 IST)
  function initCountdown() {
    // 12 December 2026 18:15 IST (+05:30)
    const targetDate = new Date("2026-12-12T18:15:00+05:30").getTime();

    const daysEl = document.getElementById('timerDays');
    const hoursEl = document.getElementById('timerHours');
    const minutesEl = document.getElementById('timerMinutes');
    const secondsEl = document.getElementById('timerSeconds');

    function updateTimer() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
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

  // 4. Guest Name Personalization via Query Parameter
  function setupGuestPersonalization() {
    const urlParams = new URLSearchParams(window.location.search);
    const guestParam = urlParams.get('guest') || urlParams.get('to') || urlParams.get('name');
    const guestDisplay = document.getElementById('guestNameTarget');
    const guestBox = document.getElementById('guestCardContainer');

    if (guestParam && guestDisplay) {
      const cleanName = decodeURIComponent(guestParam).trim();
      guestDisplay.textContent = cleanName;
      if (guestBox) guestBox.style.display = 'inline-block';
    }
  }

  // 5. Toast Notification System
  function showToast(message) {
    const toast = document.getElementById('toastNotification');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // 6. Share Invitation & Copy Link
  function setupSharing() {
    const shareBtn = document.getElementById('shareInvitationBtn');
    const copyBtn = document.getElementById('copyLinkBtn');

    const shareData = {
      title: "Royal Jain Wedding Invitation - Akash & Reena | Shivani & Dheeraj",
      text: "You are cordially invited to celebrate the royal wedding of Akash & Reena and Shivani & Dheeraj on 12 December 2026 at Pali, Rajasthan.",
      url: window.location.href
    };

    if (shareBtn) {
      shareBtn.addEventListener('click', async () => {
        if (navigator.share) {
          try {
            await navigator.share(shareData);
          } catch (err) {
            if (err.name !== 'AbortError') {
              fallbackWhatsAppShare();
            }
          }
        } else {
          fallbackWhatsAppShare();
        }
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
          showToast("Invitation link copied to clipboard!");
        }).catch(() => {
          showToast("Link: " + window.location.href);
        });
      });
    }
  }

  function fallbackWhatsAppShare() {
    const text = encodeURIComponent(
      "Royal Jain Wedding Invitation: We cordially invite you and your family to celebrate the auspicious wedding of Akash & Reena and Shivani & Dheeraj on 12 December 2026. View the full royal card: " + window.location.href
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  }

  // 7. Add to Calendar (.ics file generation)
  window.downloadCalendarEvent = function (eventName, eventDate, eventTime, description) {
    // Generate .ics string
    const icsData = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Gehlot Family//Dual Jain Wedding Invitation//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `SUMMARY:Dual Wedding: ${eventName}`,
      `DESCRIPTION:${description}`,
      "LOCATION:Kumawat Vatika, Punayata Road, Pali, Rajasthan, India",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `${eventName.replace(/\s+/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`Added ${eventName} reminder`);
  };

  // 8. Print & Download PDF Trigger
  function setupPrintPDF() {
    const printBtn = document.getElementById('downloadPdfBtn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        showToast("Preparing printable royal invitation...");
        setTimeout(() => {
          window.print();
        }, 400);
      });
    }
  }

  // Initialization on DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    setupOpeningScreen();
    initCountdown();
    setupGuestPersonalization();
    setupSharing();
    setupPrintPDF();

    const musicBtn = document.getElementById('musicToggleBtn');
    if (musicBtn) {
      musicBtn.addEventListener('click', toggleWeddingMusic);
    }
  });

})();
