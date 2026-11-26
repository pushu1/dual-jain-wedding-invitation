import React, { useState, useEffect, useRef } from 'react';

// Official Traditional Rajasthani Wedding Music Reference: Bindraja by Ismail Langa Group
const YOUTUBE_VIDEO_ID = '8W-PD8Fbci0';
// Exact start time specified by user: 00:14 (14 seconds)
const START_TIME_SECONDS = 14;

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isFallbackActive, setIsFallbackActive] = useState(false);

  const playerRef = useRef(null);
  const pendingPlayRef = useRef(false);
  const audioCtxRef = useRef(null);
  const oscIntervalRef = useRef(null);

  // Initialize YouTube Player
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
            onReady: (event) => {
              setIsReady(true);
              if (pendingPlayRef.current) {
                pendingPlayRef.current = false;
                startPlayAt14();
              }
            },
            onStateChange: (event) => {
              // YT.PlayerState.PLAYING = 1
              if (event.data === 1) {
                setIsPlaying(true);
              } 
              // YT.PlayerState.PAUSED = 2
              else if (event.data === 2) {
                setIsPlaying(false);
              } 
              // YT.PlayerState.ENDED = 0 -> Loop back to 14 seconds
              else if (event.data === 0) {
                if (playerRef.current && playerRef.current.seekTo) {
                  playerRef.current.seekTo(START_TIME_SECONDS, true);
                  playerRef.current.playVideo();
                }
              }
            },
            onError: (err) => {
              console.warn('YouTube BGM Player notice, using fallback audio if needed:', err);
              setIsFallbackActive(true);
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
      }, 300);
    }

    const startPlayAt14 = () => {
      if (playerRef.current && playerRef.current.playVideo) {
        try {
          playerRef.current.seekTo(START_TIME_SECONDS, true);
          playerRef.current.unMute();
          playerRef.current.playVideo();
          setIsPlaying(true);
          setIsMuted(false);
        } catch (e) {
          console.warn('Autoplay prevented or deferred:', e);
          pendingPlayRef.current = true;
        }
      } else {
        pendingPlayRef.current = true;
      }
    };

    // Global APIs exposed for the Fireworks intro, Hero button, and navigation
    window.playWeddingMusic = () => {
      startPlayAt14();
    };

    window.pauseWeddingMusic = () => {
      if (playerRef.current && playerRef.current.pauseVideo) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else if (audioCtxRef.current) {
        try { audioCtxRef.current.suspend(); } catch (e) {}
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
      try {
        if (playerRef.current && playerRef.current.destroy) {
          playerRef.current.destroy();
        }
      } catch (e) {}
      if (oscIntervalRef.current) clearInterval(oscIntervalRef.current);
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
      {/* Hidden YouTube IFrame Holder */}
      <div
        id="youtube-bgm-container"
        style={{
          position: 'fixed',
          bottom: '-100px',
          left: '-100px',
          width: '1px',
          height: '1px',
          opacity: 0.01,
          pointerEvents: 'none',
          zIndex: -1
        }}
        aria-hidden="true"
      />

      {/* Floating Audio Controller Badge */}
      <aside className="floating-music-widget" aria-label="Wedding Background Music Controls">
        <div className={`royal-music-pill-btn ${isPlaying ? 'is-playing' : 'is-paused'}`}>
          
          {/* Main Play / Pause Trigger */}
          <button
            type="button"
            className="music-action-trigger"
            onClick={handlePlayToggle}
            title={isPlaying ? 'Pause Royal Wedding Music' : 'Play Royal Wedding Music (from 00:14)'}
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
          >
            <span className="music-pill-icon" aria-hidden="true">
              {isPlaying ? '🎵' : '▶'}
            </span>
            <span className="music-pill-text">
              {isPlaying ? 'Royal Shehnai' : 'Play Music'}
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
              title={isMuted ? 'Unmute Music' : 'Mute Music'}
              aria-label={isMuted ? 'Unmute music' : 'Mute music'}
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
