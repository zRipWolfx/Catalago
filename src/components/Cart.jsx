import { X, Trash2, ShoppingBag, MessageCircle } from 'lucide-react'
import styles from './Cart.module.css'

export default function Cart({ items, onClose, onRemove, onUpdateQty }) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0)

  const waLines = items.map(i =>
    `• ${i.name} (x${i.qty}) — S/ ${(i.price * i.qty).toFixed(2)}`
  ).join('\n')

  const waMsg = encodeURIComponent(
    `Hola, quiero realizar el siguiente pedido:\n\n${waLines}\n\nTOTAL: S/ ${total.toFixed(2)}`
  )

  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <aside className={styles.drawer}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <ShoppingBag size={20} />
            <span>Carrito</span>
            <span className={styles.count}>{items.length}</span>
          </div>
          <button className={styles.closeBtn} onClick={onClose}><X size={20} /></button>
        </div>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <ShoppingBag size={48} opacity={0.2} />
            <p>Tu carrito está vacío</p>
            <span>Agrega productos para comenzar</span>
          </div>
        ) : (
          <>
            <div className={styles.items}>
              {items.map(item => (
                <div key={item.id} className={styles.item}>
                  <img src={item.image} alt={item.name} className={styles.itemImg} />
                  <div className={styles.itemInfo}>
                    <p className={styles.itemName}>{item.name}</p>
                    <p className={styles.itemCode}>{item.code}</p>
                    <div className={styles.itemBottom}>
                      <div className={styles.qtyRow}>
                        <button className={styles.qBtn} onClick={() => onUpdateQty(item.id, item.qty - 1)}>−</button>
                        <span>{item.qty}</span>
                        <button className={styles.qBtn} onClick={() => onUpdateQty(item.id, item.qty + 1)}>+</button>
                      </div>
                      <span className={styles.itemPrice}>S/ {(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  </div>
                  <button className={styles.removeBtn} onClick={() => onRemove(item.id)}>
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>

            <div className={styles.footer}>
              <div className={styles.totalRow}>
                <span>Total</span>
                <span className={styles.total}>S/ {total.toFixed(2)}</span>
              </div>
              <a
                href={`https://wa.me/51993264414?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waBtn}
              >
                <MessageCircle size={18} />
                Pedir por WhatsApp
              </a>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
