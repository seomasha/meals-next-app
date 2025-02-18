import Link from "next/link";

import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <Image src={logo} alt="Logo" />
        NextLevel Food
      </Link>

      <nav>
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
