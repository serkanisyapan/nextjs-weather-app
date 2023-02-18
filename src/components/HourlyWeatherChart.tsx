import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Filler,
} from "chart.js";
import { HourlyWeatherTypes, HourlyEntity } from "@/types/WeatherTypes";
import { getWeatherTime, chartDate } from "@/utils/getCurrentDate";
import { getThreeHourWeather } from "@/utils/getThreeHourWeather";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Filler
);

export const HourlyWeather = ({ hourlyWeather }: HourlyWeatherTypes) => {
  const threeHourWeahter = getThreeHourWeather(hourlyWeather);

  return (
    <div className="h-auto w-[650px]">
      <Line
        data={{
          labels: threeHourWeahter.map(
            (hourly) => `${getWeatherTime(hourly.dt)}`
          ),
          datasets: [
            {
              label: "temperature",
              data: threeHourWeahter.map((hourly) => Math.floor(hourly.temp)),
              borderColor: "#34d399",
              backgroundColor: "#34d399",
              fill: {
                target: "origin",
                below: "#34d39921",
                above: "#34d39921",
              },
              yAxisID: "temp",
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: "white",
              },
            },
            temp: {
              axis: "y",
              beginAtZero: true,
              position: "left",
              title: {
                display: true,
                text: "Temperature (°C)",
                color: "white",
              },
              ticks: {
                color: "white",
                stepSize: 2,
              },
              grid: {
                display: false,
              },
            },
          },
          plugins: {
            tooltip: {
              yAlign: "bottom",
              padding: 7,
              bodySpacing: 5,
              bodyFont: {
                size: 14,
              },
              footerFont: {
                size: 14,
              },
              callbacks: {
                title: (context) => {
                  const tooltipTitle = `${chartDate(
                    threeHourWeahter[context[0].dataIndex].dt
                  )}`;
                  return tooltipTitle;
                },
                afterBody: (context) => {
                  const getWeatherData: HourlyEntity =
                    threeHourWeahter[context[0].dataIndex];
                  const windSpeedKM = Math.floor(
                    getWeatherData.wind_speed * 3.6
                  );
                  const tooltipLabel =
                    `feels_like:  ${Math.floor(getWeatherData.feels_like)}°C` +
                    "\n" +
                    `wind_speed:  ${windSpeedKM}km/h` +
                    "\n" +
                    `humidity:  ${getWeatherData.humidity}%` +
                    "\n" +
                    `weather_type:  ${getWeatherData.weather[0].description}`;
                  return tooltipLabel;
                },
              },
            },
          },
          tension: 0.3,
        }}
      />
    </div>
  );
};
