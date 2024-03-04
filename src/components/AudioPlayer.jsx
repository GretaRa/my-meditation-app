import React, { useState, useRef, useEffect } from "react";

const AudioPlayer = ({ audioSource, isPlaying, onPlayPause }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(isPlaying);
  const [remainingTime, setRemainingTime] = useState(null);
  const targetDuration = 10 * 60; // Target duration in seconds (10 minutes)

  useEffect(() => {
    if (audioRef.current) {
      if (audioSource) {
        audioRef.current.src = audioSource;
        if (playing) {
          audioRef.current.play();
          // Set a timer to update the remaining time every second
          const timerInterval = setInterval(() => {
            const timeLeft = calculateRemainingTime();
            setRemainingTime(timeLeft);
          }, 1000);
          return () => clearInterval(timerInterval);
        }
      } else {
        audioRef.current.pause();
        setPlaying(false);
        setRemainingTime(null);
      }
    }
  }, [audioSource, playing]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (playing) {
        handlePause();
      } else {
        audioRef.current.play();
        setPlaying(true);
        onPlayPause(true);
        // Set a timer to update the remaining time every second
        const timerInterval = setInterval(() => {
          const timeLeft = calculateRemainingTime();
          setRemainingTime(timeLeft);
          // Check if the desired duration is reached
          if (audioRef.current.currentTime >= targetDuration) {
            handlePause();
          }
        }, 1000);
        return () => clearInterval(timerInterval);
      }
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlaying(false);
      onPlayPause(false);
      setRemainingTime(null);
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
