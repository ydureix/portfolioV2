
type HeaderProps = {
  onAboutClick: () => void
  onProjectsClick: () => void
  onContactClick: () => void
}


export default function Header({onAboutClick, onProjectsClick, onContactClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-800 text-green-50 font-mono p-4 shadow">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <span className="text-xl sm:text-2xl font-bold border-b border-r pr-1 ">Rudy Xie</span>
        <nav className="flex space-x-6">
          <button onClick={onAboutClick} className="hover:underline cursor-pointer">About</button>
          <button onClick={onProjectsClick} className="hover:underline cursor-pointer">Projects</button>
          <button onClick={onContactClick} className="hover:underline cursor-pointer">Contact</button>
        </nav>
      </div>
    </header>
  );
}
