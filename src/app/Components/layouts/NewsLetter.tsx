import { Button } from "../ui/Button";

export const NewsLetter= () => {
  return (
  <section className="h-96 px-9 flex-center">
        <div  className="flex justify-between items-center w-full">
            <div className="bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat h-28 w-96 flex justify-center items-center text-white  border border-gray-300 rounded-lg overflow-hidden">
                Newsletter
            </div>
            <div className="flex flex-col gap-4">
                <p className="">Subscribe to our <span className="text-primary">Newsletter </span>
                     to get updates on New Listings. <br /> Exciting Deals and Seasonal Sales</p>
                <div className="flex items-center overflow-hidden gap-3">
                    <input
                        type="text"
                        placeholder="Enter your email address"
                        className="px-4 py-2 w-full outline-none border border-gray-300 rounded-lg "
                    />
                    <Button content="Subscribe" className="btn btn-primary text-sm" />
                </div>
            </div>
        </div>
    </section>
    

  );
};
