import { ProvincesList } from "@/components/ProvinceList";
import { ProvinceType } from "@/components/ProvinceType";
import { ProvinceMap } from "@/components/ProvinceMap";
import { useState } from "react";

export default function Home() {
  const [showProvinces, setShowProvince] = useState<string>("province-list");

  const handleProvince = (provinceType: string) => {
    setShowProvince(provinceType);
  };

  return (
    <main className="w-3/4 m-auto">
      <h1 className="text-2xl text-center mb-10 mt-10 text-white">
        Weather App for Turkey Provinces
      </h1>
      <ProvinceType
        handleProvince={handleProvince}
        showProvinces={showProvinces}
      />
      {showProvinces === "province-list" && <ProvincesList />}
      {showProvinces === "province-map" && <ProvinceMap />}
    </main>
  );
}
