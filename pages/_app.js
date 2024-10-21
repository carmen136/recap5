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

    setArtPiecesInfo((prevArtPiecesInfo) => {
      const existingArtPiece = prevArtPiecesInfo.find(
        (artPiece) => artPiece.slug === slug
      );
      console.log(artPiecesInfo);
      if (existingArtPiece) {
        // Wenn das Kunstwerk bereits als Favorit markiert ist, entferne es
        return prevArtPiecesInfo.filter((artPiece) => artPiece.slug !== slug);
      } else {
        // Andernfalls füge es als Favorit hinzu
        return [{ slug, isFavorite: true }, ...prevArtPiecesInfo];
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
        handleToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
