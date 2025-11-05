"use client";
import { createContext, useContext, useState } from "react";


const haikuContext = createContext({
    nomUtilisateur: "Bertold",
    nomHandler: () => { },
    _v: 0
});

const HaikuProvider = ({ children }) => {
    const [nomUtilisateur, setNomUtilisateur] = useState("Pablo");
    const nomHandler = (Nom) => {
        setNomUtilisateur(Nom);
    };
    return (
        <haikuContext.Provider value={{
            nomUtilisateur,
            nomHandler,
            setNomUtilisateur,
            _v: 1
        }}>{children}</haikuContext.Provider>
    );
};


const useHaiku = () => {
    const ctx = useContext(haikuContext);
    if (ctx._v === 0) {
        console.log("vous devez utiliser haiku provider")
    }
    return ctx;
};


export { HaikuProvider, useHaiku };
export default haikuContext;