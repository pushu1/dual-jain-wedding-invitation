import React, { useState, useEffect, useRef } from 'react';

// Official Wedding Song: Dhin Dhin (from Teena Weds Kuldeep / Aarohi-Tatsat Wedding)
const YOUTUBE_VIDEO_ID = 'qJFPtcK8qBg';
// Exact start timestamp specified by user: 00:30 (30 seconds)
const START_TIME_SECONDS = 30;

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const playerRef = useRef(null);
  const hasInitiallyStartedRef = useRef(false);
  const pendingPlayRef = useRef(false);

  // Initialize YouTube IFrame Player with rock-solid lifecycle handling
  useEffect(() => {
    let checkInterval = null;

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
              // YT.PlayerState: PLAYING=1, PAUSED=2, BUFFERING=3, CUED=5, ENDED=0
              if (event.data === 1) {
                setIsPlaying(true);
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
              console.warn('YouTube BGM Player notice:', err);
            }
          }
        });
        return true;
      } catch (err) {
        console.warn('Error setting up YT Player:', err);
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
        window.dispatchEvent(new CustomEvent('weddingMusicStatus', { detail: { isPlaying: true } }));
      } catch (e) {
        console.warn('Autoplay deferred for user gesture:', e);
        pendingPlayRef.current = true;
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

    return () => {
      if (checkInterval) clearInterval(checkInterval);
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

  return (
    <>
      {/* Invisible YouTube IFrame Container exactly matching Teena Weds Kuldeep */}
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

      {/* Floating Audio Controller Badge in Hindi */}
      <aside className="floating-music-widget" aria-label="विवाह पृष्ठभूमि संगीत नियंत्रण">
        <div className={`royal-music-pill-btn ${isPlaying ? 'is-playing' : 'is-paused'}`}>
          
          {/* Main Play / Pause Trigger */}
          <button
            type="button"
            className="music-action-trigger"
            onClick={handlePlayToggle}
            title={isPlaying ? 'विवाह संगीत रोकें' : 'विवाह संगीत चालू करें (30 सेकंड से)'}
            aria-label={isPlaying ? 'संगीत रोकें' : 'संगीत चालू करें'}
          >
            <span className="music-pill-icon" aria-hidden="true">
              {isPlaying ? '🎵' : '▶'}
            </span>
            <span className="music-pill-text">
              {isPlaying ? 'मांगलिक शहनाई' : 'संगीत शुरू करें'}
            </span>

            {/* Sound Wave Equalizer Bars Animation */}
            {isPlaying && (
              <span className="music-wave-bars" aria-hidden="true">
                <span className="bar bar-1"></span>
                <span className="bar bar-2"></span>
                <span className="bar bar-3"></span>
                <span className="bar bar-4"></span>
              </span>
            )}
          </button>

          {/* Mute / Unmute Secondary Action */}
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
