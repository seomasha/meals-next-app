import Link from "next/link";

import Image from "next/image";
import logo from "@/assets/logo.png";

import modules from "./header.module.css";
import HeaderBackground from "./header-background";
import NavLink from "./nav-link";

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
              <NavLink href="/meals">Browse meals</NavLink>
            </li>

            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
