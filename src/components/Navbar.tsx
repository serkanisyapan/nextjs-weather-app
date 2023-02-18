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
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M4 12L20 12M4 12L10 6M4 12L10 18"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
};

export const Navbar = ({ name }: Props) => {
  return (
    <nav className="flex flex-row justify-between p-2 h-14 px-5 text-white">
      <Link href="/" className="text-lg hover:underline">
        <span className="flex flex-row gap-3">
          <ArrowIcon />
          Back to All Provinces
        </span>
      </Link>
      <span className="text-2xl">{name}</span>
    </nav>
  );
};
