import { Button } from "../ui/Button";
import { DistressCard } from "../UI/DistressCard";


export default function Distress() {
    return(
        <section className="mt-9">
            <h1 className="mb-5 truncate text-subtle-text font-bold">Realtors' Feed</h1>
            <div>
            <DistressCard
                name="Nonso Alex"
                address="11, Ejiflox, drive Igando Lagos state "
                oldPrice="2,000,000"
                newPrice="1,100,000"
                src={"/globe.svg"}
            />
            </div>
            <div className="flex flex-center mt-5">
                <Button content="More Distress Sales" className="btn btn-primary py-4"/>
            </div>
        </section>
    )
}