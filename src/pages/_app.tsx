import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { usePageLoading } from "@/hooks/usePageLoading";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function App({ Component, pageProps }: AppProps) {
  const {loading} = usePageLoading()

  return (
  <>
    {loading 
    ? <LoadingSpinner/>
    :<Component {...pageProps} />
    }
  </>
  )
}
