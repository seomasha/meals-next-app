import Link from "next/link";

import Image from "next/image";
import logo from "@/assets/logo.png";

import modules from "./header.module.css";

export default function Header() {
  return (
    <header className={modules.header}>
      <Link className={modules.logo} href="/">
        <Image src={logo} alt="Logo" />
        NextLevel Food
      </Link>

      <nav className={modules.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>

          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
