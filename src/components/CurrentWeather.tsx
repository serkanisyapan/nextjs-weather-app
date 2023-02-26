import { getCurrentDate } from "@/utils/getCurrentDate";
import { CurrentDataTypes } from "@/types/WeatherTypes";
import { getUpperCaseDescription } from "@/utils/getUpperCaseDescriptions";
import { WeatherIconSvg } from "./WeatherIconSvg";

export const CurrentWeather = ({ name, currentWeather }: CurrentDataTypes) => {
  const currentDate = getCurrentDate();
  const weatherTemp = Math.floor(currentWeather.temp);
  const tempFellsLike = Math.floor(currentWeather.feels_like);
  const windSpeed = Math.floor(currentWeather.wind_speed * 3.6);
  const description = getUpperCaseDescription(
    currentWeather.weather[0].description
  );

  return (
    <div className="flex flex-col text-white text-lg w-[350px] gap-3 mb-3">
      <span>{currentDate}</span>
      <span>{name}, TR</span>
      <div className="flex gap-2 items-center ">
        <span>
          <WeatherIconSvg icon={currentWeather.weather[0].icon} />
        </span>
        <span className="text-2xl">{weatherTemp} °C</span>
      </div>
      <span>
        Feels like {tempFellsLike} °C, {description}
      </span>
      <div className="flex flex-row gap-3">
        <span>Wind: {windSpeed} km/h</span>
        <span>Humidity: {currentWeather.humidity} %</span>
      </div>
    </div>
  );
};
