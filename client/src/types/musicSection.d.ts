export interface MusicData {
  id: number;
  titreImg: string;
  genre: string;
  color: string;
  artistes: ArtistI[];
}

export interface ArtistI {
  id: number;
  name: string;
  country: string;
  imgSrc: string;
  description: string;
  albums: AlbumI[];
}

export interface AlbumI {
  id: number;
  albumName: string;
  albumImg: string;
  description: string;
  songs: string[] | SongI[];
}

export interface SongI {
  id: number;
  title: string;
  src: string;
  imgAlbum?: string;
}

export interface CarouselDataI {
  image: string;
  name: string;
  description: string;
  id: number;
}
