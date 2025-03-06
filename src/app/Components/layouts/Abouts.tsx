import { FC } from "react";
import { Button } from "../ui/Button";
import {
  Locate,
  LucideIcon,
  MapPin,
  SquareArrowOutUpRight,
} from "lucide-react";
import { Bookmark } from "lucide-react";
import { ClientCard } from "../UI/ClientCard";




export const Abouts: FC = () => {
  return (
    <section className="flex flex-col justify-center mt-40">
      <div className="text-center mb-32">
        <h1 className="text-3xl font-bold capitalize items-center ">
          See Whats Our <b className="text-primary">Clients</b> and Realtors Says About Us
        </h1>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 my-5">
      <ClientCard
        cont1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed nam quod quaerat tenetur, aperiam culpa magnam velit perspiciatis tempore est aliquid quo, itaque error minima excepturi doloribus illo asperiores."
        address ="11, Soyinka Str. Lagos"
        room= "Room and flat"
        src={"/globe.svg"}
        imgName="img"
      />
    </div>

</section>

  );
};
