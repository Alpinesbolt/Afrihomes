import {
  Locate,
  LucideIcon,
  MapPin,
  SquareArrowOutUpRight,
} from "lucide-react";
import React, { FC } from "react";
import { Button } from "./Button";
import Image from "next/image";

interface ProductCard {
  name: string;
  address: string;
  price: string;
  href?: string;
  Icon?: LucideIcon;
  src: string;
}

export const ProductCard: FC<ProductCard> = ({
  name,
  address,
  price,
  href = "",
  Icon,
  src,
}) => {
  return (
    <div className="border border-accent3 rounded-t-2xl w-full">
      <div className="relative h-64 w-full">
        <Image
          alt={name}
          src={src}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
        <div className="absolute top-3 right-3 bg-white rounded border border-primary p-1.5">
          {Icon && <Icon size={16} className="text-primary" />}
        </div>
        <Button
          content="View Details"
          className="btn btn-primary absolute bottom-4 left-3 flex-center"
          Icon={SquareArrowOutUpRight}
          href={href}
        />
      </div>
      <hr />
      <div className="p-2">
        <p className="truncate text-subtle-text">{name}</p>
        <small className="text-subtle-text truncate align-middle">
          <MapPin size={16} className="inline-block text" /> {address}
        </small>
        <p className="text-secondary">₦ {price}</p>
      </div>
    </div>
  );
};
