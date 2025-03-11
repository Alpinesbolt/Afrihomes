import { contact, footerItems, operationalTime } from "@/app/lib/constants"
import { Button } from "../ui/Button"
import Image from "next/image"
import clsx from "clsx"

export const Footer = ()=>{
    const itemsClasses = "body-text-2 font-medium capitalize"
    return (
        <footer className="gradient-2 px-10 pt-10 pb-3 text-[#FCFCFC]">

            <div className="grid grid-cols-3 gap-12">
                <div className="space-y-6 pb-6">
                    <Image src={"/logo.png"} alt="logo" width={100} height={100} className="mb-3 rounded-lg"/>
                    <p className="body-text-3 font-normal">Luxury is the best overall comform we should <br/>  strive for.</p>
                    <div className="flex justify-start gap-4">

                    <div className="bg-subtle-body-text p-6 rounded-lg"/>
                    <div className="bg-subtle-body-text p-6 rounded-lg"/>
                    <div className="bg-subtle-body-text p-6 rounded-lg"/>
                    <div className="bg-subtle-body-text p-6 rounded-lg"/>
                </div>
            </div>
            <div className="grid grid-cols-[200px_1fr_150px] col-start-2 col-span-2">
                <div className=" flex flex-col justify-start gap-3">
                    <h6 className="font-medium text-base leading-7 tracking[0.5%] ">Company</h6>
                    {footerItems.map(({title, ref})=>(
                        <Button key={title} href={ref} content={title} className={itemsClasses}/> 
                    ))}
                </div>
                <div className=" flex flex-col justify-start w-11/12 gap-3">
                    <h6 className="font-medium text-base leading-7 tracking[0.5%] ">Get In Touch</h6>
                    {contact.map(({Icon, content}, index)=>(
                        <Button 
                        key={content} 
                        href={
                            index === 0? `tel:${content}`
                            : index===1?`https://www.google.com/maps/search/?api=1&query=${content}`
                            :  `mailto:${content}`
                        } 
                        content={content}
                        Icon={Icon}
                        className="body-text-2 font-medium flex flex-start items-center gap-4"/> 
                    ))}
                </div>
                <div className=" flex flex-col justify-start gap-3">
                    <h6 className="font-medium text-base leading-7 tracking[0.5%] ">Operational Hours</h6>
                    {operationalTime.map(({days, time})=>(
                        <div key={days} className="grid grid-cols-[50px_100px] gap-6">
                            <p className={itemsClasses}>{days}</p>
                            <p className={clsx(itemsClasses, "text-justify")}>{time}</p>
                        </div>
                    ))}
                </div>
            </div>
            </div>
                <div className="border-t col-span-full row-start-2 text-center pt-3">
                    &copy; Afrihomes {new Date().getFullYear()}. All Rights reserved
                </div>
                
        </footer>
    )
}