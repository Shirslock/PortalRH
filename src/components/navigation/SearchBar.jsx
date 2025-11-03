import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import SearchResult from './SearchResult';
import { searchEmployees } from '../../data/employeesData';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const searchRef = useRef(null);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Buscar empleados cuando cambia el query
  const handleSearch = (value) => {
    setQuery(value);
    
    if (value.trim().length >= 2) {
      const foundEmployees = searchEmployees(value);
      setResults(foundEmployees);
      setIsOpen(foundEmployees.length > 0);
      setHighlightedIndex(-1);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  // Seleccionar empleado
  const handleSelectEmployee = (employee) => {
    console.log('Empleado seleccionado:', employee);
    alert(`Empleado seleccionado:\n\nNombre: ${employee.nombre}\nLegajo: ${employee.legajo}\nPuesto: ${employee.puesto}`);
    setQuery(employee.nombre);
    setIsOpen(false);
  };

  // Limpiar búsqueda
  const handleClear = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  // Navegación con teclado
  const handleKeyDown = (e) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex((prev) => 
          prev < results.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex((prev) => 
          prev > 0 ? prev - 1 : results.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0) {
          handleSelectEmployee(results[highlightedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex-1 max-w-xl mx-8 relative" ref={searchRef}>
      {/* Input de búsqueda */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500" />
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (results.length > 0) setIsOpen(true);
          }}
          placeholder="Search for people or Action"
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        
        {/* Botón limpiar */}
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        )}
      </div>

      {/* Dropdown de resultados */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
          {/* Header */}
          <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
            <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide">
              Empleados encontrados ({results.length})
            </p>
          </div>

          {/* Lista de resultados */}
          <div className="max-h-80 overflow-y-auto">
            {results.map((employee, index) => (
              <SearchResult
                key={employee.id}
                employee={employee}
                onClick={() => handleSelectEmployee(employee)}
                isHighlighted={index === highlightedIndex}
              />
            ))}
          </div>

          {/* Footer */}
          <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Presiona Enter para seleccionar • ESC para cerrar
            </p>
          </div>
        </div>
      )}

      {/* Sin resultados */}
      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-6 text-center z-50">
          <div className="text-gray-400 mb-2">
            <Search className="w-12 h-12 mx-auto" />
          </div>
          <p className="text-gray-600 font-medium">No se encontraron resultados</p>
          <p className="text-sm text-gray-500 mt-1">
            Intenta buscar por nombre o número de legajo
          </p>
        </div>
      )}
    </div>
  );
}