"use client"
import React from 'react'
import { useHaiku } from '../_context/haikuContext';
import { ajouterCommentaireAction } from '../_actions/haikus';
import "./Form.css";
const FormCommentaire = ({ idHaiku }) => {
  const { nomUtilisateur } = useHaiku();
  const addCommentaire = (formData) => {
    const contenu = formData.get("contenu");
    ajouterCommentaireAction(contenu, nomUtilisateur, idHaiku);
  };
  return (
    <div className="form-container">
      <form action={addCommentaire}>
        <label htmlFor="">Écriver vos impression</label>
        <input type="text" name='contenu' placeholder='Commentaire' className="input-nom" />
      </form>
    </div>
  )
}

export default FormCommentaire
