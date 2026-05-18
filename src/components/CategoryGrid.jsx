import {
  Monitor, CircuitBoard, HardDrive, MemoryStick,
  Gamepad2, Server, Wifi, Keyboard, Mouse,
  Speaker, Power, Wind, Cable, Package, Layers,
  Printer, Camera, Tv, Armchair, Wrench, Thermometer
} from 'lucide-react'
import { categories } from '../data.js'
import styles from './CategoryGrid.module.css'

const catIcons = {
  'procesadores':      <CircuitBoard size={20} />,
  'tarjetas-graficas': <Monitor size={20} />,
  'ram':               <MemoryStick size={20} />,
  'almacenamiento':    <HardDrive size={20} />,
  'placas-madre':      <Server size={20} />,
  'fuentes':           <Power size={20} />,
  'gabinetes':         <Package size={20} />,
  'refrigeracion':     <Wind size={20} />,
  'monitores':         <Tv size={20} />,
  'teclados':          <Keyboard size={20} />,
  'mouse':             <Mouse size={20} />,
  'audifonos':         <Speaker size={20} />,
  'webcams':           <Camera size={20} />,
  'redes':             <Wifi size={20} />,
  'cables':            <Cable size={20} />,
  'pasta-termica':     <Thermometer size={20} />,
  'auriculares':       <Gamepad2 size={20} />,
  'sillas':            <Layers size={20} />,
  'escritorios':       <Monitor size={20} />,
  'accesorios':        <Wrench size={20} />,
}

function getCatIcon(id) {
  return catIcons[id] || <Layers size={20} />
}

export default function CategoryGrid({ onSelectCategory, activeCategory }) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <span className={styles.label}>Explorar</span>
            <h2 className={styles.title}>Categorías</h2>
          </div>
          <button className={styles.verTodo} onClick={() => onSelectCategory(null)}>
            Ver todo →
          </button>
        </div>

        <div className={styles.grid}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.card} ${activeCategory === cat.id ? styles.active : ''}`}
              onClick={() => onSelectCategory(cat.id)}
            >
              <div className={styles.iconWrap}>
                {getCatIcon(cat.id)}
              </div>
              <span className={styles.name}>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
