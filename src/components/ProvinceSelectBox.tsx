import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import allTurkeyProvinces from "@/data/allTurkeyProvinces.json";

interface Props {
  provinceName: string;
}

export const ProvinceSelectBox = ({ provinceName }: Props) => {
  const [gotoProvince, setGotoProvince] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (gotoProvince) {
      const findProvince = allTurkeyProvinces.filter(
        (province) => province.name === gotoProvince
      )[0];
      router.push({
        pathname: `/provinces/${findProvince.id}`,
        query: {
          name: findProvince.name,
          lon: findProvince.longitude,
          lat: findProvince.latitude,
        },
      });
    }
  }, [gotoProvince]);

  return (
    <select
      onChange={(event) => setGotoProvince(event.target.value)}
      defaultValue={provinceName}
      className="bg-gray-700 text-white text-lg cursor-pointer scrollbar-thin scrollbar-thumb-emerald-400"
    >
      {allTurkeyProvinces.map((province) => (
        <option key={province.id} value={province.name}>
          {province.name}
        </option>
      ))}
    </select>
  );
};
