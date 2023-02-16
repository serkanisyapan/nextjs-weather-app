export const getUpperCaseDescription = (description: string) => {
  const upperCaseDesc = description.split(" ").map((str) => {
    return str[0].toUpperCase() + str.slice(1);
  });
  return upperCaseDesc.join(" ");
};
