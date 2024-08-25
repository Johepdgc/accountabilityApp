function NotificationsPanel() {
  return (
    <div className="w-1/4 p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">
        Notificaciones
      </h3>

      <p>Factura #001 está por vencer en 3 días.</p>

      <p>Pago pendiente para el proveedor XYZ.</p>

      <p>Nuevo ingreso de $5,000 registrado.</p>
    </div>
  );
}

export default NotificationsPanel;
