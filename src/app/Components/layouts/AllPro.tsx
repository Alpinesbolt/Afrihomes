import { Button } from "../ui/Button";
import { Filter, ArrowRight, Search, Bookmark } from "lucide-react";
import { ProductCard } from "../ui/ProductCard";
import RealtorsFeed from "./RealtorsFeed";
import Distress from "./Distress";

export const AllPro= () => {
  return (
    <section className="m-5 grid grid-cols-11 gap-4">
          <div className="col-span-8 p-4">
            <div className="flex flex-row justify-between items-center">
                <p>All Properties (520)</p>
                <div className="flex flex-row gap-4">
                    <div className="flex items-center overflow-hidden gap-3 border border-gray-300 rounded-lg ">
                        <Search size={30} className="mx-2  text-primary"/>
                        <input
                            type="text"
                            placeholder="Search Properties"
                            className="px-4 py-2 w-full outline-none "
                        />
                        
                    </div>
                    <Button content={
                        <>
                            <ArrowRight size={30} className="mr-2" />
                            
                        </>}
                            className="btn btn-primary text-lg" 
                            />
                    <Button content= {
                        <>
                            <Filter size={16} className="mr-2" />
                            Filter
                        </>}
                    className="btn btn-primary text-lg items-center" />
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-2">
                <ProductCard
                    name="5 Bedroom Duplex & Small BQ sgferg rthdrhehy"
                    address="11, ejiflox drive Igando rthrht"
                    price="2,0000"
                    Icon={Bookmark}
                    src={"/globe.svg"}
                />
                <ProductCard
                    name="5 Bedroom Duplex & Small BQ sgferg rthdrhehy"
                    address="11, ejiflox drive Igando rthrht"
                    price="2,0000"
                    Icon={Bookmark}
                    src={"/globe.svg"}
                />
                <ProductCard
                    name="5 Bedroom Duplex & Small BQ sgferg rthdrhehy"
                    address="11, ejiflox drive Igando rthrht"
                    price="2,0000"
                    Icon={Bookmark}
                    src={"/globe.svg"}
                />
                <ProductCard
                    name="5 Bedroom Duplex & Small BQ sgferg rthdrhehy"
                    address="11, ejiflox drive Igando rthrht"
                    price="2,0000"
                    Icon={Bookmark}
                    src={"/globe.svg"}
                />
            </div>
          </div>
          <div className="col-span-3 p-4">
            <div>
                <RealtorsFeed/>
            </div>
            <div>
                <Distress/>
            </div>
          </div>
    </section>
  );
};