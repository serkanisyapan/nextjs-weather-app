import { getCurrentDate } from "@/utils/getCurrentDate";
import { CurrentDataTypes } from "@/types/WeatherTypes";
import { getUpperCaseDescription } from "@/utils/getUpperCaseDescriptions";

export const CurrentWeather = ({ name, currentWeather }: CurrentDataTypes) => {
  const currentDate = getCurrentDate();
  const weatherTemp = Math.floor(currentWeather.temp);
  const tempFellsLike = Math.floor(currentWeather.feels_like);
  const description = getUpperCaseDescription(
    currentWeather.weather[0].description
  );

  return (
    <div className="flex flex-col mt-5 text-white text-lg w-[350px] m-auto gap-3 p-2 rounded">
      <span>{currentDate}</span>
      <span>{name}, TR</span>
      <div className="flex gap-2 items-center ">
        <span>
          <img
            className="w-20 h-20"
            src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
          />
        </span>
        <span className="text-2xl">{weatherTemp} °C</span>
      </div>
      <span>
        Feels like {tempFellsLike} °C, {description}
      </span>
      <div className="flex flex-row gap-3">
        <span>Wind: {currentWeather.wind_speed}</span>
        <span>Humidity: {currentWeather.humidity} %</span>
      </div>
    </div>
  );
};
