import FavoriteSvg from "../../assets/heart.svg";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button type="button" onClick={onToggleFavorite}>
      <FavoriteSvg width={50} height={50} />
    </button>
  );
}
