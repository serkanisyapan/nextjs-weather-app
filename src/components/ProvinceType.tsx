interface Props {
  showProvinces: string;
  handleProvince: (provinceType: string) => void;
}

const showProvinceTypes = [
  { name: "Province List", type: "province-list" },
  { name: "Province Map", type: "province-map" },
];

export const ProvinceType = ({ handleProvince, showProvinces }: Props) => {
  const provinceTypeStyle = "rounded-full bg-slate-400 p-2";
  return (
    <div className="border text-white m-auto flex justify-evenly items-center rounded-full w-[250px] h-12 cursor-pointer mb-10">
      {showProvinceTypes.map((province, provinceID) => (
        <span
          key={provinceID}
          className={`${showProvinces === province.type && provinceTypeStyle}`}
          onClick={() => handleProvince(province.type)}
        >
          {province.name}
        </span>
      ))}
    </div>
  );
};
