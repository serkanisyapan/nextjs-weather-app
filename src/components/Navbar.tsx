import Link from "next/link";

interface Props {
  name: string;
}

const ArrowIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M4 12L20 12M4 12L10 6M4 12L10 18"
          stroke="#ffffff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
};

export const Navbar = ({ name }: Props) => {
  return (
    <nav className="flex flex-row justify-between p-2 h-14 px-5 text-white">
      <Link href="/" className="text-lg underline">
        <span className="flex flex-row gap-3">
          <ArrowIcon />
          Back to All Provinces
        </span>
      </Link>
      <span className="text-2xl">{name}</span>
    </nav>
  );
};
