# TechStore PC — Catálogo de Componentes

Catálogo de componentes para PC inspirado en Grupo Shinan. Colores: morado, blanco y negro.

## 🚀 Deploy en Vercel

### Opción 1: Vercel CLI
```bash
npm install -g vercel
cd pc-catalog
npm install
vercel
```

### Opción 2: GitHub + Vercel (recomendado)
1. Sube esta carpeta a un repositorio de GitHub
2. Ve a [vercel.com](https://vercel.com) → New Project
3. Importa tu repositorio
4. Vercel detecta Vite automáticamente → Deploy

### Opción 3: Arrastrar y soltar
```bash
npm install
npm run build
```
Arrastra la carpeta `dist/` a [vercel.com/new](https://vercel.com/new)

## 🛠 Desarrollo local
```bash
npm install
npm run dev
```
Abre http://localhost:5173

## 📦 Estructura
```
src/
  components/
    Navbar.jsx        # Barra de navegación con búsqueda y carrito
    Hero.jsx          # Slider principal
    CategoryGrid.jsx  # Grilla de categorías
    ProductCatalog.jsx # Catálogo con filtros y paginación
    ProductCard.jsx   # Tarjeta de producto
    ProductModal.jsx  # Modal de detalle
    Cart.jsx          # Carrito lateral
    Footer.jsx        # Pie de página
  data.js             # Productos y categorías (editar aquí)
  App.jsx             # Componente raíz
```

## ✏️ Personalización
- Edita `src/data.js` para agregar/editar productos y categorías
- Cambia el número de WhatsApp en `data.js` (busca `51993264414`)
- Los colores están en `src/index.css` como variables CSS
