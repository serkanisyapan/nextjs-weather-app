import { useEffect, useState } from "react";
import { NextApiRequest, NextApiResponse } from "next";
import { ProvincesList } from "@/components/ProvinceList";
import { ProvinceType } from "@/components/ProvinceType";
import { ProvinceMap } from "@/components/ProvinceMap";
import { Layout } from "@/components/Layout";
import { useRouter } from "next/router";

interface ServerSideProps {
  req: NextApiRequest;
  res: NextApiResponse;
}

interface Props {
  token: string;
}

export default function Home({ token }: Props) {
  const [showProvinces, setShowProvince] = useState<string>("province-list");
  const router = useRouter();
  const handleProvince = (provinceType: string) => {
    setShowProvince(provinceType);
  };

  useEffect(() => {
    if (token === "") {
      router.push("/set-api-key");
    }
  }, []);

  return (
    <Layout title="Next Weather App">
      <main className="w-3/4 m-auto">
        <h1 className="text-2xl text-center mb-10 mt-10 text-white">
          Weather App for Turkey Provinces
        </h1>
        <ProvinceType
          handleProvince={handleProvince}
          showProvinces={showProvinces}
        />
        {showProvinces === "province-list" && <ProvincesList />}
        {showProvinces === "province-map" && <ProvinceMap />}
      </main>
    </Layout>
  );
}

export function getServerSideProps({ req, res }: ServerSideProps) {
  return { props: { token: req.cookies.open_weather_api_key || "" } };
}
