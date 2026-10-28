import { ArrowUpRight, Gauge, Zap } from 'lucide-react'
import { formatPrice } from '../data/cars'

export default function CarCard({ car }) {
  return (
    <article className="car-card group">
      <div className="car-image-wrap">
        <img src={car.image} alt={car.name} className="car-image" loading="lazy" />
        <span className="car-tag">{car.tag}</span>
        <span className="car-year">{car.year}</span>
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="eyebrow">{car.category}</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">{car.name}</h3>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 transition group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
            <ArrowUpRight size={18} />
          </span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2 border-y border-white/10 py-4">
          <div><p className="text-[10px] uppercase tracking-wider text-white/40">Potência</p><p className="mt-1 text-sm font-medium">{car.power}</p></div>
          <div><p className="text-[10px] uppercase tracking-wider text-white/40">0–100 km/h</p><p className="mt-1 text-sm font-medium">{car.zeroToHundred}</p></div>
          <div><p className="text-[10px] uppercase tracking-wider text-white/40">Câmbio</p><p className="mt-1 truncate text-sm font-medium">{car.transmission}</p></div>
        </div>
        <div className="flex items-end justify-between gap-3 pt-4">
          <div><p className="text-[10px] uppercase tracking-wider text-white/40">Diária a partir de</p><p className="mt-1 text-xl font-bold">{formatPrice(car.price)}<span className="ml-1 text-xs font-normal text-white/45">/ dia</span></p></div>
          <a href={`https://wa.me/?text=${encodeURIComponent(`Olá! Tenho interesse em alugar o ${car.name}.`)}`} target="_blank" rel="noreferrer" className="text-xs font-semibold text-accent transition hover:text-white">Consultar <ArrowUpRight className="ml-1 inline" size={13} /></a>
        </div>
      </div>
    </article>
  )
}