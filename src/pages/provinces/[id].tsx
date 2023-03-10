import { GetServerSideProps } from "next";
import { CurrentWeather } from "@/components/CurrentWeather";
import { WeatherDataTypes } from "@/types/WeatherTypes";
import { HourlyWeather } from "@/components/HourlyWeatherChart";
import { DailyWeather } from "@/components/DailyWeather";
import { Navbar } from "@/components/Navbar";
import { Layout } from "@/components/Layout";

export default function ProvinceWeather({ data, name }: WeatherDataTypes) {
  return (
    <Layout title={name}>
      <div className="m-auto md:w-4/5">
        <Navbar name={name} />
        <div className="flex flex-col mt-8 justify-center md:flex-row md:justify-around">
          <CurrentWeather name={name} currentWeather={data.current} />
          <HourlyWeather hourlyWeather={data.hourly} />
        </div>
        <DailyWeather dailyWeather={data.daily} />
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { name, lat, lon } = context.query;

  const userApiKey = context.req.cookies.open_weather_api_key;
  if(!userApiKey) {
    return {
      redirect: {
        permanent: false,
        destination: '/set-api-key'
      }
    }
  }

  const response = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${userApiKey}`
  );
  const data = await response.json();
  return {
    props: { data, name },
  };
};

// 'Droid Sans Mono', 'monospace', monospace