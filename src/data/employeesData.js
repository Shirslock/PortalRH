// Base de datos de empleados
export const employeesData = [
  {
    id: 1,
    legajo: '13096',
    nombre: 'Gil Cristian',
    puesto: 'Analista Funcional',
    departamento: 'Sistemas y Procesos',
    email: 'gil.cristian@trenesargentinos.gob.ar',
    avatar: 'GC'
  }
];

// Función para buscar empleados
export const searchEmployees = (query) => {
  if (!query || query.trim().length < 2) {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();

  return employeesData.filter(employee => {
    const matchName = employee.nombre.toLowerCase().includes(searchTerm);
    const matchLegajo = employee.legajo.includes(searchTerm);
    const matchPuesto = employee.puesto.toLowerCase().includes(searchTerm);

    return matchName || matchLegajo || matchPuesto;
  });
};