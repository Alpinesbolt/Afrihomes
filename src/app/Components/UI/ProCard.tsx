import { LucideIcon } from "lucide-react";
import React, { FC } from "react";
import { Button } from "./Button";
import Image from "next/image";

interface ProCard {
  house: string;
  address: string;
  price: string;
  href?: string;
  Icon?: LucideIcon;
  src: string;
  
}

export const ProCard: FC<ProCard> = ({
  house,
  address,
  price,
  href = "",
  Icon,
  src,
}) => {
    return (
      <div className="mt-5 mb-5 border-4 border-button/fillpressed rounded-lg rounded-t-[50px] ">
        <div className="relative h-[300px] w-[300px]l" >
            <Image
                      alt="HeroT Image"
                      src={src}
                      layout="fill"
                      objectFit="cover" 
                      className=""
                    />
            <div className="absolute top-5 right-5 ">
            {Icon && <Icon className="w-6 h-6 text-gray-600" />}
            </div>
            <Button
                content="View Details"
                className="btn btn-primary absolute bottom-5 left-10 "
                Icon={Icon}
                href={href}
            />
        </div>
        <hr />
        <div className="m-2">
            <p className="overflow-hidden">{house}</p>
            <p className="overflow-hidden"> {address}</p>
            <p className="text-primary">{price}</p>
        </div>
      </div>
    );

 
};
