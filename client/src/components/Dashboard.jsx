import { useState, useEffect } from "react";

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/example")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div>{data ? data.message : "Loading..."}</div>
    </div>
  );
}

export default Dashboard;
