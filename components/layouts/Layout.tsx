import Head from "next/head"
import { PropsWithChildren } from "react"
import { Navbar } from "../ui";

interface LayoutProps {
    title?: string;
}
const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ children, title = 'Pokemon App' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="autor" content="PokemonAPP" />
                <meta name="description" content={`Pokemon ${title}`} />
                <meta name="keywords" content={`${title}, pokedex, etc`} />

                <meta property="og:title" content={ `Info sobre ${title}` } />
                <meta property="og:description" content={ `Esta es la pagina sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>
            <Navbar />
            <main style={ { padding: '0 20px' } }>
                { children }
            </main>
        </>
    )
}