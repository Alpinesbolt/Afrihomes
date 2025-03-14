import { Button } from "../ui/Button";
import { RealtorsCard } from "../UI/RealtorsCard";


export default function RealtorsFeed() {
    return(
        <section>
            <h1 className="mb-5 truncate text-subtle-text font-bold">Realtors' Feed</h1>
            <div>
            <RealtorsCard
                name="Nonso Alex"
                address="11, Ejiflox, drive Igando Lagos state "
                src={"/globe.svg"}
            />
            </div>
            <div className="flex flex-center mt-5">
                <Button content="See Realtors List" className="btn btn-primary py-4"/>
            </div>
        </section>
    )
}