import { FC } from "react";
import { Button } from "../ui/Button";
import Image from "next/image";
import {
  Locate,
  LucideIcon,
  MapPin,
  SquareArrowOutUpRight,
} from "lucide-react";



export const NewsLetter: FC = () => {
  return (
  <section className="h-96 flex justify-center items-center">
        <div  className="grid grid-cols-2  gap-3 my-5 flex items-center">
            <div className="bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat h-28 w-72 flex justify-center items-center text-white  border border-gray-300 rounded-lg overflow-hidden w-full  ">
                Newsletter
            </div>
            <div className="flex flex-col w-full justify-end ">
                <p className="mb-16">Subscribe to our Newsletter to get Updates on New Listings. <br /> Exciting Deals and Seasonal Sales</p>
                <div className="flex items-center overflow-hidden w-full">
                    <input
                        type="text"
                        placeholder="Enter your email address"
                        className="flex-1 px-4 py-2 outline-none border border-gray-300 rounded-lg "
                    />
                    <Button content="Subscribe" className="btn btn-primary ml-3" />
                </div>
            </div>
        </div>
    </section>
    

  );
};
