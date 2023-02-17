import { GetServerSideProps } from "next";
import { CurrentWeather } from "@/components/CurrentWeather";
import { WeatherDataTypes } from "@/types/WeatherTypes";
import { HourlyWeather } from "@/components/HourlyWeather";
import { DailyWeather } from "@/components/DailyWeather";
import { Navbar } from "@/components/Navbar";

export default function ProvinceWeather({ data, name }: WeatherDataTypes) {
  console.log(data);
  return (
    <>
      <Navbar name={name} />
      <CurrentWeather name={name} currentWeather={data.current} />
      <HourlyWeather hourlyWeather={data.hourly} />
      <DailyWeather dailyWeather={data.daily} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { name, lat, lon } = context.query;
  const response = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.WEATHER_API_KEY}`
  );
  const data = await response.json();
  return {
    props: { data, name },
  };
};
