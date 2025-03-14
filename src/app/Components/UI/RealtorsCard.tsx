import React, { FC } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
  
  interface RealtorsCard {
    name: string;
    address: string;
    src: string;
  }
  
  export const RealtorsCard: FC<RealtorsCard> = ({
    name,
    address,
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
                className="border rounded-full border-gray-100"
                
            />
            <div>
                <p className="body-text-2 font-bold truncate text-subtle-text">{name}</p>
                <p className=" body-text-3 flex font-medium truncate text-subtle-text"> <MapPin size={16} className="mr-2"/> {address}</p>
            </div>
            
        </div>
        
      </div>
    );
  };
  