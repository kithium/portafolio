
import { Layout } from "@/components/layouts"
import { FavoritePokemons } from "@/components/pokemon/FavoritePokemons"
import { NoFavorites } from "@/components/ui"
import { localFavorites } from "@/utils"
import { Card, Grid } from "@nextui-org/react"
import { useEffect, useState } from "react"

import confetti from 'canvas-confetti'



const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])

  return ( 
    <Layout title= "Pokemons - Favoritos">
      {
        favoritePokemons.length === 0 
        ? ( <NoFavorites /> ) 
        : ( <FavoritePokemons pokemons = { favoritePokemons } /> )
      }
    </Layout>
  )
}

export default FavoritesPage
