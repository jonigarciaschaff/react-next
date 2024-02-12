"use client";

import { usePathname } from "next/navigation";
import s from "./Header.module.css";
import Link from "next/link";

export default function Header({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center">
      <h1 className={s.title}>{children}</h1>
      {pathname !== "/home" && (
        <Link href="../" className="text-blue-500">
          Back
        </Link>
      )}
    </div>
  );
}
