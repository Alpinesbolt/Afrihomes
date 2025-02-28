import { FC } from "react";
import { Button } from "../ui/Button";
import { ProCard } from "../UI/ProCard";
import { SquareArrowOutUpRight, Target } from "lucide-react";
import Image from "next/image";
export const HeroT: FC = () => {
  return (
    <section className="flex flex-col flex-center">
      <div className="flex flex-col flex-center">
        <h1 className="text-3xl font-bold capitalize items-center">
          Homes & Lands At Your Preferred Choices
        </h1>
        <p className="text-base items-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.Beatae esse
          dolorum cumque nesciunt omnis facilis pariatur ut repudiandae!
        </p>
        
      </div>
      <div className="grid grid-cols-5 gap-3 my-5">
        <ProCard
            house="5 Bedroom Duplex & Small BQ sgferg rthdrhehy"
            address="11, ejiflox drive Igando rthrht"
            price="2,0000"
            Icon={SquareArrowOutUpRight}
            src={"/globe.svg"}
            
          />
        <ProCard
            house="5 Bedroom Duplex & Small BQ sgferg rthdrhehy"
            address="11, ejiflox drive Igando rthrht"
            price="2,0000"
            Icon={SquareArrowOutUpRight}
            src={"/globe.svg"}
          />
        <ProCard
            house="5 Bedroom Duplex & Small BQ sgferg rthdrhehy"
            address="11, ejiflox drive Igando rthrht"
            price="2,0000"
            Icon={SquareArrowOutUpRight}
            src={"/globe.svg"}
          />
        <ProCard
            house="5 Bedroom Duplex & Small BQ sgferg rthdrhehy"
            address="11, ejiflox drive Igando rthrht"
            price="2,0000"
            Icon={SquareArrowOutUpRight}
            src={"/globe.svg"}
          />
        <ProCard
            house="5 Bedroom Duplex & Small BQ sgferg rthdrhehy"
            address="11, ejiflox drive Igando rthrht"
            price="2,0000"
            Icon={SquareArrowOutUpRight}
            src={"/globe.svg"}
          />
        </div>
        <Button
              content="See More Properties"
              className="btn btn-primary m-5"
            />
    </section>
  );
};
