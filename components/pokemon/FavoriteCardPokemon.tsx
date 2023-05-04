import { Card, Grid } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FC } from 'react'
// declare props
interface Props {
    id: number
}
export const FavoriteCardPokemon:FC<Props> = ({id}) => {
    // funcion para ir a la pagina de detalle del pokemon
    const router = useRouter();
    const onFavoriteClicked = () => {
         router.push(`/pokemon/${id}`);
    }

  return (
      <Grid key={id} xs={6} sm={3} md={2} xl={1} onClick={onFavoriteClicked}>
          <Card isHoverable isPressable css={{ padding: 10 }}>
              <Card.Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                  alt={`Pokemon ${id}`}
                  width={'100%'}
                  height={140}
              />
          </Card>
      </Grid>
  )
}
