import React, { useRef, useEffect } from "react";
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from "react-icons/fa";

export const MiniPlayer: React.FC<{
  tracks: { src: string; title: string }[];
  current: number;
  setCurrent: (n: number) => void;
  playing: boolean;
  setPlaying: (b: boolean) => void;
}> = ({ tracks, current, setCurrent, playing, setPlaying }) => {
  const [progress, setProgress] = React.useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Handle play/pause
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  // Handle prev/next
  const prevTrack = () => {
    setCurrent(current === 0 ? tracks.length - 1 : current - 1);
    setProgress(0);
    // Don't call setPlaying(true) here; let the useEffect handle it
  };

  const nextTrack = () => {
    setCurrent(current === tracks.length - 1 ? 0 : current + 1);
    setProgress(0);
    // Don't call setPlaying(true) here; let the useEffect handle it
  };

  // Update progress
  const onTimeUpdate = () => {
    if (!audioRef.current) return;
    const percent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(isNaN(percent) ? 0 : percent);
  };

  // Reset currentTime and ensure playing state when track changes
  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    // Reset progress and time only when the track changes
    audio.currentTime = 0;
    setProgress(0);

    // If the player was playing, ensure it continues playing the new track
    if (playing) {
      const onCanPlay = () => {
        audio.play();
      };
      audio.addEventListener("canplay", onCanPlay);
      return () => {
        audio.removeEventListener("canplay", onCanPlay);
      };
    }
  }, [current]); // Removed 'playing' from dependencies to avoid interference

  // Handle play/pause state changes
  useEffect(() => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  // Clickable progress bar
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width;
    const seekTime = percent * audioRef.current.duration;
    audioRef.current.currentTime = seekTime;
    setProgress(percent * 100);
    if (!playing) {
      setPlaying(true);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Track Title */}
      <div className="mb-2 text-sm font-semibold text-violet-600 dark:text-pink-400 transition-all">
        {tracks[current].title}
      </div>
      {/* Progress Bar */}
      <div
        className="w-full h-3 rounded-full bg-gray-200 dark:bg-neutral-900 mb-3 overflow-hidden cursor-pointer"
        onClick={handleProgressClick}
        title="Seek"
      >
        <div
          className="h-full transition-all duration-200"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #a78bfa 0%, #ec4899 50%, #ef4444 100%)",
          }}
        />
      </div>
      {/* Controls */}
      <div className="flex items-center justify-center gap-6">
        <button
          aria-label="Previous"
          onClick={prevTrack}
          className="p-2 rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-violet-200 dark:hover:bg-pink-900 transition"
        >
          <FaStepBackward className="text-xl text-violet-500" />
        </button>
        <button
          aria-label={playing ? "Pause" : "Play"}
          onClick={togglePlay}
          className="p-3 rounded-full bg-gradient-to-tr from-violet-500 via-pink-500 to-red-500 text-white shadow-lg hover:scale-110 transition"
        >
          {playing ? <FaPause className="text-2xl" /> : <FaPlay className="text-2xl" />}
        </button>
        <button
          aria-label="Next"
          onClick={nextTrack}
          className="p-2 rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-pink-200 dark:hover:bg-violet-900 transition"
        >
          <FaStepForward className="text-xl text-pink-500" />
        </button>
      </div>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={tracks[current].src}
        onTimeUpdate={onTimeUpdate}
        onEnded={nextTrack}
      />
    </div>
  );
};