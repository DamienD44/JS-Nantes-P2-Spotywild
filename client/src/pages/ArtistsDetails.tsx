import { useLoaderData } from "react-router-dom";

export default function ArtistDetails() {
  const data = useLoaderData();

  console.info(data);

  return <h1>Artist</h1>;
}
