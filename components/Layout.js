import Footer from "./Footer"
import Navbar from "./Navbar"


const Layout = ({ children }) => {
    return (
        <>
            <header className="main-header">
                <Navbar />
            </header>
            <div className="main-layout">
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout
