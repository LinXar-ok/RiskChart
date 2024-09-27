import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const RiskChart = () => {
  const data = {
    labels: [
      "Market Maturity",
      "Market Situation",
      "Competitors",
      "Competition",
      "Customers",
    ],
    datasets: [
      {
        label: "Risk Levels",
        data: [6.6, 6.3, 5.7, 5, 5.2],
        backgroundColor: [
          "rgba(0, 255, 0, 0.8)",
          "rgba(255, 165, 0, 0.8)",
          "rgba(255, 0, 0, 0.8)",
          "rgba(20, 92, 75, 0.8)",
          "rgba(25, 112, 123, 0.8)",
        ],
        borderColor: [
          "rgba(0, 255, 0, 1)",
          "rgba(255, 165, 0, 1)",
          "rgba(255, 0, 0, 1)",
          "rgba(20, 92, 75, 1)",
          "rgba(25, 112, 123, 1)",
        ],
        borderWidth: 1,
        borderRadius: 25,
        barPercentage: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
        min: 0,
        ticks: {
          stepSize: 1,
          color: "#f1ecec",
        },
        grid: {
          color: "rgba(247, 239, 239, 0.197)",
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#fff",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: true,
        align: "top",
        anchor: "end",
        color: "#fff",
        font: {
          size: 14,
        },
        formatter: (value) => value.toFixed(1),
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            let datasetLabel = tooltipItem.dataset.label || "";
            let value = tooltipItem.raw;
            if (value !== null && value !== undefined) {
              value = parseFloat(value).toFixed(1);
            }
            return `${datasetLabel}: ${value}`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className=" h-full flex justify-center items-center bg-gray-800  ">
      <div className="container flex p-5 overflow-x-hidden">
        <div className="w-3/4">
          <Bar data={data} options={options} />
        </div>

        <div className="flex flex-col-reverse justify-between ml-2 text-white h-full">
          <div className="flex flex-row items-center">
            <div className="h-[91px] md:h-[103px] w-[2px] bg-green-600 relative mx-5"></div>
            <div className="flex items-center mb-2">
              <span className="w-3 h-3 rounded-sm mr-2 bg-green-500"></span>
              <span className="text-xs">Low Risk</span>
            </div>
          </div>

          <div className="flex flex-row items-center">
            <div className="h-[91px] md:h-[103px] w-[2px] bg-orange-500 relative mx-5"></div>
            <div className="flex items-center mb-2">
              <span className="w-3 h-3 rounded-sm mr-2 bg-orange-500"></span>
              <span className="text-xs">Medium Risk</span>
            </div>
          </div>

          <div className="flex flex-row items-center">
            <div className="h-[91px] md:h-[103px] w-[2px] bg-red-500 relative mx-5"></div>
            <div className="flex items-center mb-2">
              <span className="w-3 h-3 rounded-sm mr-2 bg-red-500"></span>
              <span className="text-xs">High Risk</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskChart;
