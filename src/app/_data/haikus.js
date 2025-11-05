import "server-only";
import { db } from "@/db";
import { commentairesTable, haikusTable } from "../../db/schemas/schema"
import { eq } from "drizzle-orm";

export const getAllHaiku = async () => {
    const listehaikus = await db.select().from(haikusTable);
    return listehaikus;
}

export const getHaikuParId = async (idHaiku) => {
    const haiku = await db.select().from(haikusTable).where(eq(haikusTable.id, idHaiku));
    return haiku;
}
export const ajouterCommentaire = async (contenu, nomAuteur, idHaiku) => {
    const commentaire = await db.insert(commentairesTable).values({ auteur: nomAuteur, text: contenu, haikuId: idHaiku });
}
export const getAllCommentaire = async (idHaiku) => {
    const commentaires = await db.select().from(commentairesTable).where(eq(commentairesTable.haikuId, idHaiku));
    return commentaires;
}

export const ajouterHaiku = async (contenu, nomAuteur, icone, titre) => {
    const haiku = await db.insert(haikusTable).values({ titre, auteur: nomAuteur, contenu, iconeIndex: icone });
    return haiku;
}

export const supprimerCommentaire = async (idCommentaire) => {
    const commentaireSupprimer = await db.delete(commentairesTable).where(eq(commentairesTable.id, idCommentaire));

}