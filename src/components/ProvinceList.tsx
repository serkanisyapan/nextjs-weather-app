import allTurkeyProvinces from "@/allTurkeyProvinces.json";
import { useState } from "react";
export const ProvincesList = () => {
  const [searchProvinces, setSearchProvince] = useState<string>("");

  const filteredProvinces = allTurkeyProvinces.filter((province) => {
    const provinceName = province.name.toLowerCase();
    return provinceName.includes(searchProvinces.toLowerCase());
  });

  const filteredProvincesLength = filteredProvinces.length;

  return (
    <>
      <input
        type="text"
        placeholder="Search for province..."
        onChange={(event) => setSearchProvince(event.target.value)}
        className="m-auto bg-gray-50 mb-20 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      {filteredProvincesLength !== 0 ? (
        <ul className="grid grid-cols-4 gap-2 text-white">
          {filteredProvinces.map((province) => (
            <li className="border rounded-full w-[220px] h-14 text-lg p-2 px-4 flex justify-center items-center hover:bg-slate-500 cursor-pointer">
              <span className="bg-fuchsia-900 rounded-full mr-auto w-8 h-8 flex justify-center items-center">
                {province.id}
              </span>
              <span className="mr-auto">{province.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-white text-center bg-red-500 text-2xl p-5 rounded-md">
          There are no provinces. Try to search for other provinces.
        </div>
      )}
    </>
  );
};
