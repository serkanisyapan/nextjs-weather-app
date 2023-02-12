interface Props {
  showProvinces: string;
  handleProvince: (provinceType: string) => void;
}

export const ProvinceType = ({ handleProvince, showProvinces }: Props) => {
  const provinceTypeStyle = "rounded-full bg-slate-400 p-2";
  return (
    <div className="border text-white m-auto flex justify-evenly items-center rounded-full w-[220px] h-12 cursor-pointer mb-10">
      <span
        className={`${showProvinces === "province-list" && provinceTypeStyle}`}
        onClick={() => handleProvince("province-list")}
      >
        Province List
      </span>
      <span
        className={`${showProvinces === "province-map" && provinceTypeStyle}`}
        onClick={() => handleProvince("province-map")}
      >
        Province Map
      </span>
    </div>
  );
};
