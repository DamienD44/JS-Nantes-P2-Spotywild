import { useState } from "react";
import React from "react";

interface TrackI {
  id: number;
  title: string;
  src: string;
}

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState<TrackI | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const tracks = [
    {
      id: 1,
      title: "Wanna Be Startin' Something",
      src: "<assets /Music/1- Wanna Be Startin Somethin.mp3",
    },
    {
      id: 2,
      title: "Baby Be Mine",
      src: "/assets/Music/2- Griff Lamar Michael Jackson - Baby Be Mine.mp3",
    },
    {
      id: 3,
      title: "The Girl Is Mine",
      src: "/assets/Music/3- Michael Jackson - The Girl Is Mine ft. Paul McCartney.mp3",
    },
    {
      id: 4,
      title: "Baby Be Mine",
      src: "assetsMusic\x04- Michael Jackson - Thriller - Thriller.mp3",
    },
    {
      id: 5,
      title: "Baby Be Mine",
      src: "assetsMusic\x05- Michael Jackson - Beat It (Official Audio).mp3",
    },
    {
      id: 6,
      title: "Baby Be Mine",
      src: "assetsMusic\x06- Michael Jackson - Billie Jean (Lyrics).mp3",
    },
    {
      id: 7,
      title: "Baby Be Mine",
      src: "assetsMusic\x07- Michael Jackson - Human Nature (Lyrics Video) 🎤.mp3",
    },
    {
      id: 8,
      title: "Baby Be Mine",
      src: "assetsMusic\x08- Michael Jackson - P.Y.T. (Pretty Young Thing) (Lyrics).mp3",
    },
    {
      id: 9,
      title: "Baby Be Mine",
      src: "assetsMusic\x09- Michael Jackson  - The lady in my life   (Lyrics).mp3",
    },
  ];

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
    <div className="music-player">
      <h2>Lecteur de Musique</h2>
      <ul className="music-list">
        {tracks.map((track) => (
          <li key={track.id}>
            <button type="button" onClick={() => playTrack(track)}>
              ▶️ {track.title}
            </button>
          </li>
        ))}
      </ul>

      {currentTrack && (
        <div className="current-track">
          <h3>Lecture : {currentTrack.title}</h3>
          <button type="button" onClick={togglePlayPause}>
            {isPlaying ? "⏸️ Pause" : "▶️ Lecture"}
          </button>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
