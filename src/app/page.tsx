import { Hero } from "./Components/layouts/Hero";
import { SearchFeature } from "./Components/layouts/Search";
import { HeroT } from "./Components/layouts/HeroT";

export default function Home() {
  return (
    <main className="w-full px-9 mx-auto">
      <Hero />
      <SearchFeature />
      <HeroT/>
    </main>
  );
}
