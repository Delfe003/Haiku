import React from 'react'
import { Citrus, Fish, LeafyGreen, Wind } from 'lucide-react';
const Icone = ({ numero }) => {
    return (
        <div>
            {numero === 1 ? <Fish /> : ""}
            {numero === 2 ? <LeafyGreen /> : ""}
            {numero === 3 ? <Citrus /> : ""}
            {numero === 4 ? <Wind /> : ""}


        </div>
    )
}

export default Icone
