import { Button } from "../ui/Button";
import CountrySelector from "../UI/CountrySelector";


export const ProHeadCard= () => {
  return (
    <section className="m-5 relative ">
        <div className="rounded-xl border border-tertiary bg-purple-50 p-1.5 h-[400px] ">
            
            <div className="absolute bottom-3 left-0 right-0   flex flex-row items-center justify-around">
                <CountrySelector/>
                <div>
                <Button content="Apply to Search" className="btn btn-primary  p-4" />
                </div>
                
            </div>
        </div>
    </section>
  );
};