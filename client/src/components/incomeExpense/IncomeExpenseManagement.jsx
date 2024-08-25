import { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registramos los componentes necesarios de Chart.js
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const IncomeExpenseManagement = () => {
  // Estado para almacenar las transacciones
  const [transactions, setTransactions] = useState([]);
  const [form, setForm] = useState({
    date: "",
    category: "Marketing",
    amount: "",
    description: "",
    type: "Ingreso", // Ingreso o Gasto
  });

  // Maneja los cambios en el formulario
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Maneja el envío del formulario para agregar una transacción
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.date || !form.amount || !form.description) return;

    setTransactions([...transactions, form]);
    setForm({
      date: "",
      category: "Marketing",
      amount: "",
      description: "",
      type: "Ingreso",
    });
  };

  // Configuración de los datos para los gráficos
  const barData = {
    labels: ["Marketing", "Nómina", "Operaciones"],
    datasets: [
      {
        label: "Ingresos",
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        data: transactions
          .filter((t) => t.type === "Ingreso")
          .reduce(
            (acc, t) => {
              const idx = ["Marketing", "Nómina", "Operaciones"].indexOf(
                t.category
              );
              acc[idx] += parseFloat(t.amount);
              return acc;
            },
            [0, 0, 0]
          ),
      },
      {
        label: "Gastos",
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        data: transactions
          .filter((t) => t.type === "Gasto")
          .reduce(
            (acc, t) => {
              const idx = ["Marketing", "Nómina", "Operaciones"].indexOf(
                t.category
              );
              acc[idx] += parseFloat(t.amount);
              return acc;
            },
            [0, 0, 0]
          ),
      },
    ],
  };

  const doughnutData = {
    labels: ["Marketing", "Nómina", "Operaciones"],
    datasets: [
      {
        data: transactions.reduce(
          (acc, t) => {
            const idx = ["Marketing", "Nómina", "Operaciones"].indexOf(
              t.category
            );
            acc[idx] += parseFloat(t.amount);
            return acc;
          },
          [0, 0, 0]
        ),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="flex flex-col space-y-4 p-6">
      {/* Formulario de Registro */}
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Registrar Ingreso o Gasto
        </h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Fecha */}
            <div>
              <label className="block text-gray-600">Fecha</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Categoría */}
            <div>
              <label className="block text-gray-600">Categoría</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="Marketing">Marketing</option>
                <option value="Nómina">Nómina</option>
                <option value="Operaciones">Operaciones</option>
              </select>
            </div>

            {/* Tipo de Transacción */}
            <div>
              <label className="block text-gray-600">Tipo</label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="Ingreso">Ingreso</option>
                <option value="Gasto">Gasto</option>
              </select>
            </div>

            {/* Monto */}
            <div>
              <label className="block text-gray-600">Monto</label>
              <input
                type="number"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Descripción */}
            <div className="md:col-span-2 lg:col-span-1">
              <label className="block text-gray-600">Descripción</label>
              <input
                type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Añadir Transacción
          </button>
        </form>
      </div>

      {/* Gráficos y Resúmenes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Gráfico de barras */}
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Distribución de Ingresos vs. Gastos
          </h3>
          <Bar data={barData} />
        </div>

        {/* Gráfico circular */}
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Distribución por Categoría
          </h3>
          <Doughnut data={doughnutData} />
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenseManagement;
