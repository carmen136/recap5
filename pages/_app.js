import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((response) => response.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  const {
    data: pieces,
    isLoading,
    isValidating,
    error,
    mutate,
  } = useSWR(URL, fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading!</div>;
  if (!pieces) return <div>No data available!</div>;

  function handleToggleFavorite(slug) {
    /* setArtPiecesInfo(
      artPiecesInfo.includes(slug)
        ? artPiecesInfo.filter((artPieceInfo) => artPieceInfo !== slug)
        : [slug, ...artPiecesInfo]
    ); */

    console.log(slug);

    setArtPiecesInfo((prevArtPiecesInfo) => {
      const existingArtPiece = prevArtPiecesInfo.find(
        (artPiece) => artPiece.slug === slug
      );
      console.log(artPiecesInfo);
      if (existingArtPiece) {
        return prevArtPiecesInfo.filter((artPiece) => artPiece.slug !== slug);
      } else {
        const favoritePiece = pieces.find((favPiece) => favPiece.slug === slug);
        if (favoritePiece) {
          return [{ ...favoritePiece, isFavorite: true }, ...prevArtPiecesInfo];
        } else {
          console.error(
            "Das Kunstwerk mit dem angegebenen Slug wurde nicht gefunden."
          );
          return prevArtPiecesInfo;
        }
      }
    });
  }

  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component
        {...pageProps}
        pieces={pieces}
        piecesInfo={artPiecesInfo}
        piecesFavorite={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
