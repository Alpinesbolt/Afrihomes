"use client";
import { FC, useState } from "react";
import { TabPanel } from "../ui/TabPanel";
import { searchTabs } from "@/app/lib/constants";
import { Button } from "../ui/Button";
import { Search } from "lucide-react";

export const SearchFeature: FC = () => {
  const [activeTab, setActiveTab] = useState<string>("buy");
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex flex-col justify-start items-start p-3">
      <TabPanel
        content={searchTabs}
        setActiveTab={handleTabClick}
        activeTab={activeTab}
      />
      <div className="flex justify-center items-center gap-4 h-20">
        <form className="grid grid-cols-[150px_150px_150px_100px] gap-4 border border-subtle-text rounded-lg rounded-tl-none w-full p-4">
          <select className="bg-white border border-subtle-text p-3 rounded-lg text-primary">
            <option>Location</option>
            <option value="abuja">abuja</option>
          </select>
          <select className="bg-white border border-subtle-text p-3 rounded-lg text-primary">
            <option>Property type</option>
            <option value="abuja">abuja</option>
          </select>
          <select className="bg-white border border-subtle-text p-3 rounded-lg text-primary">
            <option>Price range</option>
            <option value="abuja">abuja</option>
          </select>
          <Button
            type="submit"
            content="Search"
            Icon={Search}
            className="btn btn-primary"
          />
        </form>
        <div className="h-full w-60 bg-gradient-to-tr from-accent4 to-primary rounded-lg" />
      </div>
    </div>
  );
};
