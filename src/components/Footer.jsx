import { ArrowUpRight, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070809]">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:py-16">
        <div>
          <Link to="/" className="brand-mark">
            <span className="brand-symbol">I</span>
            <span className="leading-none">
              <span className="block text-[15px] font-black tracking-[0.22em]">IMPERIUM</span>
              <span className="mt-1 block text-[9px] tracking-[0.28em] text-white/45">EXOTIC CAR RENTAL</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/45">Mais do que chegar ao destino. Uma experiência feita para quem valoriza cada detalhe.</p>
        </div>
        <div>
          <p className="eyebrow mb-4">Navegação</p>
          <div className="flex flex-col items-start gap-3 text-sm text-white/60">
            <Link className="hover:text-accent" to="/">Início</Link>
            <Link className="hover:text-accent" to="/carros">Nossa garagem</Link>
          </div>
        </div>
        <div>
          <p className="eyebrow mb-4">Fale com a equipe</p>
          <p className="text-sm leading-6 text-white/55">Atendimento personalizado para encontrar o carro certo para sua ocasião.</p>
          <a className="mt-4 inline-flex items-center gap-2 text-sm text-accent" href="mailto:contato@imperium.example">Solicitar atendimento <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="container-shell flex flex-col justify-between gap-3 border-t border-white/10 py-5 text-[11px] text-white/35 sm:flex-row">
        <span>© 2026 IMPERIUM. Projeto acadêmico demonstrativo.</span>
        <span>Elegância em movimento.</span>
      </div>
    </footer>
  )
}