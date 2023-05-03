import { pokeApi } from '@/api';
import { Layout } from '@/components/layouts'
import { PokemonListResponse } from '@/interfaces';
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { NextPage, GetStaticProps } from 'next'
import { SmallPokemon } from '../interfaces/pokemon-list';
import { PokemonCard } from '@/components/pokemon';

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <Layout title="Listado de Pokemones">
          <Grid.Container gap={2} justify="flex-start">
            {
              pokemons.map( (pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ) 
              )
            }
          </Grid.Container>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ( ctx ) => {
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  console.log(data);
  // lo que hacemos aqui es mapear la data que nos devuelve la api para que tenga la forma que queremos
  const pokemons: SmallPokemon[] = data.results.map( (poke, index) => ({
    ...poke,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
  }))
  
  return {
    props: {
      pokemons: pokemons
    }
  }
}


export default HomePage