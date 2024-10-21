import Image from "next/image";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  console.log("ArtPieceDetails");

  return (
    <ul>
      <li>
        <Image src={image} width={500} height={500} alt={title} />
      </li>
      <li>{title}</li>
      <li>{artist}</li>
      <li>{year}</li>
      <li>{genre}</li>
    </ul>
  );
}
