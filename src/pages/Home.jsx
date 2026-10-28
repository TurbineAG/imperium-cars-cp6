import { ArrowDownRight, ArrowRight, BadgeCheck, CirclePlay, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import CarCard from '../components/CarCard'
import { cars } from '../data/cars'

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-backdrop" />
        <div className="container-shell relative z-10 grid min-h-[680px] items-center gap-10 pb-20 pt-16 lg:min-h-[740px] lg:grid-cols-[0.9fr_1.1fr] lg:pb-24">
          <div className="max-w-xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-white/15 bg-black/20 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Locação premium • São Paulo
            </div>
            <h1 className="hero-title">A estrada<br />é <span className="text-accent">sua.</span></h1>
            <p className="mt-7 max-w-md text-base leading-7 text-white/60 sm:text-lg">Ícones da engenharia automotiva. Uma experiência exclusiva, no seu tempo e do seu jeito.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/carros" className="button-lime">Explorar a garagem <ArrowRight size={17} /></Link>
              <a href="#colecao" className="button-quiet"><CirclePlay size={17} /> Conheça a coleção</a>
            </div>
            <div className="mt-14 grid max-w-md grid-cols-3 gap-5 border-t border-white/15 pt-6">
              <div><p className="text-2xl font-semibold">+20</p><p className="mt-1 text-[10px] uppercase tracking-wider text-white/40">Modelos premium*</p></div>
              <div><p className="text-2xl font-semibold">24/7</p><p className="mt-1 text-[10px] uppercase tracking-wider text-white/40">Suporte*</p></div>
              <div><p className="text-2xl font-semibold">100%</p><p className="mt-1 text-[10px] uppercase tracking-wider text-white/40">Experiência</p></div>
            </div>
            <p className="mt-3 text-[10px] text-white/30">*Indicadores ilustrativos para este projeto acadêmico.</p>
          </div>
          <div className="hero-visual">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=90" alt="Porsche esportivo em cenário urbano" />
            <div className="hero-image-overlay" />
            <div className="hero-image-caption"><span className="eyebrow">The art of driving</span><p>Não é apenas o destino.</p><p className="text-white/55">É tudo o que acontece no caminho.</p></div>
            <div className="hero-vertical-label">IMPERIUM / 001</div>
          </div>
          <a href="#colecao" className="absolute bottom-7 left-0 hidden items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/40 lg:flex"><ArrowDownRight size={16} /> Desça para descobrir</a>
        </div>
      </section>

      <section id="colecao" className="section-pad">
        <div className="container-shell">
          <div className="section-heading">
            <div><p className="eyebrow"><span className="accent-line" /> A seleção IMPERIUM</p><h2 className="section-title">Máquinas que<br className="sm:hidden" /> <span className="text-white/45">falam por si.</span></h2></div>
            <Link to="/carros" className="text-link">Ver toda a garagem <ArrowRight size={16} /></Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {cars.slice(0, 3).map((car) => <CarCard key={car.id} car={car} />)}
          </div>
        </div>
      </section>

      <section id="experiencia" className="section-pad border-y border-white/10 bg-[#0d1012]">
        <div className="container-shell">
          <div className="max-w-2xl"><p className="eyebrow"><span className="accent-line" /> Mais que locação</p><h2 className="section-title">O extraordinário está <span className="text-accent">nos detalhes.</span></h2><p className="mt-5 max-w-xl leading-7 text-white/50">Do primeiro contato à entrega das chaves, cada etapa foi pensada para deixar você aproveitar o que realmente importa: dirigir.</p></div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="feature-item"><span className="feature-icon"><Sparkles /></span><h3>Curadoria exclusiva</h3><p>Uma seleção de modelos marcantes para diferentes estilos e ocasiões.</p></div>
            <div className="feature-item"><span className="feature-icon"><ShieldCheck /></span><h3>Transparência em cada etapa</h3><p>Informações claras para você planejar sua experiência com tranquilidade.</p></div>
            <div className="feature-item"><span className="feature-icon"><BadgeCheck /></span><h3>Atendimento pessoal</h3><p>Suporte para entender as opções e encontrar o carro que combina com você.</p></div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <div className="cta-panel">
            <div className="relative z-10 max-w-2xl"><p className="eyebrow">Sua próxima experiência começa aqui</p><h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Escolha o carro.<br /><span className="text-accent">Crie a história.</span></h2><Link to="/carros" className="button-lime mt-8">Encontrar meu próximo carro <ArrowRight size={17} /></Link></div>
            <div className="cta-watermark">I</div>
          </div>
        </div>
      </section>
    </>
  )
}