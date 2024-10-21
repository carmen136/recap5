import Link from "next/link";

export default function Navigation() {
  console.log("Navigation");

  return (
    <ui>
      <li>
        <Link href="/">Spotlight</Link>
      </li>
      <li>
        <Link href="/art-pieces">Pieces</Link>
      </li>
    </ui>
  );
}
