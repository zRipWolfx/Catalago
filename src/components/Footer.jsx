import {
  Cpu, MessageCircle, Phone, Mail, MapPin,
  Monitor, CircuitBoard, HardDrive, MemoryStick,
  Gamepad2, Server, Wifi, Keyboard, Mouse,
  Speaker, Power, Wind, Cable, Package, Layers
} from 'lucide-react'
import { categories } from '../data.js'
import styles from './Footer.module.css'

const catIcons = {
  'procesadores':      <CircuitBoard size={13} />,
  'tarjetas-graficas': <Monitor size={13} />,
  'ram':               <MemoryStick size={13} />,
  'almacenamiento':    <HardDrive size={13} />,
  'gaming':            <Gamepad2 size={13} />,
  'servidores':        <Server size={13} />,
  'networking':        <Wifi size={13} />,
  'teclados':          <Keyboard size={13} />,
  'mouse':             <Mouse size={13} />,
  'audio':             <Speaker size={13} />,
  'fuentes':           <Power size={13} />,
  'refrigeracion':     <Wind size={13} />,
  'cables':            <Cable size={13} />,
  'perifericos':       <Package size={13} />,
}

function getCatIcon(id) {
  return catIcons[id] || <Layers size={13} />
}

export default function Footer({ onSelectCategory }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <img src="/logo.png" alt="TechStore PC" className={styles.logoImg} />
            </div>
            <p className={styles.tagline}>
              Tu tienda de confianza para componentes de PC. Pedidos unitarios, por docena y al por mayor.
            </p>
            <div className={styles.contacts}>
              <a href="https://wa.me/51993264414" target="_blank" rel="noopener noreferrer" className={styles.contact}>
                <MessageCircle size={14} /> +51 993 264 414
              </a>
              <a href="tel:+51993264414" className={styles.contact}>
                <Phone size={14} /> +51 993 264 414
              </a>
              <a href="mailto:ventas@techstorepc.com" className={styles.contact}>
                <Mail size={14} /> ventas@techstorepc.com
              </a>
              <span className={styles.contact}>
                <MapPin size={14} /> Av. Puno 256, Lima
              </span>
            </div>
          </div>

          {/* Categories col 1 */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Categorías</h4>
            <ul className={styles.list}>
              {categories.slice(0, 10).map(c => (
                <li key={c.id}>
                  <button className={styles.link} onClick={() => onSelectCategory(c.id)}>
                    {getCatIcon(c.id)} {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories col 2 */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Más categorías</h4>
            <ul className={styles.list}>
              {categories.slice(10, 20).map(c => (
                <li key={c.id}>
                  <button className={styles.link} onClick={() => onSelectCategory(c.id)}>
                    {getCatIcon(c.id)} {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Información</h4>
            <ul className={styles.list}>
              <li><button className={styles.link}>Sobre nosotros</button></li>
              <li><button className={styles.link}>Cómo comprar</button></li>
              <li><button className={styles.link}>Garantías</button></li>
              <li><button className={styles.link}>Envíos y delivery</button></li>
              <li><button className={styles.link}>Preguntas frecuentes</button></li>
              <li><button className={styles.link}>Política de devoluciones</button></li>
            </ul>
            <div className={styles.waBlock}>
              <a
                href="https://wa.me/51993264414?text=Hola,%20deseo%20información%20de%20sus%20productos."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waBig}
              >
                <MessageCircle size={18} />
                Contactar ahora
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2025 TechStore PC. Todos los derechos reservados.</span>
          <span>Hecho con ♥ en Lima, Perú</span>
        </div>
      </div>
    </footer>
  )
}
