import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

const URL = "https://example-apis.vercel.app/api/art"


export default function HomePage() {

  const {
    data: pieces,
    isLoading,
    isValidating,
    error,
    mutate,
  } = useSWR(URL, fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading ISS data!</div>;
  if (!pieces) return <div>No data available!</div>;

  console.log("index:" + pieces);

  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={pieces} />
    </div>
  );
}
