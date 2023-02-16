import { CurrentWeather } from "@/components/CurrentWeather";
import { GetServerSideProps } from "next";
import { WeatherDataTypes } from "@/types/WeatherTypes";
import { DailyWeather } from "@/components/DailyWeather";
import { Navbar } from "@/components/Navbar";

export default function ProvinceWeather({ data, name }: WeatherDataTypes) {
  return (
    <>
      <Navbar name={name} />
      <CurrentWeather name={name} currentWeather={data.current} />
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
