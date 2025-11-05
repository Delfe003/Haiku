import React from 'react'
import { getAllCommentaireAction, supprimerCommentaireAction } from '../_actions/haikus'
import SupprimerCommentaire from './SupprimerCommentaire';
import "./Commentaire.css"
const Commentaires = async ({ idHaiku }) => {
  const commentaires = await getAllCommentaireAction(idHaiku);
  console.log(commentaires);


  return (
    <div className="commentaires-container">
      <ul>


        {commentaires.map(({ auteur, text, id }, i) => (
          <li key={id}> <h2> {auteur} </h2>
            <p> {text} </p>
            <SupprimerCommentaire idHaiku={idHaiku} id={id} actionSuprimer={supprimerCommentaireAction} ></SupprimerCommentaire>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default Commentaires
