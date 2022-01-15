import Script from "next/script"
import Footer from "./Footer"
import Head from "next/head"


const Layout = ({ children }) => {
    return (
        <>
            <Script
                src="https://unpkg.com/boxicons@2.1.1/dist/boxicons.js"
                strategy="afterInteractive"
            />
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
            <div className="flex flex-col items-center justify-center h-screen gap-4 p-6">
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout
