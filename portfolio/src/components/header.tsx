export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-800 text-green-50 font-mono p-4 shadow">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <span className="text-2xl font-bold border-b border-r pr-1 ">Rudy Xie</span>
        <nav className="flex space-x-6">
          <span className="hover:underline cursor-pointer">About</span>
          <span className="hover:underline cursor-pointer">Projects</span>
          <span className="hover:underline cursor-pointer">Contact</span>
        </nav>
      </div>
    </header>
  );
}
