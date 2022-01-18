import Link from 'next/link'

const index = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <span className="text-lg font-mono font-semibold text-left mb-3">
          Hello, I&apos;m
        </span>
        <h1 className="text-4xl font-black text-center tracking-widest">
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
