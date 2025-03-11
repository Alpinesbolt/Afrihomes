import React, { FC } from "react";
import Image from "next/image";
  
  interface ClientReviewCard {
    review: string;
    name: string;
    property: string;
    src: string;
  }
  
  export const ClientCard: FC<ClientReviewCard> = ({
    review,
    name,
    property,
    src,
  }) => {
    return (
      <div className="relative border border-tertiary rounded-2xl h-80 w-64 py-4 px-3">
            <p className="body-text-2">{review}</p>
        <div className="absolute bottom-0 pb-4 flex gap-3">
            <Image
                alt={name}
                src={src}
                width={50}
                height={50}
                
            />
            <div>
                <p className="body-text-2 font-medium">{name}</p>
                <p className="text-button/pressed body-text-3">{property}</p>
            </div>
            
        </div>
        
      </div>
    );
  };
  