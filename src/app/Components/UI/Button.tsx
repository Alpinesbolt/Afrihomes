import { LucideIcon } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

interface Button {
  className?: string;
  content: string;
  href?: string;
  Icon?: LucideIcon;
  type?: "button" | "submit" | "reset";
  onClick?: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>
  ) => void;
}

export const Button: FC<Button> = ({
  content,
  href = "",
  Icon,
  type,
  className,
  onClick,
}) => {
  if (href) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {Icon && <Icon />} {content}
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {Icon && <Icon />} {content}
    </button>
  );
};
