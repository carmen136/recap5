import useSWR from "swr";
import Spotlight from "@/components/Spotlight";
import ArtPieces from "@/components/ArtPieces";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

const URL = "https://example-apis.vercel.app/api/art";

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

  console.log(pieces.length); // 11

  function getRandomID() {
    return Math.floor(Math.random() * pieces.length);
  }

  let randomID = getRandomID();
  const imageRandom = pieces[randomID].imageSource;
  const artistRandom = pieces[randomID].artist;

  return (
    <div>
      <h1>Art Gallery</h1>
      <h2>Spotlight</h2>
      <Spotlight image={imageRandom} artist={artistRandom} />
      <ArtPieces pieces={pieces} />
    </div>
  );
}
