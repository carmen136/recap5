import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPiece({ pieces }) {
  console.log("ArtPiece");

  const router = useRouter();
  const { slug } = router.query;

  const pieceData = pieces ? pieces.find((piece) => piece.slug === slug) : null;
  if (!pieceData) return <div>No data available!</div>;

  function handleClick() {
    router.push("/art-pieces");
  }

  return (
    <>
      <ArtPieceDetails
        image={pieceData.imageSource}
        title={pieceData.name}
        artist={pieceData.artist}
        year={pieceData.year}
        genre={pieceData.genre}
      />
      <button onClick={handleClick}>Back</button>
    </>
  );
}
