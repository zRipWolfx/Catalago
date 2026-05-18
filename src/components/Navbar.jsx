import { useState } from 'react'
import {
  ShoppingCart, Search, Menu, X, Zap,
  Monitor, CircuitBoard, HardDrive, MemoryStick,
  Gamepad2, Server, Wifi, Keyboard, Mouse,
  Speaker, Power, Wind, Cable, Package, Layers,
  ChevronDown, ChevronUp
} from 'lucide-react'
import { categories } from '../data.js'
import styles from './Navbar.module.css'

const catIcons = {
  'procesadores':      <CircuitBoard size={13} />,
  'tarjetas-graficas': <Monitor size={13} />,
  'ram':               <MemoryStick size={13} />,
  'almacenamiento':    <HardDrive size={13} />,
  'placas-madre':      <Server size={13} />,
  'fuentes':           <Power size={13} />,
  'gabinetes':         <Package size={13} />,
  'refrigeracion':     <Wind size={13} />,
  'monitores':         <Monitor size={13} />,
  'teclados':          <Keyboard size={13} />,
  'mouse':             <Mouse size={13} />,
  'audifonos':         <Speaker size={13} />,
  'webcams':           <Monitor size={13} />,
  'redes':             <Wifi size={13} />,
  'cables':            <Cable size={13} />,
  'pasta-termica':     <Package size={13} />,
  'auriculares':       <Gamepad2 size={13} />,
  'sillas':            <Package size={13} />,
  'escritorios':       <Monitor size={13} />,
  'accesorios':        <Package size={13} />,
}
function getCatIcon(id) { return catIcons[id] || <Layers size={13} /> }

export default function Navbar({ cartCount, onOpenCart, onSearch, onSelectCategory }) {
  const [menuOpen, setMenuOpen]     = useState(false)
  const [catsOpen, setCatsOpen]     = useState(false)
  const [searchVal, setSearchVal]   = useState('')

  const handleChange = (e) => {
    const val = e.target.value
    setSearchVal(val)
    onSearch(val)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchVal)
    setMenuOpen(false)
  }

  const selectCat = (id) => {
    onSelectCategory(id)
    setMenuOpen(false)
    setCatsOpen(false)
  }

  const resetAll = () => {
    onSelectCategory(null)
    onSearch('')
    setSearchVal('')
    setMenuOpen(false)
    setCatsOpen(false)
  }

  return (
    <header className={styles.header}>
      {/* ── Top bar ── */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <span className={styles.topBarText}>
            <Zap size={12} /> Envío gratis en pedidos &gt; S/ 500
          </span>
          <span className={styles.topBarContact}>
            📞 +51 993 264 414 &nbsp;|&nbsp; ventas@techstorepc.com
          </span>
        </div>
      </div>

      {/* ── Main nav ── */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          {/* Logo imagen */}
          <a href="#" className={styles.logo} onClick={resetAll} aria-label="Inicio">
            <img src="/logo.png" alt="TechStore PC" className={styles.logoImg} />
          </a>

          {/* Search — visible en desktop, oculto en móvil */}
          <form className={styles.searchForm} onSubmit={handleSubmit}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Buscar procesador, GPU, RAM..."
              value={searchVal}
              onChange={handleChange}
              aria-label="Buscar productos"
            />
            <button type="submit" className={styles.searchBtn} aria-label="Buscar">
              <Search size={18} />
            </button>
          </form>

          {/* Acciones */}
          <div className={styles.actions}>
            <button className={styles.cartBtn} onClick={onOpenCart} aria-label="Carrito">
              <ShoppingCart size={20} />
              {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
            </button>
            <button
              className={styles.menuBtn}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menú"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Category strip — solo desktop ── */}
      <div className={styles.catStrip}>
        <div className={styles.catStripInner}>
          <button className={styles.catChip} onClick={resetAll}>
            <Layers size={13} /> Todo
          </button>
          {categories.map(c => (
            <button key={c.id} className={styles.catChip} onClick={() => selectCat(c.id)}>
              {getCatIcon(c.id)} {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* ── Mobile menu drawer ── */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {/* Search móvil */}
          <form className={styles.mobileSearch} onSubmit={handleSubmit}>
            <div className={styles.mobileSearchWrap}>
              <Search size={16} className={styles.mobileSearchIcon} />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchVal}
                onChange={handleChange}
                className={styles.mobileSearchInput}
                autoFocus
              />
            </div>
          </form>

          {/* Toggle categorías */}
          <button className={styles.catToggle} onClick={() => setCatsOpen(!catsOpen)}>
            <span className={styles.catToggleLabel}>
              <Package size={15} /> Categorías
            </span>
            {catsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {/* Lista de categorías desplegable */}
          {catsOpen && (
            <div className={styles.mobileCats}>
              <button className={styles.mobileCatItem} onClick={resetAll}>
                <Layers size={15} /> Todo
              </button>
              {categories.map(c => (
                <button key={c.id} className={styles.mobileCatItem} onClick={() => selectCat(c.id)}>
                  {getCatIcon(c.id)} {c.name}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </header>
  )
}
