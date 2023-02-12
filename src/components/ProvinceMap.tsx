import TurkeyMap from "turkey-map-react";

export const ProvinceMap = () => {
  return (
    <TurkeyMap
      customStyle={{ idleColor: "#969090", hoverColor: "#f0ecec" }}
      showTooltip={true}
    />
  );
};
