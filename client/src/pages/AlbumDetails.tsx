import { useLoaderData } from "react-router-dom";

export default function AlbumDetails() {
  const data = useLoaderData();

  console.info(data);

  return <h1>Albums</h1>;
}
