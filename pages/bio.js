import Link from "next/link"

export const getStaticProps = async () => {
    const res = await fetch('https://alfianahar.github.io/my-bio-json/data/bio-button.json');
    const data = await res.json();

    return {
        props: { buttons: data }
    }
}


const bio = ({ buttons }) => {
    return (
        <div className="bio-main-layout">
            {
                buttons.map(button => (
                    <Link href={button.target} key={button.id}>
                        <a className={`bio-button ${button.style}`}>
                            <box-icon type={button.icon.type} name={button.icon.name} color="#040c15" size="md"></box-icon>
                            <p className="flex-grow font-medium">
                                {button.title}
                            </p>
                        </a>
                    </Link>
                ))
            }
        </div>
    )
}

export default bio
