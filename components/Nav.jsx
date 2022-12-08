import React from "react";
import Link from "next/link";

export function Nav() {
  return (
    <div className="flex justify-center items-center p-4 gap-6 bg-home">
      <Link
        href="/"
        className="no-underline text-gray border-b border-b-roxo text-sm uppercase"
      >
        Home
      </Link>
      <Link
        href="/Projects"
        className="no-underline text-gray opacity-20 text-sm uppercase"
      >
        Projects
      </Link>
    </div>
  );
}
