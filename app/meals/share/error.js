"use client";
export default function MealsError({ error }) {
  return (
    <main className="error">
      <h1>An error occurred</h1>
      <p>Failed to create meal. Try again later.</p>
    </main>
  );
}
