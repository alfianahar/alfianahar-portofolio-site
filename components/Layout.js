import Footer from "./Footer"
import Head from "next/head"
import Navbar from "./Navbar"


const Layout = ({ children }) => {
    return (
        <>
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
