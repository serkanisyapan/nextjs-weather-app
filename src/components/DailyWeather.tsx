import { DailyWeatherTypes } from "@/types/WeatherTypes";
import { getWeatherDay } from "@/utils/getCurrentDate";

export const DailyWeather = ({ dailyWeather }: DailyWeatherTypes) => {
  return (
    <div className="flex flex-row gap-8 mt-20 justify-evenly">
      {dailyWeather.map((daily, dailyID) => (
        <div className="text-white text-center" key={dailyID}>
          <span>{getWeatherDay(daily.dt)}</span>
          <img
            src={`https://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`}
          />
          <span>
            {Math.floor(daily.temp.max)}°C{" "}
            <span className="opacity-70">{Math.floor(daily.temp.min)}°C</span>
          </span>
        </div>
      ))}
    </div>
  );
};
