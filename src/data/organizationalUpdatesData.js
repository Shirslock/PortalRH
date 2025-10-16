// Datos de las cards de Organizational Updates
export const organizationalUpdatesData = [
  {
    id: 1,
    title: 'Acceso a Organigrama',
    description: 'Visualiza la estructura organizacional completa',
    icon: 'Network',
    color: 'blue',
    gradient: 'from-blue-400 to-blue-600',
    route: '/organigrama'
  },
  {
    id: 2,
    title: 'Cobertura de Vacante',
    description: 'Gestiona las posiciones abiertas y candidatos',
    icon: 'UserPlus',
    color: 'green',
    gradient: 'from-green-400 to-green-600',
    route: '/cobertura-vacante'
  },
  {
    id: 3,
    title: 'Cambio Organizativo',
    description: 'Revisa y aprueba cambios estructurales',
    icon: 'RefreshCw',
    color: 'purple',
    gradient: 'from-purple-400 to-purple-600',
    route: '/cambio-organizativo'
  },
  {
    id: 4,
    title: 'Bandeja de Búsquedas Internas',
    description: 'Accede a las oportunidades internas disponibles',
    icon: 'Search',
    color: 'orange',
    gradient: 'from-orange-400 to-orange-600',
    route: '/busquedas-internas'
  },
  {
    id: 5,
    title: 'Certificación de Servicios',
    description: 'Solicita y gestiona certificaciones laborales',
    icon: 'Award',
    color: 'pink',
    gradient: 'from-pink-400 to-pink-600',
    route: '/certificacion-servicios'
  }
];

// Tabs de navegación
export const organizationalTabsData = [
  { id: 'all', label: 'Todos', count: 5 },
  { id: 'updates', label: 'Novedades', count: 2 }
];