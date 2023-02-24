import { useState } from "react";
import { useRouter } from "next/router";
import { Layout } from "@/components/Layout";
import { ArrowIcon } from "@/components/ArrowIcon";

export default function WeatherApi() {
  const [apiKey, setApiKey] = useState("");
  const [apiType, setApiType] = useState("");
  const router = useRouter();

  const testApiKey = async (event: React.FormEvent) => {
    event.preventDefault();
    const sendApiRequest = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=41.73333&lon=27.21667&units=metric&appid=${apiKey}`
    );
    const apiResponse = await sendApiRequest.json();
    if (apiResponse.cod === 401) {
      setApiType("error");
      setTimeout(() => {
        setApiType("");
      }, 1500);
    } else {
      setApiType("success");
      await fetch("/api/getapikey", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: apiKey }),
      });
      router.push("/");
    }
  };

  return (
    <Layout title="API Key">
      <div className="flex flex-col gap-3 h-screen justify-center items-center">
        {apiType && (
          <p
            className={`text-white p-2 rounded-md mr-10 ${
              apiType === "error" ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {apiType === "error"
              ? "Invalid Api Key, Try Again."
              : "Valid Api Key, Redirecting..."}
          </p>
        )}
        <label className="text-white text-lg hidden">Your API Key: </label>
        <form className="flex items-center" onSubmit={testApiKey}>
          <input
            className="w-60 h-10 px-2 text-white bg-gray-600 rounded-full"
            type="text"
            onChange={(event) => setApiKey(event.target.value)}
            placeholder="Enter Api Key"
          />
          <button className="w-8 h-8 ml-3 rounded-full" type="submit">
            <ArrowIcon rotate={180} />
          </button>
        </form>
        <p className="text-white text-base text-center">
          To use the app, you should go to{" "}
          <a
            className="underline"
            href="https://openweathermap.org/"
            target="_blank"
          >
            openweathermap.org
          </a>
          <br />
          and get an api key.
        </p>
        <div className="group flex justify-center items-center flex-col mr-7">
          <span className="bg-slate-500 rounded-full mr-3 text-white w-5 h-5 flex justify-center items-center">
            ?
          </span>
          <span className="opacity-0 text-white bg-slate-500 mt-2 group-hover:opacity-100 p-1 border-white rounded-sm">
            e54adaf85c1ebc454d16a41b46cea4ec
          </span>
        </div>
      </div>
    </Layout>
  );
}
