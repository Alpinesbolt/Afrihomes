import { FC } from "react";
import { Button } from "../ui/Button";
import { SquareArrowOutUpRight, Target } from "lucide-react";
import Image from "next/image";
export const Hero: FC = () => {
  return (
    <section className="grid grid-cols-2 items-center place-items-center py-10">
      <div className="flex flex-col gap-6 items-start w-8/12">
        <h1 className="text-3xl font-bold capitalize">
          Homes & Lands At Your Preferred Choices
        </h1>
        <p className="text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.Beatae esse
          dolorum cumque nesciunt omnis facilis pariatur ut repudiandae!
        </p>
        <div className="flex-center gap-3">
          <Button
            Icon={SquareArrowOutUpRight}
            content="Browse Homes"
            className="btn btn-primary"
          />
          <Button
            className="btn btn-outline-primary border border-primary"
            content="Be a Realtor"
          />
        </div>
      </div>
      <div className="relative h-[500px] w-[500px]">
        <Image
          alt="Hero Image"
          src={"/globe.svg"}
          height={500}
          width={500}
          className="border-4 border-button/fillpressed rounded-lg rounded-t-[100px] "
        />
        <div className="absolute -top-5 -right-5 h-16 w-36 bg-white shadow-2xl flex-center rounded-lg" />
        <div className="absolute -bottom-5 -left-10 h-16 w-36 bg-white shadow-2xl flex-center rounded-lg" />
      </div>
    </section>
  );
};
