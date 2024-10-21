import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  console.log("Artpiece Preview");

  return (
    <>
      <li>
        <Link href={`/art-pieces/${slug}`}>
          <Image src={image} width={500} height={500} alt={title} />
        </Link>
      </li>
      <li>{title}</li>
      <li>{artist}</li>
    </>
  );
}
