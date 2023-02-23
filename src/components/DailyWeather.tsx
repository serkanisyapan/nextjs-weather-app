import { DailyWeatherTypes } from "@/types/WeatherTypes";
import { getWeatherDay } from "@/utils/getCurrentDate";

export const DailyWeather = ({ dailyWeather }: DailyWeatherTypes) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-8 mt-[60px]">
      {dailyWeather.map((daily, dailyID) => (
        <div
          className="text-white flex flex-col justify-center items-center mb-3"
          key={dailyID}
        >
          <span>{getWeatherDay(daily.dt)}</span>
          <img
            className="w-[100px] h-[100]"
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
