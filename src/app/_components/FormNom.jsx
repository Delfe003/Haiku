"use client"
import React from 'react'
import { useRouter } from "next/navigation";

import { useState } from "react";
import { useHaiku } from '../_context/haikuContext';
import "./Form.css"
const FormNom = () => {
    const { nomHandler } = useHaiku();
    const { nomUtilisateur } = useHaiku();


    const router = useRouter();
    const addNomHandler = (formData) => {
        const nom = formData.get("Nom");
        nomHandler(nom);
        console.log(formData.get("Nom"));
        console.log(nomUtilisateur);
        router.push('/haikus');

    };


    return (
        <div className='form-container'>
            <form action={addNomHandler}>
                <input type="text" name="Nom" placeholder="Nom d'utilisateur" className="input-nom" ></input>

                <button type="submit" className="btn-enregistrer">Enregistrer</button>
            </form>
        </div>
    )
}



export default FormNom;