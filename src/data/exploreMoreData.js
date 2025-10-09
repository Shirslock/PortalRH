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
    route: '/vacaciones/bandeja'
  },
  {
    id: 2,
    title: 'Solicitud de Ausencias',
    description: 'Crea nuevas solicitudes de vacaciones, permisos y licencias',
    icon: 'Calendar',
    color: 'green',
    gradient: 'from-green-500 to-emerald-600',
    stats: { available: 15, used: 5 },
    route: '/vacaciones/solicitud'
  }
];

// Datos de la sección Gestión (estilo vertical compacto)
export const gestionData = [
  {
    id: 1,
    title: 'Centro de Informes',
    description: 'Accede a reportes y análisis de recursos humanos',
    icon: 'BarChart3',
    color: 'purple',
    gradient: 'from-purple-500 to-violet-600',
    badge: 'Nuevo',
    route: '/gestion/informes'
  },
  {
    id: 2,
    title: 'Gestión de Empleos',
    description: 'Administra posiciones, ofertas y procesos de selección',
    icon: 'Briefcase',
    color: 'orange',
    gradient: 'from-orange-500 to-amber-600',
    badge: '3 activos',
    route: '/gestion/empleos'
  }
];