import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";
import { HourlyWeatherTypes } from "@/types/WeatherTypes";

ChartJS.register(LineElement, PointElement, LinearScale, Title);

export const HourlyWeather = ({ hourlyWeather }: HourlyWeatherTypes) => {
  return <Line />;
};
