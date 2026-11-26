import React, { useState, useEffect, useRef } from 'react';

const YOUTUBE_VIDEO_ID = 'qJFPtcK8qBg'; // Royal Shehnai & Sitar Instrumental
const START_TIME_SECONDS = 30;

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef(null);
  const pendingPlayRef = useRef(false);

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
      } catch (e) {}
    };
  }, [isPlaying]);

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
      <div className="floating-music-toggle-wrapper">
        <button
          className={`royal-music-pill-btn ${isPlaying ? 'playing' : 'paused'}`}
          onClick={() => {
            if (typeof window.toggleWeddingMusic === 'function') {
              window.toggleWeddingMusic();
            }
          }}
          title={isPlaying ? 'Pause Royal Wedding Music' : 'Play Royal Wedding Music'}
          aria-label="Toggle wedding instrumental music"
        >
          <span className="music-pill-icon">{isPlaying ? '🎵' : '🔇'}</span>
          <span className="music-pill-text">{isPlaying ? 'Royal Shehnai' : 'Play Music'}</span>
          {isPlaying && (
            <span className="music-wave-bars">
              <span className="bar bar-1"></span>
              <span className="bar bar-2"></span>
              <span className="bar bar-3"></span>
            </span>
          )}
        </button>
      </div>
    </>
  );
}
