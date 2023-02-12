import { ProvincesList } from "@/components/ProvinceList";

export default function Home() {
  return (
    <main className="w-3/4 m-auto">
      <h1 className="text-2xl text-center mb-10 mt-10 text-white">
        Weather App for Turkey Provinces
      </h1>
      <ProvincesList />
    </main>
  );
}
