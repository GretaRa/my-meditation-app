import React, { useState, useRef, useEffect } from "react";

const AudioPlayer = ({ audioSource, isPlaying, onPlayPause, duration }) => {
  const audioRef = useRef(null);
  const timerIntervalRef = useRef(null);
  const [playing, setPlaying] = useState(isPlaying);
  const [remainingTime, setRemainingTime] = useState(null);
  const targetDuration = duration * 60; // Target duration in seconds (10 minutes)

  useEffect(() => {
    if (audioRef.current) {
      if (audioSource) {
        audioRef.current.src = audioSource;
        if (playing) {
          audioRef.current.play();
          startTimer();
        }
      } else {
        audioRef.current.pause();
        setPlaying(false);
        setRemainingTime(null);
        clearTimer();
      }
    }
  }, [audioSource, playing, duration]);

  const startTimer = () => {
    clearTimer(); // Clear any existing interval before starting a new one
    timerIntervalRef.current = setInterval(() => {
      const timeLeft = calculateRemainingTime();
      setRemainingTime(timeLeft);
      // Check if the desired duration is reached
      if (audioRef.current.currentTime >= targetDuration) {
        handlePause();
      }
    }, 1000);
  };

  const clearTimer = () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (playing) {
        handlePause();
      } else {
        audioRef.current.play();
        setPlaying(true);
        onPlayPause(true);
        startTimer();
      }
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlaying(false);
      onPlayPause(false);
      setRemainingTime(null);
      clearTimer();
    }
  };

  const calculateRemainingTime = () => {
    if (audioRef.current) {
      const timeLeft = targetDuration - audioRef.current.currentTime;
      const minutes = Math.floor(timeLeft / 60);
      const seconds = Math.floor(timeLeft % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    return '0:00';
  };

  return (
    <div>
      <audio ref={audioRef} />
      <button
        className="border border-white rounded-full px-2 py-1 hover:bg-zinc-500"
        onClick={handlePlayPause}
      >
        {playing ? `Pause (${remainingTime})` : "Play"}
      </button>
    </div>
  );
};

export default AudioPlayer;