"use server"
import { revalidatePath } from "next/cache";
import {supprimerCommentaire, ajouterHaiku,ajouterCommentaire, getAllCommentaire, getAllHaiku, getHaikuParId } from "../_data/haikus";

export const getAllHaikuAction = async () => {
    const resultats = await getAllHaiku();
    
    return resultats;
}

export const getHaikuParIdAction = async(idHaiku)=>{
    const resultat =await getHaikuParId(idHaiku);
    
    return resultat;
}
export const ajouterCommentaireAction = async(contenu, nomAuteur, idHaiku)=>{
    const resultat = await ajouterCommentaire(contenu, nomAuteur,idHaiku);
    revalidatePath("/haikus"+idHaiku);
    return resultat;
}

export const getAllCommentaireAction = async(idHaiku) =>{ 
    const  resultat = await  getAllCommentaire(idHaiku);
    revalidatePath("/haikus");
    return resultat;
}

export const ajouterHaikuAction = async(contenu, nomAuteur, icone,titre)=>
{
    const resultat = await ajouterHaiku(contenu, nomAuteur, icone,titre);
    revalidatePath("/haikus");
    return resultat;
}

export const  supprimerCommentaireAction = async (idCommentaire,idHaiku )=>
{
    const resultat = await supprimerCommentaire(idCommentaire);
    revalidatePath("/haikus"+idHaiku);
    return resultat;
}