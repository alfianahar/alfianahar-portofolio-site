import SocmedLink from "./SocmedLink"

const Footer = () => {
    return (
        <div className=" flex flex-col justify-center items-center p-4">
            <SocmedLink />
            <a href="https://github.com/alfianahar" target="_blank" rel="noopener noreferrer" className="-mt-3">
                <p className="text-center text-xs font-mono tracking-widest">Designed &amp; Built with Passion <br /> by Alfian Nahar</p>
            </a>
        </div>
    )
}

export default Footer
