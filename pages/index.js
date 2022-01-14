import Link from 'next/link'
import Head from 'next/head'

const index = () => {
  return (
    <>
      <Head>
        <title> Alfian Nahar </title>
      </Head>
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-4xl leading-relaxed font-black text-center tracking-widest">
          Hi, I&apos;m <br /> Alfian Nahar
        </h1>
        <p className="font-medium tracking-widest text-xl text-center">
          Energetic and Motivated Full Stack Developer
        </p>
        <Link href="/bio" >
          <a className="p-3 rounded-md bg-cyan-500 font-medium hover:bg-cyan-600 hover:text-cyan-50">
            Back to My Bio
          </a>
        </Link>
      </div>
    </>
  )
}

export default index
