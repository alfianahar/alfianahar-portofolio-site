import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocmedLink = () => {
    return (
        <div className="flex flex-row justify-center space-x-6 p-6 h-20">
            <a href="https://github.com/alfianahar" className="text-[#EFEFF6]">
                <FontAwesomeIcon icon={['fab', 'github']} className="text-3xl hover:scale-110 hover:text-[#7CB8FC] hover:ease-out duration-300 transition" />
            </a>
            <a href="https://www.linkedin.com/in/alfianahar/" className="text-[#EFEFF6]">
                <FontAwesomeIcon icon={['fab', 'linkedin']} className="text-3xl hover:scale-110 hover:text-[#7CB8FC] hover:ease-out duration-300 transition" />
            </a>
            <a href="https://twitter.com/alfianahar" className="text-[#EFEFF6]">
                <FontAwesomeIcon icon={['fab', 'twitter']} className="text-3xl hover:scale-110 hover:text-[#7CB8FC] hover:ease-out duration-300 transition" />
            </a>
            <a href="https://www.tiktok.com/@alfianahar" className="text-[#EFEFF6]">
                <FontAwesomeIcon icon={['fab', 'tiktok']} className="text-3xl hover:scale-110 hover:text-[#7CB8FC] hover:ease-out duration-300 transition" />
            </a>
            <a href="https://www.instagram.com/alfianahar/" className="text-[#EFEFF6]">
                <FontAwesomeIcon icon={['fab', 'instagram']} className="text-3xl hover:scale-110 hover:text-[#7CB8FC] hover:ease-out duration-300 transition" />
            </a>
        </div>
    )
}

export default SocmedLink
