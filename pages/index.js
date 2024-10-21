import Spotlight from "@/components/Spotlight";
import ArtPieces from "@/components/ArtPieces";

export default function SpotlightPage({ pieces }) {
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
      {/* <ArtPieces pieces={pieces} /> */}
    </div>
  );
}
