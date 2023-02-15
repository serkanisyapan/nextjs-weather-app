import Link from "next/link";

interface Props {
  id: number;
  name: string;
  lon: number;
  lat: number;
}
export const ProvinceItem = ({ id, name, lon, lat }: Props) => {
  return (
    <Link
      href={{
        pathname: `/provinces/${id}`,
        query: { name, lon, lat },
      }}
    >
      <li className="border rounded-full w-[220px] h-14 text-lg p-2 px-4 flex justify-center items-center hover:bg-slate-500 cursor-pointer">
        <span className="bg-emerald-400 rounded-full mr-auto w-8 h-8 flex justify-center items-center text-black font-bold">
          {id}
        </span>
        <span className="mr-auto">{name}</span>
      </li>
    </Link>
  );
};
