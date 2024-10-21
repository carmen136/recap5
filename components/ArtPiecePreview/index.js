import Image from "next/image";

export default function ArtPiecePreview({image, title, artist}) {

    console.log("Artpiece Preview"); 

    return (
        <>
            <li>
                <Image
                    src={image}
                    width={500}
                    height={500}
                    alt={title}
            />
            </li>
            <li>{title}</li>
            <li>{artist}</li>
        </>
    )

}