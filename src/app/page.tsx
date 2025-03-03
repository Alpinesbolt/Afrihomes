import { Hero } from "./Components/layouts/Hero";
import { SearchFeature } from "./Components/layouts/Search";
import { FeaturedProducts } from "./Components/layouts/Featured";
import { Testimonials } from "./Components/layouts/Testimonials";

export default function Home() {
  return (
    <main className="w-full px-9 mx-auto">
      <Hero />
      <SearchFeature />
      <FeaturedProducts />
      <Testimonials />
    </main>
  );
}
