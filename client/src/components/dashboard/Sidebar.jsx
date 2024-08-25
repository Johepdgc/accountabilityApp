import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-blue-800 text-white flex flex-col p-4">
      <div className="font-bold text-lg mb-6">Menú</div>

      {/* Menús de navegación */}
      <nav className="flex flex-col space-y-4">
        <Link
          to="/"
          className="flex items-center space-x-2 hover:bg-blue-700 px-3 py-2 rounded-lg"
        >
          <a
            href="#"
            className="flex items-center space-x-2 hover:bg-blue-700 px-3 py-2 rounded-lg"
          >
            <i className="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </Link>
        <a
          href="#"
          className="flex items-center space-x-2 hover:bg-blue-700 px-3 py-2 rounded-lg"
        >
          <i className="fas fa-file-invoice"></i>
          <span>Facturación</span>
        </a>
        <Link to="/gestion-ingresos-gastos">
          <a
            href="#"
            className="flex items-center space-x-2 hover:bg-blue-700 px-3 py-2 rounded-lg"
          >
            <i className="fas fa-money-bill-wave"></i>
            <span>Ingresos/Gastos</span>
          </a>
        </Link>
        <a
          href="#"
          className="flex items-center space-x-2 hover:bg-blue-700 px-3 py-2 rounded-lg"
        >
          <i className="fas fa-chart-line"></i>
          <span>Reportes</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 hover:bg-blue-700 px-3 py-2 rounded-lg"
        >
          <i className="fas fa-university"></i>
          <span>Conciliación Bancaria</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 hover:bg-blue-700 px-3 py-2 rounded-lg"
        >
          <i className="fas fa-cog"></i>
          <span>Configuración</span>
        </a>
      </nav>
    </div>
  );
}

export default Sidebar;
