import Footer from "./Footer"
import Head from "next/head"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Alfian Nahar | Fullstack Developer | Indonesia</title>
                <meta name="title" content="Alfian Nahar | Fullstack Developer | Indonesia" />
                <meta name="description" content="A personal portfolio page for connected to me! Just Someone who can work on in front or back. Sometimes design UI too. Just teach me by challenging me for a work!" />
                <meta name="keywords" content="Alfian, Alfian Nahar, Freelance Web Developer, Fullstack Developer, Frontend Developer, Javascript Developer, React Developer, Next.Js Developer, GatsbyJs Developer" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="1 days" />
                <meta name="author" content="Alfian Nahar" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.alfianahar.com/" />
                <meta property="og:title" content="Alfian Nahar | Fullstack Developer | Indonesia" />
                <meta property="og:description" content="A personal portfolio page for connected to me! Just Someone who can work on in front or back. Sometimes design UI too. Just teach me by challenging me for a work!" />
                <meta property="og:image" content="/metaimage.jpg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.alfianahar.com/" />
                <meta property="twitter:title" content="Alfian Nahar | Fullstack Developer | Indonesia" />
                <meta property="twitter:description" content="A personal portfolio page for connected to me! Just Someone who can work on in front or back. Sometimes design UI too. Just teach me by challenging me for a work!" />
                <meta property="twitter:image" content="/metaimage.jpg" />
            </Head>
            <header className="z-50 fixed flex justify-center items-center px-6 md:px-12 h-24 w-full">
                <Navbar />
            </header>
            <div className="flex flex-col items-center justify-center h-screen gap-4 p-6">
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout
