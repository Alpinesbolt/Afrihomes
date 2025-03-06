import React, { FC } from "react";
import Image from "next/image";
  
  interface ProductCard {
    cont1: string;
    address: string;
    room: string;
    src: string;
    imgName: string;
  }
  
  export const ClientCard: FC<ProductCard> = ({
    cont1,
    address,
    room,
    src,
    imgName,
  }) => {
    return (
      <div className="border border-accent3 border-[6px] rounded-2xl relative h-96 w-80 pt-9 pb-9 pr-4 pl-4">
        <div className="mb-16">
            <p>{cont1}</p>
        </div>
        <div className="mt-16 mb-4 absolute bottom-0 h-12">
            <div className="flex fiex-col align-center">
            <Image
                alt={imgName}
                src={src}
                width={50}
                height={50}
                
            />
            <div className="ml-4">
                <p>{address}</p>
                <p className="text-primary">{room}</p>
            </div>
            
            </div>
        </div>
        
      </div>
    );
  };
  