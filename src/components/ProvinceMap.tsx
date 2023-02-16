import TurkeyMap from "turkey-map-react";
import { useRouter } from "next/router";
import allTurkeyProvines from "@/data/allTurkeyProvinces.json";

export const ProvinceMap = () => {
  const router = useRouter();
  return (
    <TurkeyMap
      customStyle={{ idleColor: "#969090", hoverColor: "#34d399" }}
      showTooltip={true}
      onClick={({ plateNumber, name }) => {
        const { latitude, longitude } = allTurkeyProvines[plateNumber - 1];
        router.push({
          pathname: `/provinces/${plateNumber}`,
          query: { name, lon: longitude, lat: latitude },
        });
      }}
    />
  );
};
