import Albums from "../pages/Albums";

interface ArtistI {
  id: number;
  name: string;
  country: string;
  imgSrc: string;
  description: string;
  albums?: AlbumI[];
}

interface AlbumI {
  albumName: string;
  albumImg: string;
  description: string;
  songs: string[];
  releaseYear?: number;
}

export interface MusicData {
  id: number;
  genre: string;
  artistes: ArtistI[];
}
