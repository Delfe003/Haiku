"use client"
import React from 'react'

const SupprimerCommentaire = ({ idHaiku, id, actionSuprimer }) => {
    const handleSupprimer = async () => {
        await actionSuprimer(id, idHaiku);
        console.log("j'essaie de supprimer lol");
    };
    return (
        <div>
            <button onClick={handleSupprimer} className="text-red-500 hover:text-red-700">Supprimer</button>
        </div>
    )
}

export default SupprimerCommentaire
