import RiskChart from "./components/RiskChart";

function App() {
  return (
    <div className="h-screen w-screen">
      <div className="text-center text-2xl md:text-4xl font-bold py-3 border-b-2">
        Risk Chart
      </div>
      <RiskChart />
    </div>
  );
}

export default App;
