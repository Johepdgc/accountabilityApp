function Metrics() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {/* Total de Ingresos */}
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700">
          Total de Ingresos
        </h3>
        <p className="mt-2 text-2xl font-bold text-green-500">$50,000</p>
      </div>

      {/* Total de Gastos */}
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700">Total de Gastos</h3>
        <p className="mt-2 text-2xl font-bold text-red-500">$30,000</p>
      </div>

      {/* Balance General */}
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700">Balance General</h3>
        <p className="mt-2 text-2xl font-bold text-blue-500">$20,000</p>
      </div>

      {/* Facturas Pendientes */}
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700">
          Facturas Pendientes
        </h3>
        <p className="mt-2 text-2xl font-bold text-yellow-500">5</p>
      </div>
    </div>
  );
}

export default Metrics;
