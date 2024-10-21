import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  handleToggleFavorite,
}) {
  return (
    <>
      <div>
        <FavoriteButton
          onToggleFavorite={() => handleToggleFavorite({ slug })}
        />
        <Link href={`/art-pieces/${slug}`}>
          <Image src={image} width={500} height={500} alt={title}></Image>
        </Link>
      </div>
      <li>{title}</li>
      <li>{artist}</li>
    </>
  );
}
