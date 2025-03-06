import { Hero } from "./Components/layouts/Hero";
import { SearchFeature } from "./Components/layouts/Search";
import { FeaturedProducts } from "./Components/layouts/Featured";
import { Testimonials } from "./Components/layouts/Testimonials";
import { Experience } from "./Components/layouts/Experience";
import { Abouts } from "./Components/layouts/Abouts";
import { Journey } from "./Components/layouts/Journey";
import { NewsLetter } from "./Components/layouts/NewsLetter";

export default function Home() {
  return (
    <main className="w-full px-9 mx-auto">
      <Hero />
      <SearchFeature />
      <FeaturedProducts />
      <Testimonials />
      <Experience />
      <Abouts/>
      <Journey/>
      <NewsLetter/>
    </main>
  );
}
