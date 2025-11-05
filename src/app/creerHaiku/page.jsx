import React from 'react'
import FormHaiku from '../_components/FormHaiku'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <Link href="../haikus">Retour</Link>
      <FormHaiku></FormHaiku>
    </div>
  )
}

export default page
