// Datos de las cards de Organizational Updates
export const organizationalUpdatesData = [
  {
    id: 1,
    title: 'Acceso a Organigrama',
    description: 'Visualiza la estructura organizacional completa',
    icon: 'Network',
    color: 'blue',
    gradient: 'from-blue-400 to-blue-600',
    route: '/organigrama',
    externalLink: 'https://gestionrh.trenesargentinos.gob.ar/organigrama/list'  // ← AGREGAR TU LINK
  },
  {
    id: 2,
    title: 'Cobertura de Vacante',
    description: 'Gestiona las posiciones abiertas y candidatos',
    icon: 'UserPlus',
    color: 'green',
    gradient: 'from-green-400 to-green-600',
    route: '/cobertura-vacante',
    externalLink: 'https://sofse-sap-ap.trenesargentinos.gob.ar:44301/sap/bc/ui2/flp#ZHRSemObj-OpenZHCM_NEC_COB_VAC?sap-ui-tech-hint=GUI'  // ← AGREGAR TU LINK
  },
  {
    id: 3,
    title: 'Cambio Organizativo',
    description: 'Revisa y aprueba cambios estructurales',
    icon: 'RefreshCw',
    color: 'purple',
    gradient: 'from-purple-400 to-purple-600',
    route: '/cambio-organizativo',
    externalLink: 'https://testgsp2.trenesargentinos.gob.ar/cambio_organizativo/homeco/home.php'  // ← AGREGAR TU LINK
  },
  {
    id: 4,
    title: 'Bandeja de Búsquedas Internas',
    description: 'Accede a las oportunidades internas disponibles',
    icon: 'Search',
    color: 'orange',
    gradient: 'from-orange-400 to-orange-600',
    route: '/busquedas-internas',
    externalLink: 'https://ssotest.trenesargentinos.gob.ar/admin/login'  // ← AGREGAR TU LINK
  },
  {
    id: 5,
    title: 'Certificación de Servicios',
    description: 'Solicita y gestiona certificaciones laborales',
    icon: 'Award',
    color: 'pink',
    gradient: 'from-pink-400 to-pink-600',
    route: '/certificacion-servicios',
    externalLink: 'https://sofse-sap-ap.trenesargentinos.gob.ar:44301/sap/bc/ui2/flp#ZHRSemObj-OpenZHCM_CERTSERV_PROCES?sap-ui-tech-hint=GUI'  // ← AGREGAR TU LINK
  }
];

// Tabs de navegación
export const organizationalTabsData = [
  { id: 'all', label: 'All', count: 5 },
  { id: 'updates', label: 'Updates', count: 2 }
];