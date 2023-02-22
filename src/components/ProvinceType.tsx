interface Props {
  showProvinces: string;
  handleProvince: (provinceType: string) => void;
}

const showProvinceTypes = [
  { name: "Province List", type: "province-list" },
  { name: "Province Map", type: "province-map" },
];

export const ProvinceType = ({ handleProvince, showProvinces }: Props) => {
  const provinceTypeStyle = "bg-slate-400 rounded- p-2";
  return (
    <div className="text-white m-auto flex justify-evenly items-center w-[300px] h-12 cursor-pointer mb-10">
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
