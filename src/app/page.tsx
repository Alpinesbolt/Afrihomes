import { Hero } from "./Components/layouts/Hero";
import { SearchFeature } from "./Components/layouts/Search";
import { FeaturedProducts } from "./Components/layouts/Featured";
import { AdminTestimony } from "./Components/layouts/AdminTestimony";
import { RealtorsAcademy } from "./Components/layouts/RealtorsAcademy";
import { ClientsTestimony } from "./Components/layouts/ClientsTestimony";
import { HomeCTA } from "./Components/layouts/HomeCTA";
import { NewsLetter } from "./Components/layouts/NewsLetter";


export default function Home() {
  return (
    <main className="w-full mx-auto">
      <Hero />
      <SearchFeature />
      <FeaturedProducts />
      <AdminTestimony />
      <RealtorsAcademy />
      <ClientsTestimony/>
      <HomeCTA/>
      <NewsLetter/>
    </main>
  );
}
