import React from "react";
import Character from "./Character";

const CharacterGrid = ({ items }) => {
  return (
    <section className='cards'>
      {items.map((item) => (
        <Character key={item.char_id} item={item}></Character>
      ))}
    </section>
  )
}

export default CharacterGrid;