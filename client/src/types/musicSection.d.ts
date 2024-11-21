export interface MusicData {
  id: number;
  titreImg: string;
  genre: string;
  color: string;
  artistes: ArtistI[];
}

interface ArtistI {
  id: number;
  name: string;
  country: string;
  imgSrc: string;
  description: string;
  albums: AlbumI[];
}

interface AlbumI {
  id: number;
  albumName: string;
  albumImg: string;
  description: string;
  songs: string[];
}

export interface CarouselDataI {
  image: string;
  name: string;
  description: string;
  id: number;
}
