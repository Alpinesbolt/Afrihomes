import { FC } from "react";
import { Button } from "../ui/Button";
import {
  Locate,
  LucideIcon,
  MapPin,
  SquareArrowOutUpRight,
} from "lucide-react";
import { Bookmark } from "lucide-react";
import { ProductCard } from "../ui/ProductCard";



export const Experience: FC = () => {
  return (
    <section className="grid grid-cols-4 gap-8 items-center place-items-center p-8">
  <div className="col-span-4 lg:col-span-2">
    <p>
      Our Team Lorem ipsum dolor sit amet. Ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt sed iure culpa distinctio ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, sint?
    </p>
    <div className="mt-16">
      <h3 className="font-bold">Free Academy for Aspiring Realtors</h3>
      <p>We also Lorem ipsum dolor sit amet. Ipsum dolor sit amet consectetur adipisicing elit. Alias, nobis?</p>
      <dl className="mt-10">
        <dt className="font-bold">
          <MapPin size={26} className="inline-block text-primary" /> Customer Service
        </dt>
        <dd className="ml-8">
          Customer Service Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis?
        </dd>

        <dt className="mt-5 font-bold">
          <MapPin size={26} className="inline-block text-primary" /> Networking Opportunities
        </dt>
        <dd className="ml-8">
          Networking Opportunities Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum! Lorem ipsum dolor sit.
        </dd>
      </dl>
    </div>
    <div className="flex justify-center">
      <Button content="Join Free Academy" className="btn btn-primary m-4" />
      <Button content="Register as a Realtor" className="btn btn-outline-primary border border-primary m-4" />
    </div>
  </div>


  <div className="col-span-4 lg:col-span-2 flex flex-col items-center">
    <div className="mb-10 ">
      <p className="text-primary">3000+ Registered Realtors</p>
      <h2 className="font-bold">Afrihomes' Realtors Experienced Team</h2>
    </div>
    <ProductCard
      name="5 Bedroom Duplex & Small BQ sgferg rthdrhehy"
      address="11, Ejiflox Drive, Igando rthrht"
      price="2,0000"
      Icon={Bookmark}
      src={"/globe.svg"}
    />
  </div>
</section>

  );
};
