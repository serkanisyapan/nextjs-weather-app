export const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const getCurrentDate = () => {
  const now = new Date();
  const dayOfWeek = daysOfWeek[now.getDay()];
  const dayOfMonth = now.getDate();
  const currentTime = now.toLocaleTimeString().split(":").slice(0, 2).join(":");
  return `${dayOfWeek} ${dayOfMonth}, ${currentTime}`;
};

export const getWeatherDay = (daytime: number) => {
  const dayName = new Date(daytime * 1000).toLocaleDateString("en", {
    weekday: "long",
  });
  return dayName;
};

export const getWeatherTime = (daytime: number) => {
  const dayTime = new Date(daytime * 1000).toLocaleTimeString("en", {
    hour: "numeric",
  });
  return dayTime;
};

export const chartDate = (daytime: number) => {
  const dayName = new Date(daytime * 1000).toLocaleDateString("en", {
    month: "short",
    day: "numeric",
  });
  return dayName;
};
