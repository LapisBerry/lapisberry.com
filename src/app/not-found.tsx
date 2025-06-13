import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center select-none">
        <h1 className="text-4xl font-bold">
          404 Oops! The page you&#39;re looking for doesn&#39;t exist.
        </h1>
        <Link href="/" className="text-4xl font-bold bg-dark rounded-[15px] p-4">
          Return to Home
        </Link>
      </main>
    </div>
  );
}

