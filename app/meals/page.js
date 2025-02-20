import MealsGrid from "@/components/meals/meals-grid";
import modules from "./page.module.css";
import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <header className={modules.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={modules.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun.
        </p>

        <p className={modules.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={modules.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
