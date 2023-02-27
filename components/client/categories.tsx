"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Categories({ data }: { data: [string] }) {
  const pathname = usePathname();
  return (
    <ul className="menu bg-base-200 w-full">
      <iframe
        style="border-radius:12px"
        src="https://open.spotify.com/embed/track/50kpGaPAhYJ3sGmk6vplg0?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      {data.map((category: string) => (
        <li
          key={category}
          className={pathname == "/products/" + category ? "bordered" : ""}
        >
          <Link key={category} href={`/products/${category}`}>
            {category}
          </Link>
        </li>
      ))}
    </ul>
  );
}
