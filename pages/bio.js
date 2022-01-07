import Image from "next/image";
import Link from "next/link"
import BioLayout from "../components/BioLayout"


export const getStaticProps = async () => {
    const res = await fetch('https://alfianahar.github.io/my-bio-json/data/bio-button.json');
    const data = await res.json();

    return {
        props: { buttons: data }
    }
}


const bio = ({ buttons }) => {
    return (
        <BioLayout>
            <div className="bio-main-layout">
                {
                    buttons.map(button => (
                        <Link href={button.target} key={button.id}>
                            <a className={`bio-button ${button.style}`}>
                                <Image src={button.icon.img} alt={button.icon.alt} width={28} height={28} className="flex-none" />
                                <p className="flex-grow font-medium text-[#1B1C22]">
                                    {button.title}
                                </p>
                            </a>
                        </Link>
                    ))
                }
            </div>
        </BioLayout>
    )
}

export default bio
