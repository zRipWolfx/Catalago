export const categories = [
  { id: 'procesadores',      name: 'Procesadores',        emoji: '🔲', icon: 'cpu' },
  { id: 'tarjetas-graficas', name: 'Tarjetas Gráficas',   emoji: '🎮', icon: 'gpu' },
  { id: 'ram',               name: 'Memoria RAM',          emoji: '💾', icon: 'ram' },
  { id: 'almacenamiento',    name: 'Almacenamiento',       emoji: '💿', icon: 'storage' },
  { id: 'placas-madre',      name: 'Placas Madre',         emoji: '🔌', icon: 'motherboard' },
  { id: 'fuentes',           name: 'Fuentes de Poder',     emoji: '⚡', icon: 'psu' },
  { id: 'gabinetes',         name: 'Gabinetes',            emoji: '🖥️', icon: 'case' },
  { id: 'refrigeracion',     name: 'Refrigeración',        emoji: '❄️', icon: 'cooling' },
  { id: 'monitores',         name: 'Monitores',            emoji: '🖥️', icon: 'monitor' },
  { id: 'teclados',          name: 'Teclados',             emoji: '⌨️', icon: 'keyboard' },
  { id: 'mouse',             name: 'Mouse',                emoji: '🖱️', icon: 'mouse' },
  { id: 'audifonos',         name: 'Audífonos',            emoji: '🎧', icon: 'headset' },
  { id: 'webcams',           name: 'Webcams',              emoji: '📷', icon: 'webcam' },
  { id: 'redes',             name: 'Redes & WiFi',         emoji: '📡', icon: 'network' },
  { id: 'cables',            name: 'Cables',               emoji: '🔗', icon: 'cables' },
  { id: 'pasta-termica',     name: 'Pasta Térmica',        emoji: '🧴', icon: 'thermal' },
  { id: 'auriculares',       name: 'Auriculares Gaming',   emoji: '🎮', icon: 'gaming' },
  { id: 'sillas',            name: 'Sillas Gamer',         emoji: '🪑', icon: 'chair' },
  { id: 'escritorios',       name: 'Escritorios',          emoji: '🗄️', icon: 'desk' },
  { id: 'accesorios',        name: 'Accesorios',           emoji: '🔧', icon: 'accessories' },
];

export const products = [
  // ── Procesadores ──
  {
    id: 1, slug: 'ryzen-5-5600x', name: 'AMD Ryzen 5 5600X', code: 'AMD-R5-5600X',
    category: 'procesadores', price: 599, priceDozen: 570, priceBox: 550, stock: 45,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop', // CPU AMD Ryzen
    badge: 'Popular'
  },
  {
    id: 2, slug: 'ryzen-7-5800x', name: 'AMD Ryzen 7 5800X', code: 'AMD-R7-5800X',
    category: 'procesadores', price: 899, priceDozen: 870, priceBox: 850, stock: 20,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop&sat=-10', // CPU AMD Ryzen (variación)
    badge: 'Top Venta'
  },
  {
    id: 3, slug: 'core-i5-12400', name: 'Intel Core i5-12400F', code: 'INT-I5-12400F',
    category: 'procesadores', price: 649, priceDozen: 620, priceBox: 600, stock: 30,
    image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&h=300&fit=crop&hue=200' // CPU Intel (azul)
  },
  {
    id: 4, slug: 'core-i7-13700k', name: 'Intel Core i7-13700K', code: 'INT-I7-13700K',
    category: 'procesadores', price: 1299, priceDozen: 1250, priceBox: 1200, stock: 15,
    image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&h=300&fit=crop&hue=210', // CPU Intel (variación azul)
    badge: 'Nuevo'
  },
  {
    id: 5, slug: 'ryzen-9-7950x', name: 'AMD Ryzen 9 7950X', code: 'AMD-R9-7950X',
    category: 'procesadores', price: 2199, priceDozen: 2100, priceBox: 2000, stock: 8,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop&sat=10', // CPU AMD Ryzen
    badge: 'Premium'
  },
  {
    id: 6, slug: 'core-i9-13900k', name: 'Intel Core i9-13900K', code: 'INT-I9-13900K',
    category: 'procesadores', price: 2499, priceDozen: 2400, priceBox: 2300, stock: 5,
    image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&h=300&fit=crop&hue=190', // CPU Intel
    badge: 'Gamer Pro'
  },

  // ── Tarjetas Gráficas ──
  {
    id: 7, slug: 'rtx-4060', name: 'NVIDIA RTX 4060 8GB', code: 'NV-RTX4060-8G',
    category: 'tarjetas-graficas', price: 1499, priceDozen: 1450, priceBox: 1400, stock: 25,
    image: 'https://images.unsplash.com/photo-1593640408182-31c228571bfa?w=400&h=300&fit=crop', // General GPU
    badge: 'Popular'
  },
  {
    id: 8, slug: 'rtx-4070', name: 'NVIDIA RTX 4070 12GB', code: 'NV-RTX4070-12G',
    category: 'tarjetas-graficas', price: 2299, priceDozen: 2200, priceBox: 2100, stock: 12,
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&h=300&fit=crop&hue=90', // Green tint NVIDIA
    badge: 'Top Venta'
  },
  {
    id: 9, slug: 'rx-7600', name: 'AMD Radeon RX 7600 8GB', code: 'AMD-RX7600-8G',
    category: 'tarjetas-graficas', price: 1199, priceDozen: 1150, priceBox: 1100, stock: 18,
    image: 'https://images.unsplash.com/photo-1587202372619-38f8d3c5f430?w=400&h=300&fit=crop' // AMD GPU Red tint
  },
  {
    id: 10, slug: 'rtx-4090', name: 'NVIDIA RTX 4090 24GB', code: 'NV-RTX4090-24G',
    category: 'tarjetas-graficas', price: 7999, priceDozen: 7800, priceBox: 7600, stock: 3,
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&h=300&fit=crop', // Big GPU
    badge: 'Bestia'
  },

  // ── RAM ──
  {
    id: 11, slug: 'corsair-ddr4-16gb', name: 'Corsair Vengeance DDR4 16GB', code: 'COR-DDR4-16GB',
    category: 'ram', price: 189, priceDozen: 175, priceBox: 165, stock: 80,
    image: 'https://images.unsplash.com/photo-1562976540-1502c2145851?w=400&h=300&fit=crop',
    badge: 'Popular'
  },
  {
    id: 12, slug: 'kingston-ddr5-32gb', name: 'Kingston Fury DDR5 32GB', code: 'KIN-DDR5-32GB',
    category: 'ram', price: 399, priceDozen: 380, priceBox: 360, stock: 40,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop',
    badge: 'Nuevo'
  },
  {
    id: 13, slug: 'gskill-ddr4-8gb', name: 'G.Skill Ripjaws DDR4 8GB', code: 'GSK-DDR4-8GB',
    category: 'ram', price: 99, priceDozen: 90, priceBox: 85, stock: 120,
    image: 'https://images.unsplash.com/photo-1618495289690-4f7d6a7afe65?w=400&h=300&fit=crop'
  },
  {
    id: 14, slug: 'crucial-ddr5-64gb', name: 'Crucial DDR5 64GB Kit', code: 'CRU-DDR5-64GB',
    category: 'ram', price: 799, priceDozen: 760, priceBox: 720, stock: 15,
    image: 'https://images.unsplash.com/photo-1562976540-1502c2145851?w=400&h=300&fit=crop&flip=h',
    badge: 'Pro'
  },

  // ── Almacenamiento ──
  {
    id: 15, slug: 'samsung-970-1tb', name: 'Samsung 970 EVO NVMe 1TB', code: 'SAM-970EVO-1TB',
    category: 'almacenamiento', price: 299, priceDozen: 285, priceBox: 270, stock: 60,
    image: 'https://images.unsplash.com/photo-1639224235006-5a86c75c5680?w=400&h=300&fit=crop',
    badge: 'Popular'
  },
  {
    id: 16, slug: 'wd-black-2tb', name: 'WD Black SN850X 2TB', code: 'WD-SN850X-2TB',
    category: 'almacenamiento', price: 499, priceDozen: 475, priceBox: 450, stock: 35,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop',
    badge: 'Gaming'
  },
  {
    id: 17, slug: 'seagate-hdd-4tb', name: 'Seagate BarraCuda HDD 4TB', code: 'SEA-BARRA-4TB',
    category: 'almacenamiento', price: 249, priceDozen: 235, priceBox: 220, stock: 50,
    image: 'https://images.unsplash.com/photo-1544411047-c491e1e9e31a?w=400&h=300&fit=crop'
  },
  {
    id: 18, slug: 'crucial-mx500-500gb', name: 'Crucial MX500 SATA 500GB', code: 'CRU-MX500-500G',
    category: 'almacenamiento', price: 129, priceDozen: 120, priceBox: 110, stock: 90,
    image: 'https://images.unsplash.com/photo-1548048026-5a1a941d93d3?w=400&h=300&fit=crop'
  },

  // ── Placas Madre ──
  {
    id: 19, slug: 'asus-rog-x570', name: 'ASUS ROG STRIX X570-E', code: 'ASUS-ROG-X570E',
    category: 'placas-madre', price: 1199, priceDozen: 1150, priceBox: 1100, stock: 12,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
    badge: 'Gaming'
  },
  {
    id: 20, slug: 'gigabyte-z690', name: 'Gigabyte Z690 AORUS Elite', code: 'GIG-Z690-AOR',
    category: 'placas-madre', price: 999, priceDozen: 950, priceBox: 920, stock: 18,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
    badge: 'Popular'
  },
  {
    id: 21, slug: 'msi-b550', name: 'MSI MAG B550 TOMAHAWK', code: 'MSI-B550-TOM',
    category: 'placas-madre', price: 599, priceDozen: 570, priceBox: 550, stock: 22,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&hue=200'
  },

  // ── Fuentes ──
  {
    id: 22, slug: 'corsair-rm750x', name: 'Corsair RM750x 750W 80+ Gold', code: 'COR-RM750X',
    category: 'fuentes', price: 449, priceDozen: 420, priceBox: 400, stock: 30,
    image: 'https://images.unsplash.com/photo-1619697618591-83498bf7d9d1?w=400&h=300&fit=crop',
    badge: 'Popular'
  },
  {
    id: 23, slug: 'evga-1000w', name: 'EVGA SuperNOVA 1000W P5', code: 'EVG-1000W-P5',
    category: 'fuentes', price: 699, priceDozen: 660, priceBox: 640, stock: 15,
    image: 'https://images.unsplash.com/photo-1587202372555-e1af3e8c4a0d?w=400&h=300&fit=crop'
  },
  {
    id: 24, slug: 'seasonic-850w', name: 'Seasonic Focus GX-850W', code: 'SEA-GX850W',
    category: 'fuentes', price: 499, priceDozen: 470, priceBox: 450, stock: 20,
    image: 'https://images.unsplash.com/photo-1619697618591-83498bf7d9d1?w=400&h=300&fit=crop&sat=-20',
    badge: 'Modular'
  },

  // ── Gabinetes ──
  {
    id: 25, slug: 'nzxt-h510', name: 'NZXT H510 Flow', code: 'NZXT-H510F',
    category: 'gabinetes', price: 349, priceDozen: 330, priceBox: 310, stock: 25,
    image: 'https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=400&h=300&fit=crop',
    badge: 'Popular'
  },
  {
    id: 26, slug: 'corsair-4000d', name: 'Corsair 4000D Airflow', code: 'COR-4000D-AF',
    category: 'gabinetes', price: 399, priceDozen: 375, priceBox: 350, stock: 18,
    image: 'https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?w=400&h=300&fit=crop'
  },
  {
    id: 27, slug: 'lian-li-o11', name: 'Lian Li O11 Dynamic EVO', code: 'LL-O11-EVO',
    category: 'gabinetes', price: 549, priceDozen: 520, priceBox: 500, stock: 10,
    image: 'https://images.unsplash.com/photo-1587202372619-38f8d3c5f430?w=400&h=300&fit=crop&hue=200',
    badge: 'Premium'
  },

  // ── Refrigeración ──
  {
    id: 28, slug: 'noctua-nh-d15', name: 'Noctua NH-D15', code: 'NOC-NHD15',
    category: 'refrigeracion', price: 349, priceDozen: 330, priceBox: 310, stock: 20,
    image: 'https://images.unsplash.com/photo-1636322049434-8e490d37dbc0?w=400&h=300&fit=crop',
    badge: 'Silencioso'
  },
  {
    id: 29, slug: 'corsair-h100i', name: 'Corsair iCUE H100i RGB', code: 'COR-H100I-RGB',
    category: 'refrigeracion', price: 449, priceDozen: 420, priceBox: 400, stock: 15,
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&h=300&fit=crop&hue=240',
    badge: 'AIO 240mm'
  },
  {
    id: 30, slug: 'arctic-liquid-240', name: 'Arctic Liquid Freezer II 240', code: 'ARC-LF2-240',
    category: 'refrigeracion', price: 299, priceDozen: 280, priceBox: 265, stock: 22,
    image: 'https://images.unsplash.com/photo-1636322049434-8e490d37dbc0?w=400&h=300&fit=crop&flip=h'
  },

  // ── Monitores ──
  {
    id: 31, slug: 'lg-27gp850', name: 'LG UltraGear 27" 144Hz IPS', code: 'LG-27GP850',
    category: 'monitores', price: 1299, priceDozen: 1250, priceBox: 1200, stock: 15,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a573d5f6a5?w=400&h=300&fit=crop',
    badge: 'Gaming'
  },
  {
    id: 32, slug: 'samsung-odyssey', name: 'Samsung Odyssey G7 32" 240Hz', code: 'SAM-ODY-G7-32',
    category: 'monitores', price: 2199, priceDozen: 2100, priceBox: 2000, stock: 8,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop',
    badge: 'Pro'
  },
  {
    id: 33, slug: 'dell-27-4k', name: 'Dell UltraSharp 27" 4K', code: 'DEL-U2723D',
    category: 'monitores', price: 1799, priceDozen: 1720, priceBox: 1650, stock: 10,
    image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=400&h=300&fit=crop'
  },

  // ── Teclados ──
  {
    id: 34, slug: 'keychron-k2', name: 'Keychron K2 Wireless TKL', code: 'KEY-K2-RGB',
    category: 'teclados', price: 399, priceDozen: 375, priceBox: 355, stock: 30,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop',
    badge: 'Popular'
  },
  {
    id: 35, slug: 'corsair-k100', name: 'Corsair K100 RGB Óptico', code: 'COR-K100-RGB',
    category: 'teclados', price: 649, priceDozen: 620, priceBox: 600, stock: 12,
    image: 'https://images.unsplash.com/photo-1601445638532-1f90b5c97eda?w=400&h=300&fit=crop',
    badge: 'Gaming'
  },
  {
    id: 36, slug: 'anne-pro-2', name: 'Anne Pro 2 60% RGB', code: 'ANN-PRO2-RGB',
    category: 'teclados', price: 249, priceDozen: 230, priceBox: 215, stock: 25,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&h=300&fit=crop'
  },

  // ── Mouse ──
  {
    id: 37, slug: 'logitech-g502x', name: 'Logitech G502 X Plus', code: 'LOG-G502X-P',
    category: 'mouse', price: 299, priceDozen: 280, priceBox: 265, stock: 40,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop',
    badge: 'Popular'
  },
  {
    id: 38, slug: 'razer-deathadder', name: 'Razer DeathAdder V3', code: 'RAZ-DAV3',
    category: 'mouse', price: 349, priceDozen: 330, priceBox: 315, stock: 28,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&h=300&fit=crop',
    badge: 'Ergonómico'
  },
  {
    id: 39, slug: 'glorious-model-o', name: 'Glorious Model O Wireless', code: 'GLO-MODELO-W',
    category: 'mouse', price: 249, priceDozen: 230, priceBox: 215, stock: 20,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop&hue=200'
  },

  // ── Audífonos ──
  {
    id: 40, slug: 'hyperx-cloud-ii', name: 'HyperX Cloud II Wireless', code: 'HYP-CLD2-W',
    category: 'audifonos', price: 449, priceDozen: 420, priceBox: 400, stock: 20,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    badge: 'Popular'
  },
  {
    id: 41, slug: 'steelseries-arctis-7', name: 'SteelSeries Arctis 7+', code: 'SS-ARC7P',
    category: 'audifonos', price: 549, priceDozen: 520, priceBox: 500, stock: 15,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop',
    badge: 'Gaming'
  },

  // ── Webcams ──
  {
    id: 42, slug: 'logitech-c920', name: 'Logitech C920 HD Pro', code: 'LOG-C920',
    category: 'webcams', price: 299, priceDozen: 280, priceBox: 260, stock: 30,
    image: 'https://images.unsplash.com/photo-1616440409059-e93817f735d4?w=400&h=300&fit=crop',
    badge: 'Top Venta'
  },
  {
    id: 43, slug: 'razer-kiyo-pro', name: 'Razer Kiyo Pro USB', code: 'RAZ-KIYO-P',
    category: 'webcams', price: 449, priceDozen: 430, priceBox: 410, stock: 15,
    image: 'https://images.unsplash.com/photo-1587826359052-cdca99b0c675?w=400&h=300&fit=crop'
  },

  // ── Redes & WiFi ──
  {
    id: 44, slug: 'tp-link-ax73', name: 'TP-Link Archer AX73 WiFi 6', code: 'TPL-AX73',
    category: 'redes', price: 549, priceDozen: 520, priceBox: 500, stock: 25,
    image: 'https://images.unsplash.com/photo-1606904193582-70b9ce4f68fa?w=400&h=300&fit=crop',
    badge: 'Popular'
  },
  {
    id: 45, slug: 'asus-usb-ax56', name: 'ASUS USB-AX56 WiFi 6', code: 'ASUS-AX56',
    category: 'redes', price: 199, priceDozen: 185, priceBox: 175, stock: 40,
    image: 'https://images.unsplash.com/photo-1586942581691-14064b38dcd3?w=400&h=300&fit=crop'
  },

  // ── Cables ──
  {
    id: 46, slug: 'ugreen-hdmi-21', name: 'UGREEN Cable HDMI 2.1 2M', code: 'UGR-HDMI-21',
    category: 'cables', price: 49, priceDozen: 40, priceBox: 35, stock: 100,
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?w=400&h=300&fit=crop'
  },
  {
    id: 47, slug: 'ugreen-dp-14', name: 'UGREEN Cable DisplayPort 1.4 2M', code: 'UGR-DP-14',
    category: 'cables', price: 59, priceDozen: 50, priceBox: 45, stock: 80,
    image: 'https://images.unsplash.com/photo-1563223771-46bb6f7cb14d?w=400&h=300&fit=crop'
  },

  // ── Pasta Térmica ──
  {
    id: 48, slug: 'thermal-grizzly-kryonaut', name: 'Thermal Grizzly Kryonaut 1g', code: 'TG-KRYO-1G',
    category: 'pasta-termica', price: 45, priceDozen: 40, priceBox: 35, stock: 60,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop&sat=0&lum=-20',
    badge: 'Top Venta'
  },
  {
    id: 49, slug: 'arctic-mx4', name: 'Arctic MX-4 4g', code: 'ARC-MX4-4G',
    category: 'pasta-termica', price: 35, priceDozen: 30, priceBox: 25, stock: 120,
    image: 'https://images.unsplash.com/photo-1587202372619-38f8d3c5f430?w=400&h=300&fit=crop&sat=0&lum=10'
  },

  // ── Sillas ──
  {
    id: 50, slug: 'secretlab-titan', name: 'Secretlab TITAN Evo', code: 'SEC-TITAN',
    category: 'sillas', price: 1899, priceDozen: 1850, priceBox: 1800, stock: 10,
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=300&fit=crop',
    badge: 'Premium'
  },
  {
    id: 51, slug: 'corsair-t3-rush', name: 'Corsair T3 Rush Fabric', code: 'COR-T3-RUSH',
    category: 'sillas', price: 1299, priceDozen: 1250, priceBox: 1200, stock: 15,
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=400&h=300&fit=crop'
  },

  // ── Escritorios ──
  {
    id: 52, slug: 'cougar-mars', name: 'Cougar Mars Gaming Desk', code: 'COU-MARS',
    category: 'escritorios', price: 1499, priceDozen: 1450, priceBox: 1400, stock: 8,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=300&fit=crop',
    badge: 'Gamer'
  },
  {
    id: 53, slug: 'flexispot-e7', name: 'FlexiSpot E7 Eléctrico', code: 'FLEX-E7',
    category: 'escritorios', price: 2199, priceDozen: 2100, priceBox: 2000, stock: 12,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop'
  },

  // ── Accesorios ──
  {
    id: 54, slug: 'ifixit-pro-tech', name: 'iFixit Pro Tech Toolkit', code: 'IFX-PRO-TOOL',
    category: 'accesorios', price: 299, priceDozen: 285, priceBox: 270, stock: 40,
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=300&fit=crop',
    badge: 'Popular'
  },
  {
    id: 55, slug: 'razer-base-station', name: 'Razer Base Station V2 Chroma', code: 'RAZ-BASE-V2',
    category: 'accesorios', price: 249, priceDozen: 235, priceBox: 220, stock: 25,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop&sat=0'
  }
];
