import allTurkeyProvinces from "@/data/allTurkeyProvinces.json";
import { useEffect, useState } from "react";
import { ProvinceItem } from "./ProvinceItem";
export const ProvincesList = () => {
  const [searchProvinces, setSearchProvince] = useState<string>("");
  const [showProvinceList, setShowProvinceList] = useState<Boolean>(false);

  const filteredProvinces = allTurkeyProvinces.filter((province) => {
    const provinceNameLowerCase = province.name.toLocaleLowerCase("tr");
    const searchLowerCase = searchProvinces.toLocaleLowerCase("tr");
    return provinceNameLowerCase.includes(searchLowerCase);
  });

  const handleInputFocus = (event: React.FormEvent) => {
    event.stopPropagation();
    setShowProvinceList(true);
  };

  useEffect(() => {
    const closeProvinceList = () => setShowProvinceList(false);
    window.addEventListener("click", closeProvinceList);
    return () => window.removeEventListener("click", closeProvinceList);
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="Search for province..."
        onChange={(event) => setSearchProvince(event.target.value)}
        className="m-auto bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onClick={handleInputFocus}
      />
      {showProvinceList && (
        <ul className="text-white rounded-md max-h-64 overflow-y-scroll scrollbar-thin scrollbar-thumb-emerald-400">
          {filteredProvinces.map((province) => (
            <ProvinceItem
              key={province.id}
              id={province.id}
              name={province.name}
              lon={province.longitude}
              lat={province.latitude}
            />
          ))}
        </ul>
      )}
    </>
  );
};
