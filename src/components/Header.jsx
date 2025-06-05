export default function Header() {
  return (
    <header className="bg-pink-400 p-4 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">💖 MyLoveGift</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a className="text-white hover:underline" href="#timeline">Linha do Tempo</a></li>
            <li><a className="text-white hover:underline" href="#countdown">Contagem</a></li>
            <li><a className="text-white hover:underline" href="#surprise">Surpresa</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}