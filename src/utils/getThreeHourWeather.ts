export const getThreeHourWeather = (array) => {
  let newHourlyArr = [];
  for (let i = 0; i < 22; i += 3) {
    newHourlyArr.push(array[i]);
  }
  return newHourlyArr;
};
