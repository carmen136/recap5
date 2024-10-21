import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  console.log("Artpiece Preview");

  /*   const router = useRouter(); 

  function handleDetailPage() {
   router.push(`/art-pieces/${slug}`); 
  } */

  return (
    <>
      <li>
        <Link href={`/art-pieces/${slug}`}>
          <Image
            src={image}
            width={500}
            height={500}
            alt={title}
            /* onClick={handleDetailPage} */
          />
        </Link>
      </li>
      <li>{title}</li>
      <li>{artist}</li>
    </>
  );
}
