import { X, ShoppingCart, MessageCircle, Package, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import styles from './ProductModal.module.css'

export default function ProductModal({ product, onClose, onAddToCart }) {
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) return null

  const handleAdd = () => {
    onAddToCart({ ...product, qty })
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  const waMsg = encodeURIComponent(
    `Hola, deseo consultar por:\n\nProducto: ${product.name}\nCódigo: ${product.code}\nPrecio unitario: S/ ${product.price.toFixed(2)}\nCantidad: ${qty}`
  )

  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}><X size={20} /></button>

        <div className={styles.content}>
          <div className={styles.imgSide}>
            <img src={product.image} alt={product.name} className={styles.img} />
            {product.badge && <span className={styles.badge}>{product.badge}</span>}
          </div>

          <div className={styles.infoSide}>
            <p className={styles.code}>{product.code}</p>
            <h2 className={styles.name}>{product.name}</h2>

            <div className={styles.priceBlock}>
              <div className={styles.mainPrice}>
                <span className={styles.cur}>S/</span>
                <span className={styles.amt}>{product.price.toFixed(2)}</span>
                <span className={styles.unit}>/ unidad</span>
              </div>
              <div className={styles.bulkPrices}>
                <div className={styles.bulkRow}>
                  <Package size={13} />
                  <span>Precio por docena:</span>
                  <strong>S/ {product.priceDozen.toFixed(2)}</strong>
                </div>
                <div className={styles.bulkRow}>
                  <Package size={13} />
                  <span>Precio por caja:</span>
                  <strong>S/ {product.priceBox.toFixed(2)}</strong>
                </div>
              </div>
            </div>

            <div className={styles.stockRow}>
              <CheckCircle size={14} color="#22c55e" />
              <span>Stock disponible: <strong>{product.stock.toLocaleString()} unidades</strong></span>
            </div>

            <div className={styles.qtySection}>
              <label className={styles.qtyLabel}>Cantidad</label>
              <div className={styles.qtyControl}>
                <button className={styles.qBtn} onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                <input
                  type="number"
                  min={1}
                  value={qty}
                  onChange={e => setQty(Math.max(1, Number(e.target.value)))}
                  className={styles.qInput}
                />
                <button className={styles.qBtn} onClick={() => setQty(q => q + 1)}>+</button>
              </div>
              <span className={styles.subtotal}>
                Subtotal: <strong>S/ {(product.price * qty).toFixed(2)}</strong>
              </span>
            </div>

            <div className={styles.actions}>
              <button
                className={`${styles.addBtn} ${added ? styles.added : ''}`}
                onClick={handleAdd}
              >
                <ShoppingCart size={17} />
                {added ? '¡Agregado al carrito!' : 'Agregar al carrito'}
              </button>
              <a
                href={`https://wa.me/51993264414?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waBtn}
              >
                <MessageCircle size={17} />
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
