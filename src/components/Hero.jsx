import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Zap, Shield, Truck, Monitor, Cpu, MemoryStick } from 'lucide-react'
import styles from './Hero.module.css'

const slides = [
  {
    title: 'RTX 4090',
    subtitle: 'La GPU más potente del mercado para gaming y creación',
    tag: 'Nuevo lanzamiento',
    cta: 'Ver Tarjetas Gráficas',
    category: 'tarjetas-graficas',
    gradient: 'linear-gradient(135deg, #0d1f35 0%, #1a3a5c 55%, #235a8a 100%)',
    accent: '#00b4d8',
    icon: <Monitor size={40} strokeWidth={1.5} />,
  },
  {
    title: 'Ryzen 9 7950X',
    subtitle: '16 núcleos para dominar cada tarea con eficiencia extrema',
    tag: 'Top Ventas',
    cta: 'Ver Procesadores',
    category: 'procesadores',
    gradient: 'linear-gradient(135deg, #0d2640 0%, #1e4a73 50%, #2d6fa5 100%)',
    accent: '#48cae4',
    icon: <Cpu size={40} strokeWidth={1.5} />,
  },
  {
    title: 'DDR5 32GB',
    subtitle: 'Memoria de próxima generación — velocidad incomparable',
    tag: 'Stock limitado',
    cta: 'Ver Memorias RAM',
    category: 'ram',
    gradient: 'linear-gradient(135deg, #061322 0%, #0d2e52 50%, #1a4a7a 100%)',
    accent: '#00b4d8',
    icon: <MemoryStick size={40} strokeWidth={1.5} />,
  },
]

const perks = [
  { icon: <Truck size={16} />, text: 'Envío a todo el Perú' },
  { icon: <Shield size={16} />, text: 'Garantía oficial' },
  { icon: <Zap size={16} />, text: 'Stock en Lima' },
]

export default function Hero({ onSelectCategory }) {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const go = (dir) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(c => (c + dir + slides.length) % slides.length)
      setAnimating(false)
    }, 300)
  }

  useEffect(() => {
    const t = setInterval(() => go(1), 5000)
    return () => clearInterval(t)
  }, [])

  const slide = slides[current]

  return (
    <section className={styles.hero}>
      <div
        className={`${styles.slide} ${animating ? styles.fadeOut : styles.fadeIn}`}
        style={{ background: slide.gradient }}
      >
        <div className={styles.gridBg} />
        <div className={styles.slideContent}>
          <div className={styles.slideLeft}>
            <span className={styles.tag}>{slide.tag}</span>
            <div className={styles.icon} style={{ color: slide.accent }}>{slide.icon}</div>
            <h1 className={styles.title} style={{ color: slide.accent }}>{slide.title}</h1>
            <p className={styles.subtitle}>{slide.subtitle}</p>
            <button className={styles.cta} onClick={() => onSelectCategory(slide.category)}>
              {slide.cta} →
            </button>
          </div>
          <div className={styles.slideRight}>
            <div className={styles.glowOrb} style={{ background: slide.accent }} />
            <div className={styles.statsCard}>
              <div className={styles.stat}>
                <span className={styles.statNum}>41+</span>
                <span className={styles.statLabel}>Productos</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>20</span>
                <span className={styles.statLabel}>Categorías</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>24h</span>
                <span className={styles.statLabel}>Despacho</span>
              </div>
            </div>
          </div>
        </div>

        <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={() => go(-1)} aria-label="Anterior">
          <ChevronLeft size={22} />
        </button>
        <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={() => go(1)} aria-label="Siguiente">
          <ChevronRight size={22} />
        </button>

        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button key={i} className={`${styles.dot} ${i === current ? styles.dotActive : ''}`} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </div>

      <div className={styles.perks}>
        {perks.map((p, i) => (
          <div key={i} className={styles.perk}>
            <span className={styles.perkIcon}>{p.icon}</span>
            <span>{p.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
