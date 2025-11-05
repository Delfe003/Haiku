import React from 'react'
import { getAllHaikuAction } from '../_actions/haikus';
import Link from 'next/link';
import Icone from '../_components/Icone';


const haikusPage = async () => {
  const listeHaiku = await getAllHaikuAction();
  console.log(listeHaiku);

  return (

    <div>
      <Link href="../" className="retour   inline-block bg-white/80 backdrop-blur-sm border border-teal-200 text-teal-600 font-medium px-4 py-2 rounded-lg shadow-sm transition-all hover:bg-teal-100 hover:text-teal-700 hover:scale-105 active:scale-95"
      >Retour</Link>
      <div className="haiku-container flex flex-col items-center mt-6">
        <ul className="w-full max-w-md flex flex-col gap-3">
          {listeHaiku.map(({ titre, iconeIndex, id }, i) => (
            <Link key={id} href={`haikus/${id}`} className="block">
              <li className="bg-white/80 backdrop-blur-sm border border-teal-200 rounded-xl p-4 cursor-pointer hover:bg-teal-100 hover:scale-105 transition-transform shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-teal-700 font-semibold">{titre}</span>
                  <Icone numero={iconeIndex} />
                </div>
              </li>

            </Link>
          ))}
        </ul>
      </div>
      <div>
        <Link href={"./creerHaiku"} className="retour   inline-block bg-white/80 backdrop-blur-sm border border-teal-200 text-teal-600 font-medium px-4 py-2 rounded-lg shadow-sm transition-all hover:bg-teal-100 hover:text-teal-700 hover:scale-105 active:scale-95" >Créer votre Haiku inspirant</Link>
      </div>
    </div>


  )
}

export default haikusPage;
