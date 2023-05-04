import { pokeApi } from "@/api"
import { Layout } from "@/components/layouts"
import { Pokemon, PokemonListResponse } from "@/interfaces"
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router"
import { Sprites } from '../../interfaces/pokemon-full';
import { useEffect, useState } from "react"
import { localFavorites } from '@/utils';
import confetti from "canvas-confetti"


interface Props {
    pokemon: Pokemon
}

const PokemonByNamePage : NextPage<Props> = ( {pokemon} ) => {
    console.log({pokemon})

    // declaramos un useState para ver el estado de este pokemon en favoritos
    const [isInFavorite, setIsInFavorite] = useState(localFavorites.existInFavorites(pokemon.id))


    const onToggleFavorite = () => {
         // usaremos el localStorage para guardar los favoritos
         localFavorites.toggleFavorite(pokemon.id)
         setIsInFavorite(localFavorites.existInFavorites(pokemon.id))

         // implementamos canvas confetti
         if ( isInFavorite ) return;
         confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0
            }
         })
    } 
        

    return (
        <Layout title={pokemon.name}>
            <Grid.Container css={{ marginTop: '5px' }} gap = {2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css = {{ padding:'30px' }}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                                alt={pokemon.name}
                                width="100%"
                                height={200}
                            />
                            <Text h3>{pokemon.name}</Text>
                        </Card.Body>

                    </Card>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header
                            css={{ display: 'flex', justifyContent: 'space-between' }}
                        >
                            <Text h1 transform="capitalize">{ pokemon.name} </Text>
                            <Button
                                color="gradient"
                                ghost = {!isInFavorite}
                                onPress={onToggleFavorite}
                            >
                                {isInFavorite ? 'Eliminar Favorito' : 'Agregar a Favoritos'}
                            </Button>
                            
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container direction="row" display="flex" gap = {0  }>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
        
                    </Card>

                </Grid>
            </Grid.Container>
        </Layout>

    )
}
// generamos un getStaticPaths para que se genere la pagina de cada pokemon segun el nombre del pokemon
export const getStaticPaths: GetStaticPaths = async (ctx) => {
    // debemos obtener los names de cada pokemon
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
    const paths = data.results.map( ({ name }) => ({ params: { name: name } }))
    return {
        paths,
        fallback: false
    }
}
// generamos un getStaticProps para que se genere la pagina de cada pokemon segun el nombre del pokemon
export const getStaticProps: GetStaticProps = async ({params}) => {
    const { name } = params as { name: string }
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`)
    // creamos un objeto para usar solo los campos que nos interesan
    const pokemon = {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }
    return {
        props: {
            pokemon
        }
    }
}



export default PokemonByNamePage 