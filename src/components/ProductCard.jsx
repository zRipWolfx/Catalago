import { useState } from 'react'
import { ShoppingCart, Eye, MessageCircle, Package } from 'lucide-react'
import styles from './ProductCard.module.css'

export default function ProductCard({ product, onAddToCart, onViewProduct }) {
  const [added, setAdded] = useState(false)
  const [qty, setQty] = useState(1)

  const handleAdd = () => {
    onAddToCart({ ...product, qty })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  const waMsg = encodeURIComponent(
    `Hola, deseo consultar por:\n\nProducto: ${product.name}\nCódigo: ${product.code}\nPrecio unitario: S/ ${product.price.toFixed(2)}\nLink: https://techstorepc.vercel.app/producto/${product.slug}`
  )

  return (
    <div className={styles.card}>
      {product.badge && (
        <span className={styles.badge}>{product.badge}</span>
      )}

      <div className={styles.imgWrap} onClick={() => onViewProduct(product)}>
        <img src={product.image} alt={product.name} className={styles.img} loading="lazy" />
        <div className={styles.overlay}>
          <Eye size={18} /> Ver detalle
        </div>
      </div>

      <div className={styles.body}>
        <p className={styles.code}>{product.code}</p>
        <h3 className={styles.name}>{product.name}</h3>

        <div className={styles.prices}>
          <div className={styles.priceMain}>
            <span className={styles.currency}>S/</span>
            <span className={styles.amount}>{product.price.toFixed(2)}</span>
          </div>
          <div className={styles.priceSub}>
            <span><Package size={11} /> x12: <strong>S/ {product.priceDozen.toFixed(2)}</strong></span>
            <span>Caja: <strong>S/ {product.priceBox.toFixed(2)}</strong></span>
          </div>
        </div>

        <div className={styles.stock}>
          <span className={styles.stockDot} />
          Stock: {product.stock.toLocaleString()} und.
        </div>

        <div className={styles.qtyRow}>
          <button className={styles.qtyBtn} onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
          <span className={styles.qty}>{qty}</span>
          <button className={styles.qtyBtn} onClick={() => setQty(q => q + 1)}>+</button>
        </div>

        <button
          className={`${styles.addBtn} ${added ? styles.added : ''}`}
          onClick={handleAdd}
        >
          <ShoppingCart size={15} />
          {added ? '¡Agregado!' : 'Agregar al carrito'}
        </button>

        <a
          href={`https://wa.me/51993264414?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.waBtn}
        >
          <MessageCircle size={14} /> Consultar
        </a>
      </div>
    </div>
  )
}
