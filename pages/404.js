import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000)
    }, [])

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <p className="font-semibold text-2xl">
                Ooopppsss, that page cannot be found
            </p>
            <Link href="/bio" >
                <a className="p-3 rounded-md bg-cyan-500 font-medium hover:bg-cyan-600 hover:text-cyan-50">
                    Back to Home
                </a>
            </Link>
        </div>
    )
}

export default NotFound
