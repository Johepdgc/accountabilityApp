// Aquí podrías usar chart.js o cualquier otra librería de gráficos
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

// Registramos los elementos y escalas necesarios para los gráficos
Chart.register(
  CategoryScale, // Escala para el eje X en gráficos de barras
  LinearScale, // Escala para el eje Y
  BarElement, // Elementos de barras
  ArcElement, // Elementos para gráficos circulares (Doughnut, Pie)
  Title,
  Tooltip,
  Legend
);

function FinancialCharts() {
  // Datos de ejemplo para los gráficos
  const barData = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        label: "Ingresos",
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        data: [12000, 15000, 18000, 20000, 22000, 24000],
      },
      {
        label: "Gastos",
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        data: [8000, 10000, 12000, 14000, 16000, 18000],
      },
    ],
  };

  const doughnutData = {
    labels: ["Marketing", "Nómina", "Operaciones"],
    datasets: [
      {
        data: [5000, 7000, 8000],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="flex flex-col space-y-4">
      {/* Gráfico de barras */}
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Evolución Mensual (Ingresos vs. Gastos)
        </h3>
        <Bar data={barData} />
      </div>

      {/* Gráfico circular */}
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Distribución de Gastos por Categoría
        </h3>
        <Doughnut data={doughnutData} />
      </div>
    </div>
  );
}

export default FinancialCharts;
