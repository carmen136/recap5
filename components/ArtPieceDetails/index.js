import Image from "next/image";
import FavoriteButton from "../FavoriteButton";

export default function ArtPieceDetails({
  slug,
  image,
  title,
  artist,
  year,
  genre,
  handleToggleFavorite,
}) {
  return (
    <ul>
      <div>
        <FavoriteButton onToggleFavorite={() => handleToggleFavorite(slug)} />
        <Image src={image} width={500} height={500} alt={title} />
      </div>
      <li>{title}</li>
      <li>{artist}</li>
      <li>{year}</li>
      <li>{genre}</li>
    </ul>
  );
}

/* onToggleFavorite={() => handleToggleFavorite({ slug })} */
