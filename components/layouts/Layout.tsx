import Head from "next/head"
import { PropsWithChildren } from "react"
import { NavbarPortafolio } from "../ui";

interface LayoutProps {
    title?: string;
}
const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ children, title = 'Pokemon App' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="autor" content="Portafolio - Maizares J.A." />
                <meta name="description" content={`Portafolio - Maizares J.A.`} />
                <meta name="keywords" content={`portafolio, full stack, node js, next js`} />

                <meta property="og:title" content={ `Info sobre Portafolio Maizares` } />
                <meta property="og:description" content={ `Esta es la pagina sobre Maizares, Full-Stack`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>
            <NavbarPortafolio />
            <main style={ { padding: '0 20px' } }>
                { children }
            </main>
        </>
    )
}