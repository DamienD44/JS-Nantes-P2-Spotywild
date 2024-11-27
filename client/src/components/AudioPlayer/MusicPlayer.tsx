import { useRef, useState } from "react";
import type { SongI } from "../../types/musicSection";
import "./MusicPlayer.css";

interface TrackI {
  id: number;
  title: string;
  src: string;
}

const MusicPlayer = ({ title, src, id, imgAlbum }: SongI) => {
  const [currentTrack, setCurrentTrack] = useState<TrackI | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playTrack = (track: TrackI) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setCurrentTrack(track);
    setIsPlaying(true);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 0);
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      {!isPlaying ? (
        <>
          <button
            className="music-player"
            type="button"
            onClick={() => playTrack({ title, src, id })}
          >
            <img src={imgAlbum} alt="" />
            <span className="music-title-span">{title}</span>
            <span className="music-btn-span">▶️</span>
          </button>
        </>
      ) : (
        <>
          <button
            className="music-player"
            type="button"
            onClick={togglePlayPause}
          >
            <img src={imgAlbum} alt="" />
            <span className="music-title-span">{title}</span>
            <span className="music-btn-span">⏸️</span>
          </button>
        </>
      )}

      {isPlaying && (
        <div className="current-track">
          {/* biome-ignore lint/a11y/useMediaCaption: <explanation> Removed because biome require a track file for audio tag*/}
          <audio
            ref={audioRef}
            src={currentTrack ? currentTrack.src : undefined}
            onEnded={() => setIsPlaying(false)}
          />
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
