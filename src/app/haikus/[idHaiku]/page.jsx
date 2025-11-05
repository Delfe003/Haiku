
import { getHaikuParIdAction } from '@/app/_actions/haikus';
import Commentaires from '@/app/_components/Commentaires';
import FormCommentaire from '@/app/_components/FormCommentaire';
import Haiku from '@/app/_components/Haiku';
import { HaikuProvider } from '@/app/_context/haikuContext';
import Link from 'next/link';

import React from 'react'

const Page = async ({ params }) => {
  const { idHaiku } = await params;
  const resultat = await getHaikuParIdAction(idHaiku);
  console.log(resultat);
  return (

    <div>
      <Link href="../haikus"className="retour  inline-block bg-white/80 backdrop-blur-sm border border-teal-200 text-teal-600 font-medium px-4 py-2 rounded-lg shadow-sm transition-all hover:bg-teal-100 hover:text-teal-700 hover:scale-105 active:scale-95">Retour</Link>
      {/* <HaikuProvider> */}
      <Haiku titre={resultat[0].titre} idHaiku={idHaiku} texte={resultat[0].contenu} auteur={resultat[0].auteur} iconeIndex={resultat[0].iconeIndex}></Haiku>
      {/* </HaikuProvider> */}
      <FormCommentaire idHaiku={idHaiku} />
      <Commentaires idHaiku={idHaiku}></Commentaires>




    </div>
  )
}

export default Page
