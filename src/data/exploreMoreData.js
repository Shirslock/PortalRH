// Datos de la sección Vacaciones (estilo horizontal)
// Datos de la sección Vacaciones (estilo horizontal)
export const vacacionesData = [
  {
    id: 1,
    title: 'Mi Bandeja de Entrada',
    description: 'Revisa todas tus solicitudes pendientes y aprobaciones de ausencias',
    icon: 'Inbox',
    color: 'blue',
    gradient: 'from-blue-500 to-indigo-600',
    stats: { pending: 5, approved: 12 },
    route: '/vacaciones/bandeja',
    externalLink: 'https://tu-link-bandeja-entrada.com'  // ← AGREGAR TU LINK
  },
  {
    id: 2,
    title: 'Solicitud de Ausencias',
    description: 'Crea nuevas solicitudes de vacaciones, permisos y licencias',
    icon: 'Calendar',
    color: 'green',
    gradient: 'from-green-500 to-emerald-600',
    stats: { available: 15, used: 5 },
    route: '/vacaciones/solicitud',
    externalLink: 'https://tu-link-solicitud-ausencias.com'  // ← AGREGAR TU LINK
  }
];

// Datos de la sección Gestión (estilo vertical compacto)
export const gestionData = [
  {
    id: 1,
    title: 'Reportes Consolidado',  // Cambié "Centro de Informes" por el título de tu imagen
    description: 'Accede a los reportes y análisis de recursos humanos',
    icon: 'BarChart3',
    color: 'purple',
    gradient: 'from-purple-500 to-violet-600',
    badge: 'Nuevo',
    route: '/gestion/informes',
    externalLink: 'https://shirslock.github.io/NuevoConsolidado/'  // ← AGREGAR TU LINK
  },
  {
    id: 2,
    title: 'Gestión de Empleos',
    description: 'Administra oferta, búsquedas y procesos de selección',
    icon: 'Briefcase',
    color: 'orange',
    gradient: 'from-orange-500 to-amber-600',
    badge: '3 activos',
    route: '/gestion/empleos',
    externalLink: 'https://tu-link-gestion-empleos.com'  // ← AGREGAR TU LINK
  }
];