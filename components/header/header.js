import Link from "next/link";

import Image from "next/image";
import logo from "@/assets/logo.png";

import modules from "./header.module.css";
import HeaderBackground from "./header-background";

export default function Header() {
  return (
    <>
      <HeaderBackground />
      <header className={modules.header}>
        <Link className={modules.logo} href="/">
          <Image src={logo} alt="Logo" priority />
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
    </>
  );
}
