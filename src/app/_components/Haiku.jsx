
import React from 'react';
import "./Haiku.css"
import Icone from './Icone';
const Haiku = ({ titre, texte, auteur, idHaiku, iconeIndex }) => {

  return (
    <div className="haiku-container">

      <h1> {titre} </h1>
      <p className="text-gray-800">
        {texte.split(",").map((ligne, index) => (
          <React.Fragment key={index}>
            {ligne.trim()}
            <br />
          </React.Fragment>
        ))}
      </p>
      <p> <em>{auteur} </em> </p>
      <Icone numero={iconeIndex} />
    </div>
  )
}

export default Haiku
