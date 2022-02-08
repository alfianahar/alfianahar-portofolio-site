import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <p className="text-2xl font-semibold">
        Ooopppsss, that page cannot be found
      </p>
      <Link href="/bio">
        <a className="rounded-md bg-cyan-500 p-3 font-medium hover:bg-cyan-600 hover:text-cyan-50">
          Back to Home
        </a>
      </Link>
    </div>
  );
};

export default NotFound;
