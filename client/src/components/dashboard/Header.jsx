function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Empresa/Nombre */}
      <div className="text-xl font-bold text-blue-600">Mi Empresa</div>

      {/* Buscador */}
      <div className="relative flex-1 mx-4">
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
        />
      </div>

      {/* Iconos y Perfil */}
      <div className="flex items-center space-x-4">
        {/* Iconos de notificaciones */}
        <button className="text-gray-500 hover:text-gray-800">
          <i className="fas fa-bell"></i>
        </button>

        {/* Menú desplegable de perfil */}
        <div className="relative">
          <button className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
            <img
              src="https://via.placeholder.com/40"
              alt="Perfil"
              className="w-10 h-10 rounded-full"
            />
            <span>Usuario</span>
          </button>
          {/* Aquí puedes agregar un dropdown para configuración/cerrar sesión */}
        </div>
      </div>
    </header>
  );
}

export default Header;
