import MealsGrid from "@/components/meals/meals-grid";
import modules from "./page.module.css";
import Link from "next/link";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import MealsLoadingPage from "./loading-out";

const Meals = async () => {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
};

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
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
