import { FC } from "react";
import { Button } from "./Button";
import clsx from "clsx";

interface Tab {
  additionalClassName?: string;
  content: string[];
  setActiveTab: (tab: string) => void;
  activeTab?: string;
}

export const TabPanel: FC<Tab> = ({
  additionalClassName,
  content,
  setActiveTab,
  activeTab,
}) => {
  return (
    <div className="flex-center">
      {content.map((c, index, arr) => (
        <Button
          key={c}
          content={c}
          onClick={() => setActiveTab(c)}
          className={clsx(
            "m-0 btn btn-secondary border rounded-none capitalize transition-colors duration-300 ease-linear border-b-0",
            activeTab === c
              ? "bg-primary/20 !border-l-1 border-primary text-primary  rounded-none rounded-tl-lg "
              : "border-subtle-text",
            index === arr.length - 1
              ? "border-l-0 rounded-tr-lg rounded-tl-none"
              : index === arr.length - 1 && activeTab === c
              ? "!border-l-1"
              : index === 0 && activeTab !== c
              ? "rounded-tl-lg"
              : "border-l-1",
            additionalClassName
          )}
        />
      ))}
    </div>
  );
};
