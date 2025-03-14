import { AllPro } from "../Components/layouts/AllPro"
import { NewsLetter } from "../Components/layouts/NewsLetter"
import {ProHeadCard} from "../Components/layouts/ProHeadCard"

export default function Properties () {
    return(
        <section>
            <ProHeadCard/>
            <AllPro/>
            <NewsLetter/>
        </section>
    )
}