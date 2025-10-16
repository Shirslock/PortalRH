import React from 'react';
import { Info, User } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-700 to-slate-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Contenido principal */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Lado izquierdo - Mensaje principal */}
          <div className="flex items-start space-x-3">
            <div className="bg-blue-500 p-2 rounded-lg flex-shrink-0">
              <Info className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Prototipo Funcional</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Este es un prototipo funcional desarrollado como propuesta de solución.
                <br />
                <span className="text-slate-400">
                  No está destinado a ser implementado tal cual es presentado.
                </span>
              </p>
            </div>
          </div>

          {/* Lado derecho - Autor */}
          <div className="flex items-center space-x-3 bg-slate-600 bg-opacity-50 px-6 py-3 rounded-lg border border-slate-500">
            <div className="bg-blue-600 p-2 rounded-full">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-400 uppercase tracking-wide">Desarrollado por</p>
              <p className="font-bold text-white">Analista Funcional</p>
              <p className="text-blue-300 font-semibold">Gil Cristian</p>
              <p className="text-blue-300 font-semibold">Frente RRHH- GSP</p>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-slate-600 mt-6 pt-4">
          <p className="text-center text-slate-400 text-xs">
            © {new Date().getFullYear()} SAP SuccessFactors - Prototipo de Propuesta
          </p>
        </div>
      </div>
    </footer>
  );
}