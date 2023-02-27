interface Props {
  icon: string;
}
import { iconsMap } from "@/data/weatherIcons";

export const WeatherIconSvg = ({ icon }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <svg
        viewBox="-7 -7 50 50"
        width={80}
        height={80}
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ffffff"
        fill="#ffffff"
        strokeWidth={0.3}
      >
        <path d={iconsMap[icon]}></path>
      </svg>
    </div>
  );
};
