import { Image } from '@nextui-org/react'
import React from 'react'

const NoFavorites = () => {
  return (
    
    <section>
    <div className="flex flex-col h-[calc(100vw - 100px)] items-center justify-center self-center">
        <h1>NO HAY FAVORITOS</h1>
        <Image width={250} height={250} src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"}/>
    </div>
  </section>
  )
}

export default NoFavorites