import { ClientCard } from "../ui/ClientCard";




export const ClientsTestimony= () => {
  return (
    <section className="flex flex-col justify-center py-12 px-3">
      <div className="text-center">
        <h3 className="text-3xl font-bold capitalize items-center py-5">
          See What Our <b className="text-primary">Clients</b> and Realtors Says About Us
        </h3>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 my-5">
      <ClientCard
        review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed nam quod quaerat tenetur, aperiam culpa magnam velit perspiciatis tempore est aliquid quo, itaque error minima excepturi doloribus illo asperiores."
        name ="Soyinka Gabriel"
        property= "1 acres at awka"
        src={"/globe.svg"}
      />
    </div>

</section>

  );
};
