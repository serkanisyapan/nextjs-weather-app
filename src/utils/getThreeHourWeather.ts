import { HourlyEntity } from "@/types/WeatherTypes";

export const getThreeHourWeather = (array: Array<HourlyEntity>) => {
  let newHourlyArr = [];
  for (let i = 0; i < 22; i += 3) {
    newHourlyArr.push(array[i]);
  }
  return newHourlyArr;
};
