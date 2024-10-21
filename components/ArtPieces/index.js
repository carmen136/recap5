import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces, handleToggleFavorite }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          slug={piece.slug}
          image={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
          handleToggleFavorite={handleToggleFavorite}
        />
      ))}
    </ul>
  );
}
