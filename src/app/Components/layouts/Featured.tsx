import { FC } from "react";
import { Button } from "../ui/Button";
import { Bookmark } from "lucide-react";
import { ProductCard } from "../ui/ProductCard";
export const FeaturedProducts: FC = () => {
  return (
    <section className="flex flex-col flex-center">
      <div className="flex-center flex-col">
        <h3 className="text-3xl font-bold capitalize items-center">
          Homes & Lands At Your Preferred Choices
        </h3>
        <p className="text-base items-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.Beatae esse
          dolorum cumque nesciunt omnis facilis pariatur ut repudiandae!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 my-5">
        <ProductCard
          name="5 Bedroom Duplex & Small BQ sgferg rthdrhehy"
          address="11, ejiflox drive Igando rthrht"
          price="2,0000"
          Icon={Bookmark}
          src={"/globe.svg"}
        />
      </div>
      <Button content="See More Properties" className="btn btn-primary m-5" />
    </section>
  );
};
