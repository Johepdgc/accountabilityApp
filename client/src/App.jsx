import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/dashboard/Header";
import Sidebar from "./components/dashboard/Sidebar";
import Metrics from "./components/dashboard/Metrics";
import FinancialCharts from "./components/dashboard/FinancialCharts";
import NotificationsPanel from "./components/dashboard/NotificationsPanel";
import IncomeExpenseManagement from "./components/incomeExpense/IncomeExpenseManagement";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex flex-col flex-1">
          {/* Header */}
          <Header />

          {/* Dashboard Content */}
          <div className="flex flex-1 p-4 space-x-4">
            <div className="flex flex-col w-3/4 space-y-4">
              {/* Metrics Section */}
              {/* Financial Charts Section */}
              <Routes>
                <Route path="/" element={<Metrics />} />
                <Route path="/financial-charts" element={<FinancialCharts />} />
                <Route
                  path="/gestion-ingresos-gastos"
                  element={<IncomeExpenseManagement />}
                />
              </Routes>
            </div>
            {/* Notifications Panel */}
            <NotificationsPanel />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
