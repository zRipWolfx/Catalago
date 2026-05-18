import { useState, useMemo, useEffect } from 'react'
import { SlidersHorizontal, Grid2X2, List, ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from './ProductCard.jsx'
import { products, categories } from '../data.js'
import styles from './ProductCatalog.module.css'

const PAGE_SIZE = 12

export default function ProductCatalog({ activeCategory, searchQuery, onAddToCart, onViewProduct }) {
  const [sortBy, setSortBy] = useState('default')
  const [page, setPage] = useState(1)
  const [view, setView] = useState('grid')

  // Resetear página cuando cambia la búsqueda o categoría (búsqueda asíncrona)
  useEffect(() => {
    setPage(1)
  }, [activeCategory, searchQuery])


  const filtered = useMemo(() => {
    let list = [...products]
    if (activeCategory) list = list.filter(p => p.category === activeCategory)
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.code.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      )
    }
    if (sortBy === 'price-asc')  list.sort((a, b) => a.price - b.price)
    if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price)
    if (sortBy === 'name')       list.sort((a, b) => a.name.localeCompare(b.name))
    if (sortBy === 'stock')      list.sort((a, b) => b.stock - a.stock)
    return list
  }, [activeCategory, searchQuery, sortBy])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const catName = activeCategory
    ? categories.find(c => c.id === activeCategory)?.name
    : 'Todos los productos'

  const handleSetPage = (p) => {
    setPage(p)
    document.getElementById('catalog-top')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className={styles.section} id="catalog-top">
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className={styles.label}>Catálogo</span>
            <h2 className={styles.title}>{catName}</h2>
            <p className={styles.count}>{filtered.length} producto(s) disponibles</p>
          </div>

          <div className={styles.controls}>
            <div className={styles.viewBtns}>
              <button
                className={`${styles.viewBtn} ${view === 'grid' ? styles.viewActive : ''}`}
                onClick={() => setView('grid')}
              ><Grid2X2 size={16} /></button>
              <button
                className={`${styles.viewBtn} ${view === 'list' ? styles.viewActive : ''}`}
                onClick={() => setView('list')}
              ><List size={16} /></button>
            </div>

            <div className={styles.sortWrap}>
              <SlidersHorizontal size={14} />
              <select
                className={styles.sort}
                value={sortBy}
                onChange={e => { setSortBy(e.target.value); setPage(1) }}
              >
                <option value="default">Ordenar por</option>
                <option value="price-asc">Precio: menor a mayor</option>
                <option value="price-desc">Precio: mayor a menor</option>
                <option value="name">Nombre A–Z</option>
                <option value="stock">Mayor stock</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        {paginated.length === 0 ? (
          <div className={styles.empty}>
            <span style={{ fontSize: 48 }}>🔍</span>
            <p>No se encontraron productos.</p>
            <span>Intenta con otro término o categoría.</span>
          </div>
        ) : (
          <div className={view === 'grid' ? styles.grid : styles.listView}>
            {paginated.map(p => (
              <ProductCard
                key={p.id}
                product={p}
                onAddToCart={onAddToCart}
                onViewProduct={onViewProduct}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              className={styles.pageBtn}
              onClick={() => handleSetPage(Math.max(1, page - 1))}
              disabled={page === 1}
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
              let p
              if (totalPages <= 7) p = i + 1
              else if (page <= 4) p = i + 1
              else if (page >= totalPages - 3) p = totalPages - 6 + i
              else p = page - 3 + i
              return (
                <button
                  key={p}
                  className={`${styles.pageBtn} ${p === page ? styles.pageActive : ''}`}
                  onClick={() => handleSetPage(p)}
                >
                  {p}
                </button>
              )
            })}

            <button
              className={styles.pageBtn}
              onClick={() => handleSetPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
