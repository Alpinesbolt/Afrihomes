import { Button } from "../ui/Button";

export const HomeCTA = () => {
  return (<section className="flex justify-center  bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat h-96">
        <div  className="flex flex-col justify-center items-center ">
            <h1 className="text-2xl leading-[45px] font-semibold tracking-normal  text-white text-center">Ready to begin Your Journey towards Luxury, <br /> Affordability and Profitable Investments</h1>
            <div>
                <Button content="Buy A Property Now" className="btn btn-primary mt-10 p-4" />
            </div>
            
        </div>
    </section>
    

  );
};
