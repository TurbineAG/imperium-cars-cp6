import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navClass = ({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`

  return (
    <header className="site-header">
      <div className="container-shell flex h-[78px] items-center justify-between">
        <Link to="/" className="brand-mark" aria-label="Imperium início">
          <span className="brand-symbol">I</span>
          <span className="leading-none">
            <span className="block text-[15px] font-black tracking-[0.22em]">IMPERIUM</span>
            <span className="mt-1 block text-[9px] tracking-[0.28em] text-white/45">EXOTIC CAR RENTAL</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          <NavLink to="/" className={navClass}>Início</NavLink>
          <NavLink to="/carros" className={navClass}>Garagem</NavLink>
          <a href="#experiencia" className="nav-link">A experiência</a>
        </nav>

        <Link to="/carros" className="button-lime hidden md:inline-flex">
          Encontrar meu carro <ArrowUpRight size={16} />
        </Link>

        <button className="icon-button md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mobile-menu md:hidden">
          <NavLink onClick={() => setOpen(false)} to="/" className={navClass}>Início</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/carros" className={navClass}>Garagem</NavLink>
          <a onClick={() => setOpen(false)} href="/#experiencia" className="nav-link">A experiência</a>
        </nav>
      )}
    </header>
  )
}