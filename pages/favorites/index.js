import ArtPieces from "@/components/ArtPieces";

export default function FavoritesPage({
  piecesFavorite,
  handleToggleFavorite,
}) {
  console.log("FavoritesPage");

  return (
    <>
      <h1>Favorites Page</h1>
      <ArtPieces
        pieces={piecesFavorite}
        handleToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
