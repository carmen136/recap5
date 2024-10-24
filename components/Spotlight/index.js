import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <ul>
      <li>
        <Image src={image} width={500} height={500} alt={artist} />
      </li>
      <li>{artist}</li>
    </ul>
  );
}
