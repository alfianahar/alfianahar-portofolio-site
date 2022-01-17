import Footer from "./Footer"
import Head from "next/head"
import Navbar from "./Navbar"


const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title> Alfian Nahar</title>
                <meta name="title" content="Alfian Nahar" />
                <meta name="description" content="A personal portfolio page for connected to me!" />
                <meta name="keywords" content="Alfian, Alfian Nahar, Freelance Web Developer, Fullstack Developer, Frontend Developer, Javascript Developer, React Developer, Next.Js Developer, GatsbyJs Developer" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="1 days" />
                <meta name="author" content="Alfian Nahar" />
            </Head>
            <header className="z-50 flex justify-center items-center px-6 h-24">
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
