import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">Meu Site</h1>

        {/* Botão hamburguer (visível só no mobile) */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        {/* Menu em telas grandes */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:underline">
            Início
          </a>
          <a href="#" className="hover:underline">
            Sobre
          </a>
          <a href="#" className="hover:underline">
            Contato
          </a>
        </nav>
      </div>

      {/* Menu mobile (aparece se menuOpen=true) */}
      {menuOpen && (
        <nav className="md:hidden bg-blue-700 px-4 pb-4 space-y-2">
          <a href="#" className="block hover:underline">
            Início
          </a>
          <a href="#" className="block hover:underline">
            Sobre
          </a>
          <a href="#" className="block hover:underline">
            Contato
          </a>
        </nav>
      )}
    </header>
  );
}
