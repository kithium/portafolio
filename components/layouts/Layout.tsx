import Head from "next/head"
import { PropsWithChildren } from "react"
import { Navbar } from "../ui";

interface LayoutProps {
    title?: string;
}

export const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ children, title = 'Pokemon App' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="autor" content="Huanch" />
                <meta name="description" content={`Pokemon ${title}`} />
                <meta name="keywords" content={`${title}, pokedex, etc`} />
            </Head>
            <Navbar />
            <main style={ { padding: '0 20px' } }>
                { children }
            </main>
        </>
    )
}