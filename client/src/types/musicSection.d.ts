export interface ArtistI {
  id: number;
  name: string;
  country: string;
  imgSrc: string;
  description: string;
  albums?: AlbumI[];
}

interface AlbumI {
  id: number;
  albumName: string;
  albumImg: string;
  description: string;
  songs: string[];
  // releaseYear?: number;
}
