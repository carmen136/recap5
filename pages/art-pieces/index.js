import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({ pieces, handleToggleFavorite }) {
  return (
    <ArtPieces pieces={pieces} handleToggleFavorite={handleToggleFavorite} />
  );
}
