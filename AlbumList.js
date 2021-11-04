// import React from "react";
import AlbumCard from "./AlbumCard";
import { albums } from "../data/albums";

function AlbumList() {
  const cards = albums.map(album => {
    return (
      <AlbumCard
        key={album.id}
        name={album.name}
        image={album.image}
        genre={album.genre} />
    )
  })
  return (
    <section className="albums">
     {cards}
    </section>
  );
}

export default AlbumList;
