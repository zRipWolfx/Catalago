import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import CategoryGrid from './components/CategoryGrid.jsx'
import ProductCatalog from './components/ProductCatalog.jsx'
import Cart from './components/Cart.jsx'
import ProductModal from './components/ProductModal.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) {
        return prev.map(i =>
          i.id === product.id ? { ...i, qty: i.qty + (product.qty || 1) } : i
        )
      }
      return [...prev, { ...product, qty: product.qty || 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(i => i.id !== id))
  }

  const updateQty = (id, qty) => {
    if (qty <= 0) {
      removeFromCart(id)
      return
    }
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i))
  }

  const handleSelectCategory = (cat) => {
    setActiveCategory(cat)
    setSearchQuery('')
    // Scroll to catalog
    setTimeout(() => {
      document.getElementById('catalog-top')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const handleSearch = (q) => {
    setSearchQuery(q)
    setActiveCategory(null)
    setTimeout(() => {
      document.getElementById('catalog-top')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const cartCount = cart.reduce((s, i) => s + i.qty, 0)

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setCartOpen(true)}
        onSearch={handleSearch}
        onSelectCategory={handleSelectCategory}
      />

      <main>
        <Hero onSelectCategory={handleSelectCategory} />
        <CategoryGrid
          onSelectCategory={handleSelectCategory}
          activeCategory={activeCategory}
        />
        <ProductCatalog
          activeCategory={activeCategory}
          searchQuery={searchQuery}
          onAddToCart={(p) => { addToCart(p); setCartOpen(true) }}
          onViewProduct={setSelectedProduct}
        />
      </main>

      <Footer onSelectCategory={handleSelectCategory} />

      {cartOpen && (
        <Cart
          items={cart}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onUpdateQty={updateQty}
        />
      )}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={(p) => { addToCart(p); setSelectedProduct(null); setCartOpen(true) }}
        />
      )}
    </div>
  )
}
