import Link from 'next/link'

const index = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-4xl leading-relaxed font-black text-center tracking-widest">
          Hi, I&apos;m <br /> Alfian Nahar
        </h1>
        <p className="font-medium tracking-widest text-xl text-center">
          Energetic and Motivated Full Stack Developer
        </p>
        <Link href="/bio" >
          <a className="button">
            Back to My Bio
          </a>
        </Link>
      </div>
    </>
  )
}

export default index
