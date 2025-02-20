import modules from "./loading.module.css";

export default function MealsLoadingPage() {
  return <p className={modules.loading}>Fetching Meals...</p>;
}
