import Link from "next/link"
import Head from "next/head"

const index = () => {
  return (
    <>
      <Head>
        <title>Alfian Nahar </title>
        <meta name="title" content="Alfian Nahar | Fullstack Developer | Indonesia" />
        <meta name="description" content="A personal portfolio page for connected to me! Just Someone who can work on in front or back. Sometimes design UI too. Just teach me by challenging me for a work!" />
        <meta name="keywords" content="Alfian, Alfian Nahar, Freelance Web Developer, Fullstack Developer, Frontend Developer, Javascript Developer, React Developer, Next.Js Developer, GatsbyJs Developer" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Alfian Nahar" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.alfianahar.com/" key="ogurl"/>
        <meta property="og:title" content="Alfian Nahar | Fullstack Developer | Indonesia" key="ogtitle"/>
        <meta property="og:description" content="A personal portfolio page for connected to me! Just Someone who can work on in front or back. Sometimes design UI too. Just teach me by challenging me for a work!" key="ogdesc"/>
        <meta property="og:image" content="https://www.alfianahar.com/og.jpg" key="ogimg"/>

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.alfianahar.com/" />
        <meta property="twitter:title" content="Alfian Nahar | Fullstack Developer | Indonesia" />
        <meta property="twitter:description" content="A personal portfolio page for connected to me! Just Someone who can work on in front or back. Sometimes design UI too. Just teach me by challenging me for a work!" />
        <meta property="twitter:image" content="https://www.alfianahar.com/og.jpg" />
      </Head>
      <div className="flex flex-col items-center justify-center h-screen">
        <span className="text-lg font-mono font-medium text-left mb-3">
          Hello, I&apos;m
        </span>
        <h1 className="text-6xl font-semibold text-center ">
          Alfian Nahar
        </h1>
        <p className="font-normal tracking-widest text-md text-center mt-3">
          Energetic and Motivated Full Stack Developer
        </p>
        <Link href="/bio" >
          <a className="button w-2/4 mt-12">
            Back to My Bio
          </a>
        </Link>
      </div>
    </>
  )
}

export default index
