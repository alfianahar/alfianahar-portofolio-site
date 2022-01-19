import Link from "next/link"
import Head from "next/head";

export const getStaticProps = async () => {
    const res = await fetch('https://alfianahar.github.io/my-bio-json/data/bio-button.json');
    const data = await res.json();

    return {
        props: { buttons: data }
    }
}


const bio = ({ buttons }) => {
    return (
        <>
            <Head>
                <title> Alfian Nahar | Biopage </title>
                <meta name="title" content="Alfian Nahar | Fullstack Developer | Indonesia" />
                <meta name="description" content="A personal own-made bio page for connected to me! Just Someone who can work on in front or back. Sometimes design UI too. Just teach me by challenging me for a work!" />
                <meta name="keywords" content="Alfian, Alfian Nahar, Freelance Web Developer, Fullstack Developer, Frontend Developer, Javascript Developer, React Developer, Next.Js Developer, GatsbyJs Developer" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="1 days" />
                <meta name="author" content="Alfian Nahar" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.alfianahar.com/" />
                <meta property="og:title" content="Alfian Nahar | Fullstack Developer | Indonesia" />
                <meta property="og:description" content="A personal own-made bio page for connected to me! Just Someone who can work on in front or back. Sometimes design UI too. Just teach me by challenging me for a work!" />
                <meta property="og:image" content="https://www.alfianahar.com/og.jpg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.alfianahar.com/" />
                <meta property="twitter:title" content="Alfian Nahar | Fullstack Developer | Indonesia" />
                <meta property="twitter:description" content="A personal own-made bio page for connected to me! Just Someone who can work on in front or back. Sometimes design UI too. Just teach me by challenging me for a work!" />
                <meta property="twitter:image" content="https://www.alfianahar.com/og.jpg" />
            </Head>
            <div className="bio-main-layout items-center">
                {
                    buttons.map(button => (
                        <Link href={button.target} key={button.id}>
                            <a className={`button ${button.style}`}>
                                <box-icon type={button.icon.type} name={button.icon.name} color="#040c15" size="md"></box-icon>
                                <p className="flex-grow">
                                    {button.title}
                                </p>
                            </a>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default bio
