import { Quote } from "lucide-react";
import Image from "next/image";

export const AdminTestimony= () => {
  return (
    <section className="grid grid-cols-2 items-center place-items-center py-6 gap-6">
      <div className="relative h-[500px] w-[500px] bg-subtle-text rounded-tr-3xl rounded-bl-3xl">
        <Image
          alt="Hero Image"
          src={"/globe.svg"}
          height={500}
          width={500}
          className="rounded-lg rounded-tr-3xl rounded-bl-3xl"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-16 w-10/12 bg-white flex-center flex-col rounded-tr-3xl rounded-bl-3xl p-6">
          <p> "Luxury is the best comform we should strive for"</p>
          <p>Mr. Alex F. Chidike</p>
        </div>
      </div>

      <div className="flex-center flex-col gap-6">
        <h3 className="text-2xl font-bold">
          {" "}
          Hear from our chief Operating Officer
        </h3>
        <p className="text-base text-text">
          <Quote fill="#873e96" className="inline-block text-primary" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </div>
    </section>
  );
};
