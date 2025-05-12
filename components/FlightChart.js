
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function FlightChart({ tafData }) {
  const labels = tafData?.map((entry) => entry.time) || [];
  const windSpeeds = tafData?.map((entry) => entry.windSpeed) || [];

  const data = {
    labels,
    datasets: [
      {
        label: 'Wind Speed (knots)',
        data: windSpeeds,
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'TAF Wind Speed Forecast' },
    },
  };

  return <Line data={data} options={options} />;
}
