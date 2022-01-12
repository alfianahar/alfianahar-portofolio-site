import Link from 'next/link'

const index = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-5xl tracking-wide font-black text-center">
        Hi, I&apos;m <br /> Alfian Nahar
      </h1>
      <p className="font-medium tracking-widest text-xl text-center">
        Full Stack Developer with minimal UI / UX skills
      </p>
      <Link href="/bio" >
        <a className="p-3 rounded-md bg-cyan-500 font-medium hover:bg-cyan-600 hover:text-cyan-50">
          Back to My Bio
        </a>
      </Link>
    </div>
  )
}

export default index
