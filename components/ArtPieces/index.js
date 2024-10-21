import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({pieces}) {

console.log("Artpieces"); 
console.log(pieces)

    return (

        <ul>
            { pieces.map((piece) => (
                <ArtPiecePreview key={piece.slug} image={piece.imageSource} title={piece.name} artist={piece.artist} />
            )
            )}    
        </ul>
    )

}