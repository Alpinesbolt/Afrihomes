import { navbarItems } from "@/app/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "../ui/Button";
import { User } from "lucide-react";
interface Header {
  announcement?: string;
}
export const Header: FC<Header> = ({ announcement }) => {
  return (
    <header className="w-full flex justify-between items-center px-9 h-16">
      <Image
        src="/logo.png"
        alt="logo"
        width={100}
        height={100}
        className="h-16"
      />
      <nav className="flex justify-center items-center gap-6 capitalize">
        {navbarItems.map(({ title, ref }) => (
          <Link href={ref} key={title} className="header-links">
            {title}
          </Link>
        ))}
      </nav>
      <Button
        href="/auth"
        Icon={User}
        className="btn btn-primary"
        content="Log In/Sign Up"
      />
    </header>
  );
};
