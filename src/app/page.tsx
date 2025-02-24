import { Hero } from "./Components/layouts/Hero";
import { SearchFeature } from "./Components/layouts/Search";

export default function Home() {
  return (
    <main className="w-full px-9 mx-auto">
      <Hero />
      <SearchFeature />
    </main>
  );
}
