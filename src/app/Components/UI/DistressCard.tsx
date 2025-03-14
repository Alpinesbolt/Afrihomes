import React, { FC } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
  
  interface DistressCard {
    name: string;
    address: string;
    oldPrice: string;
    newPrice: string;
    src: string;
  }
  
  export const DistressCard: FC<DistressCard> = ({
    name,
    address,
    oldPrice,
    newPrice,
    src,
  }) => {
    return (
      <div className="border border-tertiary rounded-2xl py-4 px-3">
        <div className="flex gap-3">
            <Image
                alt={name}
                src={src}
                width={50}
                height={50}
                className="border rounded-2xl border-gray-100"
                
            />
            <div>
                <p className="body-text-2 font-bold truncate text-subtle-text">{name}</p>
                <p className=" body-text-3 flex font-medium truncate text-subtle-text"> <MapPin size={16} className="mr-2"/> {address}</p>
                <div className="flex">
                <p className=" body-text-3 flex font-medium truncate text-subtle-text line-through mr-3"> ₦ {oldPrice}</p>
                <p className=" body-text-3 flex font-medium truncate text-primary"> ₦ {newPrice}</p>
                </div>
                
            </div>
            
        </div>
        
      </div>
    );
  };
  