import { GetServerSideProps } from "next";
import { WeatherData } from "@/types/WeatherTypes";

export default function ProvinceWeather({ data }: WeatherData) {
  console.log(data);
  return <h1 className="text-xl text-yellow-500">Hello World!</h1>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { name, lat, lon } = context.query;
  const response = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.WEATHER_API_KEY}`
  );
  const data = await response.json();
  return {
    props: { data },
  };
};
