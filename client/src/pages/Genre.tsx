import { useLoaderData } from "react-router-dom";
import "./Genre.css";
import type { MusicData } from "../types/musicSection";

function Genre() {
  const data = useLoaderData() as MusicData;
  console.info(data);
  return (
    <>
      {console.log(data)}
      <header className="genre-main">
        <section>
          <p className="data-genre">{data.genre}</p>
        </section>
      </header>
      <main>
        <h1>{data.genre}</h1>
      </main>
    </>
  );
}

export default Genre;
