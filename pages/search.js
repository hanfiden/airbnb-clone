import Footer from "../components/Footer"
import Header from "../components/Header"
import { parseISO } from 'date-fns';
import { useRouter } from "next/router";

function search() {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuest } = router.query;
  console.log(router.query);
  const formattedStartDate = parseISO(startDate).toDateString();
  const formattedEndDate = parseISO(endDate).toDateString();

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numberOfGuest} guests`}/>

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">200+ Stays from {range} - for {numberOfGuest} guests</p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of price</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
        </section>

        <section className="h-[450px]"></section>
      </main>

      <Footer />
    </div>
  )
}

export default search
