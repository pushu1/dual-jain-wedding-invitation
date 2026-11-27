import React, { useState, useEffect, useRef } from 'react';

// Official Wedding Song: Dhin Dhin (from Teena Weds Kuldeep / Aarohi-Tatsat Wedding)
const YOUTUBE_VIDEO_ID = 'qJFPtcK8qBg';
// Exact starting timestamp specified by user: 00:30 (30 seconds)
const START_TIME_SECONDS = 30;

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const playerRef = useRef(null);
  const hasInitiallyStartedRef = useRef(false);
  const pendingPlayRef = useRef(false);

  // Initialize YouTube IFrame Player immediately on component mount
  useEffect(() => {
    let checkInterval = null;
    let autoplayCheckTimeout = null;

    const setupPlayer = () => {
      if (!window.YT || !window.YT.Player) return false;
      const container = document.getElementById('youtube-bgm-container');
      if (!container) return false;
      if (playerRef.current) return true;

      try {
        playerRef.current = new window.YT.Player('youtube-bgm-container', {
          height: '1',
          width: '1',
          videoId: YOUTUBE_VIDEO_ID,
          playerVars: {
            autoplay: 1, // Attempt automatic playback immediately
            start: START_TIME_SECONDS, // Start at 00:30
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
              // Immediately attempt audible playback from 30 seconds
              attemptAutoplay();
            },
            onStateChange: (event) => {
              // YT.PlayerState: PLAYING=1, PAUSED=2, BUFFERING=3, CUED=5, ENDED=0
              if (event.data === 1) {
                setIsPlaying(true);
                setAutoplayBlocked(false); // Playback active!
                window.isWeddingMusicPlaying = true;
                window.dispatchEvent(new CustomEvent('weddingMusicStatus', { detail: { isPlaying: true } }));
              } else if (event.data === 2) {
                setIsPlaying(false);
                window.isWeddingMusicPlaying = false;
                window.dispatchEvent(new CustomEvent('weddingMusicStatus', { detail: { isPlaying: false } }));
              } else if (event.data === 0) {
                // Loop seamlessly back to 30s
                if (playerRef.current && playerRef.current.seekTo) {
                  playerRef.current.seekTo(START_TIME_SECONDS, true);
                  playerRef.current.playVideo();
                }
              }
            },
            onError: (err) => {
              const code = (err && err.data) || 'Unknown';
              console.warn('YouTube BGM Player notice/error:', code);
              setErrorMessage(`संगीत सेवा सूचना (कोड ${code})`);
            }
          }
        });
        return true;
      } catch (err) {
        console.warn('Error setting up YT Player:', err);
        setErrorMessage('संगीत प्लेयर प्रारंभ करने में त्रुटि');
        return false;
      }
    };

    if (!setupPlayer()) {
      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof prevCallback === 'function') prevCallback();
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
        console.warn('Autoplay call deferred:', e);
      }

      // Check whether modern browser policy permitted or blocked autoplay
      autoplayCheckTimeout = setTimeout(() => {
        if (playerRef.current && playerRef.current.getPlayerState) {
          const state = playerRef.current.getPlayerState();
          // State 1 = PLAYING, State 3 = BUFFERING
          if (state !== 1 && state !== 3) {
            console.log('Browser blocked audible autoplay (State: ' + state + '). Presenting Hindi prompt.');
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
        window.dispatchEvent(new CustomEvent('weddingMusicStatus', { detail: { isPlaying: true } }));
      } catch (e) {
        console.warn('Playback gesture required:', e);
        pendingPlayRef.current = true;
        setAutoplayBlocked(true);
      }
    };

    // Global window APIs for Fireworks intro, Hero section, and Navbar
    window.playWeddingMusic = () => {
      startPlayAt30();
    };

    window.pauseWeddingMusic = () => {
      if (playerRef.current && playerRef.current.pauseVideo) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
        window.isWeddingMusicPlaying = false;
        window.dispatchEvent(new CustomEvent('weddingMusicStatus', { detail: { isPlaying: false } }));
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

    // Optional seamless first interaction listener to unlock audio if blocked
    const handleFirstUserInteraction = () => {
      if (!window.isWeddingMusicPlaying && playerRef.current) {
        try {
          startPlayAt30();
        } catch (e) {}
      }
    };
    window.addEventListener('click', handleFirstUserInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', handleFirstUserInteraction, { once: true, passive: true });

    return () => {
      if (checkInterval) clearInterval(checkInterval);
      if (autoplayCheckTimeout) clearTimeout(autoplayCheckTimeout);
      window.removeEventListener('click', handleFirstUserInteraction);
      window.removeEventListener('touchstart', handleFirstUserInteraction);
      window.playWeddingMusic = null;
      window.pauseWeddingMusic = null;
      window.toggleWeddingMusic = null;
      window.toggleMuteWeddingMusic = null;
    };
  }, [isPlaying, isMuted]);

  const handlePlayToggle = () => {
    if (typeof window.toggleWeddingMusic === 'function') {
      window.toggleWeddingMusic();
    }
  };

  const handleMuteToggle = (e) => {
    e.stopPropagation();
    if (typeof window.toggleMuteWeddingMusic === 'function') {
      window.toggleMuteWeddingMusic();
    }
  };

  const handleProminentPromptClick = (e) => {
    e.stopPropagation();
    setAutoplayBlocked(false);
    if (typeof window.playWeddingMusic === 'function') {
      window.playWeddingMusic();
    }
  };

  return (
    <>
      {/* Invisible YouTube IFrame Container */}
      <div
        id="youtube-bgm-container"
        aria-hidden="true"
        style={{
          position: 'fixed',
          width: '1px',
          height: '1px',
          bottom: '0',
          right: '0',
          opacity: 0.001,
          pointerEvents: 'none',
          zIndex: -1
        }}
      />

      {/* PROMINENT HINDI PROMPT IF BROWSER BLOCKS AUTOPLAY (Non-blocking, does not hide invitation) */}
      {autoplayBlocked && !isPlaying && (
        <aside className="prominent-autoplay-blocked-banner" role="alert" aria-label="संगीत प्लेबैक अनुमति">
          <div className="autoplay-prompt-content">
            <span className="prompt-shehnai-icon" aria-hidden="true">🎺</span>
            <span className="prompt-hindi-text">
              मधुर शहनाई की धुन सुनने के लिए यहाँ स्पर्श करें
            </span>
          </div>
          <button
            type="button"
            className="btn-autoplay-start-prompt"
            onClick={handleProminentPromptClick}
            aria-label="संगीत शुरू करें"
          >
            <span className="btn-sparkle-mini">✦</span>
            <span>संगीत शुरू करें</span>
            <span className="btn-sparkle-mini">✦</span>
          </button>
        </aside>
      )}

      {/* Error message indicator if YouTube API returns error */}
      {errorMessage && (
        <aside className="music-error-notice" role="alert" aria-live="assertive">
          <span>⚠️ {errorMessage}</span>
          <button type="button" onClick={() => setErrorMessage(null)} className="btn-dismiss-error">✕</button>
        </aside>
      )}

      {/* Floating Audio Controller Badge with EXACT User-Requested Hindi Labels */}
      <aside className="floating-music-widget" aria-label="विवाह पृष्ठभूमि संगीत नियंत्रण">
        <div className={`royal-music-pill-btn ${isPlaying ? 'is-playing' : 'is-paused'}`}>
          
          {/* Main Play / Pause Trigger with User-Specified Hindi Labels */}
          <button
            type="button"
            className="music-action-trigger"
            onClick={handlePlayToggle}
            title={isPlaying ? 'संगीत रोकें' : 'संगीत चालू करें'}
            aria-label={isPlaying ? 'संगीत रोकें' : 'संगीत चालू करें'}
          >
            <span className="music-pill-icon" aria-hidden="true">
              {isPlaying ? '⏸' : '▶'}
            </span>
            <span className="music-pill-text">
              {isPlaying ? 'संगीत रोकें' : 'संगीत चालू करें'}
            </span>

            {/* Sound Wave Equalizer Bars Animation - ONLY when actual playback is confirmed */}
            {isPlaying && (
              <span className="music-wave-bars" aria-hidden="true">
                <span className="bar bar-1"></span>
                <span className="bar bar-2"></span>
                <span className="bar bar-3"></span>
                <span className="bar bar-4"></span>
              </span>
            )}
          </button>

          {/* Mute / Unmute Secondary Action with User-Specified Hindi Labels */}
          {isPlaying && (
            <button
              type="button"
              className="music-mute-trigger"
              onClick={handleMuteToggle}
              title={isMuted ? 'आवाज़ चालू करें' : 'आवाज़ बंद करें'}
              aria-label={isMuted ? 'आवाज़ चालू करें' : 'आवाज़ बंद करें'}
            >
              <span className="mute-icon" aria-hidden="true">
                {isMuted ? '🔇' : '🔊'}
              </span>
            </button>
          )}

        </div>
      </aside>
    </>
  );
}
