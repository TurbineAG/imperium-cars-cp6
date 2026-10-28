import { Search, SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import CarCard from '../components/CarCard'
import { cars } from '../data/cars'

export default function Carros() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todos')
  const [sort, setSort] = useState('featured')
  const categories = ['Todos', 'Esportivo', 'SUV', 'Supercarro']

  const filteredCars = useMemo(() => {
    let result = cars.filter((car) =>
      car.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === 'Todos' || car.category === category)
    )
    if (sort === 'low') result = [...result].sort((a, b) => a.price - b.price)
    if (sort === 'high') result = [...result].sort((a, b) => b.price - a.price)
    return result
  }, [search, category, sort])

  return (
    <section className="min-h-[70vh] pb-20 pt-14 sm:pt-20">
      <div className="container-shell">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow"><span className="accent-line" /> A garagem</p>
          <h1 className="section-title mt-5">Escolha sua <span className="text-accent">máquina.</span></h1>
          <p className="mt-5 max-w-xl leading-7 text-white/50">Dos esportivos precisos aos supercarros que desafiam o comum. Encontre o modelo para o seu próximo momento inesquecível.</p>
        </div>

        <div className="mb-8 flex flex-col gap-4 border-y border-white/10 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button key={item} onClick={() => setCategory(item)} className={`filter-chip ${category === item ? 'filter-chip-active' : ''}`}>{item}</button>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="search-box"><Search size={16} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar modelo..." aria-label="Buscar modelo" /></label>
            <label className="search-box"><SlidersHorizontal size={16} /><select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Ordenar carros"><option value="featured">Ordenar: destaque</option><option value="low">Menor diária</option><option value="high">Maior diária</option></select></label>
          </div>
        </div>

        <div className="mb-5 flex items-center justify-between text-xs text-white/45"><span>{filteredCars.length} veículos encontrados</span><span>Valores demonstrativos por diária</span></div>
        {filteredCars.length ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{filteredCars.map((car) => <CarCard key={car.id} car={car} />)}</div>
        ) : (
          <div className="grid min-h-64 place-items-center border border-dashed border-white/15 text-center"><div><p className="text-lg font-medium">Nenhum carro encontrado</p><p className="mt-2 text-sm text-white/45">Tente mudar a busca ou selecionar outra categoria.</p><button onClick={() => { setSearch(''); setCategory('Todos') }} className="mt-4 text-sm text-accent underline">Limpar filtros</button></div></div>
        )}
      </div>
    </section>
  )
}