import Image from "next/image";
import modules from "./page.module.css";

import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export default async function MealPage({ params }) {
  const meal = await getMeal(params.id);

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  // if (!meal) {
  //   notFound();
  // } one option

  return (
    <>
      <header className={modules.header}>
        <div className={modules.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={modules.headerText}>
          <h1>{meal.title}</h1>
          <p className={modules.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={modules.summary}>{meal.summary}</p>
        </div>
      </header>

      <main>
        <p
          className={modules.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
