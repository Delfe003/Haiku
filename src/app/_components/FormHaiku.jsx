"use client"
import React, { useState } from 'react'
import { useHaiku } from '../_context/haikuContext';
import { ajouterHaikuAction } from '../_actions/haikus';
import { Citrus, Fish, LeafyGreen, Wind } from 'lucide-react';
import { useRouter } from 'next/navigation';
import "./Form.css";
const iconStyles = {
    active:
        "text-teal-500 scale-110 drop-shadow-md transition-transform duration-200 cursor-pointer",
    inactive:
        "text-gray-400 hover:text-cyan-300 transition-transform duration-200 cursor-pointer",
}


const FormHaiku = () => {
    const { nomUtilisateur } = useHaiku();
    const [numeroIcon, setNumeroIcon] = useState();
    const router = useRouter();
    const addHaiku = (formData) => {
        const contenu = formData.get("contenu");
        const titre = formData.get("titre");

        ajouterHaikuAction(contenu, nomUtilisateur, numeroIcon, titre);
        router.push('/haikus');
    };


    const addIcone = (numero) => {
        setNumeroIcon(numero);
    }


    return (
        <div className='form-container'>
            <form action={addHaiku} >
                <input type="text" name='titre' placeholder='Titre' />
                <label htmlFor="">Mettre une vergule après une ligne svp</label>
                <input type="text" name='contenu' placeholder='Le contenu' />
                <div>
                    <Fish className={numeroIcon === 1 ? iconStyles.active : iconStyles.inactive} onClick={() => addIcone(1)} />
                    <LeafyGreen className={numeroIcon === 2 ? iconStyles.active : iconStyles.inactive} onClick={() => addIcone(2)} />
                    <Citrus className={numeroIcon === 3 ? iconStyles.active : iconStyles.inactive} onClick={() => addIcone(3)} />
                    <Wind className={numeroIcon === 4 ? iconStyles.active : iconStyles.inactive} onClick={() => addIcone(4)} />

                </div>
                <button type='submit'>Enregistrer</button>
            </form>
        </div>
    )
}

export default FormHaiku
