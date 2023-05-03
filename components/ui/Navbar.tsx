import Image from 'next/image'
import NextLink from 'next/link'

import { Spacer, Text, useTheme, Link } from "@nextui-org/react";


export const Navbar = () => {
    const { theme } = useTheme()
    return (
        <div style={{
            display: 'flex',
            // width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0x 20px',
            backgroundColor: theme?.colors.gray200.value
        }
        }>
            <Image 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="icono de la app"
                width={70}
                height={70}
            />
            <NextLink 
                href="/"
                passHref
                legacyBehavior
            >
                <Link>
                    <Text color='white' h2>Pokemon</Text>
                </Link>
            </NextLink>
            
            <Spacer />
            <Spacer css={{ flex: 1 }} />
            <NextLink href={'/favoritos'} passHref legacyBehavior>
                <Link css={{ marginRight: '10px' }}>
                    <Text color='white' h4>Favoritos</Text>
                </Link>
            </NextLink>
            <Spacer />

        </div>

    )
}
