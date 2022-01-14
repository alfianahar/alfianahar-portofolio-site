import Head from "next/document"
import Script from "next/script"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <>
            <Script
                src="https://unpkg.com/boxicons@2.1.1/dist/boxicons.js"
                strategy="afterInteractive"
            />
            <div className="flex flex-col items-center justify-center h-screen gap-4 p-6">
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout
