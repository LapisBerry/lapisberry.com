export default function Footer({ className }: { className?: string }) {
  const commitHash = process.env.NEXT_PUBLIC_COMMIT_HASH || "unknown";
  return (
    <footer className={`flex flex-col gap-1 bg-mirage px-7 pt-5 pb-10 text-sm  ${className}`}>
      <h1 className="text-4xl font-bold">LB</h1>
      <p>&copy; 2024 - {new Date().getFullYear()} Kittiphop Khankaew | All rights reserved.</p>
      <p>Current version: {commitHash}</p>
      <p>Design is inspired by uixNinja</p>
    </footer>
  );
}
