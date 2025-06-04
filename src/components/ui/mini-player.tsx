import React, { useRef, useState } from "react";
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from "react-icons/fa";

const tracks = [
  {
    src: "/music/ambient_night.mp3",
    title: "Night Space",
  },
  {
    src: "/music/anime_banger.mp3",
    title: "Anime Banger",
  },
  {
    src: "/music/adventure.mp3",
    title: "Adventure",
  },
];

export const MiniPlayer: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
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
    setCurrent((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
    setProgress(0);
    setPlaying(true);
  };

  const nextTrack = () => {
    setCurrent((prev) => (prev === tracks.length - 1 ? 0 : prev + 1));
    setProgress(0);
    setPlaying(true);
  };

  // Update progress
  const onTimeUpdate = () => {
    if (!audioRef.current) return;
    const percent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(isNaN(percent) ? 0 : percent);
  };

  // Only reset currentTime when track changes
  React.useEffect(() => {
    setProgress(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
    // Do not pause or setPlaying(false) here!
  }, [current]);

  // Only play/pause when playing changes (do NOT reset currentTime here)
  React.useEffect(() => {
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