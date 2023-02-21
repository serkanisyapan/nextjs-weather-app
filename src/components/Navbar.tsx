import Link from "next/link";
import { ProvinceSelectBox } from "./ProvinceSelectBox";
import { ArrowIcon } from "./ArrowIcon";

interface Props {
  name: string;
}

export const Navbar = ({ name }: Props) => {
  return (
    <nav className="flex flex-row justify-between p-2 h-14 px-5 text-white">
      <Link href="/" className="text-lg hover:underline">
        <span className="flex flex-row gap-3">
          <ArrowIcon rotate={0} />
          Back to All Provinces
        </span>
      </Link>
      <ProvinceSelectBox provinceName={name} />
    </nav>
  );
};
