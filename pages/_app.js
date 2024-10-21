import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const {
    data: pieces,
    isLoading,
    isValidating,
    error,
    mutate,
  } = useSWR(URL, fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading!</div>;
  if (!pieces) return <div>No data available!</div>;

  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component {...pageProps} pieces={pieces} />
    </>
  );
}
