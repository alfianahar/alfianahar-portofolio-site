import SocmedLink from "./SocmedLink"

const Footer = () => {
    return (
        <div className=" flex flex-col justify-center items-center">
            <SocmedLink />
            <a href="https://github.com/alfianahar" target="_blank" rel="noopener noreferrer">
                <p className="text-center">Designed &amp; Built with Passion <br /> by Alfian Nahar</p>
            </a>
        </div>
    )
}

export default Footer
